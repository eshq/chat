require 'erb'

get "/" do
  erb :index
end

post "/eshq/socket" do
  puts "Got request #{params.inspect} #{request.body.read}"
  socket = ESHQ.open_socket(:channel => params[:channel])

  content_type :json
  '{"socket": "' + socket + '"}'
end
