Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "users#home"
  get "/users/home" => "users#home"

  post "/users"=> "users#create"
  
  get "/photos/show" => "photos#show"
end
