var store = require('./store');

const getAll = () => {
    return new Promise(async(resolve, reject) =>{
        const result = await store.getAll()
        if(result){
            resolve(result)
        }else{
            reject({message: 'no hay registros para este usuario'})
        }
    })
}

const getOneUser = (id) => {
    return new Promise(async(resolve, reject) =>{
        if(!id){
            reject('No hay info amigo!');
        }else{
            const result = await store.getOne(id);
            if(result){
                resolve(result)
            }else{
                reject({message: 'no hay registros para este usuario'})
            }
        }
    })
}

const saveUser = (body) => {
    return new Promise((resolve, reject) => {
        if (!body) {
            console.log('NO DATA');
            reject('No hay info amigo!');
        } else {
            const newData = {
                nombres: body.nombres,
                apellidos: body.apellidos,
                email: body.email,
                password: body.password,
                profile_image: body.profile_image
            };
            store.save(newData);
            resolve(
                {
                    message: 'registro agregado',
                    data: newData
                }
            );
        }
    });
}

const updateData = (id, body) => {
    const newData = {
        _id: id,
        nombres: body.nombres,
        apellidos: body.apellidos,
        email: body.email,
        password: body.password,
        profile_image: body.profile_image
    };
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid data 666');
            return false;
        }
        const result = await store.update(newData);
        resolve(result);
    });
}

const deleteData = (id) => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid ID');
            return false
        }
        const result = await store.delete(id);
        resolve(result);
    });
}

module.exports = {
    getAll,
    getOneUser,
    saveUser,
    updateData,
    deleteData
}