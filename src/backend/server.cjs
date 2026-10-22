const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()

app.use(cors())
app.use(express.json())

const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'users'
})

app.post('/login', (req,res)=>{
    const {email='', password=''} = req.body
    // TODO - query database


    conn.query(`SELECT id, name, email, password FROM users WHERE email = ? AND password = ?`, 
        [email, password], 
        (error, result, fields) => {
            if (error) {
                 console.warn(error)
                return res.status(500).json({error: 'Internal Server Error'})
            }
            else {
                console.log('result ',result)

                if (result.length > 0) {
                    return res.status(200).json({
                    loggedIn: true,
                    message: 'Logged in!',
                    result
                    })
                }

                else {
                    return res.status(401).json({
                        loggedIn: false,
                        message: 'Bad email or password',
                        result
                    })
                }
                
                
            }
           
            // ja
        }
    )
})






app.use((req,res)=>res.status(404).json({
    error: 'Not Found'
}))

const PORT = 3000
app.listen(PORT, (error)=>{
    if (error) console.warn(error)
    else console.log('Express backend server is running on PORT: ', PORT)    
})