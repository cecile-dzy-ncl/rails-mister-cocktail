Rails.application.routes.draw do
  root to: 'cocktails#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cocktails, only: [:index, :show, :new, :create] do
    resources :doses, only: [:new, :create]
  end
  resources :doses, only: [:destroy]
end


#             Prefix Verb   URI    Pattern                                                                                  Controller#Action

#            cocktail_doses POST   /cocktails/:cocktail_id/doses(.:format)                                                  doses#create
#         new_cocktail_dose GET    /cocktails/:cocktail_id/doses/new(.:format)                                              doses#new
#             cocktail_dose DELETE /cocktails/:cocktail_id/doses/:id(.:format)                                              doses#destroy

#                 cocktails GET    /cocktails(.:format)                                                                     cocktails#index
#                           POST   /cocktails(.:format)                                                                     cocktails#create
#              new_cocktail GET    /cocktails/new(.:format)                                                                 cocktails#new
#                  cocktail GET    /cocktails/:id(.:format)                                                                 cocktails#shows
