class SuperHerosController < ApplicationController
  before_action :set_super_hero, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  def index
    super_heros = SuperHero.all

    render json: super_heros
  end

  def show
    super_hero = SuperHero.find_by(id: params[:id])
    render json: super_hero
  end

  def create
    super_hero = SuperHero.new(super_hero_params)

    if super_hero.save
      render json: super_hero, status: :created, location: super_hero
    else
      render json: super_hero.errors, status: :unprocessable_entity
    end
  end

  def update
    super_hero = SuperHero.find_by(id: params[:id])

    if super_hero.update(super_hero_params)
      render json: super_hero
    else
      render json: super_hero.errors, status: :unprocessable_entity
    end
  end

  private

  def super_hero_params
    params.require(:super_hero).permit(:name, :skill)
  end
end
