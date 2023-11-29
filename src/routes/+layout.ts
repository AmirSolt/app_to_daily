
export const load = async ({ data, depends }) => {
    depends('data:user');


    data.user.zoneReports = data.user.zoneReports
                                    .filter(r=>!data.user.crimeTypeFilters.includes(r.report.crimeType))

    return { 
        user:data.user,
        adContents:data.adContents,
        forms:data.forms,
    };
};