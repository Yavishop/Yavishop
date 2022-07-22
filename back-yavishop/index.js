let express = require('express')
//let authRoute = require('./routes/auth')
//let productsRoute = require('./routes/products')
const cors = require("cors");

let app = express()

app.set('port', process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto ', app.get('port'))
})