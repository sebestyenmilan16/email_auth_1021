const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/login', (req,res)=>{
    const {email='', password=''} = req.body
    // TODO - query database
    return res.status(200).json({
        message: 'Logged in!'
    })
})






app.use((req,res)=>res.status(404).json({
    error: 'Not Found'
}))

const PORT = 3000
app.listen(PORT, (error)=>{
    if (error) console.warn(error)
    else console.log('Express backend server is running on PORT: ', PORT)    
})