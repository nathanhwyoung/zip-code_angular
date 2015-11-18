<?php

    $zips = file_get_contents("zipcodes.json");
    $decoded_zips = json_decode($zips, true);

    $counter = 0;

    foreach ($decoded_zips as $key => $value) {
      $population = $value['EstimatedPopulation'];
      $zipCode = $value['Zipcode'];
      echo $zipCode . " " . $population . " \n";
      if ($population == "") {
      $counter += 1;
      }
    }

    echo $counter;



 ?>
