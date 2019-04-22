class HerosController < ApplicationController
  before_action :set_hero, only: [:show, :update, :destroy]

  def index
    @heros = params[:term].blank? ? Hero.all : Hero._by_term(params[:term])

    render json: @heros
  end

  def show
    render json: @hero
  end

  def create
    @hero = Hero.new(hero_params)

    if @hero.save
      render json: @hero, status: :created, location: @hero
    else
      render json: @hero.errors, status: :unprocessable_entity
    end
  end

  def update
    if @hero.update(hero_params)
      render json: @hero
    else
      render json: @hero.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @hero.destroy
    #render json: @hero
  end

  private

  def set_hero
    @hero = Hero.find(params[:id])
  end

  def hero_params
    params.require(:hero).permit(:name)
  end
end
