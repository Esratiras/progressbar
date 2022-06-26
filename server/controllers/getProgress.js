const Progress = require('../models/Progresso')

module.exports = (req, res) => {

   return Progress.findById(req.params.id)
        .then((data) => {
            return res.json(data)
        })
        .catch(error => {
            return res.status(500).json({message: error.message})
        })
}




