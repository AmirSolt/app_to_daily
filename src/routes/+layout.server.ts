import * as zoneForm from '$lib/comp/ui/zone/zoneForm.server.js';
import * as filterForm from '$lib/comp/ui/filter/filterForm.server.js';
import { error } from '@sveltejs/kit';
import prisma from '$lib/funcs/prisma.server.js';
import { Prisma, Region, type User } from '@prisma/client';

export const load = async (event) => {

    let user = await prisma.user.findFirst({
        where:{id:"123"},
        include:{
            zones:true,
            zoneReports:{
                select:{
                    report:true
                }
            },
        }
    })

    if(user==null){

        try {
            user = await prisma.user.create({
                data:{
                    id:"123",
                    region: Region.TORONTO,
                    crimeTypeFilters:[],
                },
                include:{
                    zones:true,
                    zoneReports:{
                        select:{
                            report:true
                        }
                    },
                }
            })
          } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                console.log(e.message)
            }
            throw error(500, {
                message: 'Not found',
            });
          }
    }

    

    console.log("USER >>>>",user)

    return {
        user,
        adContents: prisma.adContent.findMany(),
        forms:{
            zone:zoneForm.loadComp(event),
            filter:filterForm.loadComp(event),
        },
    }
};
