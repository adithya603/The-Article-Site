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
// Example for Node.js/Express
app.use(cors({
    origin: ['http://localhost:3000', 'https://66eb20c81398367fc1375565--loquacious-manatee-219637.netlify.app'],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true // if you need to include cookies in requests
}));

app.use(express.json())
app.use(cookieParser())

//routes
app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)

app.listen(port, function(){
    console.log("Server has started on port " + port);
});
