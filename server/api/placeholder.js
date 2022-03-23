const router = require('express').Router()
const {Placeholder} = require('../db')

router.get('/', async (req, res, next) => {
    try {
        res.status(200).send("GOOD")
    }
    catch (error) {
        next(error)
    }
})

module.exports = router