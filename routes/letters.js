import express from 'express';

import { getLetters, createLetter, updateLetter, deleteLetter, sayThanks, getCoziPoints } from '../controllers/letters.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getLetters);
router.post('/', auth, createLetter);
router.patch('/:id', auth, updateLetter);
router.delete('/:id', auth, deleteLetter);

router.patch('/:id/sayThanks', auth, sayThanks);
router.get('/:id/coziPoints', auth, getCoziPoints);

export default router;