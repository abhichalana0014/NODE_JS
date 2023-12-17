const dbConnect = require("./mongodb");


// const getData = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }

dbConnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.log(data)
    })
})

// getData();
dbConnect();
