import { UploadApiRes } from "@/types/api/upload";

/** 上传insertFn定义 */
export type InsertFnType = (url: string, alt?: string, href?: string) => void;

/** 自定义上传返回 */
export const customUploadInsert = (res: UploadApiRes, insertFn: InsertFnType) => {
    if (res.ok) {
        insertFn(res.data.uri, res.data.key);
    } else {
        window.$message.error(String(res.msg));
    }
};

/** 处理上传失败事件 */
export const handleUploadFailed = (file: File, res: any) => {
    window.$message.error(String(res));
};

/** 处理上传错误事件 */
export const handleUploadError = (file: File, err: any, res: any) => {
    window.$message.error(String(err));
};
