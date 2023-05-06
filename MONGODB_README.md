# list services
brew services list

# if not mongodb, start
brew services start mongodb-community@6.0

# mongodb service check
brew services stop mongodb-community@6.0
brew services restart mongodb-community@6.0

