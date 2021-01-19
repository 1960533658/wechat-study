// index.js
// 获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchState: true,
    // 轮播图数据
    swiperData: {},
    // 首页分类选项
    catitems: {},
    // 首页楼层数据
    floordata: []
  },
  // 获取焦点时
  handleFocu(e) {
    if (e.detail.value) {
      this.setData({
        searchState:false
      })
    } else {
      this.setData({
        searchState:true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(this)
    // 获取轮播图数据
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/swiperdata',
      methods: "GET",
      success: function(res) {
        that.setData({
          swiperData: res.data.message
        })
      }
    })

    // 获取首页分类选择项数据
     wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/catitems',
      methods: "GET",
      success: function(res) {
        that.setData({
          catitems: res.data.message
        })
      }
    })

    // 获取楼层数据
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/floordata',
      methods: "GET",
      success: function (res) {
        that.setData({
          floordata: res.data.message
        })
        console.log(res.data.message)
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
