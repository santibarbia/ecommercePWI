const pool = require('../utils/bd');


const getAllCategorias = async () => {
    const query = "SELECT * FROM ?? WHERE eliminado = 0";
    const params = [process.env.T_CATEGORIAS];
    return await pool.query(query, params);
}

const getSingleCat = async (id) => {
    const query = "SELECT * FROM ?? WHERE id = ? AND eliminado = 0";
    const params = [process.env.T_CATEGORIAS,id];
    return await pool.query(query, params);
}

const create = async (categoria)=> {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_CATEGORIAS,categoria];
    return await pool.query(query, params);
}

const update = async (categoria,id)=> {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_CATEGORIAS,categoria,id];
    return await pool.query(query, params);
}

const delCategoria = async (id)=> {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_CATEGORIAS,id];
    return await pool.query(query, params);
}

module.exports = {getAllCategorias,getSingleCat,create,update,delCategoria};