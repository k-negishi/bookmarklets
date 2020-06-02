javascript:(function () {
  const amazonUrl = "https://www.amazon.co.jp/s"
  const url = location.href;
  const query = '&emi=AN1VRQENFRJN5'

  if (url.split('?')[0] === amazonUrl) {
    window.open(url + query);
  } else {
    alert('エラー\namazon.co.jp の検索結果画面でご使用ください');
  }
})()
