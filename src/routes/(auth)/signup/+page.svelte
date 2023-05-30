<script>
import { enhance } from "$app/forms";
</script>

<h2>Signup</h2>

<h1>Create an account</h1>
<form method="POST" use:enhance>
	<label for="username">Username</label><br />
	<input id="username" name="username" /><br />
	<label for="password">Password</label><br />
	<input type="password" id="password" name="password" /><br />
	<input type="submit" value="Signup" />
</form>


<p>Signup with:</p>
<button>LinkedIn</button>
<button>Google</button>
