const express = require('express');
const router = express.Router();
const { upload } = require("../middleware/multer")

const { addMedicine, deleteMedicine, updateMedcine, getAllMedicine, uploadImage } = require('../controllers/medicine-controller')

router.get('/', getAllMedicine);
router.post('/', addMedicine);
router.delete('/:id', deleteMedicine);
router.put('/:id', updateMedcine);
router.post("/upload_image/:id", upload.single("image"), uploadImage);

module.exports = router;