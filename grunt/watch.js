module.exports = function(grunt) {
var config = {
	options: {
		forever: true,
	},
	configFiles: {
		files: [ 'Gruntfile.js', 'grunt/*.js' ],
		tasks : ['jshint:grunt'],
		options: {
			reload: true
		}
	}
};

grunt.file.expand(grunt.config('paths.base')).forEach(function(folder) {
	var base = folder.replace(/^.*\//, ''),
		textdomain = base,
		type = 'plugin';
	if( /\/themes\//.test(folder) ) {
		textdomain = base.replace(/\-[^\-]*$/, '');
		type = 'theme';
	}

	grunt.config('projects.'+base, {
		base: base,
		folder: folder,
		textdomain: textdomain,
		type: type
	});

	config['sass_'+base] = {
		files : [folder+'/<%= paths.sass.src %>/{<%= paths.sass.target %>}'],
		tasks : ['config:'+base, 'compass', 'autoprefixer', 'cssmin', 'custom:sass'],
		options: {
			livereload: true,
			interrupt: true,
			force: true
		}
	};

	config['js_'+base] = {
		files : folder+'/<%= paths.js.files_std %>',
		tasks : ['config:'+base, 'uglify:core', 'jshint:all', 'custom:scripts'],
		options: {
			livereload: true,
			interrupt: true,
			force: true
		}
	};

	config['php_'+base] = {
		cwd: folder,
		files : '<%= paths.php.files_std %>',
		tasks : ['config:'+base, 'wp', 'custom:php'],
		options: {
			cwd: folder,
			force: true,
			spawn: false
		}
	};

});

function configure(base) {
	grunt.config('paths.project', grunt.config('projects.'+base));
}
grunt.registerTask('config', configure);

grunt.registerTask('custom', function(file) {
	if( grunt.file.exists( grunt.config( 'paths.project.folder' ) + '/grunt/' + file + '.js' ) ) {
		var custom = require( './' + grunt.config( 'paths.project.folder' ) + '/grunt/' + file );

		custom(grunt);
	}
});

grunt.config('watch', config);

grunt.event.on('watch', function(action, filepath) {
	grunt.config('paths.changed', filepath);
});

};
