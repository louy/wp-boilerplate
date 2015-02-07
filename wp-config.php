<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

if( file_exists(dirname(__FILE__).'/wp-dev-config.php') ) {
        require dirname(__FILE__).'/wp-dev-config.php';
        return;
}
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ardroid');

/** MySQL database username */
define('DB_USER', 'ardroid');

/** MySQL database password */
define('DB_PASSWORD', 'ardroid');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '/B|3h-}/&f~>G=F*o)rCq>TQT;m%cs^+QYb)!(wG=|+.R>Y|+^1EIVRIgJjc~|[7');
define('SECURE_AUTH_KEY',  '+MvDymq1=$kj&d{#SVDm4|x+&^l%U^o|%>Fp?bN7Sox|jQ/9gq0G+`h~JovL *+9');
define('LOGGED_IN_KEY',    'OOqg3n0!v[5R~.b01M&<~AEL8eg#7/a:>po}w4-hIereSRc)B@-Fv[pa-|[5|0Yt');
define('NONCE_KEY',        'M`$.>c-CM;fou4K|@TN|TFV{Zt~^>tke-LX/V<nfXYZGH=# Hf<O($18)%|+%^+#');
define('AUTH_SALT',        '){8?j824 !lR/==)A@aOxqv}u/Dkta48ZBOL?P.s$kFfXb6F8HpduD#6yk{6(~)y');
define('SECURE_AUTH_SALT', 'N(K$5Gg.d]rRg=Ytw1g|U%<2pAh|oW^7/cRB_i jL Qc(Os0*x^%.4<+;h8Nc$%:');
define('LOGGED_IN_SALT',   ';]IN~Q*ntnplC4G}=@s$x+&+}tn]Q(4KPSX]{LAI[[U 5%{cpI% S+]T+*IEI/Uv');
define('NONCE_SALT',       'vy49$_wB!2I+*E~q+a--s!OA 5}7b^/u2JsF$p-^>[m7+G-22-0y5;J)<hM]OYmp');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', true);

define('WP_HOME',    'http://' . $_SERVER['SERVER_NAME']);
define('WP_SITEURL', WP_HOME . '/wordpress');

define('WP_CONTENT_DIR', dirname(__FILE__) . '/wp-content');
define('WP_CONTENT_URL', WP_HOME . '/wp-content');

define( 'DISALLOW_FILE_MODS', true );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
