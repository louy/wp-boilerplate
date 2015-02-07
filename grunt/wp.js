module.exports = function(grunt) {

grunt.config('addtextdomain', {
	options: {
		textdomain: '<%= paths.project.textdomain %>',
	},
	core: {
		files: {
			src: '<%= paths.changed %>',
		}
	}
});

grunt.config('makepot', {
	core: {
		options: {
			cwd: '<%= paths.project.folder %>/',
			domainPath: '/languages',
			type: 'wp-<%= paths.project.type %>',
		}
	}
});

grunt.registerTask('wp', function() {
	if( grunt.file.isDir( grunt.config('paths.project.folder') + '/languages' ) ) {
		grunt.task.run('addtextdomain');
		grunt.task.run('makepot');
	}
});

};
