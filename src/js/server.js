import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db/jogos.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

// cmd => node server.js