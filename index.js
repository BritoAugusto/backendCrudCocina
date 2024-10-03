import express from "express";
import cors from 'cors';
import morgan from "morgan";
import path, { dirname } from 'path'
import { fileURLToPath } from "url";
import exp from "constants";

const  app = express();
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=>{
    console.info(`Estoy escuchando el puerto `+ app.get('port'))
})

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, '/public')));


app.get('/prueba', (req, res)=>{
res.send('Desde el backend del proyecto crudCocina')
})