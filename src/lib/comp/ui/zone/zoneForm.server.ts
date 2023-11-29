import { error, fail, redirect } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { createZoneSchema, editZoneSchema, removeZoneSchema } from '$lib/utils/schema'
import prisma from '$lib/funcs/prisma.server'


export const loadComp = async (event: any) => {
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
	create: async (event: any) => {
		const form = await superValidate(event, createZoneSchema)

		if (!form.valid) {
			return fail(500, { form })
		}

		await prisma.zone.create({
			data: {
				label: form.data.label,
				address: form.data.address,
				radius: form.data.radius,
				userId: event.locals.user.id,
				long: form.data.long,
				lat: form.data.lat,
			}
		})

		return { success: true, form };
	},
	remove: async (event: any) => {
		const form = await superValidate(event, removeZoneSchema)

		if (!form.valid) {
			return fail(500, { form })
		}

		await prisma.zone.delete({
			where: {
				userId: event.locals.user.id,
				id: form.data.id,
			}
		})

		return { success: true, form };
	},
	edit: async (event: any) => {
		const form = await superValidate(event, editZoneSchema)

		if (!form.valid) {
			return fail(500, { form })
		}

		await prisma.zone.update({
			where: {
				userId: event.locals.user.id,
				id: form.data.id,
			},
			data: {
				label: form.data.label,
				address: form.data.address,
				radius: form.data.radius,
				userId: event.locals.user.id,
				long: form.data.long,
				lat: form.data.lat,
			},
		})

		return { success: true, form };
	}
}