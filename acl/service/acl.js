var fs = require('fs');

var acl = {};
var settings = JSON.parse(fs.readFileSync(__dirname + '/acl.json', 'utf8'));

for (let one of settings) {
    Object.keys(one).forEach(url => {
        acl[url] = one[url];
    });
}

module.exports = {
    isAuthorized:function(url, userRoles) {
        if (!url || !Array.isArray(userRoles)) {
            console.log('Missing params');
            return false;
        }

        if (!acl.hasOwnProperty(url)) {
            console.log('Denied(Url):' + url);
            return false;
        }

        var isAllowed = false;
        for (let userRole of userRoles) {
            isAllowed = isAllowed || (acl[url].indexOf(userRole) >= 0);
        }

        if (!isAllowed) {
            console.log('Denied(UserRole):' + url);
            return false;
        }

        console.log("Allowed:" + url); 
        return true;
    }
}
