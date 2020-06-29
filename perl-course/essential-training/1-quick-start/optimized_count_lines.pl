#!/usr/bin/perl

use 5.18.0;
use warnings;
use IO::File;

my $file_name = 'file.txt';

# Open file in read mode
my $file = IO::File->new($file_name, 'r');

# Check if open file successfully
if (!$file) {
  say "Can not open $file_name: $!";
  exit;
}

my $line_count = 0;
while ($file->getline) {
  $line_count++;
}

$file->close;
say "There are $line_count lines in the file";
