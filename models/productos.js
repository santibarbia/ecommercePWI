const pool = require('../utils/bd');


const getAllProd = async () => {
    const query = "SELECT * FROM ?? JOIN ?? ON categorias.id = productos.id_categoria JOIN ?? ON productos_imagenes.id_producto = productos.id where productos.eliminado = 0 ";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS, process.env.T_PRODUCTOSIMG];
    return await pool.query(query, params);
}

const buscar = async (nombre) => {
    const query = "SELECT * FROM ?? JOIN ?? ON categorias.id = productos.id_categoria JOIN ?? ON productos_imagenes.id_producto = productos.id where productos.nombre LIKE ? AND  productos.eliminado = 0";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS, process.env.T_PRODUCTOSIMG, nombre];
    return await pool.query(query, params);
}

const getSingleProd = async (id) => {
    const query = "SELECT p.id,p.id_categoria, p.nombre,p.descripcion,p.precio,p.marca,p.stock,c.categoria AS nombreCategoria,c.id, c.descripcion AS desCategoria, pi.uid AS nombreImagen FROM ?? AS p JOIN ?? AS c ON c.id = p.id_categoria JOIN ?? AS pi ON pi.id_producto = p.id where p.id = ?";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS, process.env.T_PRODUCTOSIMG, id];
    return await pool.query(query, params);
}
const createImg = (obj) => pool.query("INSERT INTO ?? SET ?", [process.env.T_PRODUCTOSIMG, obj]).then(response => response).catch(err => err);

const updateImg = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id_producto = ?";
        const params = [process.env.T_PRODUCTOSIMG, obj, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}
const deleteImg = async(id)=>{
    try {
        const query = "UPDATE ?? SET eliminado = 1 WHERE id_producto = ?";
        const params = [process.env.T_PRODUCTOSIMG, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}

const create = (producto) => pool.query("INSERT INTO ?? SET ?", [process.env.T_PRODUCTOS, producto]).then(response => response).catch(err => err);

const update = async (producto, id) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_PRODUCTOS, producto, id];
    return await pool.query(query, params);
}

const delProducto = async (id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_PRODUCTOS, id];
    return await pool.query(query, params);
}

const getTresProd = async ()=> {
    const query = "SELECT * FROM ?? JOIN ?? ON categorias.id = productos.id_categoria JOIN ?? ON productos_imagenes.id_producto = productos.id where productos.eliminado = 0 ORDER BY rand() LIMIT 3 ";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS, process.env.T_PRODUCTOSIMG];
    return await pool.query(query, params);
}

module.exports = {
    getAllProd,
    getSingleProd,
    create,
    update,
    delProducto,
    createImg,
    updateImg,
    deleteImg,
    buscar,
    getTresProd
};