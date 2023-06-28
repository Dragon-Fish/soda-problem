export class SodaProblem {
  private DRANK = 0
  private CAPS = 0
  private BOTTLES = 0

  constructor(
    private SODAS: number,
    private PRICES: { cap: number; bottle: number }
  ) {}

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

    while (this.CAPS >= this.PRICES.cap || this.BOTTLES >= this.PRICES.bottle) {
      this.SODAS +=
        Math.floor(this.CAPS / this.PRICES.cap) +
        Math.floor(this.BOTTLES / this.PRICES.bottle)

      let capsLeft = this.CAPS % this.PRICES.cap
      let bottlesLeft = this.BOTTLES % this.PRICES.bottle

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
      this.CAPS + 1 >= this.PRICES.cap ||
      this.BOTTLES + 1 >= this.PRICES.bottle
    ) {
      this.SODAS +=
        Math.floor(this.CAPS / this.PRICES.cap) +
        Math.floor(this.BOTTLES / this.PRICES.bottle)

      let capsLeft = this.CAPS % this.PRICES.cap
      let bottlesLeft = this.BOTTLES % this.PRICES.bottle

      if (capsLeft + 1 === this.PRICES.cap) {
        capsLeft = 0
        bottlesLeft++
        this.DRANK++
        console.info('[借]', '1×瓶盖')
      }
      if (bottlesLeft + 1 === this.PRICES.bottle) {
        bottlesLeft = 0
        capsLeft++
        this.DRANK++
        console.info('[借]', '1×瓶身')
      }

      this.CAPS = capsLeft
      this.BOTTLES = bottlesLeft

      this.SODAS > 0 && this.drinkAll()
    }
    console.info('[结束]', '已经无法继续兑换')
    return this
  }
}
