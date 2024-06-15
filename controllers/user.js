import { User } from '../models/user.js';

const newUser = async (req, res) => {

let {name,username,password,bio} =req.body
console.log(req.body)

    try {
        const avatar = {
            public_id: "sddsd",
            url: "asdfje",
        };

        
        const user = await User.create({
             name,
            username,
           password,
            bio, 
            avatar 
        });

        res.status(201).json({ message: "user created successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = (req, res) => {
    res.send("router");
};

export { login, newUser };
