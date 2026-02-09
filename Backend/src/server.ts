import express, { Application, Request, Response } from 'express';
const app: Application = express()

app.get("/", (req: Request, res: Response) => {
    res.send("its working ")
})

app.listen(3000, () => {
    console.log("server is listening port 3000")
})