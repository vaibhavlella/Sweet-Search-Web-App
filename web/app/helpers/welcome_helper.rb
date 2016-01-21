module WelcomeHelper
    def format_scrape
        if params[:method] and params[:method] == 'facets'
            response = {
                'whos' => get_whos(get_names),
                'whats' => get_whats(get_topics),
                'places' => get_wheres
            }
        else
            response = {
                'tweets' => get_tweets
            }
        end
        response
    end

    def get_things(list)
        things = []
        list.each_with_index do |v, i|
            if i.even?
                if list[i+1] > 0 
                    things << { 'thing' => v, 'count' => list[i+1] }
                else
                    break
                end
            end
        end
        things
    end

    def get_names
        get_things(@results['facet_counts']['facet_fields']['name'])
    end

    def get_topics
        get_things(@results['facet_counts']['facet_fields']['topics'])
    end

    def get_whos(names)
        whos = []
        names.each do |name|
            whos << get_who(name['thing'], name['count'])
        end
        whos
    end

    def get_who(name, count)
        who = {}
        a = @results['response']['docs']
        a.each do |v|
            if v['name'] == name
                who['id'] = v['id']
                who['name'] = v['name']
                who['count'] = count
                who['image'] = v['image']
                who['tweet'] = v['text'][0]
                who['tags'] = v['PERSON']
                who['screen_name'] = v['screen_name']
            end
        end
        who
    end

    def get_whats(topics)
        whats = []
        topics.each do |topic|
            whats << get_what(topic['thing'], topic['count'])
        end
        whats
    end

    def get_what(topic, count)
        what = {}
        a = @results['response']['docs']
        a.each do |v|
            if v.has_key?('topics') and v['topics'].include?(topic)
                what['id'] = v['id']
                what['name'] = v['name']
                what['count'] = count
                what['image'] = v['image']
                what['tweet'] = v['text'][0]
                what['topic'] = topic
                what['tags'] = v['topics']
                what['screen_name'] = v['screen_name']
            end
        end
        what
    end

    def get_wheres
      places = []
      results = @results['response']['docs']

      results.each do |result|
        places << {'id' => result['id'],
         'name' => result['name'],
         'image' => result['image'],
         'tweet' => result['text'][0],
         'lat_long' => (Geocoder.search(result['user_location']).first.data["geometry"]["location"] rescue nil),
         'location' => result['user_location']
        }
      end
      places
    end

    def get_tweets
        tweets = []
        return tweets if @results.blank? || @results['response'].blank? || @results['response']['docs'].blank?
        @results['response']['docs'].each {|v| tweets << get_tweet(v)}
        tweets
    end

    def get_tweet(v)
        tweet = {'id' => v['id'],
                 'name' => v['name'],
                 'image' => v['image'],
                 'tweet' => v['text'][0],
                 'topic' => (v['topics'][0] rescue nil),
        }
    end
end
