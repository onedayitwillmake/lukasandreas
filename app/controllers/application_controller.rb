class ApplicationController < ActionController::Base
  protect_from_forgery
  require 'net/http'

  def getVimeoCodeForURL( urlString )
    url = URI.parse( urlString)
    req = Net::HTTP::Get.new(url.path)
    res = Net::HTTP.start(url.host, url.port) {|http|
      http.request(req)
    }
  end

  protected
  def authenticate
    authenticate_or_request_with_http_basic do |username, password|
      username == "lukas" && password == "andreas"
    end
  end

end
