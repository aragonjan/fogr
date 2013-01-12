<?php wp_enqueue_script('jquery'); ?>
<?php get_header(); ?>

<?php
$this->render_main_view();
?>
<?php
echo '<script type="text/javascript" src="'.mvc_js_url('fogr-app', 'fogr').'"></script>';
//echo mvc_js_url('fogr-app', 'fogr');
?>
<?php get_footer(); ?>
