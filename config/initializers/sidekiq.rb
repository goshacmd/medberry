url = $redis.client.options[:url]

Sidekiq.configure_server do |config|
  config.redis = { url: url, namespace: 'sidekiq' }
end

Sidekiq.configure_client do |config|
  config.redis = { url: url, namespace: 'sidekiq' }
end
