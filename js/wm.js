let loadWm = localStorage.getItem('foodDelivery');

if (loadWm) {
    if (loadWm === 'test') {
        (function() {var walkme = document.createElement('script'); walkme.type = 'text/javascript'; walkme.async = true; walkme.src = 'https://cdn.walkmeqa.com/users/cce8fe549b8340bcbf383a0790ad4dd6/test/walkme_cce8fe549b8340bcbf383a0790ad4dd6_https.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(walkme, s); window._walkmeConfig = {smartLoad:true}; })();
    } else if (loadWm === 'prod') {
        (function() {var walkme = document.createElement('script'); walkme.type = 'text/javascript'; walkme.async = true; walkme.src = 'https://cdn.walkme.com/users/2bc14eccd54b4e74a560d0ef778a0ab4/test/walkme_2bc14eccd54b4e74a560d0ef778a0ab4_https.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(walkme, s); window._walkmeConfig = {smartLoad:true}; })();
    }
}