ActiveRecord::Base.transaction do
  user1 = User.create!(user_name: "James")
  user2 = User.create!(user_name: "April")

  g1 = user1.gists.create!(title: "My sweeet gist")
  user2.gists.create!(title: "My awesome gist")
  user1.gists.create!(title: "SO MANY GISTS")

  fav = Favorite.create(user_id: 1, gist_id: 1)

  g1.gist_files.create!(body: "my gist body")
  g1.gist_files.create!(body: "make ALL the gist bodies!")
end