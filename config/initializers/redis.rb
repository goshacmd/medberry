url = ENV['REDIS_1_PORT'] || ENV['REDISCLOUD_URL']
$redis = Redis.new url: url
