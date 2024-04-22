const mongoose = require('mongoose')
const Mongo_url = "mongodb+srv://BTL:ei6k6ZXXKpY6lOKl@btl.jihfbtw.mongodb.net/?retryWrites=true&w=majority&appName=BTL"

const Connect = () => {
    mongoose.connect(Mongo_url)
    .then(() => {console.log("Mongo DB is connected...");
        
    }).catch((err) => {console.log("Connection Error :", err.message)
        
    });
}

module.exports = Connect;