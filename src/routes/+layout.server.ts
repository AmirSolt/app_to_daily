
export const load = async () => {
    
    return {
        userData: getUserData(),
        ads: getAds(),
    }
};


async function getUserData():Promise<UserData>{
    return {
        zones:[],
        zoneReports:[],
        reportFilters:[],
    }
}



async function getAds():Promise<Advert[]>{
    return []
}