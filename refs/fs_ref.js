const fs = require ('fs');
const path = require ('path');

//file system

fs.mkdir(path.join(__dirname, 'notes'), err => {
    if(err) throw err

    console.log('Папка сосздана')
}) 

fs.writeFile(path.join(__dirname, 'notes', 'mynots.txt'),
'hHello world',
(err) => {
    if (err) throw err
    console.log('file completed')

    fs.appendFile(
        path.join(__dirname, 'notes', 'mynots.txt'),
        ' From +++',
        (err) => {
            if (err) throw err
            console.log('был изменен')

            fs.readFile(
                path.join(__dirname, 'notes', 'mynots.txt'),
                'utf-8',
                (err, data) => {
                    if (err) throw err
            
                    console.log(data);
                    console.log(Buffer.from(data).toString()); 
                
                }
            )
        }
    )
})  

fs.rename(
    path.join(__dirname, 'notes', 'mynots.txt'),
    path.join(__dirname, 'notes', 'mynotes.txt'),
    err => {
        if(err) throw err

        console.log('Переименовали')
    }
)

