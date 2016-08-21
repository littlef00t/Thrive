class Api::SheltersController < ApplicationController
  def index
    @shelters = Shelter.all
  end

  def create
    @shelter = Shelter.create!(shelter_params)
  end

  private
  def shelter_params
    params.require(:shelter).permit(:name, :description, :lng, :lat)
  end
end
