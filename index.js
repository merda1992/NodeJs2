const http = require('http')

//cоздание серввера
const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write('<h1>Hello 222/333</h1>')
    res.write('<h2>Hello 222/333</h2>')
    res.write('<h3>Hello 222/333</h3>')
    res.end(`
        <div style="background: red; width: 200px;">
            <h1>Test 1</h1>
        </div>
    `)
})

//запуск сервера на 3000ом порте
server.listen(3000, () => {
    console.log('Server is runnig...')
})