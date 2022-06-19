const Progress = require('../models/Progress')

module.exports = async (req, res, next) => {
    try{
        const data = await Progress.findById(req.params.id);
        console.log(data)

        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}



