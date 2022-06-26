const Progress = require('../models/Progresso')

module.exports = (req, res) => {

    let paramsId = { _id: req.params.id }
    let newValue = 0
    Progress.findOneAndUpdate(paramsId, { value: newValue }).then((data)=>{
        data.save()
            .then(() => {
                return res.json({success: true})
            })
            .catch(err => {
                return res.json({message: err})
            })

    })
}




