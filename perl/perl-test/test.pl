use 5.18.0;
use warnings;
use strict;

my $var = 'Hello';
say ref($var); #  ref(EXPR) returns false if EXPR is not a reference

$var = {};
say ref($var); #  ref(EXPR) returns 'HASH' if EXPR is a reference to a hash

$var = bless {}, 'MyClass';
say ref($var); #  ref(EXPR) returns a class name if EXPR is a blessed reference
