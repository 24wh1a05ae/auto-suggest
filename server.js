const express=require('express')
const app=express()
const PORT=process.env.PORT;

app.use(express.static("frontend"))

app.listen(PORT, function() {
    console.log("Successfully  runing at http://localhost:"+PORT)
})