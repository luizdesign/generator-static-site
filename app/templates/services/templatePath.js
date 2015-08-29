var path = require("path");

module.exports = {
    getFilenameByRoute: function(routePath, extension) {
        var filename = path.normalize(routePath).replace(/\/$/, "") + "." + extension;

        return filename;
    }
};
