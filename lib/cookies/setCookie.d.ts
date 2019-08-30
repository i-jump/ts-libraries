/**
 * 设置cookie模块
 */
interface CookieInfo {
    key: string;
    value: string;
    path?: string;
    domain?: string;
    expires?: number;
}
/**
 * 设置一个或者多个cookie到客户端
 *
 * @param {string | CookieInfo | CookieInfo[]} cookie cookie key 或 描述对象(可接受多个描述对象)
 * @param {string} value 需设置cookie值(当cookie为 string时 value为必选字段)
 */
declare function setCookie(cookie: string, value: string, path: string, domain: string): void;
declare function setCookie(cookie: CookieInfo): void;
declare function setCookie(cookie: Array<CookieInfo>): void;
export default setCookie;
