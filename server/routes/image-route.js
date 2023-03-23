const express = require('express');
const multer = require('multer');
const {
 downloadImage
} = require('../controllers/imagesController');

const router = express.Router();// Setting up multer as a middleware to grab photo uploads

const storage = multer.memoryStorage();

const upload = multer({ storage: storage }).single('file');// POST - Add Image to Cloud Storage


router.post('/download', downloadImage);


module.exports = {  routes: router}