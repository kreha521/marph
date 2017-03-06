var fs = require('fs');

var acl = {};
var settings = JSON.parse(fs.readFileSync(__dirname + '/acl.json', 'utf8'));

for (let one of settings) {
    Object.keys(one).forEach(url => {
        acl[url] = one[url];
    });
}

module.exports = {
    isAuthorized:function(url, roles) {
        if (!url || !Array.isArray(roles)) {
            console.log('Missing params');
            return false;
        }

        if (!acl.hasOwnProperty(url)) {
            console.log('Denied(Url):' + url);
            return false;
        }

        var isAllowed = false;
        for (let role of roles) {
            isAllowed = isAllowed || (acl[url].indexOf(role) >= 0);
        }

        if (!isAllowed) {
            console.log('Denied(Role):' + url);
            return false;
        }

        console.log("Allowed:" + url); 
        return true;
    }
}
