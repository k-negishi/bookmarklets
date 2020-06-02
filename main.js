javascript:(function () {
  const amazonUrl = "https://www.amazon.co.jp/s"
  const url = location.href;
  const query = '&emi=AN1VRQENFRJN5'

  if (url.split('?')[0] === amazonUrl) {
    window.open(url + query);
  } else {
    alert('エラー\n www.amazon.co.jp でご使用ください');
  }
})()
