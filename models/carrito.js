const pool = require('../utils/bd');

const getAll = async (id_user)=> {
    const query = "SELECT ca.id,ca.id_producto,p.nombre,p.descripcion,p.precio,p.marca,c.categoria AS nombreCategoria, pi.uid AS nombreImagen FROM ?? AS ca JOIN ?? AS p ON p.id = ca.id_producto JOIN ?? AS C ON c.id = p.id_categoria JOIN ?? AS pi ON pi.id_producto = p.id WHERE ca.id_usuario = ? AND ca.eliminado = 0 ";
    const params = [process.env.T_CARRITO,process.env.T_PRODUCTOS, process.env.T_CATEGORIAS,process.env.T_PRODUCTOSIMG,id_user];
    return await pool.query(query, params);
}

const agregar = async (obj) =>{
    const query = "INSERT INTO ?? SET ?"
    const params = [process.env.T_CARRITO,obj];
    return await pool.query(query, params);
}

const eliminarUno = async (id) =>{

    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_CARRITO,id];
    return await pool.query(query, params);

}

const delCarrito = async (id) =>{
    const query = "UPDATE ?? SET eliminado = 1 WHERE id_usuario = ?";
    const params = [process.env.T_CARRITO,id];
    return await pool.query(query, params);
};


module.exports = {getAll,agregar,delCarrito,eliminarUno};