ActiveRecord::Base.transaction do
  user1 = User.create!(user_name: "James")
  user2 = User.create!(user_name: "April")

  user1.gists.create!(title: "My sweeet gist")
  user2.gists.create!(title: "My awesome gist")
  user1.gists.create!(title: "SO MANY GISTS")

  fav = Favorite.create(user_id: 1, gist_id: 1)
end