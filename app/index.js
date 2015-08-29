'use strict';

var generators = require('yeoman-generator');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('appname', {
            desc: 'create an app with name [appname]',
            type: Boolean,
            required: false,
            defaults: path.basename(process.cwd())
        });
    },
    appname: function() {
        var done = this.async();
        var prompt = {
            type: 'input',
            name: 'appname',
            message: 'application name',
            default: this.appname
        };
        this.prompt(prompt, function(data) {
            this.appname = data.appname;
            done();
        }.bind(this));
    },
    publicStructure: function() {
        mkdirp('public/images');
        mkdirp('public/styles');
        mkdirp('public/javascript');
        mkdirp('views');
    },
    config: function() {
        this.template('config/', 'config/');
        this.template('controllers/', 'controllers/');
        this.template('routes/', 'routes/');
        this.template('services/', 'services/');
        this.template('app.js', 'app.js');
        this.template('README.md', 'README.md');
        this.template('package.json', 'package.json');
        this.template('bowerrc', '.bowerrc');
        this.template('gitignore', '.gitignore');
    },
    install: function() {
        this.installDependencies({
            skipInstall: true,
            npm: true,
            bower: false
        });
    }
});
