class Hero < ApplicationRecord
  scope :_by_term, -> (term) { where("name LIKE ?", "%#{term}%") }
end
