import User from "../model/authentication/user.model.js"
export const signup = async(req,res)=>{
    try {
        const { username, fullName, password, email } = req.body
        // email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            return res.status(404).json(
                { error: 'Invalid email format' }
            );
        }

        const alredyusedemail = await User.findOne({ email })
        const alredyuseduser = await User.findOne({ username })

        if (alredyusedemail || alredyuseduser) {
            return res.status(400).json({
                "error": "Already used email or mail you used "
            })
        }
        if (password.length < 8) {
            return res.status(404).json({
                "error": "password will enter minimux 8 Character"
            })
        }

        const newUser = User({
            username: username,
            fullname: fullName,
            email: email,
            password: password
            
        })

        if(newUser){
            await newUser.save()
            return res.status(200).json({
                "message":"user created"

            })
        } else {
            return res.status(404).json({
                error: "invalid user login"
            })
        }



    } catch (error) {
        console.log(`error in signup ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
    }
}