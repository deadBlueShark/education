class MovieSerializer < ActiveModel::Serializer
  attributes :id, :name, :url

  def url
    movie_path(object)
  end
end
