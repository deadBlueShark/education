#!/usr/bin/perl
# writefile.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;
use IO::File;

use subs qw( error );

my $filename = shift || 'testfile.txt';
main(@ARGV);

sub main
{
    my $fh = IO::File->new("> $filename");
    if( defined $fh ) {
        foreach my $i ( 1..10 ) {
            $fh->printf("%02d: This is line %d\n", $i, $i);
        }
    } else {
        error "Cannot open file for write: $!";
    }
    

}

sub error
{
    my $e = shift || 'unkown error';
    say "$0: $e";
    exit 0;
}

