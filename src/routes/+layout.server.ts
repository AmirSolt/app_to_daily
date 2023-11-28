import * as zoneForm from '$lib/comp/ui/zone/zoneForm.server.js';
import * as filterForm from '$lib/comp/ui/filter/filterForm.server.js';
import { error } from '@sveltejs/kit';
import prisma from '$lib/funcs/prisma.server.js';
import { Prisma } from '@prisma/client';

export const load = async (event) => {

    let user = await prisma.user.findFirst({
        where:{id:"123"}
    })

    if(user==null){

        try {
            user = await prisma.user.create({
                data:{
                    id:"123",
                    reportFilters:[]
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

    let report = await prisma.report.findFirst({where:{id:3}})
    if(report){
        console.log(report.lat)
    }

    console.log("USER >>>>",user)

    return {
        // userData: fetchUserData(session?.user),
        // adContents: fetchAdContents(session?.user),
        forms:{
            zone:zoneForm.loadComp(event),
            filter:filterForm.loadComp(event),
        },
    }
};
