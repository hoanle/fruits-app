Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1  do
      resources :fruits, only: [:index, :create, :destroy, :update]
    end
  end

  root to: 'home#index'
end
