#!/usr/bin/perl
# template.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

main(@ARGV);

sub main
{
    say "Hello, World.";
}

sub error
{
    my $e = shift || 'unkown error';
    print("$0: $e\n");
    exit 0;
}
