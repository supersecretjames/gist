GistClone::Application.routes.draw do
  resources :sessions
  resources :favorites, only: [:index]
  resources :gists do
    resources :favorites, only: [:create, :destroy]
  end
  root to: "sessions#new"
end
