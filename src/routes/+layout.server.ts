import { CrimeTypes } from "$lib/utils/globals";
import * as zoneForm from '$lib/comp/ui/zone/zoneForm.server.js';
import * as filterForm from '$lib/comp/ui/filter/filterForm.server.js';

export const load = async (event) => {
    

    return {
        forms:{
            zone:zoneForm.loadComp(event),
            filter:filterForm.loadComp(event),
        },
        userData: getUserData(),
        ads: getAds(),
    }
};


async function getUserData():Promise<any>{
    return {
        id:"test_user",
        zones:[
            {
                id:123,
                label:"Zone #1",
                point:{x:1,y:1},
                radius:5,
                address:"asdqwd",
            } as Zone,
            {
                id:13,
                label:"Zone #2",
                point:{x:1,y:1},
                radius:5,
                address:"asdqwd",
            } as Zone,
            {
                id:13,
                label:"Zone #3",
                point:{x:1,y:1},
                radius:5,
                address:"asdqwd",
            } as Zone
        ],
        zoneReports:[
            { 
                point:{x:1,y:1},
                crimeType:CrimeTypes.breakAndEnter,
                occurDate:new Date(),
            } as Report,
            { 
                point:{x:1,y:1},
                crimeType:CrimeTypes.robbery,
                occurDate:new Date(),
            } as Report,
            { 
                point:{x:1,y:1},
                crimeType:CrimeTypes.breakAndEnter,
                occurDate:new Date(),
            } as Report
        ],
        reportFilters:[
            CrimeTypes.breakAndEnter,
        ],
    }
}



async function getAds():Promise<AdvertContent[]>{
    return [
        {
            id:23,
            imageSrc:"https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
            title:"Title",
            body:"this is the body aasd qwd qwd qwd qwd qwd asdqwd ",
            url:"https://www.google.com/",
            buttonText:"Order Now",
        } as AdvertContent
    ]
}