import App from './components/App.svelte'

const mount = () => new App({ target: document.body })

mount()

// import * as client from './client'

// const main = async () => {
// 	const result = await client.fetchTodos()
// 	console.log(result)
// }

// main()
