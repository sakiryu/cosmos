import crypto from 'crypto';
import path from 'path';
import config from '../config/config.js';

export class PatchService {
    
    constructor(fileRepository) {
        this.fileRepository = fileRepository;
        this.patches = this._fetchPatches();
    }

    /**
    * Generates a hash digest from the provided data using the specified hash algorithm.
    *
    * @async
    * @function getHashFromDataAsync
    * @param {string} hashType - The name of the hash algorithm to use (e.g. 'md5', 'sha256', etc.).
    * @param {string|Buffer} data - The data to hash.
    * @returns {Promise<string>} A promise that resolves to the hash digest in hexadecimal format.
    */
    _getHashAsync(hashType, data) {
        return crypto.createHash(hashType)
                    .update(data)
                    .digest('hex');
    }

    async _fetchPatches() {
        const files = await this.fileRepository.getFiles();
        const patches = {}

        for (const [filePatch, fileContent] of Object.entries(files)) {
            const hash = this._getHashAsync(config.patcher.hashAlgorithm, fileContent);
            patches[hash] = filePatch;
        }
        return patches;
    }

    async getPatches() {
        return this.patches;
    }

    async getPatch(hash) {
        const patches = await this.patches;
        const relativePath = await patches[hash];
        const patchedFile = await this.fileRepository.getFile(relativePath);
        const fileName = path.basename(relativePath);

        return { fileName, patchedFile  };
    }
}