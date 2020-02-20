const Pool = require("pg").Pool;
const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"UsersData",
    password:"mata7galinha@",
    port: 5432
});

const getUsers = (req, res) => {
    pool.query('SELECT * FROM public."USER" ORDER BY id_user ASC', (error, results) => {
        if(error){
            throw error;
        };
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id_user = parseInt(req.params.id);

    pool.query('SELECT * FROM public."USER" WHERE id_user = $1', [id_user], (error, results) => {
        if(error){
            throw error;
        };
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getUsers,
    getUserById
};