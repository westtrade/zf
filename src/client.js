export const fetchUsers = async ({ page = 1, limit = 5 } = {}) => {
	return fetch(
		`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
	).then(response => {
		let totalCount = response.headers.get('x-total-count')

		totalCount = parseInt(totalCount)

		let totalPages = totalCount / limit + (totalCount % limit > 0 ? 1 : 0)

		return response.json().then(data => {
			return {
				totalCount,
				totalPages,
				data,
			}
		})
	})
}

export const fetchTodos = async ({ userId } = {}) => {
	return fetch(
		`https://jsonplaceholder.typicode.com/todos?userId=${userId}`
	).then(response => {
		return response.json().then(data => {
			console.log(data)
			return {
				data,
			}
		})
	})
}
