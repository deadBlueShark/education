#!/usr/bin/ruby

# Execute shell command (potential result in success or fail)
`pwd`

# Check previous shell comand result
puts $?.success?
puts $?.pid
puts $?.exitstatus

# OR
require 'English'

puts $CHILD_STATUS.success?
puts $CHILD_STATUS.pid
puts $CHILD_STATUS.exitstatus
