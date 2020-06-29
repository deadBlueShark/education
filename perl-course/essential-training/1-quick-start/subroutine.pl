#!/usr/bin/perl

use 5.18.0;
use warnings;
use IO::File;

main(@ARGV);

# Entry point
sub main {
  my $file_name = shift;
  my $line_count = count_line_in_file($file_name);
  say "There are $line_count lines in $file_name";
}

sub count_line_in_file {
  (my $file_name = shift) || process_error('Error: Missing file name.');
  # process_error('Error: Missing file name.') unless $file_name;

  my $file = IO::File->new($file_name, 'r') || process_error("Cannot open file: $!.");

  my $line_count = 0;
  $line_count++ while ($file->getline);

  $file->close;

  return $line_count;
}


sub process_error {
  my $error_message = shift || 'Unknown error.';
  say "There was an error in $0:\n$error_message";
  exit 0;
}
