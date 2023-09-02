const express = require ("express");
const cors = require ("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./app/models");
db.sequelize.sync().then(() => {
console.log("Banco conectado!");
})
.catch((err) => {
    console.log("Falha ao acessar banco de dados: " + err.message);
})

app.get("/", (req,res) => {
   res.json({message: 'hello world!'})
});

const PORT = process.env.PORT ||  8090;

app.listen(PORT, () => {
    console.log(` Server funcionando na porta ${PORT}.`);    
});