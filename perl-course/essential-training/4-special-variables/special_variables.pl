#!/usr/bin/perl

use 5.18.0;
use warnings;

# $!: Global Error
# $_: Current Item In Foreach Loop
# @_: Arguments List In Function
# $|: Auto Flush Buffer Flash
# %ENV: System Environment Variables
# $0: Full Path Of The Script File
# $^O: Host OS
# $^V: Host Perl Version


say Dumper \%ENV;
foreach my $key (sort keys %ENV) {
  say $key;
}

say "MY OS: $^O";
say "PERL VERSION: $^V";
