import { SodaProblem } from './SodaProblem'

const START = 10
const PRICE = { cap: 2, bottle: 4 }
console.info(`== 先决条件 ==
最初持有：${10} 瓶苏打水
兑换价格：${PRICE.cap}瓶盖/${PRICE.bottle}瓶身
`)

const [noBorrow, borrowOne] = [
  new SodaProblem(START, PRICE),
  new SodaProblem(START, PRICE),
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
