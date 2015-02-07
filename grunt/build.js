module.exports = function(grunt) {

grunt.registerTask('build', function(base) {
	if( base ) {
		grunt.task.run(['config:'+base, 'compass', 'autoprefixer', 'cssmin', 'custom:sass', 'uglify', 'jshint:all', 'custom:scripts', 'wp', 'custom:php']);
	} else {
		var projects = grunt.config('projects');
		for (base in projects) {
			if(projects.hasOwnProperty(base)){
				grunt.task.run('build:'+base);
			}
		}
	}
});

};
