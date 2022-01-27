require "aasm"

class Job
  include AASM

  aasm whiny_transitions: false do
    state :sleeping, initial: true
    state :running
    state :cleaning

    event :run do
      transitions from: :sleeping, to: :running
    end

    event :clean do
      transitions from: :running, to: :cleaning
    end

    event :sleep do
      transitions from: [:running, :cleaning], to: :sleeping
    end
  end
end

job = Job.new
puts job.may_sleep?
puts job.sleeping?

puts job.may_run?
puts job.running?

puts job.may_clean?
puts job.cleaning?

puts "========="
puts job.run
puts job.running?

puts job.run
