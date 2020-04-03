import { writable, get } from 'svelte/store'

function dataStore(query) {
	const store = writable({
		data: [],
		loading: false,
		vars: {},
	})

	return {
		subscribe: store.subscribe.bind(store),
		fetchQuery: async vars => {
			const storeData = get(store)

			store.set({
				...storeData,
				loading: true,
				vars,
			})

			const data = await query(vars)

			store.set({
				...storeData,
				...data,
				loading: false,
				vars,
			})
		},
	}
}

export default dataStore
