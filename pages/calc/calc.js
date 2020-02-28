Page({
  data: {
    result: '0',
    roman1: 'I',
    roman2: 'V',
    roman3: 'X',
    roman4: 'L',
    roman5: 'C',
    roman6: 'D',
    roman7: 'M',
    roman8: 'Del',
    roman9: '=',
    arab1: '1',
    arab2: '5',
    arab3: '10',
    arab4: '50',
    arab5: '100',
    arab6: '500',
    arab7: '1000',
    flag: '1',
    fontsize: false,
    lettermaxlength: 6
  },

  btnletter(e) {
    let v = e.target.id;
    let s = this.data.result;
    let r = '';
    if (s.length < this.data.lettermaxlength) {
      if (s == '0') {
        r = v;
      } else {
        r = s + v;
      }
      this.setData({ result: r })
    }

  },

  btndelete() {
    let s = this.data.result;
    let r = '';
    if (s.length > 0 && s.length < 7) {
      if (s.length == 1) {
        r = '0'
      } else {
        r = s.substring(0, s.length - 1);
      }
      this.setData({ result: r })
    }
  },

  btnEqual() {
    var strs = this.data.result;
    var currentVal = 0;
    var previousVal = 0;
    if (strs != '(*^_^*)' && this.data.flag == '0') {
      var total = 0;
      for (var i = 0; i < strs.length; i++) {
        currentVal = this.getValue(strs.charAt(i));
        total += currentVal;
        previousVal = this.getValue(strs.charAt(i - 1));
        if (i > 0 && currentVal > previousVal) {
          total = total - 2 * this.getValue(strs.charAt(i - 1));
        }
      }
      this.setData({
        result: total,
        flag: '1',
        fontsize: false
      })
    }
  },

  getValue(r) {
    switch (r) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
    }
  }

})