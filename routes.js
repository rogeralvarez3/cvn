const router = require('express').Router();
const db = require("./db")
const jwt = require("jsonwebtoken");
const secretKey = 'Salamakuki'

router.get('/get', (req, res) => {
    let parameters = req.body
    let status = verify(parameters.token, secretKey)
    if (status.message) {
        res.send(status.message)
    } else {
        db.get(parameters, result => {
            res.send(result)
        })
    }
})

router.post('/save', (req, res) => {
    let parameters = req.parameters
    let status = verify(parameters.token, secretKey)
    if (status.message) {
        res.send(status.message)
    } else {
        db.save(parameters, result => {
            res.send(result)
        })
    }

})

router.delete('/remove', (req, res) => {
    let parameters = req.parameters
    let status = verify(parameters.token, secretKey)
    if (status.message) {
        res.send(status.message)
    } else {
        db.remove(parameters, result => {
            res.send(result)
        })
    }

})

function verify(token) {
    let result;
    try {
        result = jwt.verify(token, secretKey)
    } catch (error) {
        result = error
    }

    return result
}

router.post('/login', (req, res) => {
    const data = req.body
    db.get({ table: 'users', fields: 'id,name,address,shipping_address,phone,status,rating,date_added,date_updated', condition: `(name='${data.user}' or email='${data.user}') and password='${data.password}'`, isLogin: true }, result => {
        if (result.length > 0) {
            let token = jwt.sign(JSON.stringify(result[0]), secretKey)
            result[0].token = token
            res.send(result[0])
        } else {
            res.send("Nombre de usuario o contraseña incorrecta")
        }

    })
})

module.exports = router