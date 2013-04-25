class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id, :gist_files_attributes

  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :favorites, :inverse_of => :gist
  has_many :gist_files
  accepts_nested_attributes_for :gist_files
end
