import express from 'express';

import { getPosts, getPostsBySearch, getPost, getAds, getPostsByTags} from '../controllers/movies.js';

const router = express.Router();


router.get('/category', getPostsByTags);
router.get('/search', getPostsBySearch);

router.get('/', getPosts);
router.get('/:id', getPost);


router.get('/:id', getAds);



export default router;