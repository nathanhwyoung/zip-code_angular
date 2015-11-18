<?php

    $zips = file_get_contents("zipcodes.json");
    $decoded_zips = json_decode($zips, true);

    $file = fopen('zips.json', 'a');
    fwrite($file, "[\n");

    foreach ($decoded_zips as $key => $value) {
        $zipCode = $value['Zipcode'];
        $city = $value['City'];
        $state = $value['State'];
        $lat = $value['Lat'];
        $long = $value['Long'];
        $population = $value['EstimatedPopulation'];

        $zip = json_encode(array('zipCode' => $zipCode,
                                 'city' => $city,
                                 'state' => $state,
                                 'latitude' => $lat,
                                 'longitude' => $long,
                                 'population' => $population));

        echo $zip . "\n";

        fwrite($file, $zip);
        fwrite($file, ", \n");
    }

    fwrite($file, "]");
    fclose($file);
    echo "finished!";



  ?>
