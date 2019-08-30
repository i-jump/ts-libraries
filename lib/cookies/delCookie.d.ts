/**
 * 删除cookie模块
 */
interface CookieInfo {
    key: string;
    path?: string;
    domain?: string;
}
/**
 * 从客户端删除一个或者多个cookie
 * @param {string | string[] | CookieInfo[]} keys 需要删除的一个key值或者多个key值(cookie描述对象)
 */
declare function delCookie(keys: string, path: string, domain: string): void;
declare function delCookie(keys: CookieInfo): void;
declare function delCookie(keys: Array<string>): void;
declare function delCookie(keys: Array<CookieInfo>): void;
export default delCookie;
