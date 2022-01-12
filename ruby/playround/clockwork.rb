require 'clockwork'

include Clockwork

handler do |job|
  puts "Running job #{job}"
end

every(1.seconds, 'every_second.job')

every(10.seconds, 'frequent.job')




