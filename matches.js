require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const matchSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: date,
        required: true
    },
    team1: {
        type: String,
        required: true
    },
    team2: {
        type: String,
        required: true
    },
    score: {
        type: String,
        default: ''
    },
    ft:[ftSchema]
}, {
    timestamps: true
});