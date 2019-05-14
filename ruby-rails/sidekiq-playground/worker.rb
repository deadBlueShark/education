require "sidekiq"

Sidekiq.configure_client do |config|
  config.redis = { db: 1 }
end

Sidekiq.configure_server do |config|
  config.redis = { db: 1 }
end

class HelloWorker
  include Sidekiq::Worker

  def perform(complexity)
    case complexity
    when "hard"
      sleep 10
      puts "Hard task"
    when "medium"
      sleep 5
      puts "Medium task"
    when "easy"
      sleep 1
      puts "Easy task"
    else
      raise "Task error"
    end
  end
end
