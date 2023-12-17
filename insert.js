const dbConnect = require("./mongodb");

const _insert = async ()=>{
    const usersCollection = await dbConnect();
    // let date = new Date();

    try {
        const result = await usersCollection.insertMany(
            [
                {
                    name: 'sample11',
                    email: 'sample11@gmail.com',
                    password: 'Abhi@9781',
                    date: new Date(),
                },
                {
                    name: 'sample12',
                    email: 'sample12@gmail.com',
                    password: 'Abhi@9781',
                    date: new Date(),
                }
            ]
        )
        console.log("Document inserted successfully:", result.insertedIds);
    } catch (error) {
        console.error("Error inserting document:", error);
    }
}
_insert();