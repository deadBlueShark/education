use strict;
use warnings;
use Data::Dumper;

my %gillian_info = (
  name => 'Giliian',
  hat => 'White',
  shirt => 'Red',
  position => 'First Mate'
);

my $gillian_info_ref = \%gillian_info;
print $$gillian_info_ref{'name'} . "\n";
print $gillian_info_ref->{'name'} . "\n";

my @attributes = keys %{$gillian_info_ref};
print Dumper \@attributes;

our %DataConvert = (
    'shoot'      => {'0'   => '01','1'  => '02'},
    'tournament' => {'null' => '00','1' => '01','2' => '02','3' => '03','4' => '04','5' => '05',
                      '6'    => '06','7' => '07','8' => '08','9' => '09'},
    'area'       => {'null' => '00'},
);
print Dumper \%DataConvert;
for (my $x=1 ; $x < 4; $x++) {
    $DataConvert{'gender_J'.$x}->{'0'} = '01';
    $DataConvert{'gender_J'.$x}->{'1'} = '02';
    $DataConvert{'grade_J'.$x}->{'null'} = '00';
    $DataConvert{'grade_J'.$x}->{'0'} = '01';
    $DataConvert{'grade_J'.$x}->{'1'} = '02';
    $DataConvert{'grade_J'.$x}->{'2'} = '03';
    $DataConvert{'grade_J'.$x}->{'3'} = '04';
    $DataConvert{'grade_J'.$x}->{'4'} = '05';
    $DataConvert{'grade_J'.$x}->{'5'} = '06';
    $DataConvert{'grade_J'.$x}->{'6'} = '07';
    $DataConvert{'participants_J'.$x}->{'0'} = '01';
    $DataConvert{'participants_J'.$x}->{'1'} = '02';
    $DataConvert{'experience_J'.$x}->{'null'} = '00';
    $DataConvert{'experience_J'.$x}->{'0'} = '01';
    $DataConvert{'experience_J'.$x}->{'1'} = '02';
    $DataConvert{'experience_J'.$x}->{'2'} = '03';
    $DataConvert{'experience_J'.$x}->{'3'} = '04';
    $DataConvert{'experience_J'.$x}->{'4'} = '05';
    $DataConvert{'experience_J'.$x}->{'5'} = '06';
}
print Dumper \%DataConvert;
