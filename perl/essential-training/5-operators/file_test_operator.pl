#!/usr/bin/perl

use 5.18.0;
use warnings;

my $file1 = 'file.txt';
my $file2 = 'fileeee.txt';

if (-e $file1) {
  say "$file1 exists";
} else {
  say "$file1 does not exist";
  say $!;
}

if (-e $file2) {
  say "$file2 exists";
} else {
  say "$file2 does not exist";
  say $!;
}

# -r: test file is readable
# -w: test file is writable
# -z: test file is zero-length (-s: non zero-length)
# -f: test plain file
# -d: test directory
