// pages/listMsg/listMsg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listMsgUrls: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中...',
    });

    console.log(options);
    // 根据所获取的id，请求对应的数据
   
    wx.request({
      url: 'https://locally.uieee.com/categories/' + options.id + '/shops',
      method: 'get',
      success: (res)=>{
        console.log(res);
        if(res.data.length != 0){
          this.setData({
            listMsgUrls: res.data
          });
          wx.hideLoading();
        }else{
          wx.hideLoading();
          wx.showModal({
            title: '提示',
            content: '没有数据',
          })
        }
        
      }
    });

    
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