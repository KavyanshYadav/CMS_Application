import express, { Request, Response } from 'express';
import {ApiResponse} from  "./util/Apirespose"
import {api,internal} from "./routes/index"
import {GetResourceJson} from "./lib/GetResourceJson"
const app = express();
const port = 3000;



app.use(express.json())

app.use("/api",api)

app.use("/intenal",internal)
GetResourceJson()

app.get('/', (req: Request, res: Response) => {
  const response = ApiResponse.success({ name: "John Doe" }, "User fetched successfully");
  res.status(response.status).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
