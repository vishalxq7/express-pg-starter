const userModel = require('../model/userModel');


const getUserData = async (req,res) => {
    try {
        
        let response = await userModel.getUserData();
        
        if(response) {
            res.status(200).json(response);
        } else {
            res.status(200).json([]);
        }
    } catch (e) {
        console.log('error occured >>>>', e);
    }
}


module.exports = { getUserData }