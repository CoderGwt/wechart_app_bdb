Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    imgUrls: [],
    msgUrls: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    // 请求首页的轮播图图片
    wx.request({
      url: 'https://locally.uieee.com/slides',
      method: 'get',
      success: function(res){
        console.log(res)
        self.setData({
          imgUrls: res.data
        })
      }
    });

    // 请求首页九宫格的信息
    wx.request({
      url: 'https://locally.uieee.com/categories',
      method: 'get',
      success: function(res){
        console.log(res)
        self.setData({
          msgUrls: res.data
        })
      }
    })
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
    
  }
})