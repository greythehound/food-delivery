let snippet = '';
let loadWm = localStorage.getItem('foodDelivery');

const qaEmpty = 'https://cdn.walkmeqa.com/users/cce8fe549b8340bcbf383a0790ad4dd6/test/walkme_cce8fe549b8340bcbf383a0790ad4dd6_https.js';
// const qaFull = 'https://cdn.walkmeqa.com/users/558f29e62f844e29a4bcbdbfb630e75c/test/walkme_558f29e62f844e29a4bcbdbfb630e75c_https.js';
const prodEmpty = 'https://cdn.walkme.com/users/2bc14eccd54b4e74a560d0ef778a0ab4/test/walkme_2bc14eccd54b4e74a560d0ef778a0ab4_https.js';
const prodFull = 'https://cdn.walkme.com/users/7effa27544c64535bfa7f75662a71a25/test/walkme_7effa27544c64535bfa7f75662a71a25_https.js';

function checkEnv(env){

    if (env === 'test') {
        return qaEmpty;
    }else if (env === 'prod'){
        return prodEmpty;
    }else if (env === 'qaFull'){
        // return qaFull;
    }else if (env === 'prodFull'){
        return prodFull
    }
}

function buildWm(){
    const getSnippet = checkEnv(loadWm);
    return (function() {var walkme = document.createElement('script'); walkme.type = 'text/javascript'; walkme.async = true; walkme.src = getSnippet; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(walkme, s); window._walkmeConfig = {smartLoad:true}; })();
}

buildWm();