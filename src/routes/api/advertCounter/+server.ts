export const POST = async ({request}) => {
    const { userId, advertComponentId } = await request.json();

    console.log("/api/advertCounter")

    return new Response();
};