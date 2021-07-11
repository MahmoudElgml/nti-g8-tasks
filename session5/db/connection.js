const DbContext = require("mongoose")
DbContext.connect('mongodb://localhost:27017/academy', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
},
    err =>{
        if(err) console.log(err)
          console.log("intiated database Academy")
        }
)