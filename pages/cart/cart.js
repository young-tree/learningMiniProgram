// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  addBtn(event) {
    this.setData({
      counter: this.data.counter+1
    })
    console.log(event)
  },
  getEvent(event) {
    console.log(event)
  },
  copBtnAdd(event) {
    // 最终目的：修改组件中的counter
    // 1.获取组件对象
    const sel = this.selectComponent('.sel')
    // 2.通过setData修改组件中的数据
    // sel.setData({
    //   counter: sel.data.counter + 20
    // }) 
    // 3.通过方法对我们的数据进行修改
    sel.addCounter(20)
  }
})