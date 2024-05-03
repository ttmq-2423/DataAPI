import express from "express";
import homeController from "../controllers/homeController"
import userLoginController from "../controllers/userLoginController"
import userRegisterController from "../controllers/userRegisterController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.post('/api/login', userLoginController.handleLogin);
    router.post('/api/register', userRegisterController.handleRegister)

   
    

    return app.use("/", router);
}

module.exports = initWebRoutes;