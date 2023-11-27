
export const load = async ({ data, depends }) => {
    depends('data:userData');


    data.userData.zoneReports = data.userData.zoneReports
                                    .filter(r=>!data.userData.profile.report_filters.includes(r.crime_type))

    return { 
        userData:data.userData,
        adContents:data.adContents,
        forms:data.forms,
    };
};