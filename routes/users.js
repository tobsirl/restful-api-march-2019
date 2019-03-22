import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.json({ message: 'Inside router user', name: 'John Doe', age: 25 }));

export default router;
