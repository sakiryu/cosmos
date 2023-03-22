import express from 'express';
import patchControllerFactory from '../factories/patch-controller-factory.js';

const router = express.Router();
const patchController = patchControllerFactory.createPatchController();

router.get('/patches', patchController.getPatches);
router.get('/patch/:hash', patchController.getPatch);

export default router;