const express = require("express");
const router = express.Router();
const { getPlanes, createPlane } = require('../controllers/planes');
const path = require('path');
const multer = require('multer');

// Показываем, где хранить загружаемые файлы
const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage })

// @route GET /api/planes
// des Получить все самолёты
router.get('/', getPlanes)

// @route GET /api/planes/:id
// des Получить самолёт по ID
router.get('/:id', (req, res) => res.send('Get singe plane'))

// @route POST /api/planes
// des Создать самолёт
router.post('/', upload.single('planeImage'), createPlane)

module.exports = router;