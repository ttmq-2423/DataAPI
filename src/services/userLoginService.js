import { where } from "sequelize";
import db from "../models/index";

let handleLogin  =   (email, password) => {
    return new Promise(async(resolve, reject)=>{
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist){
                let user = await db.User.findOne({
                    where: {email : email}
                });
                if (user){
                    // kiemr tra mat khau 
                    // chua hash password
                    if (user.password == password){
                        userData.errCode = 0;
                        userData.errMessage = 'ok';
                        userData.user = user;
                    }else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }

                }else{
                    userData.errCode = 2;
                    userData.errMessage = `Your's email isn't exists in your system`;
                }
            
                resolve(userData);
            }
            else {
            
                userData.errCode = 2;
                userData.errMessage = `Your's email isn't exists in your system`;
                resolve(userData);
            }


        } catch(e){
            reject(e)
        }
    })

}
// kiem tra co ton tai email trong database khong
let checkUserEmail = async (userEmail) =>{
    return new Promise(async(resolve, reject) => {
        try{
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }

        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    handleLogin: handleLogin,
} 