import Router from "express";
import { authenticate } from "../Middleware/auth.js";

const UserData = Router();

UserData.get('/userrole', authenticate, (req, res) => {
    const user = req.Role;
    if (user) {
        res.json(user);
        console.log("admin", user);

    } else {
        res.status(400).json({ message: "Error" })
    }

})


export default UserData;