const pool = require('../utils/bd');


const getAllProd = async () => {
    const query = "SELECT p.nombre,p.descripcion,p.precio,p.marca,p.stock,c.categoria AS nombreCategoria, c.descripcion AS desCategoria, pi.uid AS nombreImagen FROM ?? AS p JOIN ?? AS c JOIN ?? AS pi WHERE p.eliminado = 0 ";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS, process.env.T_PRODUCTOSIMG];
    return await pool.query(query, params);
}

const getSingleProd = async (id)=>{
    const query = "SELECT p.nombre,p.descripcion,p.precio,p.marca,p.stock,c.categoria AS nombreCategoria, c.descripcion AS desCategoria, pi.uid AS nombreImagen FROM ?? AS p JOIN ?? AS c JOIN ?? AS pi WHERE p.eliminado = 0 AND id = ?";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS, process.env.T_PRODUCTOSIMG,id];
    return await pool.query(query, params);
}

const create = async (producto)=>{
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_PRODUCTOS,producto];
    return await pool.query(query, params);
}

const update = async (producto,id)=>{
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_PRODUCTOS,producto,id];
    return await pool.query(query, params);
}

const delProducto = async (id)=>{
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_PRODUCTOS,id];
    return await pool.query(query, params);
}

module.exports = {getAllProd,getSingleProd,create,update,delProducto};