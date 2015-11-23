<?php

    $zips = file_get_contents("zipcodes.json");
    $decoded_zips = json_decode($zips, true);

    $file = fopen('zips_nebraska.json', 'a');
    fwrite($file, "[\n");

        foreach ($decoded_zips as $key => $value) {
            $zipCode = $value['Zipcode'];
            $digit1 = $zipCode[0];
            $digit2 = $zipCode[1];
            $digit3 = $zipCode[2];
            $digit4 = $zipCode[3];
            $digit5 = $zipCode[4];
            $city = $value['City'];
            $state = $value['State'];
            if ($value['EstimatedPopulation'] != "") {
                $population = $value['EstimatedPopulation'];
            } elseif ($value['EstimatedPopulation'] == "") {
                $population = 0;
            };

            $zip = json_encode(array('zipCode' => $zipCode,
                                     'city' => $city,
                                     'state' => $state,
                                     'population' => $population,
                                     'digit1' => $digit1,
                                     'digit2' => $digit2,
                                     'digit3' => $digit3,
                                     'digit4' => $digit4,
                                     'digit5' => $digit5,
                                 ));

            echo $zip . "\n";

            if($state == 'NE') {
                fwrite($file, $zip);
                fwrite($file, ", \n");
            }
        }

    fwrite($file, "]");
    fclose($file);
    echo "finished!";

  ?>
