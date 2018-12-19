const http = require('http')
const _map = require('./interfaceMap')
const Mock = require('mockjs')

http.createServer((req, res) => {
    
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': req.headers.origin || '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': true,
    })
    if (req.method === 'OPTIONS') {
        res.end(null)
    }

    if (req.method === 'GET') {
        const url = req.url.split('?')[0]
        const originData = _map[url] ? Mock.mock(_map[url]) : ''
        setTimeout(() => {
            res.end(JSON.stringify(originData))
        }, parseInt(((Math.random() - 0.5) + 1) * 500), 10)
    }
    if (req.method === 'POST') {
        let postData = ''
        req.addListener('data', dataBuffer => postData += dataBuffer)
        req.addListener('end', () => {
            postData = JSON.parse(postData)
            const originData = _map[req.url] ? Mock.mock(_map[req.url]) : ''
            setTimeout(() => {
                res.end(JSON.stringify(originData))
            }, parseInt(((Math.random() - 0.5) + 1) * 500), 10)
        })
    }
}).listen(1111)
console.log('mock 服务成功启动')
