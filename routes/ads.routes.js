const Router = require('express');
const router = new Router();
const adsController = require("../controller/ads.controller");

router.get('/',adsController.getAds);
router.get('/user/',adsController.getAdsByUser);
router.get('/:id',adsController.getAd);
router.post('/',adsController.createAds);

module.exports = router;