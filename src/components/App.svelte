<script>
	import { Router, Link, Route } from 'svelte-routing'
	import Catalog from './Catalog.svelte'
	import User from './User.svelte'

	export let url = ''
</script>

<div class="container">
	<Router {url}>
		<Route path="/zf/user/:userId" component={User} />
		<Route path="/zf/" component={Catalog} />
	</Router>
</div>
