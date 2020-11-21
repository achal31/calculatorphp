<?php
$tempVariable1=$_POST['temp1'];
$tempVariable2=$_POST['temp2'];
$operator=$_POST['operation'];
switch($operator)
    {   case 'addition':$tempVariable1=($tempVariable1)+($tempVariable2);
        echo $tempVariable1;
        break;

        case 'substract':$tempVariable1=($tempVariable1)-($tempVariable2);
        echo $tempVariable1;
        break;

        case 'divide':$tempVariable1=($tempVariable1)/($tempVariable2);
        echo $tempVariable1;
        break;

        case 'multiply':$tempVariable1=($tempVariable1)*($tempVariable2);
        echo $tempVariable1;
        break;
    }
?>