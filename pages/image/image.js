// pages/image/image.js
Page({
  data: {
    addImage: ""
  },
  handleChooseAlbum() {
    // 系统API，让用户在相册中选择图片（或拍照）
    wx.chooseImage({
      success: (res) => {
        // 1.去除路径
        const path = res.tempFilePaths[0]
        // 设置addImage
        this.setData({
          addImage: path
        })
      }
    })
  },
  handleImageLoad() {
    console.log("图片加载完成")
  }
})