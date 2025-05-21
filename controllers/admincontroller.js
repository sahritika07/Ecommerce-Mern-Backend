const AdminModel = require('../models/Admin')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken');
const { transporter } = require('../config/emailConfig');


exports.adminRegistration = async(req,res)=>{
    const {name,email,password,password_confirmation,tc} =req.body;
    if(!email){
        res.send({"status":"failed", "message":"provide  email"})
    }
    const user = await AdminModel.findOne({email:email})
    if(user){
        res.send({"status":"failed", "message":"email already exists"})
    }else{
        if(name &&email && password && password_confirmation && tc){

            if(password === password_confirmation){
            try{
                // generate salt to hash passowrd
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password,salt)
                // it will hash passowrd with 2paramter one with passowrd and second is salt to hash the password
                const doc =  new AdminModel({
                    name:name,email:email,password:hashPassword,tc:tc
                })
                await doc.save()
                const saved_user = await AdminModel.findOne({email:email})
                // generate the jwt joken
                const token = jwt.sign({userID:saved_user._id},process.env.JWT_SECRET_KEY,{expiresIn:'5d'})

                res.status(201).send({"status":"success","message":"Register success","token":token})
            }catch(error){
                res.send({"status":"failed","message":"Unable to register"})

            }

               
                
            }else{
                res.send({"status":"failed", "message":"Password && Confirm password Not matched"})
            }

        }else{
            res.send({"status":"failed", "message":"All Fields are required"})
        }
    }
}

exports.adminLogin =async (req,res)=>{
    try{
        const {email,password}=req.body;
        console.log("hiii",email,password)
        if(email && password){
            const user = await AdminModel.findOne({email:email})
            if(user !==null){
                const isMatch = await bcrypt.compare(password, user.password)
                if(isMatch){
                    if((user.email == email) && isMatch){

                         // generate the jwt joken
                const token = jwt.sign({userID:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'5d'})
                        res.status(201).send({"status":"success","message":"Login Success","token":token});
                    }else{
                        res.status(201).send({"status":"failed","message":"Password or Email Does't Match"}) 
                    }
                }

            }else{
                res.status(201).send({"status":"failed","message":"Not A registred User"});
            }

        }else{
            res.status(201).send({"status":"failed","message":"All fields are required"});
        }

    }catch(error){
      res.send({"status":"failed","message":"unable to login"})
    }

}




