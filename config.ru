require 'rubygems'
require 'bundler'

Bundler.require

require "./chat"
run Sinatra::Application
