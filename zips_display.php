<?php

    $zips = file_get_contents("zipcodes.json");
    $decoded_zips = json_decode($zips, true);

    foreach ($decoded_zips as $key => $value) {
        $zipCode = $value['Zipcode'];
        $digit1 = $zipCode[0];
        $digit2 = $zipCode[1];
        $digit3 = $zipCode[2];
        $digit4 = $zipCode[3];
        $digit5 = $zipCode[4];

        $city = $value['City'];
        $state = $value['State'];
        $lat = $value['Lat'];
        $long = $value['Long'];
        $population = $value['EstimatedPopulation'];
        echo $zipCode . " " .
             $city . " " .
             $state . " " .
             $population . " " .
             $digit1 . " " .
             $digit2 . " " .
             $digit3 . " " .
             $digit4 . " " .
             $digit5 . " " . "\n";
    }

 ?>
