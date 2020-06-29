#!/usr/bin/perl
# deffunc.pl by Bill Weinman <http://bw.org/contact/>

use 5.18.0;
use warnings;

func1('one', 'two', 'three');

sub func1 {
    say 'this is func1';
    say foreach @_;
}
