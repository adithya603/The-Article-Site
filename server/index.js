import  express  from "express";
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/authentication.js"
import cors from "cors"
import cookieParser from "cookie-parser";

//npm i express
//npm i cors
//npm i cookie-parser
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.listen(8800, function(){
    console.log("Server has started")
})