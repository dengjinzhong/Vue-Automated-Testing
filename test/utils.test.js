const utils = require('../src/utils')
const { parseTime } = utils

test('测试方法: parseTime', () => {
  const d = new Date('2020-10-19 11:45:01') // 2020-10-19 11:45:01
  expect(parseTime(d)).toBe('2020-10-19 11:45:01')
  expect(parseTime(d, '{y}-{m}-{d} {h}:{i}')).toBe('2020-10-19 11:45')
  expect(parseTime(d, '{y}年{m}月{d}日')).toBe('2020年10月19日')
  expect(parseTime(d, '{a}')).toBe('一')
})
