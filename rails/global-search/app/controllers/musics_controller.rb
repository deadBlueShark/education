class MusicsController < ApplicationController
  def index
    @musics = Music.all
  end

  def show
    @music = Music.find(params[:id])
  end
end
