<script lang="ts">
	import Emailpassword from '$lib/components/auth/email&password.svelte';

	import { enhance } from '$app/forms';

	export let form: { message?: string };
</script>

<h2>Login</h2>


<!-- <form>
	<Emailpassword />
	<input type="submit" value="Login" />
</form>
 -->

 <form
	method="post"
	use:enhance
>
	<label for="username">username</label><br />
	<input id="username" name="username" /><br />
	<label for="password">password</label><br />
	<input type="password" id="password" name="password" /><br />
	<input type="submit" value="Continue" class="button" />
</form>
{#if form?.message}
	<p class="error">{form.message || ''}</p>
{/if}

<p>Login with:</p>
<button>LinkedIn</button>
<button>Google</button>
