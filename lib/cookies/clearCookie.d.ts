/**
 * 清空客户端cookie模块
 *
 * @param {string[]} paths 需要清除cookie 作用于集合
 * @param {string[]} domains 需要清除cookie 域集合
 */
declare function clearCookie(path: string, domain: string): void;
declare function clearCookie(path: Array<string>, domain: Array<string>): void;
export default clearCookie;
