Rails.application.routes.draw do
  get 'static_pages/home'
  get 'static_pages/help', as: :help
  get 'static_pages/about', as: :about
  get 'static_pages/contact', as: :contact
  get 'static_pages/news', as: :news

  root 'static_pages#home'
end
