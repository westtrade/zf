<script>
	import { Link } from 'svelte-routing'

	import { fetchUsers } from '../client.js'
	import dataStore from '../stores/catalog.js'
	import { writable, get } from 'svelte/store'

	import Preloader from './Preloader.svelte'

	const catalog = dataStore(fetchUsers)

	export let page =
		parseInt(new URLSearchParams(location.search).get('page')) || 1

	let limit = 5
	function showPage(currentPage = 1) {
		page = currentPage
		catalog.fetchQuery({ page, limit })

		localStorage.setItem('lp', page)
	}

	showPage(page)
</script>

<style>
	.preloader {
		text-align: center;
		height: 250px;
	}

	.pager {
		display: flex;
		justify-content: space-around;
	}
</style>

<div class="row">
	<div class="column">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>E-Mail</th>
					<th>Phone</th>
				</tr>
			</thead>
			<tbody>
				{#if !$catalog.loading}
					{#each $catalog.data as item}
						<tr>
							<td>
								<Link to={`/user/${item.id}`}>{item.name}</Link>

							</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
						</tr>
					{/each}
				{:else}
					<tr>
						<td colspan="3" class="preloader">
							<Preloader />
						</td>
					</tr>
				{/if}

			</tbody>
		</table>

	</div>
</div>

<div class="row pager">
	<a class="button" on:click|preventDefault={() => showPage(1)} href="#">
		&laquo;&laquo;
	</a>
	&nbsp;
	{#if page > 1}
		<a
			class="button"
			on:click|preventDefault={() => showPage(page - 1)}
			href="#">
			{page - 1}
		</a>
		&nbsp;
	{/if}

	<a class="button button-outline" href="#">{page}</a>
	&nbsp;
	{#if page + 1 <= $catalog.totalPages}
		<a
			class="button"
			on:click|preventDefault={() => showPage(page + 1)}
			href="#">
			{page + 1}
		</a>
		&nbsp;
	{/if}

	<a
		class="button"
		on:click|preventDefault={() => showPage($catalog.totalPages)}
		href="#">
		&raquo;&raquo;
	</a>

</div>
