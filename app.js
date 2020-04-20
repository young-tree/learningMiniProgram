// 注册一个小程序示例
App({
  // 生命周期函数
  onLaunch: function (options) { // 小程序初始化完成时，执行的声明周期函数
    // 网络请求（一般不在这里，一般在具体的界面里进行请求）

    // 获取用户信息
    // console.log("初始化完成：onLaunch");
    // console.log(options);
    // 异步调用
    // wx.getUserInfo({
    //   // 数据拿到之后再调用
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
    // setTimeout(function(){
      // const err = new Error
      // throw err
    // })
  },
  onShow: function (options) { // 小程序页面显示出来之后会执行的生命周期函数
    // console.log("界面显示出来了：onShow")
    // 判断小程序的进入场景
    // console.log(options)
    // switch(options.scene){
    //   case 1001:
    //     break;
    //   case 1005:
    //     break
    // }
    // 2.获取用户的信息，获取到用户新信息之后，将用户的信息传递给服务器，很可能废弃
    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },
  onHide: function () { // 小程序界面被隐藏时会执行
    // console.log("小程序被隐藏")
    // 再进来是不会执行onLaunch
    // 因为小程序会在后台存活5分钟
    // 过了这个时间小程序就会被杀死
  },
  onError: function (msg) { // 小程序中发生一些错误时执行
    // console.log("小程序出现了一些错误")
  },
  globalData: {
    name: "young-tree",
    age: 20
  }
})
