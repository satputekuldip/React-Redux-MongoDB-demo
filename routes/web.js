var express = require('express');
var router = express.Router();
const passport = require('passport');

let AuthController = require('../app/controllers/AuthController');
let ProductController = require('../app/controllers/ProductsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login', (req, res, next) => AuthController.login(req, res, next));
router.post('/register', (req, res, next) => AuthController.register(req, res, next));

router.get('/products', passport.authenticate('jwt', { session: false }),
    (req, res, next) => ProductController.index(req, res, next));
router.post('/products', passport.authenticate('jwt', { session: false }),
    (req, res, next) => ProductController.create(req, res, next));
router.get('/products/:id', passport.authenticate('jwt', { session: false }),
    (req, res, next) => ProductController.view(req, res, next));
router.post('/products/edit/:id', passport.authenticate('jwt', { session: false }),
    (req, res, next) => ProductController.update(req, res, next));
router.delete('/products/:id', passport.authenticate('jwt', { session: false }),
    (req, res, next) => ProductController.destroy(req, res, next));

module.exports = router;
