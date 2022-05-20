const express = require('express')

const app = express()

app.use(express.static('/public'))

app.get('/', (_req, res) => {
    res.send(`This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it.
    For more information see https://supercell.com/en/fan-content-policy/`)
})

module.exports = app;
