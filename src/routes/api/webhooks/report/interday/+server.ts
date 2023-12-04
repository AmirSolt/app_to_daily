import { ADMIN_SECRET } from '$env/static/private'
import { saveReportsByDate, DateQueryType } from '$lib/funcs/reporter.server.js';
import { error } from '@sveltejs/kit';


export const POST = async (event) => {
    const { adminSecret } = await event.request.json();

    if(ADMIN_SECRET !== adminSecret){
        throw error(400, {
            message: 'Wrong secret',
        });
    }

    const date = new Date()
    const dateQueryType = DateQueryType.OCC_DATE_AGOL
    await saveReportsByDate(date, dateQueryType)
    return new Response()
};



