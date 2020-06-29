use strict;
use warnings;
use Data::Dumper;

my @skippers = qw(blue_shirt hat jacket preserver sunscreen);
my @skipper_with_name = ('Skipper' => \@skippers);

my @professors = qw(sunscreen water_botle slide_rude batteries radio);
my @professor_with_name = ('Professor' => \@professors);

my @gilligans = qw(red_shirt hat lucky_socks water_bottle);
my @gilligan_with_name = ('Gilligan' => \@gilligans);

my @all_with_names = (
  \@skipper_with_name,
  \@professor_with_name,
  \@gilligan_with_name
);

for my $person (@all_with_names) {
  # Two type to dereferencing a reference
  print "Type: $$person[0] - $person->[0]\n";
  print 'Item in this list: ';
  for my $item (@{$person->[1]}) {
    print "$item ";
  }
  print "\n\n";
}

print ${${$all_with_names[0]}[1]}[0] . "\n";
print $all_with_names[0]->[1]->[0] ."\n";
