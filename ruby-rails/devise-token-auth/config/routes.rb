Rails.application.routes.draw do
  resources :super_heros
  mount_devise_token_auth_for User.name, at: :authen
end
