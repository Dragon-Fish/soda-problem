import { SodaProblem } from './SodaProblem'

const timeBegin = Date.now()
const INIT_SODA = 10
const PRICES = { cap: 2, bottle: 4 }
console.info(`== 先决条件 ==
最初持有：${INIT_SODA} 瓶苏打水
兑换价格：${PRICES.cap}瓶盖/${PRICES.bottle}瓶身
`)

const [noBorrow, borrowOne] = [
  new SodaProblem(INIT_SODA, PRICES),
  new SodaProblem(INIT_SODA, PRICES),
]
console.info('**** 计算开始 ****')
console.info('> 禁用赊账')
noBorrow.startWithoutBorrow()
console.info('> 立即归还')
borrowOne.startWithBorrowOne()

console.info(`
## 计算结果

### 禁用赊账

- 共喝：${noBorrow.backpack.DRANK} 瓶苏打水
- 剩余：${noBorrow.backpack.CAPS} 瓶盖 / ${noBorrow.backpack.BOTTLES} 瓶身

### 立即归还

- 共喝：${borrowOne.backpack.DRANK} 瓶苏打水
- 剩余：${borrowOne.backpack.CAPS} 瓶盖 / ${borrowOne.backpack.BOTTLES} 瓶身
`)

console.info(`耗时 ${Date.now() - timeBegin}ms`)
