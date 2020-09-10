
let serverDomains = {
    qa: `cdn.walkmeqa.com`,
    dev2: `cdn2.walkmedev.com`
};

function getServer() {
    let serverConfig = localStorage.getItem('server');
    return serverDomains[serverConfig] || `cdn.walkme.com`;
}

function buildSnippet(){
    let guid = localStorage.getItem('guid');
    let env = localStorage.getItem('env');
    let myServer = getServer();

    let snippet = `https://${myServer}/users/${guid}/${env}/walkme_${guid}_https.js`;
    localStorage.setItem('snippet', snippet);
}

loginForm.addEventListener('submit', buildSnippet);
