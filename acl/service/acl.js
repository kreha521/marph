var fs = require('fs');

var settings = {};
var acljson = JSON.parse(fs.readFileSync(__dirname + '/acl.json', 'utf8'));

for (var i in acljson) {
    for (var url in acljson[i]) {
        settings[url] = acljson[i][url];
    }
}

module.exports = {
    isAuthorized:function(url, userRoles) {
        if (!settings.hasOwnProperty(url)) {
            console.log('Denied(Url):' + url);
            return false;
        }

        var roles = settings[url];
        var isAllowed = false;

        for (var i in userRoles) {
            var userRole = userRoles[i];
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
