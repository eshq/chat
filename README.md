EventSource HQ Chat
===================

This is a simple example of a chat application based on EventSource HQ.

See it in action here:

http://eshq-chat.heroku.com/

To install it on heroku:

    git clone git://github.com/eshq/chat.git
    cd chat
    heroku create
    heroku addons:add eshq
    git push heroku master
