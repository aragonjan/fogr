<h2>Add Exercise</h2>

<?php echo $this->form->create($model->name); ?>
<?php echo $this->form->input('name'); ?>
<?php echo $this->form->input('duration'); ?>
<?php echo $this->form->textarea_input('description'); ?>
<?php echo $this->form->end('Add'); ?>