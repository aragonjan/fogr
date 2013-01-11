<h2><?php echo $object->__name; ?></h2>

<p>
	<?php echo $this->html->link('&#8592; All Exercises', array('controller' => 'exercises')); ?>
</p>

<div>
  <span>Name: <span>
  <span><?= $object->name ?><span>
</div>
<div>
  <span>Duration: <span>
  <span><?= $object->duration ?><span>
</div>

