/**
 * 数字四舍五入(可以指定保留几位小数)
 * @param {Number} value    数值
 * @param {Number} position 保留几位小数
 * @return {String}
 */
export default (value: number, position = 0): string => {
    const tmp = Math.pow(10, position)
    
    let result = (Math.round(value * tmp) / tmp).toString()

    let num = result.split('.')[1] ? result.split('.')[1].length : 0
    
    while (num < position) {
        result += !result.includes('.') ? '.0' : '0'
      
         num++
    }

    return result
}
