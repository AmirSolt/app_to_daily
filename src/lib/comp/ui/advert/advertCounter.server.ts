import prisma from "$lib/funcs/prisma.server";

export const adCounter = async (event:any) => {
    const { userId, advertComponentId } = await event.request.json();
    await prisma.adClick.create({
        data:{
            userId,
            adComponent:advertComponentId,
        }
    })
    return new Response();
};