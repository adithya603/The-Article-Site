import {db} from "../db.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup = (req, res)=>{
    //CHECK EXISTING USER

    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.username], function(err, data){
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("user already exists!") //if the user exists already

        //to not store the password as a text, we use a module bcrypt that produces the hash code for the password
        //npm i bcryptjs

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
        const values = [
            req.body.username, req.body.email, hash,
        ]

        db.query(q, [values], function(err,data){
            if(err) return res.json(err)
            return res.status(200).json("User Created")
        })
    })
}

export const login = (req, res)=>{
    //checking if the user exits or not

    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err,data) => {
        if(err) return res.json(err)
        if(data.length === 0) return res.status(404).json("User not found!")

        //checking for the password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)

        if(!isPasswordCorrect) return res.status(400).json("Incorrect Password")

        //We use JWT(json web token) to verify the user that he's the owner of the post
        //npm i jsonwebtoken

        const token = jwt.sign({id: data[0].id}, "jwtkey")

        const {password, ...other} = data[0] //seperating password
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other)

    })
}

export function logout(req, res){
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
      }).status(200).json("User has been logged out.")
}