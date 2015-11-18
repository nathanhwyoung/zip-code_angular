<?php


    $zips = file_get_contents("zipcodes.json");
    $decoded_zips = json_decode($zips, true);

    foreach ($decoded_zips as $key => $value) {
        $zipCode = $value['Zipcode'];
        $city = $value['City'];
        $state = $value['State'];
        $lat = $value['Lat'];
        $long = $value['Long'];
        $population = $value['EstimatedPopulation'];
        echo $zipCode . " " . $city . " " . $state . " " . $population
        . "\n";
    }






 ?>
