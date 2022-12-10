import { getCryptoSentiment } from '@services/cryptoSentiment';
import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', async (req: Request<any, any, any, any>, res: Response) => {
  try {
    const result = await getCryptoSentiment()
    // teporary
    res.set('Access-Control-Allow-Origin', '*');
    res.json({result})
  } catch (ex) {
    console.error(ex);
  }
});

export { router as chartsController };
