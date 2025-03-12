#!/usr/bin/perl

use 5.18.0;
use warnings;

use constant PI => 3.14;

# Init multiple constant
use constant {
  VERSION => '1.2.3',
  URL     => 'google.com',
  TRUE    => 1,
  FALSE   => ''
};

say PI;
say VERSION;
say URL;

if (TRUE) {
  say 'True';
} else {
  say 'False';
}
