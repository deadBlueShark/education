require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  @@base_title = 'Ruby on Rails Tutorial'

  test 'should get root' do
    get root_url
    assert_response :success
    assert_select 'title', @@base_title
  end

  test 'should get home page' do
    get static_pages_home_url
    assert_response :success
    assert_select 'title', @@base_title
  end

  test 'should get help page' do
    get static_pages_help_url
    assert_response :success
    assert_select 'title', "Help | #{@@base_title}"
  end

  test 'should get about page' do
    get static_pages_about_url
    assert_response :success
    assert_select 'title', "About | #{@@base_title}"
  end

  test 'shoud get contact page' do
    get static_pages_contact_url
    assert_response :success
    assert_select 'title', "Contact | #{@@base_title}"
  end
end
