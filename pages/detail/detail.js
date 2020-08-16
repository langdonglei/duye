Page({
  data: {
    id: 1,
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    count: 1,
    tab: 0
  },
  onLoad: function (options) {
    wx.request({
      url: 'http://tp51.com/product/one?id=1',
      success: (response) => {
        this.setData({
          product: response.data
        });
      }
    });
  },
  picker: function (event) {
    var index = event.detail.value;
    var count = this.data.arr[index];
    this.setData({
      count: count
    });
  },
  tap: function (event) {
    var tab = event.currentTarget.dataset.index;
    this.setData({
      tab: tab
    });
  }
})