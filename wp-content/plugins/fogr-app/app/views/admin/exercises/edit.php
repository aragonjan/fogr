<h2>Edit Exercise</h2>

<?php echo $this->form->create($model->name); ?>
<?php echo $this->form->input('name'); ?>
<?php echo $this->form->input('duration'); ?>
Description:<br/>
<?php echo $this->form->textarea_input('description'); ?>
<?php echo $this->form->end('Update'); ?>