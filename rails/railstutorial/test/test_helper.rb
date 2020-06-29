ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'
require 'minitest/reporters'

Minitest::Reporters.use! Minitest::Reporters::ProgressReporter.new(color: true)

module ActiveSupport
  class TestCase
    # Setup all fixtures in test/fixtures/*.yml for in alphabetical order.
    # The testing environment will automatically load all the fixtures into
    # the database before each test
    # To ensure consistent data, the environment deletes the fixtures
    # before running the load.
    fixtures :all
  end
end
