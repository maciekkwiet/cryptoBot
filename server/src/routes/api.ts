import { Router } from 'express';
import { listingController } from '@controllers/endpoints/listing';

const router = Router();

router.use('/listing', listingController);

export { router as apiController };
