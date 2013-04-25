module SessionsHelper

  def login(user)
    #remember_token = SecureRandom.urlsafe_base64
    session[:remember_token] = user.id
  end

  # def current_user=(user)
  #   @current_user = user
  #
  #   # p "HEY LOOK HERE currentuser: #{@current_user}"
  # end

  def current_user
    @current_user ||= User.find(session[:remember_token])
  end

  def signed_in?
    !current_user.nil?
  end

end
