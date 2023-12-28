const connection = require('../db/db-connection')

const addMedicine = (req, res) => {
    connection.query('insert into medicine values(?,?,?,?,?)', [req.body.mid, req.body.name, req.body.qty,
    req.body.price, req.body.sid], (err, rows) => {
        if (err) {
            res.json({ "result": "failed" })
        } else {
            res.json({ "result": "success" })
        }
    })
}

const deleteMedicine = (req, res) => {
    connection.query('delete from medicine where mid=?', [req.params.id], (err, rows) => {
        if (err) {
            res.json({ "result": "failed" })
        } else {
            res.json({ "result": "success" })
        }
    })
}

const updateMedcine = (req, res) => {
    connection.query('update medicine set name=?,qty=?,price=?,sid=? where mid=?', [req.body.name, req.body.qty,
    req.body.price, req.body.sid, req.params.id], (err, rows) => {
        if (err) {
            res.json({ "result": "failed" })
        } else {
            res.json({ "result": "success" })
        }
    })
}

const getAllMedicine = (req, res) => {
    connection.query('select * from medicine', (err, rows) => {
        if (err) {
            res.json({ "result": "failed" })
        } else {
            res.json({ "result": "success" })
        }
    })
}

const uploadImage = (req, res) => {

    try {

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        connection.query('UPDATE medicine set image_name=? where mid=?', [req.file.filename, req.params.id], (err, rows) => {
            if (err) throw err
        })

        return res.status(201).send({
            image: req.file,
            message: 'Image uploaded successfully'
        });

    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error! Try again, please!' })
    }
}

module.exports = { addMedicine, deleteMedicine, updateMedcine, getAllMedicine, uploadImage }