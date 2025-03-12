# BW::Better.pm
# Example perl module - by Bill Weinman <http://bw.org/contact/>

package BW::Better;
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
    $self->{number} = shift if @_;
    return $self->{number} || 0;
}

sub better {
    my $self = shift;
    $self->_make_better;
    return $self->{better} || 0;
}

sub string {
    my $self = shift;
    return "The number is: $self->{number}";
}

sub version {
    shift;
    return $VERSION;
}

sub _make_better {
    my $self = shift;
    my $num = $self->number() || 6;
    $num = 6 unless $num =~ /^[0-9]+$/;
    $self->{better} = $num + int(rand(10)) + 1;
}

1;
