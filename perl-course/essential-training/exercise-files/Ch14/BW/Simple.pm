# BW::Simple.pm
# Example perl module - by Bill Weinman <http://bw.org/contact/>

package BW::Simple;
use 5.18.0;
use warnings;

our $VERSION = "1.0";

sub new {
    my $inv = shift;
    my $class = ref($inv) || $inv;

    my $self = {};
    bless($self, $class);

    $self->{number} = shift || 0;
    return $self;
}

sub number {
    my $self = shift;
    return $self->{number} || 0;
}

sub string {
    my $self = shift;
    return "The number is: $self->{number}";
}

sub version {
    shift;
    return $VERSION;
}

1;
