const db = require('../config/dbConfig');
const { validateAddSchool } = require('../utils/validators');

exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    const { error } = validateAddSchool(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query, [name, address, latitude, longitude], (err) => {
        if (err) return res.status(500).send(err.message);
        res.status(201).send('School added successfully');
    });
};

exports.listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).send('Latitude and longitude are required');
    }

    const query = `
        SELECT *, (
            6371 * ACOS(
                COS(RADIANS(?)) * COS(RADIANS(latitude)) * COS(RADIANS(longitude) - RADIANS(?)) +
                SIN(RADIANS(?)) * SIN(RADIANS(latitude))
            )
        ) AS distance
        FROM schools
        ORDER BY distance
    `;

    db.query(query, [latitude, longitude, latitude], (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json(results);
    });
};
