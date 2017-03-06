function getSettings() {
    var settings = {};
    var acljson = require('./acl.json');

    for (var i in acljson) {
        for (var url in acljson[i]) {
            settings[url] = acljson[i][url];
        }
    }

    return settings;
}

module.exports = {
    isAuthorized:function(url, user) {
        var settings = getSettings();

        if (!settings.hasOwnProperty(url)) {
            console.log('Url is not found:' + url);
            return false;
        }

        var roles = settings[url];

        if (roles.indexOf(user) <= -1) {
            console.log('Role is not found:' + url);
            return false;
        }

        console.log("Allowed:" + url); 
        return true;
    }
}
