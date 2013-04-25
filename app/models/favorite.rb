class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id

  belongs_to :gist
  belongs_to :user

  validates_uniqueness_of :gist_id, :scope => :user_id
end
