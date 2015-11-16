<?php

    // POPULATIONS
    $populations = file_get_contents("zipcodespopulation.json");

    $decoded_pops = json_decode($populations, true);

    // ZIPS, CITIES, STATES
    $zips = file_get_contents("zipcodes.json");

    $decoded_zips = json_decode($zips, true);

    // foreach ($decoded_zips as $key => $value) {
    //     // echo $value['Zipcode'] . " " . $value['City'] . " " . $value['State'] . " \n";
    //     $zipCode = $value['Zipcode'];
    //     $city = $value['City'];
    //     $state = $value['State'];
    //     echo $zipCode . " " . $city . " " . $state . " \n";
    // }

    foreach ($decoded_pops as $key => $value) {
        echo $value['Zip Code ZCTA'] . " " . $value['2010 Census Population'] . " \n";
    }



    // foreach ($decoded_pops as $key => $value) {
    //   if ($value['Zip Code ZCTA'] == $zipCode) {
    //     $return_population = $value['2010 Census Population'];
    //     return $return_population;
    //   }
    //   // return $return_population;
    // }
    // $population = $return_population;




  ?>
