import { FileRepository } from '../repositories/file-repository.js';
import { PatchService } from '../services/patch-service.js';
import { PatchController } from '../controllers/patch-controller.js';

function createPatchController() {
    const fileRepository = new FileRepository();
    const patchService = new PatchService(fileRepository);
    return new PatchController(patchService);
}

export default {
    createPatchController
}