<?php
// IF ELSE, SWITCH: same as Javascript

$weekday = "Thursday";

switch ($weekday) {
  case "Monday":
    echo "To day is Monday";
    break;
  case "Tuesday":
    echo "To day is Tuesday";
    break;
  case "Wednesday":
    echo "To day is Wednesday";
    break;
  case "Thursday":
    echo "To day is Thursday";
    break;
  case "Friday":
    echo "To day is Friday";
    break;
  case "Saturday":
    echo "To day is Saturday";
    break;
  case "Sunday":
    echo "To day is Sunday";
    break;
  default:
    echo "Weekday invalid";
    break;
}