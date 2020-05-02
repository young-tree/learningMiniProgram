// pages/wxml/wxml.js
Page({
  data: {
    name: "young-tree",
    sex: "male",
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: true,
    isShow: true,
    score: 45,
    movie: ["黑鹰坠落", "终结者", "霸王别姬"],
    number: [
      [10, 20, 30, 40],
      [50, 60, 70, 80]
    ]
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  btnSwitch() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  viewSwitch() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  addSix() {
    this.setData({
      score: this.data.score + 6
    })
  },
  subSix() {
    this.setData({
      score: this.data.score - 6
    })
  }
})