#!/usr/bin/ruby
require 'io/console'

print 'Enter username: '
username = gets.chomp
password = IO::console.getpass 'Enter password: '
p username
p password
