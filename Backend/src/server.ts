import express, { Application } from 'express';
import dotenve from 'dotenv'
import router from './modules/user/user.route';


const app: Application = express()
dotenve.config()

app.use("/", router)

app.listen(3000, () => {
    console.log("server is listening port 3000")
})