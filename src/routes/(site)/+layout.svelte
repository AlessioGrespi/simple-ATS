<script>
	import Footer from "../../lib/components/site/Footer.svelte";
	import Nav from "../../lib/components/site/Nav.svelte";
    import '../../site.css'
    import '../../global.css'
</script>

<main>
    <Nav />
    <slot />
    <Footer />
</main>

