require 'erb'

get "/" do
  erb :index
end

post "/eshq/socket" do
  socket = ESHQ.open(:channel => params[:channel])

  content_type :json
  '{"socket": "' + socket + '"}'
end

post "/message" do
  ESHQ.send(
    :channel => "chat",
    :data => {:nick => params[:nick], :msg => params[:msg]}.to_json
  )
end
