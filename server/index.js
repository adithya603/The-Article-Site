import  express  from "express";
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/authentication.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 8800;

const app = express()

//middlewares
app.use(cors())  //works without cors
app.use(express.json())
app.use(cookieParser())



app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)

app.listen(port, function(){
    console.log("Server has started on port " + port);
});
