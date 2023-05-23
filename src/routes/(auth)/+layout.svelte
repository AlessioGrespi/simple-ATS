<script lang="ts">
	//import '../../global.css';
	import './auth.css';
</script>

<a href="/">Back</a>

<div class="container">
	<div class="auth_box">
		<slot />
	</div>
</div>


<!-- <div class="container">
	<div class="left-panel">
		<h2>Login</h2>
		<form class="login-form">
			<label for="email">Email:</label><br />
			<input type="email" id="email" name="email" required /><br /><br />
			<label for="password">Password:</label><br />
			<input type="password" id="password" name="password" required /><br /><br />
			<input type="submit" value="Login" />
		</form>
		<p>Login with:</p>
		<button>Login with LinkedIn</button>
		<button>Login with Google</button>
	</div>
	<div class="right-panel">
		<p>Welcome to our website!</p>
		<p>Sign up now to get started.</p>
		<button class="signup-button">Sign Up</button>
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	.left-panel {
		flex: 1;
		padding: 20px;
		background-color: lightgray;
	}

	.right-panel {
		flex: 1;
		padding: 20px;
	}

	.login-form {
		margin-bottom: 20px;
	}

	.signup-button {
		background-color: blue;
		color: white;
		padding: 10px 20px;
		border: none;
		cursor: pointer;
	}
</style>
 -->
