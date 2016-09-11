class Api::SheltersController < ApplicationController
  def index
    bounds = params[:bounds]
    @shelters = bounds ? Shelter.in_bounds(params[:bounds]) : Shelter.all
    render json: @shelters
  end

  def create
    @shelter = Shelter.create!(shelter_params)
  end

  private
  def shelter_params
    params.require(:shelter).permit(:name, :description, :long, :lat)
  end
end
