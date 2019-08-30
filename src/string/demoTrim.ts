/**
 * 去除空格
 * @param {string} str
 * @param {number} type all-所有空格(不传), around-前后空格，left-前空格，right-后空格
 */

export const demoTrim =  (str: string, type: string = 'all'): string => {
  const types: {[index: string]: RegExp} = {
    all: /\s*/g,
    around: /(^\s*)|(\s*$)/g,
    left: /(^\s*)/g,
    right: /(\s*$)/g
  }

  return str.replace(types[type], '')
}

