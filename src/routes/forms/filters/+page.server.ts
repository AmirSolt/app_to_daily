import { loadComp, actionsComp } from '$lib/comp/ui/filter/filterForm.server.js';

export const load = async (event) => {
    return loadComp(event)
};

export const actions = {
    default: (event)=>{
        return actionsComp.default(event)
    }
};