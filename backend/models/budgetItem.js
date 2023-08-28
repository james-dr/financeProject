const mongoose = require('mongoose')

const budgetItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    category: {
        type: String,
        required: true
    },
    timePeriod: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('BudgetItem', budgetItemSchema)