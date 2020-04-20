// pages/home/home.js
// getApp() 获取App()产生的示例队像
// const app = getApp()
// const name = app.globalData.name
// const age = app.globalData.age
// 注册一个页面
// 页面也有自己的声明周期函数
Page({
	// 1.监听页面的生命周期函数
	onLoad(){ // 页面被加载出来
		console.log("onLoad")
		wx.request({
			url: 'http://152.136.185.210:8000/api/h8/recommend',
			success: (res) =>{
				console.log(res)
				const data = res.data.data.list;
				this.setData({
					list: data
				})
			}
		})
	},
	onReady(){ // 页面初次渲染完成
		console.log("onReady")
	},
	onShow(){ // 页面显示出来是执行
		console.log("onShow")
	},
	onHide(){ // 页面被隐藏
		console.log("onHide")
	},
	onUnload(){ // 页面被卸载掉
		console.log("onUnload")
	},
	// 2.初始化数据
	data: {
		name:'young-tree',
		age: 18,
		students:[
			{id: 110, name: 'kobe', age: 30},
			{id: 111, name: 'james', age: 28},
			{id: 112, name: 'curry', age: 32},
			{id: 113, name: 'why', age: 18}
		],
		list: [],
		counter: 0,
		message: '哈哈哈'
	},
	// 3.监听wxml中的相关事件
	handleViewClick(){
		console.log("哈哈哈被点击")
	},
	handleAdd() {
		// 1.错误做法:界面是不会刷新的
		// this.data.counter += 1
		// console.1og(this.data.counter)
		
		// 2.this.setData()
		this.setData({
			counter: this.data.counter + 1
    })
  },
  handleSub() {
    this.setData({
			counter: this.data.counter - 1
    })
	},
	handleGetUserInfo(event) {
		console.log(event)
	},
	// 4.其他事件
	// 监听页面的滚动
	onPageScroll(obj){
		console.log(obj)
	},
	onReachBottom(){
		console.log("到底了")
	},
	onPullDownRefresh(){
		console.log("下拉刷新")
	}
})