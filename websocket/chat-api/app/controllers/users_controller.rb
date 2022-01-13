class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
    user = User.new(user_params)

    if user.save
      ActionCable.server.broadcast("user_channer", user)
    end

    render json: user
  end

  def add_message
    user = User.find(params[:id])
    message = user.messages.build(content: params[:message])

    if message.save
      ActionCable.server.broadcast("message_channer", message)
    end

    head :ok
  end

  def change_status

  end

  private

  def user_params
    params.require(:user).permit(:username, :status)
  end
end
