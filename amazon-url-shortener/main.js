javascript:(function() {
    let url = location.href;
    let match = url.match(/\/dp\/[A-Z0-9]+/);
    if (match) {
        let shortUrl = `https://www.amazon.co.jp${match[0]}`;
        prompt("短縮版URL:", shortUrl);
    } else {
        alert("dp/形式のURLが見つかりませんでした。Amazonの商品ページで実行してください。");
    }
})();
