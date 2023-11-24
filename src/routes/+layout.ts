

export const load = async ({data, depends}) => {
    depends('data:userData');

    // filter reports
    data.userData.zoneReports = data.userData.zoneReports
                                    .filter(r=>!data.userData.reportFilters.includes(r.crimeType))

    return {
        forms:data.forms,
        userData:data.userData,
        ads:data.ads,
    }
};