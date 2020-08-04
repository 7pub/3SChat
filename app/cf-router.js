const Router = require('./router')

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request))
})

const jsonHandler = (request) => {
    const init = { headers: { 'content-type': 'application/json' } }
    const body = JSON.stringify({ some: 'json' })
    return new Response(body, init)
}

async function handleRequest(request) {
    const r = new Router()
    r.get('/', () => new Response('Hello worker!'))
    r.post('/', async(req) => new Response(`Your body is ${await req.text()}`))
    r.get('/json', jsonHandler)
    return r.route(request)
}