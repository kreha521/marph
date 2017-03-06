var fs = require('fs');

var settings = {};
var acl = JSON.parse(fs.readFileSync(__dirname + '/acl.json', 'utf8'));

for (let one of acl) {
    Object.keys(one).forEach(url => {
        settings[url] = one[url];
    });
}

module.exports = {
    isAuthorized:function(url, userRoles) {
        if (!url || !Array.isArray(userRoles)) {
            console.log('Missing params');
            return false;
        }

        if (!settings.hasOwnProperty(url)) {
            console.log('Denied(Url):' + url);
            return false;
        }

        var roles = settings[url];

        var isAllowed = false;
        for (let userRole of userRoles) {
            isAllowed = isAllowed || (roles.indexOf(userRole) >= 0);
        }

        if (!isAllowed) {
            console.log('Denied(UserRole):' + url);
            return false;
        }

        console.log("Allowed:" + url); 
        return true;
    }
}
