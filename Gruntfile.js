module.exports = function(grunt){
    grunt.initConfig({
    concat: {
        options: {
            separator: '\n\n',
        },
        dist: {
            src: '*.md',
            dest: 'build/book.md'
        },
    },
    });
    
    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-concat');

};