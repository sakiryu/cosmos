
export class PatchController {

    constructor(patchService) {
        this.patchService = patchService;
    }

    getPatches = async (_, res) => {
        const patches = await this.patchService.getPatches();
        res.send(patches);
    }

    getPatch = async (req, res) => {
        const { hash } = req.params;
        const patch = await this.patchService.getPatch(hash);

        res.set({'Content-Disposition': `attachment; filename="${patch.fileName}"`});
        res.send(patch.patchedFile);
    }
}
