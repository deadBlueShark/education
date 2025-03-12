#!/usr/bin/perl

@lines = `perldoc -u -f atan2`;
print "ORIGINAL:\n\n";
print @lines;

print "\nPARSED:\n\n";

foreach (@lines) {
  s/\w<([^>]+)>/\U$1/g;
  print;
}
