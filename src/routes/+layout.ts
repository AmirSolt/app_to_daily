
export const load = async ({ data, depends }) => {
    depends('data:userData');
    return { 
        userData:data.userData,
        adContents:data.adContents,
        forms:data.forms,
    };
};