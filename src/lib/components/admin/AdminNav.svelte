<script lang="ts">
    import '../../../site.css';
    import '../../../global.css';



	import { enhance } from '$app/forms';
	//import type { PageData } from './$types';
	//export let data: PageData;


</script>

<header>
    Site:
    <a href="/">Home</a>
    <a href="/features">Features</a>
    <a href="/pricing">Pricing</a>
    <a href="/contact">Contact</a>
    <a href="/privacy">Privacy</a>
    Auth:
    <a href="/login">Login</a>
    <a href="/signup">Signup</a>
    <form use:enhance method="post" action="/signout">
        <input type="submit" class="button" value="Sign out" />
    </form>
    Employer:
    <a href="/app/employer/">dashboard</a>
    <a href="/app/employer/company">company</a>
    <a href="/app/employer/jobs">jobs</a>
    <a href="/app/employer/applications">applications</a>
    <a href="/app/employer/settings">settings</a>
    Applicant:
    <a href="/app/applicant/jobs">jobs</a>
    <a href="/app/applicant/CV">CV</a>
    <a href="/app/applicant/applications">applications</a>
    <a href="/app/applicant/settings">settings</a>
</header>

