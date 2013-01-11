<h2>Edit Exercise</h2>

<?php echo $this->form->create($model->name); ?>
<?php echo $this->form->input('name'); ?>
<?php echo $this->form->input('duration'); ?>
<?php echo $this->form->end('Update'); ?>