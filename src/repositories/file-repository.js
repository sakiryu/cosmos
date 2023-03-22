import fs from 'fs/promises';
import path from 'path';
import config from '../config/config.js';

export class FileRepository {

    constructor() {
        this.files = this._readDirectory(config.patcher.baseDirectory);
    }

    async getFile(relativePath) {
        const files = await this.files;
        return files[relativePath];
    }

    async getFiles() {
        return this.files;
    }

    async _readDirectory(directory) {
        const files = {};
        const fileNames = await fs.readdir(directory);
        
        for (const fileName of fileNames) {
            const filePath = path.join(directory, fileName);
            const fileStats = await fs.stat(filePath);
        
            if (fileStats.isDirectory()) {
                const subDirectoryFiles = await this._readDirectory(filePath);
                Object.assign(files, subDirectoryFiles);
            } else {
                const fileContents = await fs.readFile(filePath);
                const relativePath = path.relative(config.patcher.baseDirectory, filePath).replace(/\\/g, '/');                
                
                files[relativePath] = fileContents;
            }
        }
        return files;
    }
}