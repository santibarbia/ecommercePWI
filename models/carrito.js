const pool = require('../utils/bd');

const getAll = async (id_user)=> {
    const query = "SELECT ca.id_producto,ca.id,cap.nombre,p.descripcion,p.precio,p.marca,p.stock,c.categoria AS nombreCategoria, c.descripcion AS desCategoria, pi.uid AS nombreImagen FROM ?? AS ca JOIN ?? AS p JOIN ?? AS c JOIN ?? AS pi WHERE id_usuario = ? AND eliminado = 0";
    const params = [process.env.T_CARRITO,process.env.T_PRODUCTOS, process.env.T_CATEGORIAS,process.env.T_PRODUCTOSIMG,id_user];
    return await pool.query(query, params);
}

const agregar = async (obj) =>{
    const query = "INSERT INTO ?? SET ?"
    const params = [process.env.T_CARRITO,obj];
    return await pool.query(query, params);
}

const delCarrito = async (id_user) =>{
    const query = "UPDATE ?? SET eliminado = 1 where id_usuario = ?"
    const params = [process.env.T_CARRITO,id_user];
};


module.exports = {getAll,agregar,delCarrito};