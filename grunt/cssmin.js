module.exports = function(grunt) {
var config = {
	core : {
		files: [{
			expand: true,
			cwd: '<%= paths.project.folder %>/<%= paths.sass.dest %>',
			dest: '<%= paths.project.folder %>/<%= paths.sass.dest %>',
			src: ['*.css', '!*.min.css'],
			ext: '.min.css'
		}]
	}
};

grunt.config('cssmin', config);

};
