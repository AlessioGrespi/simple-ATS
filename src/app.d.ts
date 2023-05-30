/* // See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
 */


/// <reference types="lucia-auth" />
declare namespace Lucia {
	type Auth = import('$lib/server/lucia.js').Auth;
	type UserAttributes = {
		username: string;
	};
}

/// <reference types="@sveltejs/kit" />
declare namespace App {
	interface Locals {
		auth: import('lucia-auth').AuthRequest;
	}
}
