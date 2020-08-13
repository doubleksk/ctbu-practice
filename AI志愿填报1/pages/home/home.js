// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sbanner: ['../img/sbanner1.png', '../img/sbanner2.png', '../img/sbanner3.png','../img/sbanner4.png','../img/sbanner5.png'],
    background: ['https://img9.eol.cn/e_images/gk/2019/banner5039.jpg', 'https://img5.eol.cn/e_images/gk/2019/banner1043.jpeg', 'https://img4.eol.cn/e_images/gk/2019/banner2044.jpeg','https://img4.eol.cn/e_images/gk/2019/banner3042.jpeg','https://img7.eol.cn/e_images/gk/2019/banner5037.jpg'],    
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    circular: true,
    swiperCurrent:0
  },

  swiperChange(e){
    // console.log(e);
    this.setData({
      swiperCurrent:e.detail.current
    })
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

  }
})