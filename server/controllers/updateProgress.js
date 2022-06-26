const Progress = require("../models/Progresso");

module.exports = async (req, res) => {


    const progress = new Progress({
        value: req.body.value
    })
    let query = { _id: req.params.id }
    let newValue = req.body.value
    Progress.findOneAndUpdate(query, { value: newValue }).then(()=>{
        progress.save()
            .then(() => {
                return res.json({success: true})
            })
            .catch(err => {
                return res.json({message: err})
            })

    })


}



