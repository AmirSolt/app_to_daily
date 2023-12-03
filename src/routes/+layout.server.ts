import * as zoneForm from '$lib/comp/ui/zone/zoneForm.server.js';
import * as filterForm from '$lib/comp/ui/filter/filterForm.server.js';
import { error } from '@sveltejs/kit';
import prisma from '$lib/funcs/prisma.server.js';
import { Prisma, Region, type Profile } from '@prisma/client';

export const load = async (event) => {
    let profile = await prisma.profile.findFirst({
        where: { id:event.locals.profileId },
        include: {
            zones: true,
            zoneReports: {
                select: {
                    report: true
                }
            },
        }
    })

    if (profile == null) {
        try {
            profile = await prisma.profile.create({
                data: {
                    id:event.locals.profileId,
                    crimeTypeFilters: [],
                },
                include: {
                    zones: true,
                    zoneReports: {
                        select: {
                            report: true
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
    
    return {
        profile,
        adContents: prisma.adContent.findMany(),
        forms:{
            zone:zoneForm.loadComp(event),
            filter:filterForm.loadComp(event),
        },
    }
};
