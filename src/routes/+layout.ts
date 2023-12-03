
export const load = async ({ data, depends }) => {
    depends('data:profile');
    console.log("Loading data")

    data.profile.zoneReports = data.profile.zoneReports
                                    .filter(r=>!data.profile.crimeTypeFilters.includes(r.report.crimeType))

    console.log(">>> loaded profile",data.profile)

    return { 
        profile:data.profile,
        adContents:data.adContents,
        forms:data.forms,
    };
};