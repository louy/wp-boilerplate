module.exports = function(grunt) {
	// Load tasks
	require('load-grunt-tasks')(grunt);

	// Display task timing
	require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({
		// Metadata
		pkg : grunt.file.readJSON('package.json'),
		// Variables
		paths : {
			// Base dir assets dir
			themes_base : 'wp-content/themes/<%= pkg.name %>-*',
			plugins_base : 'wp-content/plugins/<%= pkg.name %>-*',

			base : ['<%= paths.themes_base %>','<%= paths.plugins_base %>'],

			// PHP assets
			php : {
				files_std : ['*.php', '**/*.php', '!node_modules/**/*.php'], // Standard file match
				files : '<%= paths.project.folder %>/{<%= paths.php.files_std %>}' // Dynamic file match
			},

			// JavaScript assets
			js : {
				base : 'js', //Base dir
				src : '<%= paths.js.base %>/dev',
				dest : '<%= paths.js.base %>/prod',
				files_std : '<%= paths.js.src %>/*.js',

				// Dynamic values
				files : '<%= paths.project.folder %>/<%= paths.js.files_std %>'
			},

			// Sass assets
			sass : {
				src : 'scss', // Source files dir
				dest : 'css', // Compiled files dir
				ext : '.css', // Compiled extension
				target : ['*.scss', '!_*.scss'], // Only Sass files in CWD
			},

			fonts : 'fonts',
			images : 'img',

			project: {
				base: '',
				folder: '{<%= paths.base %>}'
			},

			changed: '',
		},
	});

	// Load task configurations
	grunt.loadTasks('grunt');

	grunt.registerTask('default', ['build', 'watch']);
};
