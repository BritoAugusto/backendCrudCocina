import express from "express";

const  app = express();
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=>{
    console.info(`Estoy escuchando el puerto `+ app.get('port'))
})

app.get('/prueba', (req, res)=>{
console.log('desde la funcion de prueba')
res.send('Desde el backend del proyecto crudCocina')
})