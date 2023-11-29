import { actionsComp } from '$lib/comp/ui/zone/zoneForm.server.js';

export const actions = {
    create: (event)=>{
        return actionsComp.create(event)
    },
    remove: (event)=>{
        return actionsComp.remove(event)
    },
    edit: (event)=>{
        return actionsComp.edit(event)
    },
};