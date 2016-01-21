class WelcomeController < ApplicationController
    include WelcomeHelper
    @@solr = RSolr::Ext.connect url: 'http://localhost:8983/solr/VSM'

    def index
    end

    def search
        @results = Search.new.scrape(params)
        render json: format_scrape.to_json
    end
end
