var controllers = require("./../controllers");

module.exports = function(app) {
    app
        .route("/site/*")
        .get(controllers.renderTemplate);
};
