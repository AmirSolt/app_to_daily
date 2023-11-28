export const adCounter = async (event:any) => {
    const { userId, advertComponentId } = await event.request.json();

    console.log("/api/advertCounter")

    return new Response();
};