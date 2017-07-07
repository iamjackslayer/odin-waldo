class PhotosController < ApplicationController
  def show
  	@photo = Photo.find(params[:id])
  end

  def index
  end
end
