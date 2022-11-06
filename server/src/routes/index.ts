import * as path from 'path';
import { Router, static as serveStatic } from 'express';
import { apiController } from './api';
import { searchAndUpdateList } from '@services/binanceListingScrapper';
import { searchAndUpdateCurrencies } from '@services/gateIoUtils';
import { searchMoveCurrencies } from '@services/bigMovesSearchEngine';

const router = Router();
const publicPath = path.join(__dirname, '../', '../', '../', '/client', '/build');

router.use('/api', apiController);

router.use(serveStatic(publicPath));

router.get('*', (req, res) => {
  const indexPath = path.join(publicPath, 'index.html');
  res.sendFile(indexPath);
});

searchAndUpdateCurrencies()
searchAndUpdateList()
searchMoveCurrencies()

export { router };
