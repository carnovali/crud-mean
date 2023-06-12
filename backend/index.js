import app from './src/app.js'

const PORT = process.env.PORT || 7070;

app.set('port', PORT)

app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

