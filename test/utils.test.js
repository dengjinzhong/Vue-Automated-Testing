const utils = require('../src/utils')
const { parseTime } = utils

// test('测试方法: parseTime', () => {
//   const d = new Date('2020-10-19 11:45:01') // 2020-10-19 11:45:01
//   expect(parseTime(d)).toBe('2020-10-19 11:45:01')
//   expect(parseTime(d, '{y}-{m}-{d} {h}:{i}')).toBe('2020-10-19 11:45')
//   expect(parseTime(d, '{y}年{m}月{d}日')).toBe('2020年10月19日')
//   expect(parseTime(d, '{a}')).toBe('一')
// })

describe('Utils:parseTime', () => {
  const d = new Date('2018-07-13 17:54:01') // "2018-07-13 17:54:01"
  it('timestamp', () => {
    expect(parseTime(d)).toBe('2018-07-13 17:54:01')
  })
  it('ten digits timestamp', () => {
    expect(parseTime((d / 1000).toFixed(0))).toBe('2018-07-13 17:54:01')
  })
  it('new Date', () => {
    expect(parseTime(new Date(d))).toBe('2018-07-13 17:54:01')
  })
  it('format', () => {
    expect(parseTime(d, '{y}-{m}-{d} {h}:{i}')).toBe('2018-07-13 17:54')
    expect(parseTime(d, '{y}-{m}-{d}')).toBe('2018-07-13')
    expect(parseTime(d, '{y}/{m}/{d} {h}-{i}')).toBe('2018/07/13 17-54')
  })
  it('get the day of the week', () => {
    expect(parseTime(d, '{a}')).toBe('五') // 星期五
  })
  it('get the day of the week', () => {
    expect(parseTime(+d + 1000 * 60 * 60 * 24 * 2, '{a}')).toBe('日') // 星期日
  })
  it('empty argument', () => {
    expect(parseTime()).toBeNull()
  })
})
