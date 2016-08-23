import express from 'express';
import productsData from '../products.json';
import {Product} from '../db/products-schema';

const router = express.Router();
router.post('/init', function(req, res, next) {
  Product.find().remove(function(err) {
    if(err) return next(err);

    Product.create(productsData, (err, all) => {
      if(err) return next(err);
      res.json(all);
    });
  });
});

/*
router.get('/product', function(req, res, next) {
  Product.find().lean().exec((err, data) => {
    if(err) return next(err);
    res.json(data);
  })
});
*/
export default router;
