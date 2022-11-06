import { getLastListedCoin } from '@services/binanceListingScrapper';
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', async (req: Request<any, any, any, any>, res: Response) => {
  try {
    const result = await getLastListedCoin()
    res.json({result})
  } catch (ex) {
    console.error(ex);
  }
});

export { router as listingController };
