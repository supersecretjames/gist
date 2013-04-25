class SessionsController < ApplicationController
  include SessionsHelper

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_user_name(params[:user][:user_name])
    if(@user)
      if login(@user)
        flash[:success] = "You Logged In!"
        redirect_to gists_url
      end
    else
      flash[:error] = "No such User"
      render :new
    end
  end
end
