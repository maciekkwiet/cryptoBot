import { Router } from 'express';
import { listingController } from '@controllers/endpoints/listing';
import { chartsController } from '@controllers/endpoints/charts';

const router = Router();

router.use('/listing', listingController);
router.use('/charts', chartsController);

export { router as apiController };
