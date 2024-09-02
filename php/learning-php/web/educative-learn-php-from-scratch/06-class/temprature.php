<?php
class TemperatureReport {

  private $temperatures;

  public function __construct($temperatures) {
    $this->temperatures = $temperatures;
  }

  public function avg() {
    $sum = array_sum($this->temperatures);
    $array_len = count($this->temperatures);
    return $sum / $array_len;
  }

  public function repeated() {
    $freqTemp = array_count_values($this->temperatures);
    ksort($freqTemp);
    $maxFreq = max($freqTemp);
    return array_search($maxFreq, $freqTemp);
  }
}

$tem1 = new TemperatureReport(array(6, 5, 5, 9, 9, 9, 20, 20, 20, 20, 100));
echo "Average temperature: " . $tem1->avg() . "<br>";
echo "Most frequent temperature: " . $tem1->repeated() . "<br>";