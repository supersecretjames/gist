class GistFile < ActiveRecord::Base
  belongs_to :gist, inverse_of: :gist_files
  attr_accessible :body, :gist_id
  validates_presence_of :gist
end
