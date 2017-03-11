var fs = require('fs');

var acl = new Map();
var settings = JSON.parse(fs.readFileSync(__dirname + '/acl.json', 'utf8'));

for (let one of settings) {
    Object.keys(one).forEach(url => {
        acl.set(url, one[url]);
    });
}

module.exports = {
    isAuthorized:function(url, userRoles, callback) {
        if (!url || !Array.isArray(userRoles)) {
            callback(new Error('Missing params'));
            return;
        }

        if (!acl.has(url)) {
            callback(new Error('Denied(Url):' + url));
            return;
        }

        userRoles = new Set(userRoles);
        var isAllowed = false;
        for (let role of acl.get(url)) {
            isAllowed |= (userRoles.has(role));
            if (isAllowed) {
                break;
            }
        }

        if (!isAllowed) {
            callback(new Error('Denied(Role):' + url));
            return;
        }
    }
}
