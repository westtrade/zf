<script>
	import { Link } from 'svelte-routing'

	import { fetchTodos, fetchUsers } from '../client.js'
	import dataStore from '../stores/catalog.js'
	import { writable, get } from 'svelte/store'

	import Preloader from './Preloader.svelte'

	const lastPage = localStorage.getItem('lp')

	const catalog = dataStore(fetchUsers)
	catalog.fetchQuery({ page: lastPage })

	const userInfo = dataStore(fetchTodos)

	export let userId
	userInfo.fetchQuery({ userId })

	// let page = 1
	// let limit = 5
	// function showPage(currentPage = 1) {
	// 	page = currentPage
	// 	catalog.fetchQuery({ page, limit })
	// }

	// showPage(1)
</script>

<style>
	.header {
		display: flex;
		flex: row;
	}

	.header .button {
		position: relative;
		top: 8px;
		margin-right: 10px;
	}
</style>

{#if $catalog.loading || $userInfo.loading}
	<Preloader />
{:else}
	<div class="row">
		<div class="column header">
			<Link to={`/zf/?page=${lastPage || 1}`} class="button button-small">
				back
			</Link>
			&nbsp;
			<h1>
				{$catalog.data.find(user => {
					console.log(user)
					return userId == user.id
				}).name}
			</h1>
		</div>

	</div>

	<hr />

	{#each $userInfo.data as item}
		<div class="row">
			<div class="column">
				{item.completed ? '✔' : '	○'} &nbsp;{item.title}
			</div>
		</div>
	{/each}
{/if}
