class Search < ActiveRecord::Base
    @@solr = RSolr::Ext.connect url: 'http://localhost:8983/solr/VSM'

    def scrape(params)
        if params[:method] and params[:method] == 'facets'
            query = {
                :queries => params[:query],
                :facets =>{:fields=>['name', 'topics', 'location']}
            }
        else
            query = { :queries => params[:query] }
        end
        @@solr.find(query, method: :post)
    end
end
