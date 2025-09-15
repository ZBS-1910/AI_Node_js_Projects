const mongoose= require('mongoose');

 const connect=async()=>{
    //await mongoose.connect('mongodb+srv://zameer1910basha:9tpoVF6M1Sg1c9KM@twiterdb.4rnswpa.mongodb.net/');
    await mongoose.connect('mongodb://localhost:27017/');
}

module.exports=connect;