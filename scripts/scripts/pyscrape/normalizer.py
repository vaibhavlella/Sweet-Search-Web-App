import sys
from os import listdir, mkdir, remove
from os.path import isfile, join, exists
import time
import config

class Normalizer:

    def __init__(self, source_dir, destination_dir, destination_filename):
        self._source_dir = source_dir
        self._destination_dir = destination_dir
        self._destination_filename = destination_filename
        if not exists(self._destination_dir):
            mkdir(self._destination_dir)

    def normalize(self):
        destination_file = join(self._destination_dir, self._destination_filename)
        if exists(destination_file):
            remove(destination_file)

        for d in listdir(self._source_dir):
            directory = join(self._source_dir, d)
            source_files = [f for f in listdir(directory) if isfile(join(directory, f))]
            normalized_tweets = []
            for s in source_files:
                normalized_tweets.append(self._normalize(join(directory, s)))
            self._save(str(normalized_tweets), destination_file)

    def _normalize(self, source_file):
        content = open(source_file, 'r').read()
        return self._process(eval(content))

    def _process(self, tweet):
        normalized_tweet = {}
        normalized_tweet['id'] = tweet['id']
        normalized_tweet['created_at'] = self._process_time(tweet['created_at'])

        lang = tweet['user']['lang']
        normalized_tweet['lang'] = lang
        if lang == 'de':
            normalized_tweet['text_de'] = tweet['text']
        elif lang == 'ru':
            normalized_tweet['text_ru'] = tweet['text']
        else:
            normalized_tweet['text_en'] = tweet['text']

        normalized_tweet['tweet_hashtags'] = []
        for h in tweet['entities']['hashtags']:
            normalized_tweet['tweet_hashtags'].append(h['text'])

        normalized_tweet['tweet_urls'] = []
        for u in tweet['entities']['urls']:
            normalized_tweet['tweet_urls'].append(u['expanded_url'])

        normalized_tweet['name'] = tweet['user']['name']
        normalized_tweet['screen_name'] = tweet['user']['screen_name']
        normalized_tweet['user_location'] = tweet['user']['location']
        normalized_tweet['location'] = tweet['coordinates']
        normalized_tweet['image'] = tweet['user']['profile_image_url']
        normalized_tweet['topics'] = normalized_tweet['tweet_hashtags']

        return normalized_tweet

    def _process_time(self, timestring):
        t = time.strptime(timestring, '%a %b %d %H:%M:%S +0000 %Y')
        return time.strftime('%Y-%m-%dT%H:%M:%SZ', t)

    def _save(self, content, file):
        f = open(file, 'a')
        f.write(content)

def main():
    if len(sys.argv) == 4:
        download_dir = sys.argv[1]
        normalization_dir = sys.argv[2]
        normalized_filename = sys.argv[3]
    elif len(sys.argv) == 3:
        download_dir = sys.argv[1]
        normalization_dir = sys.argv[2]
        normalized_filename = config.twitter['normalized_filename']
    else:
        download_dir = config.twitter['download_dir']
        normalization_dir = config.twitter['normalized_dir']
        normalized_filename = config.twitter['normalized_filename']

    n = Normalizer(download_dir, normalization_dir, normalized_filename)
    n.normalize()

if __name__ == '__main__':
    main()
