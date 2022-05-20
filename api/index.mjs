import Fastify from 'fastify';
import { fileURLToPath } from 'node:url';
import fastifyStatic from '@fastify/static';


const fastify = Fastify({ logger: false })

fastify.register(fastifyStatic, {
    root: fileURLToPath(new URL('../public', import.meta.url)),
    prefix: '/static/',
})

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err
    console.log(`Server listening on ${address}`)
})
