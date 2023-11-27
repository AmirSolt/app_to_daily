
export const load = async ({ data, depends }) => {
    depends('data:profile');
    return { 
        profile:data.profile,
        adContents:data.adContents,
        forms:data.forms,
    };
};