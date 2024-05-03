import userRegisterService from "../services/userRegisterService"

let handleRegister =async (req, res) => {
    let message = await userRegisterService.handleRegister(req.body);
    console.log(message);


    return res.status(200).json({
        errCode: message.errCode,
        message: message.message

    })

}

module.exports = {
    handleRegister: handleRegister,
}