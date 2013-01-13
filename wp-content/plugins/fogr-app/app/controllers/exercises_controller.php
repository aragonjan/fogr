<?php

class ExercisesController extends MvcPublicController {

  function foo() {
    error_log('ExercisesController->foo()');
    error_log(implode(',', $_POST));
//    echo json_encode($_POST);
 $objects = $this->Exercise->find(array(
//   'joins' => array('Exercise'),
//   'includes' => array('Exercise'),
   'selects' => array('*'),
//   'additional_selects' => array('Event.date'),
//   'conditions' => array(
//     'Event.active' => 1,
//     'Event.date >=' => date('Y-m-d'),
//     'Venue.id' => array(56, 83) // Venue.id IN (56, 83)
//   ),
//   'group' => 'Event.id',
//   'order' => 'Event.date DESC',
//   'page' => 1
//      'per_page' => 20
    ));
    $this->set('objects', $objects);


    echo json_encode($objects);
    die();
  }
}

?>