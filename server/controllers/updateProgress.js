const Progress = require("../models/newProgresso");

module.exports = async (req, res, next) => {
    const progress = new Progress({
        value: req.body.value
    })
    progress.save().then(()=>{
        res.json({success:true})
    }).catch(err=>{
        res.json({message:err})
    })
}



