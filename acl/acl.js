var fs = require('fs');

var acl = new Map();
var settings = JSON.parse(fs.readFileSync(__dirname + '/acl.json', 'utf8'));

for (let one of settings) {
    for (let url of Object.keys(one)) {
        acl.set(url, new Set(one[url]));
    }
}

module.exports = {
    isAuthorized:(url, roles, callback) => {
        if (!url || !Array.isArray(roles)) {
            callback(new Error('Missing params'));
            return;
        }

        if (!acl.has(url)) {
            callback(new Error('Denied(Url):' + url));
            return;
        }

        var isAllowed = false;
        for (let role of roles) {
            isAllowed |= (acl.get(url).has(role));
            if (isAllowed) {
                break;
            }
        }

        if (!isAllowed) {
            callback(new Error('Denied(Role):' + url));
            return;
        }

        callback();
    }
}
