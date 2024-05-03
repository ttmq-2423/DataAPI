import db from "../models/index";

let handleRegister  =   (data) => {
    return new Promise(async(resolve, reject)=>{
        try{
            //check email da ton tai chua
            let check = await checkUserEmail(data.email);
            if (check){
                resolve({
                    errCode: 1,
                    message: `Your email is already is used`
                })

            }
           
            await db.User.create({
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
            })
            resolve({
                errCode: 0,
                message: 'ok'
            })

            
            

        }catch(e){
            reject(e);
        }
        
    })
        

}
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
    handleRegister : handleRegister,
} 