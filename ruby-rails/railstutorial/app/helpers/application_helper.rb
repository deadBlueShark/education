module ApplicationHelper
  def generate_page_title(page_title)
    base_title = 'Ruby on Rails Tutorial'
    page_title.present? ? "#{page_title} | #{base_title}" : base_title
  end
end
