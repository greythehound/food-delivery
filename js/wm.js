
let serverDomains = {
    qa: `cdn.walkmeqa.com`,
    dev2: `cdn2.walkmedev.com`
};

function getServer() {
    let serverConfig = localStorage.getItem('server');
    return serverDomains[serverConfig] || `cdn.walkme.com`;
}

function getEnv() {
    let envConfig = localStorage.getItem('env');
    return envConfig + "/" || "";
}

function buildSnippet(){
    let guid = localStorage.getItem('guid');
    let myEnv = getEnv();
    let myServer = getServer();

    let snippet = `https://${myServer}/users/${guid}/${myEnv}walkme_${guid}_https.js`;
    localStorage.setItem('snippet', snippet);
}

loginForm.addEventListener('submit', buildSnippet);
