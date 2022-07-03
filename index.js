const http = require('http')

//cоздание серввера
const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        //укажем content-type(подсказка браузеру что мы передаем)
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.end(`
            <h1>Form</h1>
            <form method="post" action"/">
                <input name="title" type="text" />
                <button type="submit">Send</button>
            </form>
        `)
    } else if (req.method === 'POST') {
        const body = []

        //укажем кодировку и что мы передаем
        res.writeHead(200, {
            'Content-type': 'text/html; charset=utf-8'
        })

        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            //перекрутим в строку и через метод сплит 
            const message = body.toString().split('=')[1]

            res.end(`
            <h1>Ваше сообщение: ${message}</h1>
            `)
        })

    }
})

//запуск сервера на 3000ом порте
server.listen(3000, () => {
    console.log('Server is runnig...')
})