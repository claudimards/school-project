import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import studentRoutes from './routes/student.js'

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json({ limit: '20mb', extended: true }))
app.use(express.urlencoded({limit: '20mb', extended: true}))
app.use(cors())

app.use('/students', studentRoutes)

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => console.log(`Server is running on port --> ${PORT}`))
}).catch((error) => console.log(`Something went wrong! Error.: ${error}`))

mongoose.set('useFindAndModify', false)