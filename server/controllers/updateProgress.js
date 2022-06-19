const ProgressCreate = require("../models/Progress");

module.exports = async (req, res, next) => {
    const progress = new ProgressCreate({
        value: req.body.value
    })
    progress.save().then(()=>{
        res.json({success:true})
    }).catch(err=>{
        res.json({message:err})
    })
}



