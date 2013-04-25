class GistsController < ApplicationController


  respond_to :json
  respond_to :html, only: [:index]

  def index
    @gists = Gist.where("user_id == #{current_user.id}")
    @current_user = current_user
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @gists }
    end
  end

  def create
    @gist = Gist.new(params[:gist])
    if(@gist.save!)
      render json: @gist
    else
      render json: @gist.errors, status: 422
    end
  end

  # def show
#     @gist = Gist.find(params[:id])
#     if (@gist.user_id == current_user.id)
#       render json: @gist
#     else
#       flash[:error] = "Sorry that's not your gist"
#       render :index
#     end
#   end

end
