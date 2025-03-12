# BW::Better.pm
# Example perl module - by Bill Weinman <http://bw.org/contact/>

package BW::Better;
use 5.18.0;
use warnings;

our $VERSION = "1.0";

# constructor - usage: my $o = BW::Better->new( number );
# if you omit the number, a zero will be provided. 
sub new {
    my $inv = shift;
    my $class = ref($inv) || $inv;

    my $self = {};
    bless($self, $class);

    # default to zero
    $self->{number} = shift || 0;
    return $self;
}

# number setter/getter 
sub number {
    my $self = shift;
    $self->{number} = shift if @_;
    return $self->{number} || 0;
}

# return a better number
sub better {
    my $self = shift;
    $self->_make_better;
    return $self->{better} || 0;
}

# return a string representation of the better number
sub string {
    my $self = shift;
    return "A better number is: $self->{better}";
}

# version getter
sub version {
    shift;
    return $VERSION;
}

# secret sauce to make a better number. 
sub _make_better {
    my $self = shift;
    my $num = $self->number() || 6;

    # sanity check, default to 6
    $num = 6 unless $num =~ /^[0-9]+$/;

    # better number is orig plus random value 1 - 11
    $self->{better} = $num + int(rand(10)) + 1;
}

1;
