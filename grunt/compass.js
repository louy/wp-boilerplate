module.exports = function(grunt) {
var config = {
	options : {
		sourcemap: true
	},
	core : {
		options : {
			sassDir : '<%= paths.project.folder %>/<%= paths.sass.src %>/',
			cssDir : '<%= paths.project.folder %>/<%= paths.sass.dest %>/',
			fontsDir : '<%= paths.project.folder %>/<%= paths.fonts %>/',
			imagesDir : '<%= paths.project.folder %>/<%= paths.images %>/',
			relativeAssets: true,
		}
	}
};

grunt.config('compass', config);

};
