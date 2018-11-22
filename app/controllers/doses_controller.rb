class DosesController < ApplicationController
  before_action :set_cocktail, only: [:new, :create, :show]

  def index
    @doses = Dose.all
  end

  def show
    # @dose = Dose.find(params[:id])
  end

  def new
    @dose = Dose.new
  end

  def create
    @dose = Dose.new(dose_params)
    @dose.cocktail_id = @cocktail.id
    if @dose.save
      redirect_to cocktail_path(@cocktail)
    else
      render :new
    end
  end

  def destroy
    @dose = Dose.find(params[:id])
    @cocktail_id = @dose.cocktail_id
    @dose.destroy
    redirect_to cocktail_path(@cocktail_id)
  end

  private

  def set_cocktail
    @cocktail = Cocktail.find(params[:cocktail_id])
  end

  def dose_params
    params.require(:dose).permit(:description, :ingredient_id, :cocktail_id)
  end
end
