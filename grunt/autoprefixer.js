module.exports = function(grunt) {
var config = {
	options: {
		browsers: ['> 1%', 'last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4'],
		map: true
	},
	core : {
		src: '<%= paths.project.folder %>/<%= paths.sass.dest %>/*.css',
	}
};

grunt.config('autoprefixer', config);

};
