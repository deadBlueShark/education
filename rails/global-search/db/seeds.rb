50.times do
  Movie.create(name: FFaker::Movie.title)
  Music.create(name: FFaker::Music.song)
end
