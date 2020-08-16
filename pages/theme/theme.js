Page({
  onLoad: function (options) {
    var id = options.id;
    wx.request({
      url: 'http://tp51.com/theme/some?ids=' + id,
      success: (response) => {
        this.setData({
          theme: response.data[0]
        });
      }
    });
    wx.setNavigationBarTitle({
      title: options.title
    })
  }
});