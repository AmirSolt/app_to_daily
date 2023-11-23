

export const load = async ({data, depends}) => {
    depends('data:userData');

    return {
        forms:data.forms,
        userData:data.userData,
        ads:data.ads,
    }
};