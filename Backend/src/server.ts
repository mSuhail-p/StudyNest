import express, { Application } from 'express';
import dotenve from 'dotenv'
dotenve.config()
import router from './modules/user/user.route';


const app: Application = express()

app.use("/", router)

app.listen(3000, () => {
    console.log("server is listening port 3000")
})