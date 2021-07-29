const modelProducto = require('../models/productos');
const {
    imgFile
} = require('../utils/fileHandler');

const crearProducto = async (body, file) => {

    try {
        const {insertId: id_producto} = await modelProducto.create(body);
        console.log(id_producto);
        const uid = imgFile(file);
        const obj = {
            id_producto,
            uid
        };
        const {
            insertId: idImg
        } = await modelProducto.createImg(obj);
        return idImg;

    } catch (error) {
        console.log(error);
    }

}



const updateProducto = async (id, body, file) => {
    try {
        const id_producto = await modelProducto.update(body, id);
        if (file) {
            const uid = imgFile(file);
            const obj = {
                uid
            };
            const idImg = await modelProducto.updateImg(id, obj);
            return idImg;
        } else {
            return id_producto;

        }
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    crearProducto,
    updateProducto
};