const db = require('../database');

exports.listar = async (req, res) => {
    try {
        const [intervals, _] = await db.query('SELECT * FROM tv_series_intervals');
        res.status(200).json(intervals);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.agregar = async (req, res) => {
    try {
        const { tv_series_id, week_day, show_time } = req.body;
        const [result, _] = await db.query('INSERT INTO tv_series_intervals (tv_series_id, week_day, show_time) VALUES (?, ?, ?)', [tv_series_id, week_day, show_time]);
        res.status(201).json({ message: "Intervalo agregado con éxito", intervalId: result.insertId });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.borrar = async (req, res) => {
    try {
        const { id } = req.params;
        const [result, _] = await db.query('DELETE FROM tv_series_intervals WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "El intervalo con el ID proporcionado no existe." });
        }

        res.status(200).json({ message: "Intervalo borrado con éxito" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.modificar = async (req, res) => {
    try {
        const { tv_series_id, week_day, show_time } = req.body;
        const { id } = req.params;
        const [result, _] = await db.query('UPDATE tv_series_intervals SET tv_series_id = ?, week_day = ?, show_time = ? WHERE id = ?', [tv_series_id, week_day, show_time, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "El intervalo con el ID proporcionado no existe." });
        }

        res.status(200).json({ message: "Intervalo actualizado con éxito" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.listarPorSerie = async (req, res) => {
    try {
        const { tv_series_id } = req.params;

        const [intervals, _] = await db.query('SELECT * FROM tv_series_intervals WHERE tv_series_id = ?', [tv_series_id]);

        res.status(200).json(intervals);
    } catch (error) {

        res.status(500).send(error.message);
    }
};


