<?php

    $populations = file_get_contents("zipcodespopulation.json");
    $decoded_pops = json_decode($populations, true);

    $zips = file_get_contents("zipcodes.json");
    $decoded_zips = json_decode($zips, true);

    foreach ($decoded_zips as $key => $value) {
        $zipCode = $value['Zipcode'];
        $city = $value['City'];
        $state = $value['State'];
        $lat = $value['Lat'];
        $long = $value['Long'];

        $file = fopen('zips.json', 'a');

        foreach ($decoded_pops as $key => $pop_value) {
          if ($pop_value['Zip Code ZCTA'] == $zipCode) {
            $population = $pop_value['2010 Census Population'];
            $zip = json_encode(array('zipCode' => $zipCode,
                                     'city' => $city,
                                     'state' => $state,
                                     'latitude' => $lat,
                                     'longitude' => $long,
                                     'population' => $population));
            echo $zip . "\n";

            fwrite($file, $zip);

          }
        }
    }
    fclose($file);
    echo "finished!";

    // echo $zipCode . " " .
    //      $city . " " .
    //      $state . " " .
    //      $lat . " " .
    //      $long . " " .
    //      $population . "\n";
    // break;



  ?>
