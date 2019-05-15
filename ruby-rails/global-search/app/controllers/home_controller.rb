class HomeController < ApplicationController
  def index

  end

  def global_search
    @musics = Music.ransack(name_cont: params[:term]).result(distinct: true)
    @movies = Movie.ransack(name_cont: params[:term]).result(distinct: true)

    respond_to do |format|
      format.html
      format.json {
        render json: {
          movies: ActiveModel::ArraySerializer.new(@movies.limit(5), each_serializer: MovieSerializer, root: false),
          musics: ActiveModel::ArraySerializer.new(@musics.limit(5), each_serializer: MusicSerializer, root: false)
        }
      }
    end
  end
end
