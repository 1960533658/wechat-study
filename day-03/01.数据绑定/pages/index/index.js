//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "张三",
    age: 18,
    married: false,
    id: 10,
    str: ""
  },
  /**
  *绑定按钮的点击事件
   */
  handleTap(e) {
    console.log("点击了button");
    console.log(e)
  },

  /**
  * input事件
  */
  handleInput(e) {
    console.log(e.detail.value)
    // this.str = e.detail.value 错误的方法
    this.setData({
      str: e.detail.value
    })
  },
  handlecs1(num) {
    console.log(num)
  },
  handlecs(e) {
    console.log(e.target.dataset.num-0)
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
    console.log("下拉了刷新了");
    // 下拉刷新loading效果不会自动消失，所以需要手动停止
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("触发下拉刷新了")
    // wx.onReachBottomDisatance("100px")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})