import db from '../models/index';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }

}
let getCRUD = async (req,res) =>{
    return res.send('crrud ne');
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD : getCRUD,
}