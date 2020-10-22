# 从零开始学前端自动化测试

# 从零开始学前端自动化测试(一)  jest快速入门
## 快速入门

### 环境检测
```shell script
D:\Vue-Automated-Testing>node -v
v12.13.0

D:\Vue-Automated-Testing>npm -v
6.12.0
```
### 初始化项目, 生成 package.json 文件, 可以一路回车
```shell script
npm init
```

### 安装 jest 使用 `yarn` 或使用 `npm` 安装
```shell script
yarn add --dev jest
```

```shell script
npm install --save-dev jest
```

> Jest的文档统一使用 `yarn` 指令, 但是用 `npm` 同样可行, 可以通过 [yarn官方文档](https://yarn.bootcss.com/docs/migrating-from-npm/) 进行 `yarn` 和 npm 对比

### 为了便于文件管理, 创建三个文件夹
```
├─server (服务器代码)
├─src (逻辑代码)
├─test (测试代码)
package.json (包管理器)
```

### Hello world!

在 `src` 文件夹下创建 `index.js` 文件
```javascript
export function test() {
  return 'Hello World!'
}
```
然后在 `test` 文件夹下创建 `index.test.js` 测试文件
```javascript
import { hello } from '../src/index'

test('Hello World!', () => {
  escape(hello()).toBe('Hello World!')
})
```

由于使用了 `import` ES6 的语法, 故而要使用 Babel

通过 `npm` 安装依赖
```shell script
npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 -D
```
在项目的根目录下创建 babel.config.js ，通过配置 Babel 使其能够兼容当前的 Node 版本。
```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

然后配置脚本命令, 将如下代码添加到 `package.json` 中:
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

最后，运行 yarn test 或者 npm run test，Jest 将输出如下信息：

```shell script
 PASS  test/index.test.js
  √ Hello World! (1 ms)
```
喜大普奔, 我们已经成功写好了第一个测试用例了

然后我们看下测试到底干了什么

每个 test 方法都是一个小模块, 它接受两个参数, 第一个参数是该模块的测试描述, 第二个参数是一个函数, 是你所需要的执行的测试用例

这个测试用例很简单, 每次要测试一个值时都会使用 `expect` 函数。它接收一个值, `expect` 函数后往往会跟一个"匹配器", 已验证 `expect` 函数里面的值, 这里使用的是 `toBe` 匹配器, 意思是 匹配器内的值与 `expect` 函数里的值严格等于

## 匹配器

### 常用匹配器
jest 为我们提供一些常用的匹配器
|   匹配器     |    说明    |
| :---------:  | :---------: |
| `toBe`  | 严格等于 |
| `toEqual`  | 匹配值 |
| `toBeNull`  | 匹配 `Null` |
| `toBeUndefined`  | 匹配 `undefined` |
| `toBeDefined`  | 匹配定义 |
| `toBeTruthy`  | 匹配真值 |
| `toBeFalsy`  | 匹配假值 |
| `toBeGreaterThan`  | 大于 |
| `toBeGreaterThanOrEqual`  | 大于等于 |
| `toBeLessThan`  | 小于 |
| `toBeLessThanOrEqual`  | 小于等于 |
| `toBeCloseTo`  | 浮点问题 |
| `toMatch`  | 用来判断一个字符串是否包含一个指定的值  |
| `toContain`  | 用来判断一个数组(Set 对象)是否包含一个指定的值  |
| `not`  | 取反 |
| `toThrow`  | 匹配异常 |

### 更多匹配器

  要获得匹配器的完整列表，请查看 [参考文档](https://www.jestjs.cn/docs/expect)。
  
## 测试函数

