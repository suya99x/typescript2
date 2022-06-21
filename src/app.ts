import express, { Express } from 'express';
import { userRouter } from "./controllers/userRouter";

import bodyParser, { BodyParser } from 'body-parser';

const PORT =5000;

const app: Express = express();
app.use(bodyParser.json())
app.use("/user",userRouter)


app.listen(PORT,()=>{
  console.log('Listening on port: ', PORT);

})
