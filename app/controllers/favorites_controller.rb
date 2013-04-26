class FavoritesController < ApplicationController

  respond_to :json

  def index
    @favorites = Gist.joins(:favorites).where("favorites.user_id" => current_user.id)
    render json: @favorites
  end

  def create
    @favorite = Favorite.new(params[:favorite])

    if @favorite.save!
      render :json => @favorite
    else
      render :json => @favorite.errors, :status => 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])

    if @favorite.destroy
      render :json => @favorite
    else
      render :json => @favorite, status: 422
    end
  end

end
