if (document.cookie.indexOf('cookies_consent=true') === -1) {
    window['ga-disable-UA-162375189-1'] = true;
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-162375189-1', {
    'cookieExpires': 60 * 60 * 24 * 28 * 6 // meno di 6 mesi
});
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');