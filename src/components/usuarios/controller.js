var store = require('./store');

const getOneUser = (id) => {
    return new Promise(async(resolve, reject) =>{
        if(!id){
            console.log('NO DATA');
            reject('No hay info amigo!');
        }else{
            const result = await store.getOne(id);
            resolve(result);
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

module.exports = {
    getOneUser,
    saveUser
}