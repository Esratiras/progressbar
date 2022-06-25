const Progress = require("../models/newProgresso");

module.exports = async (req, res, next) => {

    const value = 0
        const progress = new Progress({
            value: value,
        });
    const savedProgress = await progress.save()

    progress.save().then(()=>{
        // const Id = savedProgress._id.valueOf();
        res.json({ user: savedProgress })
    }).catch(err=>{
        res.json({message:err})
    })
}



