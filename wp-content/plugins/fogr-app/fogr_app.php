<?php
/*
Plugin Name: Fogr App
Plugin URI: 
Description: 
Author: 
Version: 
Author URI: 
*/

register_activation_hook(__FILE__, 'fogr_app_activate');
register_deactivation_hook(__FILE__, 'fogr_app_deactivate');

function fogr_app_activate() {
	require_once dirname(__FILE__).'/fogr_app_loader.php';
	$loader = new FogrAppLoader();
	$loader->activate();
}

function fogr_app_deactivate() {
	require_once dirname(__FILE__).'/fogr_app_loader.php';
	$loader = new FogrAppLoader();
	$loader->deactivate();
}

?>