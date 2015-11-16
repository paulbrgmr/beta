module.exports = function (grunt) {
    grunt.option.init({
        shopId: 1
    });

    var shopwareRoot = '../../../../../../../',
        file = shopwareRoot + 'web/cache/config_' + grunt.option('shopId') + '.json',
        config = grunt.file.readJSON(file),
        lessTargetFile = {},
        jsFiles = [],
        jsTargetFile = {},
        content = '',
        variables = {
            'fa-font-path': '"../../engine/Shopware/Plugins/Community/Frontend/SwfResponsiveTemplate/Themes/Frontend/BootstrapBare/frontend/_public/vendors/fonts"'
        },
        allLess = shopwareRoot + 'web/cache/all.less';

    lessTargetFile[shopwareRoot + config.lessTarget] = allLess;

    config['js'].forEach(function (item) {
        jsFiles.push(shopwareRoot + item);
    });
    jsTargetFile[shopwareRoot + config.jsTarget] = jsFiles;

    config['less'].forEach(function (item) {
        content += '@import "'+ shopwareRoot + item + '";';
        content += "\n";
    });
    grunt.file.write(allLess, content);

    for (var key in config.config) {
        variables[key] = config.config[key];
    }

    // default options for grunt registerTask and initConfig functions
    var defaultTasks = ['less:development', 'uglify:development', 'watch', 'notify:watch'],
        productionTasks = ['jshint', 'less:production', 'uglify:production', 'notify:watch'],
        configOptions = {
            uglify: {
                production: {
                    options: {
                        compress: true,
                        preserveComments: false
                    },
                    files: jsTargetFile
                },
                development: {
                    options: {
                        mangle: false,
                        compress: false,
                        beautify: true,
                        preserveComments: 'all'
                    },
                    files: jsTargetFile
                }
            },
            less: {
                production: {
                    options: {
                        compress: true,
                        modifyVars: variables
                    },
                    files: lessTargetFile
                },
                development: {
                    options: {
                        modifyVars: variables,
                        dumpLineNumbers: 'all',
                        sourceMap: true,
                        sourceMapFileInline: true
                    },
                    files: lessTargetFile
                }
            },
            watch: {
                less: {
                    files: [
                        '../../**/less/**/*.less'
                    ],
                    tasks: ['less:development', 'notify:watch']
                },
                js: {
                    files: [
                        '../../**/js/**/*.js'
                    ],
                    tasks: ['uglify:development', 'notify:watch']
                }
            },
            jshint: {
                options: {
                    browser: true,
                    force: true,
                    globals: {
                        jQuery: true,
                        StateManager: true
                    }
                },
                src: [
                    'Gruntfile.js',
                    '../../**/src/js/**/*.js'
                ]
            },
            notify: {
                watch: {
                    options: {
                        title: 'Task complete',
                        message: 'Files were compiled',
                        success: true
                    }
                }
            }
        };

    // read timestamp.txt from web/cache and check if config JSON file needs to be recreated
    var fs = require('fs'),
        timestamp = fs.readFileSync(shopwareRoot + 'web/cache/timestamp' + grunt.option('shopId') + '.txt').toString(),
        oldTimestamp = config.lessTarget.split("_")[0].replace('web/cache/','');

    // if necessary create new config JSON and add shell task
    if (timestamp != oldTimestamp) {
        grunt.log.subhead(['Config JSON wird neu generiert...']);
        grunt.loadNpmTasks('grunt-shell');

        configOptions['shell'] = {
            php: {
                command: 'php ' + shopwareRoot + 'bin/console sw:theme:dump:configuration'
            }
        };

        productionTasks.unshift('shell');
        defaultTasks.unshift('shell');
    }

    grunt.initConfig(configOptions);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('production', productionTasks);
    grunt.registerTask('default', defaultTasks);
};
