var fs = require("fs"),
    path = require("path"),
    services = require("./../services");

module.exports = {
    renderTemplate: function(req, res) {
        var filename = services.templatePath.getFilenameByRoute(
            req.params[0],
            CONFIG.VIEW.EXTENSION
        );

        fs.readFile(
            path.join(CONFIG.VIEW.VIEW_PATH, filename),
            CONFIG.VIEW.ENCODING,
            function (err, body) {
                if (err) {
                    if (err.code === "ENOENT") {
                        // no such file or directory
                        res.send("template " + err.path + " is not found");
                    } else {
                        // unknow error
                        throw err;
                    }
                }

                res.send(body);
            }
        );
    }
};
