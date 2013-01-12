<?php

class ExercisesController extends MvcPublicController {

  function foo() {
    error_log('ExercisesController->foo()');
    error_log(implode(',', $_POST));
    echo json_encode($_POST);
    die();
  }
}

?>