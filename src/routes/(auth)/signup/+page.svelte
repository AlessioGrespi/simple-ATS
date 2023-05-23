<script>
	import Emailpassword from '$lib/components/auth/email&password.svelte';
</script>

<h2>Signup</h2>
<form>
	<Emailpassword />
    <label for="password">Password Confirm:</label><br />
    <input type="password" id="password" name="password" required /><br /><br />
	<input type="submit" value="Signup"/>
</form>
<p>Signup with:</p>
<button>LinkedIn</button>
<button>Google</button>
