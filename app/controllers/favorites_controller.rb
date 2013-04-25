class FavoritesController < ApplicationController

  respond_to :json

  def index
    @favorites = Gist.joins(:favorites).where("favorites.user_id" => current_user.id)
    render json: @favorites
  end

end
