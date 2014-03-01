FROM phusion/passenger-ruby21:0.9.8
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev
WORKDIR /home/app
ADD Gemfile /home/app/Gemfile
ADD Gemfile.lock /home/app/Gemfile.lock
RUN bundle install
ADD . /home/app
