import express from 'express';
import multer from 'multer';
import {
  uploadImage,
  getAllImages,
  deleteImage
} from '../controllers/galleryController.js';

const router = express.Router();

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Routes
router.post('/', upload.single('image'), uploadImage);
router.get('/', getAllImages);
router.delete('/:id', deleteImage);

export default router;