const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
})

io.on('connection', socket => {
    console.log('connection')
    // добавим модель
    socket.on('addModel', payload => {
        console.log(' addModel server: ', payload)
        io.emit('addModel', payload)
    });
    // подсветка моделей
    socket.on('getBright', payload => {
        // console.log(' getBright server: ')
        io.emit('getBright', payload)
    });
    // подсветка пола и стен
    socket.on('getBrightSurface', payload => {
        // console.log(' getBright server: ')
        io.emit('getBrightSurface', payload)
    });
    // выбор инструмента в навигации
    socket.on('getAction', payload => {
        // console.log(' getAction server: ')
        io.emit('getAction', payload)
    });

    socket.on('deleteModel', payload => {
        // console.log(' getAction server: ')
        io.emit('deleteModel', payload)
    });

    socket.on('changeVisible', payload => {
        // console.log(' getAction server: ')
        io.emit('changeVisible', payload)
    });

    socket.on('replaceModel', payload => {
        io.emit('replaceModel', payload)
    });
    socket.on('changeTexture', payload => {
        io.emit('changeTexture', payload)
    });
    socket.on('getBrightWall', payload => {
        io.emit('getBrightWall', payload)
    });
})

server.listen(7000, () => {
    console.log('I am listening at port: 3000)');
})

