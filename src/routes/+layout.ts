

export const load = async ({data, depends}) => {
    depends('data:userData');

    return {
        userData:data.userData,
        ads:data.ads,
    }
};