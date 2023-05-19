<script>

	import Sidebar from "$lib/components/app/sidebar/Sidebar.svelte";
	import Topbar from "$lib/components/app/topbar/Topbar.svelte";

const pkg ={
    route: 'employer',
    block1: 'dashboard',
    block2: 'applications',
    block3: 'company',
    block4: 'jobs',
}
</script>

<Topbar />
<Sidebar route={pkg.route} block1={pkg.block1} block2={pkg.block2} block3={pkg.block3} block4={pkg.block4}/>
<slot />