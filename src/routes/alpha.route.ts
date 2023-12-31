import { Request, Response, Router } from 'express';
import { DebankCtr } from '@ctr';
const router = Router()

router.get('/', async (req: Request, res: Response) => {
    const deBankCtr = new DebankCtr()
    const result = await deBankCtr.getUser(req.query)
    res.json(result)
})

export default router
