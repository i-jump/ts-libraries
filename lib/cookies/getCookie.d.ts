/**
 * 获取cookie模块
 * @param {string} key // 需要获取的键
 */
/**
 * 根据传入 key 获取本地一个多个cookie
 *
 * @param {string | string[]} keys 需要获取cookie的 keys
 * @returns {string | object} 返回获取后的结果 (多个值返回值为对象类型)
 */
declare function getCookie(keys: Array<string>): any;
declare function getCookie(keys: string): string;
export default getCookie;
