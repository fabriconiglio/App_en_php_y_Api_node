const db = require('../database');

exports.listar = async (req, res) => {
    try {
        const [series, _] = await db.query('SELECT * FROM tv_series');
        res.status(200).json(series);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.agregar = async (req, res) => {
    try {
        const { title, channel, gender } = req.body;
        const [result, _] = await db.query('INSERT INTO tv_series (title, channel, gender, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())', [title, channel, gender]);

        res.status(201).json({ id: result.insertId, title, channel, gender });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.borrar = async (req, res) => {
    try {
        const { id } = req.params;
        const [result, _] = await db.query('DELETE FROM tv_series WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).send('La serie con el ID proporcionado no existe.');
        }

        res.status(200).send('Serie eliminada con éxito.');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.modificar = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, channel, gender } = req.body;
        const [result, _] = await db.query('UPDATE tv_series SET title = ?, channel = ?, gender = ?, updated_at = NOW() WHERE id = ?', [title, channel, gender, id]);

        if (result.affectedRows === 0) {
            return res.status(404).send('La serie con el ID proporcionado no existe.');
        }

        res.status(200).json({ id, title, channel, gender });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

