<?php

class FogrAppLoader extends MvcPluginLoader {

	var $db_version = '1.0';
	var $tables = array();

	function activate() {
		// This call needs to be made to activate this app within WP MVC
		
		$this->activate_app(__FILE__);

		// Perform any databases modifications related to plugin activation here, if necessary

		require_once ABSPATH.'wp-admin/includes/upgrade.php';
	
		add_option('fogr_app_db_version', $this->db_version);

    error_log('tables: ' . implode(",", $this->tables));

    global $wpdb;
		// Use dbDelta() to create the tables for the app here
		$sql = 'CREATE TABLE ' . $wpdb->prefix . 'exercises (
		  id int(11) NOT NULL auto_increment,
		  name varchar(255) NOT NULL,
		  duration int(8) default 60,
		  PRIMARY KEY (id)
		)';
		dbDelta($sql);
		
	}

	function deactivate() {
	
		// This call needs to be made to deactivate this app within WP MVC
		$this->deactivate_app(__FILE__);

		// Perform any databases modifications related to plugin deactivation here, if necessary
    error_log('tables: ' . implode(",", $this->tables));
	}

}

?>