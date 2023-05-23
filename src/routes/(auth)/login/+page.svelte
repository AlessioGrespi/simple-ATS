<script>
	import Emailpassword from '$lib/components/auth/email&password.svelte';
</script>

<h2>Login</h2>
<form>
	<Emailpassword />
	<input type="submit" value="Login" />
</form>
<p>Login with:</p>
<button>LinkedIn</button>
<button>Google</button>
