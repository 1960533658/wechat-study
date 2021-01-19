// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchState: true,
    // 分类列表
    cateList: [],
    // 分类列表部分展示数据
    cateShowList: [123]
  },
  // 获取焦点
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
  // 渲染部分分类列表数据
  handleShowPartData(e) {
    console.log(e.target.dataset.partdata)
    console.log(this.data)
    
    this.data.cateList.forEach((element,index) => {
      if (element.cat_id==e.target.dataset.partdata) {
        this.setData({
          cateShowList: element
        })
        return false
      }
    });
    console.log(this.data.cateShowList)
    console.log(this.data)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/categories',
      methods: "GET",
      success(res) {
        console.log(res.data.message)
        const {meta, message} = res.data
        if(meta.status == 200) {
          _this.setData({
            cateList: message
          })
        }
      },
      fail(err) {
        console.log(err)
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