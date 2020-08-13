require('../db/mongo');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const logger = require('../util/log').logger;

const SaleSchema = new Schema({
    title: String,
    description: String,
    startDate: Date,
    endDate: Date
});

const CommentSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    date: Date,
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    comment: String
});

const CompanySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    sales: [SaleSchema],
    comments: [CommentSchema],
    type: [String]
});

const Company = mongoose.model('Company', CompanySchema);

const CoffeeLike = new Company({name: 'CoffeeLike',
                                sales: [{
                                    title: "Акция 1",
                                    description: "что-то там",
                                    startDate: new Date(2020, 8, 12),
                                    endDate: new Date(2020, 8, 20)
                                }],
                                comments: [{
                                    userName: "blake",
                                    date: new Date(2020, 8, 12),
                                    rating: 5,
                                    comment: "Ни разу не был, но ок"
                                }],
                                type: ['Кафе', 'Ресторан', 'Бар']});

CoffeeLike.save((err, _) => {
    if (err)
        logger.error(err);
});

module.exports = {
    Company
}