var Model = require('./model');

const getOne = async(id) => {
    try{
        const result = await Model.findById(id);
        return result;
    }catch(err){
        console.error('[Error: ]' + err);
    }
}

const addData = async(newData) => {
    try{
        const dataSaved = new Model(newData);
        return await dataSaved.save();
    }catch(err){
        console.error('[Error: ]' + err);
    }
}




module.exports = {
    getOne: getOne,
    save: addData
}