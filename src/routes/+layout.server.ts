
export const load = async () => {
    
    return {
        userData: getUserData(),
        ads: getAds(),
    }
};


async function getUserData():Promise<UserData>{
    return {
        zones:[
            {
                id:"143",
                label:"Zone #1",
                point:{x:1,y:1},
                radius:5,
                address:"",
            } as Zone,
            {
                id:"143",
                label:"Zone #2",
                point:{x:1,y:1},
                radius:5,
                address:"",
            } as Zone,
            {
                id:"143",
                label:"Zone #3",
                point:{x:1,y:1},
                radius:5,
                address:"",
            } as Zone
        ],
        zoneReports:[
            { 
                point:{x:1,y:1},
                crimeType:"break and enter"
            } as Report,
            { 
                point:{x:1,y:1},
                crimeType:"robbery"
            } as Report,
            { 
                point:{x:1,y:1},
                crimeType:"break and enter"
            } as Report
        ],
        reportFilters:[],
    }
}



async function getAds():Promise<Advert[]>{
    return [
        {
            iconImg:"https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
            title:"Title",
            body:"this is the body",
            link:"/",
        } as Advert
    ]
}