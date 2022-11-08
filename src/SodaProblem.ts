export class SodaProblem {
  private DRANK: number
  private CAPS: number
  private BOTTLES: number

  constructor(
    private SODAS: number,
    private PRICE: { cap: number; bottle: number }
  ) {
    this.CAPS = 0
    this.BOTTLES = 0
    this.DRANK = 0
  }

  get backpack() {
    return {
      DRANK: this.DRANK,
      CAPS: this.CAPS,
      BOTTLES: this.BOTTLES,
    }
  }

  private drinkAll() {
    if (!this.SODAS) throw new Error('no more sodas')
    this.CAPS += this.SODAS
    this.BOTTLES += this.SODAS
    this.DRANK += this.SODAS
    this.SODAS = 0
    console.info(
      '[喝完剩余]',
      `至此喝掉了 ${this.DRANK} 瓶，还剩 ${this.CAPS}瓶盖 + ${this.BOTTLES}瓶身`
    )
    return this
  }

  startWithoutBorrow() {
    this.SODAS > 0 && this.drinkAll()

    while (this.CAPS >= this.PRICE.cap || this.BOTTLES >= this.PRICE.bottle) {
      this.SODAS +=
        Math.floor(this.CAPS / this.PRICE.cap) +
        Math.floor(this.BOTTLES / this.PRICE.bottle)

      let capsLeft = this.CAPS % this.PRICE.cap
      let bottlesLeft = this.BOTTLES % this.PRICE.bottle

      this.CAPS = capsLeft
      this.BOTTLES = bottlesLeft

      this.SODAS > 0 && this.drinkAll()
    }
    console.info('[结束]', '已经无法继续兑换')
    return this
  }

  startWithBorrowOne() {
    this.SODAS > 0 && this.drinkAll()

    while (
      this.CAPS + 1 >= this.PRICE.cap ||
      this.BOTTLES + 1 >= this.PRICE.bottle
    ) {
      this.SODAS +=
        Math.floor(this.CAPS / this.PRICE.cap) +
        Math.floor(this.BOTTLES / this.PRICE.bottle)

      let capsLeft = this.CAPS % this.PRICE.cap
      let bottlesLeft = this.BOTTLES % this.PRICE.bottle

      if (capsLeft + 1 === this.PRICE.cap) {
        capsLeft = 0
        bottlesLeft++
        this.DRANK++
        console.info('[借]', '一个瓶盖')
      }
      if (bottlesLeft + 1 === this.PRICE.bottle) {
        bottlesLeft = 0
        capsLeft++
        this.DRANK++
        console.info('[借]', '一个瓶身')
      }

      this.CAPS = capsLeft
      this.BOTTLES = bottlesLeft

      this.SODAS > 0 && this.drinkAll()
    }
    console.info('[结束]', '已经无法继续兑换')
    return this
  }
}
