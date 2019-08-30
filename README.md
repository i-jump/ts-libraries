
<h1 align="center">ts-libraries </h1>
<h4 align="center" >ts/es工具库</h4>

### 安装

```javascript
  yarn add ts-libraries
  // or =>
  npm install ts-libraries

```

---

### 关于使用者

- 使用

```javascript
import {types} from 'ts-libraries'

const now = new Date()

types.typeof(now) // date

types.isDate(now) // true
```
