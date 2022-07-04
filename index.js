const http = require('http')
const fs =require('fs')
const path =require('path')

//cоздание серввера
const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        //укажем content-type(подсказка браузеру что мы передаем)
        res.writeHead(200, {
            'Content-type': 'text/html; charset=utf-8'
        })
        if (req.url === '/') {
            fs.readFile(
              path.join(__dirname, 'views', 'index.html'),
              'utf-8',
              (err, content) => {
                if (err) {
                  throw err
                }
      
                res.end(content)
              }
            )
          } else if (req.url === '/about') {
            fs.readFile(
              path.join(__dirname, 'views', 'about.html'),
              'utf-8',
              (err, content) => {
                if (err) {
                  throw err
                }
      
                res.end(content)
              }
            )
          } else if (req.url === '/api/users') {
            res.writeHead(200, {
              'Content-type': 'text/json'
            })

            const users = [
              {name: 'Vl', age: '3'},
              {name: 'Kl', age: '37'},
            ]

            res.end(JSON.stringify(users))
          }
    } else if (req.method === 'POST') {
        const body = []

        //укажем кодировку и что мы передаем
        res.writeHead(200, {
            'Content-type': 'text/html; charset=utf-8'
        })

        //Параметры вылетевшие из формы являются буферами (все параметры делятся на чанки => данные нам поступают порциями которые надо оброабатывать)
        //req наследник EventEmiter
        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            //перекрутим массив в строку и через метод сплит выведем
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