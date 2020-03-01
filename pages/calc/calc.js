Page({
  data: {
    screenValue: 'NaN',
    screenValueMinLength: 1,
    screenValueMaxLength: 6,
  },

  btnLetter(e) {
    let vo = this.data.screenValue;
    let vn = e.target.id;
    let r = '';
    if (vo.length < this.data.screenValueMaxLength) {
      if (vo == 'NaN') {
        r = vn;
      } else {
        r = vo + vn
      }
      this.setData({ screenValue: r });
    }
  },

  btnDelete() {
    this.setData({ screenValue: 'NaN' });
  },

  // todo 算法不正确
  btnEqual() {
    let v = this.data.screenValue;
    let r = 0;
    if (!/^\d+$/.test(v)) {
      for (let i = 0; i < this.data.screenValue.length; i++) {
        r += this.getValue(v.charAt(i));
        if (i > 0 && this.getValue(i) > this.getValue(i - 1)) {
          r -= this.getValue(v.charAt(i - 1));
        }
      }
      this.setData({ screenValue: r.toString() })
    }
  },

  getValue(letter) {
    switch (letter) {
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
});
