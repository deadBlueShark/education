class MusicSerializer < ActiveModel::Serializer
  attributes :id, :name, :url

  def url
    music_path(object)
  end
end
