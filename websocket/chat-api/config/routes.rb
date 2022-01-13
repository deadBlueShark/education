Rails.application.routes.draw do
  resources :messages, only: :index
  resources :users, only: [:index, :create] do
    post :add_message
    post :change_status
  end

  mount ActionCable.server => "/cable"
end
