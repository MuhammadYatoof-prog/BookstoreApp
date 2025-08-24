import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRouter from './Router/book.router.js'
import userRouter from './Router/user.route.js'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 4001
const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bookstore'
// connect to mongodb
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB')
} catch (error) {
    console.log('Error connecting to MongoDB:', error.message)
}
//defining routes
app.use("/Books", bookRouter)
app.use("/user", userRouter)
app.get('/', (req, res) => {
    res.send('Full Mern Stack Bookstore Application')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
