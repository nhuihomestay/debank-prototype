import { Router } from 'express';
import DebankRoute from './debank.route'

const router = Router();

router.use('/debank', DebankRoute)

export default router;