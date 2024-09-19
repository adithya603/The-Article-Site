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
app.use(cors({
    origin: [
        'http://localhost:3000', // for local development
        'https://the-article-site-v3hl.vercel.app/' // vercel site
    ],
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    credentials: true // allows cookies to be sent
}));

app.use(express.json())
app.use(cookieParser())

//routes
app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)

app.listen(port, function(){
    console.log("Server has started on port " + port);
});
