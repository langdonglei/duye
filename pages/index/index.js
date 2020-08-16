Page({
  onLoad: function () {
    wx.request({
      method: 'get',
      url: 'http://tp51.com/banner/one?id=1',
      success: (response) => {
        this.setData({
          banner: response.data.banner_item
        });
      }
    });
    wx.request({
      url: 'http://tp51.com/theme/some?ids=1,2,3',
      success: (response) => {
        this.setData({
          theme: response.data
        });
      }
    });
    wx.request({
      url: 'http://tp51.com/product/recent',
      success: (response) => {
        this.setData({
          product: response.data
        });
      }
    });
  },
  tapProduct: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    });
  },
  tapTheme: function (event) {
    var id = event.currentTarget.dataset.id;
    var title = event.currentTarget.dataset.title;
    wx.navigateTo({
      url: '/pages/theme/theme?id=' + id + '&title=' + title,
    });
  }
});
