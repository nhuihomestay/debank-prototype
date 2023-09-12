import { Router } from 'express';
import DebankRoute from './debank.route'
import AlphaRoute from './alpha.route'

const router = Router();

router.use('/debank', DebankRoute)
router.use('/alpha', AlphaRoute)

export default router;