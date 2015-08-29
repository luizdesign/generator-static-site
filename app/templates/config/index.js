var path = require("path");

module.exports = {
    PORT: 3000,
    VIEW: {
        VIEW_PATH: path.join(__dirname, "/../views/"),
        ENCODING: "utf8",
        EXTENSION: "html"
    }
};
