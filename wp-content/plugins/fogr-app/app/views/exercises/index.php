<h2>Exercises</h2>

<button id="exerciseBtn">Click Me!</button>

<?php foreach ($objects as $object): ?>

	<?php $this->render_view('_item', array('locals' => array('object' => $object))); ?>

<?php endforeach; ?>

<?php echo $this->pagination(); ?>