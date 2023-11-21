import { CrimeTypes } from "$lib/utils/globals";


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
                crimeType:CrimeTypes.breakAndEnter
            } as Report,
            { 
                point:{x:1,y:1},
                crimeType:CrimeTypes.robbery
            } as Report,
            { 
                point:{x:1,y:1},
                crimeType:CrimeTypes.breakAndEnter
            } as Report
        ],
        reportFilters:[
            CrimeTypes.breakAndEnter,
        ],
    }
}



async function getAds():Promise<Advert[]>{
    return [
        {
            id:"123",
            iconImg:"https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
            title:"Title",
            body:"this is the body aasd qwd qwd qwd qwd qwd asdqwd ",
            url:"https://www.google.com/",
            actionButton:"Order Now",
        } as Advert
    ]
}