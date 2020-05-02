// pages/category/category.js
Page({
  data: {
    title: ["裤子", "鞋子", "上衣"],
    isShow: true
  },
  handleBtn() {
    console.log("被点击")
  },
  handleTouchStar() {
    console.log("TouchStar");
    console.log("手指触摸动作开始");
  },
  handleTouchMove() {
    console.log("TouchMove");
    console.log("手指触摸后移动");
  },
  handleTap() {
    console.log("Tap");
    console.log("手指触摸后马上离开");
  },
  handleLongPress() {
    console.log("LongPress");
    console.log("手指触摸后超过350ms，此事件触发，tap事件将不触发");
  },
  handleTouchEnd() {
    console.log("TouchEnd");
    console.log("手指触摸动作结束");
  },
  handleEventClick(event) {
    console.log("---", event)
  },
  handleEnd(event) {
    console.log("+++", event)
  },
  innerClick(event) {
    console.log(event)
  },
  outerClick(event) {
    console.log(event)
  },
  textBtn(event) {
    console.log(event)
    const dataset = event.currentTarget.dataset;
    const title = dataset["item"]
    const index = dataset["index"]
    console.log(title, index)
  },
  view1Btn() {
    console.log("最外层捕获")
  },
  view1Click() {
    console.log("最外层冒泡")
  },
  view2Btn() {
    console.log("中层捕获")
  },
  view2Click() {
    console.log("中层冒泡")
  },
  view3Btn() {
    console.log("最底层捕获")
  },
  view3Click() {
    console.log("最底层冒泡")
  }
})