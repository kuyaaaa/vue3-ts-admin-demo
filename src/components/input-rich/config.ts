/** 上传配置定义 */
export interface UploadConfig {
    api: string;
    timeout: number;
    fieldName: string;
}

/** 图片上传设置 */
export const imgUploadConfig: UploadConfig = {
    api: "/upload/img",
    timeout: 20 * 1000,
    fieldName: "file",
};
/** 视频上传设置 */
export const videoUploadConfig: UploadConfig = {
    api: "/upload/video",
    timeout: 20 * 1000,
    fieldName: "file",
};
