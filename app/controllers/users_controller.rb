class UsersController < ApplicationController

	def home
		@users = User.order("duration asc")
	end

	def create
		@user = User.new(name: params[:user][:name],duration:params[:user][:duration].to_f)
		if @user.save
			redirect_to action: :home
		else
			render html: "<script>alert('error')</script>".html_safe
		end
	end
end
