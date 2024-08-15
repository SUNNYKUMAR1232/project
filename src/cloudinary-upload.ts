/***
 ** File: server\9-helper\src\cloudinary-upload.ts
 ** Description: Cloudinary upload function to upload the image and video
 ** Date: 2024-08-16 01:38:11
 ** Version: 1.0.0
 ** Author: Sunny Kumar
 ***/

import cloudinary, {
    UploadApiErrorResponse,
    UploadApiResponse,
} from 'cloudinary';
// to upload the image pdf and other files
export function Uploads(
    file: string,
    public_id?: string,
    invalidate?: boolean,
    overwrite?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file,
            {
                public_id,
                invalidate,
                overwrite,
                resource_type: 'auto',
            },
            (
                error: UploadApiErrorResponse | undefined,
                result: UploadApiResponse | undefined
            ) => {
                if (error) resolve(error);
                resolve(result);
            }
        );
    });
}
// to upload the video
export function videoUpload(
    file: string,
    public_id?: string,
    invalidate?: boolean,
    overwrite?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file,
            {
                public_id,
                invalidate,
                overwrite,
                resource_type: 'video',
                chunk_size: 500000,
            },
            (
                error: UploadApiErrorResponse | undefined,
                result: UploadApiResponse | undefined
            ) => {
                if (error) resolve(error);
                resolve(result);
            }
        );
    });
}
