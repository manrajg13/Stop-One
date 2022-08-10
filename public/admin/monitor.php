<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<meta name="author" content="Adam Youssef, Blair Cosgrove, Arseniy Chertov, Keyang Gao, Manraj Gill">
		<meta name="description" content="Monitor file to display the status of the server."/>
		<meta http-equiv="X-UA-Comptaible" content="ie=edge"/>
		<link rel="stylesheet" href="../style.css"/>
		<link rel="stylesheet" href="monitor.css"/>
		<title>Monitor</title>
		<link rel="shortcut icon" href="icon.gif">
	</head>	
	<body>
		<?php
        $host = 'https://www.localhost:4000.com/';
        $curlInit = curl_init($host);
        curl_setopt($curlInit,CURLOPT_CONNECTTIMEOUT,10);
        curl_setopt($curlInit,CURLOPT_HEADER,true);
        curl_setopt($curlInit,CURLOPT_NOBODY,true);
        curl_setopt($curlInit,CURLOPT_RETURNTRANSFER,true);
        $response = curl_exec($curlInit);
        curl_close($curlInit);

      	if ($response){
            echo '<div class="row">' .
              		'<div class="label">Server:</div>' .
              		'<div class="circle" style="background-color:green;"></div>' .
              	'</div><br>' .
              	'<div class="row">' .
              		'<div class="label">Database:</div>' .
              		'<div class="circle" style="background-color:green;"></div>' .
              	'</div>';
        } else {
            echo'<div class="row">' .
              		'<div class="label">Server:</div>' .
              		'<div class="circle" style="background-color:red;"></div>' .
              	'</div><br>' .
              	'<div class="row">' .
              		'<div class="label">Database:</div>' .
              		'<div class="circle" style="background-color:red;"></div>' .
              	'</div>';
        }
        ?>
	</body>
</html>	
