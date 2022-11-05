import * as path from 'path';
import { Router, static as serveStatic } from 'express';
import { apiController } from './api';
import { getAllCurrencies, searchAndUpdateList } from '@services/newListingScrapper';

const router = Router();
const publicPath = path.join(__dirname, '../', '../', '../', '/client', '/build');

router.use('/api', apiController);

router.use(serveStatic(publicPath));

router.get('*', (req, res) => {
  const indexPath = path.join(publicPath, 'index.html');
  res.sendFile(indexPath);
});

getAllCurrencies()
searchAndUpdateList()

export { router };
