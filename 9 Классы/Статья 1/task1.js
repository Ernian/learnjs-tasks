class Clock {
  constructor(template) {
    this.template = template
    this.render = this.render.bind(this)
  }

  render() {
    const date = new Date

    let hours = date.getHours()
    if (hours < 10) {
      hours = '0' + hours
    }

    let mins = date.getMinutes()
    if (mins < 10) {
      mins = '0' + mins
    }

    let sec = date.getSeconds()
    if (sec < 10) {
      sec = '0' + sec
    }

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', sec)

    console.log(output)
  }

  start() {
    this.render()
    // this.timer = setInterval(() => this.render(), 1000)
    this.timer = setInterval(this.render, 1000)
  }

  stop() {
    clearInterval(this.timer)
  }
}

const clock = new Clock('h-m-s')
clock.start()