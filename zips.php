<?php

    $zips = file_get_contents("zipcodestest.json");
    $decoded_zips = json_decode($zips, true);
    foreach ($decoded_zips as $key => $value) {
        echo $value['Zipcode'] . " " . $value['City'] . " " . $value['State'] . " ";
    }
    // var_dump($decoded_zips);




  ?>
