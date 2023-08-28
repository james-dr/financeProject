const budgetItemRouter = require('express').Router()
const { response } = require('../app')
const BudgetItem = require('../models/budgetItem')

budgetItemRouter.get('/', (req, res) => {
    BudgetItem.find({})
        .then((items) => {
            res.json(items)
        })
})

budgetItemRouter.post('/', (req, res) => {
    const item = new BudgetItem(req.body)

    item.save()
        .then((result) => {
            response.status(201).json(result)
        })
})