import crypto from 'crypto';
import multer from 'multer';
import { extname, resolve } from 'path';

const uploadConfig = (folder: string) => {
    return {
        storage: multer.diskStorage({
            destination: resolve(__dirname, '..', '..', folder),
            filename: (request, file, callback) => {
                const fileHash = crypto.randomBytes(16).toString('hex');
                const fileName = `${fileHash}-${file.originalname}`;
                return callback(null, fileName);
            }
        })
    }
}

export { uploadConfig };
