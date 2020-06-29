if ($sum) {
  print "I defined\n";
} else {
  print "I am an undef value\n";
}

if (defined($sum)) {
  print "I defined\n";
} else {
  print "I am an undef value\n";
}

$sum = 20;
if (defined($sum)) {
  print "I defined\n";
} else {
  print "I am an undef value\n";
}

$sum = undef;
if (defined($sum)) {
  print "I defined\n";
} else {
  print "I am an undef value\n";
}

