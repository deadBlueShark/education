#!/usr/bin/perl

use 5.18.0;
use warnings;

if ('0') {
  say 'True';
} else {
  say 'False';  # This will be printed
}

if (0) {
  say 'True';
} else {
  say 'False'; # This will be printed
}

if ({}) {
  say 'True'; # This will be printed
} else {
  say 'False';
}

if (()) {
  say 'True';
} else {
  say 'False'; # This will be printed
}

if ('   ') {
  say 'True'; # This will be printed
} else {
  say 'False';
}

if ([]) {
  say 'True';
} else {
  say 'False';
}
