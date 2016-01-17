<?php
$target = 'disk69700305.dscloud.biz'; // IP or hostname
$port = 80; // Port
$timeout = 5; // Timeout in Seconds
if(!$fp = @fsockopen($target, $port, $errno, $errstr, $timeout))
{
	echo 'Server Offline';
}
else
{
	fclose($fp);
	echo 'Server Online';
}
?>