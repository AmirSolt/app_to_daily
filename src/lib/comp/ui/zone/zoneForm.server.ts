import { error, fail, redirect } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { createZoneSchema, editZoneSchema, removeZoneSchema } from '$lib/utils/schema'


export const loadComp = async (event:any) => {
	// const session = await event.locals.getSession()
	// if (!session) {
	// 	throw redirect(302, '/')
	// }
	const createForm = await superValidate(event, createZoneSchema)
	const editForm = await superValidate(event, editZoneSchema)
	const removeForm = await superValidate(event, removeZoneSchema)
	return { 
		createForm,
		editForm,
		removeForm,
	 }
}

export const actionsComp = {
	create: async (event:any) => {
		const form = await superValidate(event, createZoneSchema)
		
		if (!form.valid) {
			return fail(400, { form })
		}

        // update database value
        console.log("Database updated")
        console.log(form.data)

		return { success: true, form };
	},
    remove: async (event:any) => {
		const form = await superValidate(event, removeZoneSchema)
		
		if (!form.valid) {
			return fail(400, { form })
		}

        // update database value
        console.log("Database updated")
        console.log(form.data)

		return { success: true, form };
	},
    edit: async (event:any) => {
		const form = await superValidate(event, editZoneSchema)
		
		if (!form.valid) {
			return fail(400, { form })
		}

        // update database value
        console.log("Database updated")
        console.log(form.data)

		return { success: true, form };
	}
}