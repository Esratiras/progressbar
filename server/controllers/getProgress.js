const Progress = require('../models/newProgresso')

module.exports = async (req, res, next) => {
    try{
        const data = await Progress.findById(req.params.id);


       return res.json(data)
    }
    catch(error){
        return res.status(500).json({message: error.message})
    }
}



