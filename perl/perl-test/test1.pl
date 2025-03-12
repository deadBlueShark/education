use 5.18.0;
use warnings;
use strict;
use Data::Dumper;

#my $txt = 'I am learning Perl';
#my @match = $txt =~ /\s(.*)\s/;
#say Dumper \@match;
my $line = "      <!-- Insert tournament -->";
$line =~ /([\s\w\W]*)<!--\s?Insert ([\w_\-]{1,})\@?([\w_\-]{1,}){0,1}\s?-->/;
say Dumper \$1;
say Dumper \$2;
say Dumper \$3;
