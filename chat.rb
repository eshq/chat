require 'erb'

get "/" do
  erb :index
end

post "/eshq/socket" do
  socket = ESHQ.open(:channel => params[:channel], :presence_id => params[:presence_id])

  content_type :json
  '{"socket": "' + socket + '"}'
end
