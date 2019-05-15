Rails.application.routes.draw do
  resources :movies, :musics, only: [:index, :show]
  get :global_search, to: 'home#global_search'

  root to: 'home#index'
end
