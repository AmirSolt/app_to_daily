import prisma from "$lib/funcs/prisma.server";

export const adCounter = async (event:any) => {
    const { profileId, advertComponentId } = await event.request.json();
    await prisma.adClick.create({
        data:{
            profileId,
            adComponent:advertComponentId,
        }
    })
    return new Response();
};