// routes/+page.sever.ts
import { type Actions, fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { auth } from "$lib/server/lucia";



export const actions: Actions = {
	default: async ({ locals }) => {
		const { session } = await locals.auth.validateUser();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
        throw redirect (302,"/login");
	}
};

