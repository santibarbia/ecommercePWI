const pool = require('../utils/bd');


const getAll  = async()=>{
    const query = "SELECT nombre, username, mail, telefono FROM ?? WHERE habilitado = 1 AND eliminado = 0";
    const params = [process.env.T_USUARIOS]
    return await pool.query(query, params);
}

const getSingle = async(id)=>{
    const query = "SELECT nombre, username, mail, telefono FROM ?? WHERE id = ? AND eliminado = 0";
    const params = [process.env.T_USUARIOS,id];
    return await pool.query(query, params);

}

const create = async(usuario)=>{
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_USUARIOS,usuario];
    return await pool.query(query, params);
}

const auth = async(username,pass) =>{
    const query = "SELECT id, admin FROM ?? WHERE username = ? AND pass = ? AND eliminado = 0";
    const params = [process.env.T_USUARIOS,username,pass]
    return await pool.query(query,params);

}

const habilitar = async(uid)=>{
    const query = "UPDATE ?? SET habilitado = 1 WHERE confirmacionCorreo = ?"
    const params = [process.env.T_USUARIOS,uid];
    return await pool.query(query,params);
}

const update = async (id,obj)=>{
    const query = "UPDATE ?? SET ? WHERE id = ?"
    const params = [process.env.T_USUARIOS,obj,id];
    return await pool.query(query,params);
}

const del = async (id)=>{
    const query = "UPDATE ?? SET eliminado = 1  WHERE id = ?";
    const params = [process.env.T_USUARIOS,id,id];
    return await pool.query(query,params);
}

module.exports = {getAll,getSingle,create,update,auth,del,habilitar};