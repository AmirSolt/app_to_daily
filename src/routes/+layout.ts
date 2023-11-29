
export const load = async ({ data, depends }) => {
    depends('data:user');
    console.log("Loading data")

    data.user.zoneReports = data.user.zoneReports
                                    .filter(r=>!data.user.crimeTypeFilters.includes(r.report.crimeType))

    console.log(">>> loaded user",data.user)

    return { 
        user:data.user,
        adContents:data.adContents,
        forms:data.forms,
    };
};