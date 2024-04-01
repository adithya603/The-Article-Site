import {db} from "../db.js"
import bcrypt from "bcryptjs"

export const signup = (req, res)=>{
    //CHECK EXISTING USER

    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.username], function(err, data){
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("user already exists!") //if the user exists already

        //to not store the password as a text, we a module bcrypt that produces the hash code for the password
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
    //CHECK USER EXISTS OR NOT

    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req, body, username], (err,data) => {
        if(err) return res.json(err)
        if(data.length === 0) return res.status(404).json("User not found!")

        //checking for the password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)

        if(!isPasswordCorrect) return res.status(400).json("Incorrect Password")

        

    })
}

export function logout(req, res){

}