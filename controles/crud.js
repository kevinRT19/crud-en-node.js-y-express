const conexion = require('../database/db');

module.exports.save = (req, res) => {
    const users = req.body.users
    const rol = req.body.rol
    conexion.query('INSERT INTO users SET ? ', {users: users, rol: rol}, (error, results) => {
        if(error){
            console.log('El error de conexión es: ' + error);
        }else{
            res.redirect('/');
        }
    });
};
// actualizar registros
module.exports.update = (req, res) => {
    const id = req.body.id;
    const users = req.body.users;
    const rol = req.body.rol;
    conexion.query('UPDATE users SET ? WHERE id = ?',[{users: users, rol: rol}, id], (error, results) => {
        if(error){
            console.log('El error de conexión es: ' + error);
        }else{
            res.redirect('/');
        }
    });

}