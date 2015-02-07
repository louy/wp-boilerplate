module.exports = function(grunt) {
var config = {
	options : {
		mangle: false,
		sourceMap: true,
		report: 'min'
	},

	core: {
		files : [{
			expand : true,
			cwd : '',
			src : '<%= paths.js.files %>',
			dest : '',
			rename : function(dest, srcPath) {
				return srcPath.replace(grunt.config.get('paths.js.src') + '/', grunt.config.get('paths.js.dest') + '/');
			}
		}]
	}
};

grunt.config('uglify', config);

};
