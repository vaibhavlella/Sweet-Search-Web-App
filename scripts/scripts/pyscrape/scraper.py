import sys
from twython import Twython
from os import listdir, mkdir
from os.path import isfile, join, isdir, exists
import config

class TweetCollector:

    def __init__(self, screen_name, consumer_key, consumer_secret, oauth_token, oauth_secret, languages, lists, download_dir):
        self._screen_name = screen_name
        self._consumer_key = consumer_key
        self._consumer_secret = consumer_secret
        self._oauth_token = oauth_token
        self._oauth_secret = oauth_secret
        self._languages = languages
        self._lists = lists
        self._download_dir = download_dir

    def collect(self, count, max_id=None):
        twitter = Twython(self._consumer_key, self._consumer_secret, self._oauth_token, self._oauth_secret)

        for language in self._languages:
            for screen_name in self._lists[language]:
                try:
                    statuses = twitter.get_user_timeline(screen_name=screen_name)
                    self._save_uncollected(statuses, language)
                except:
                    print('Collect failed for user: {0} and account: {1} with exception {2}'.format(self._screen_name, screen_name, sys.exc_info()[0]))

    def _save_uncollected(self, statuses, language):
        for status in statuses:
            if not self._is_collected(status, language):
                self._save(status, language)

    def _is_collected(self, status, language):
        result = False
        directory = join(self._download_dir, language)
        if exists(directory) and isdir(directory):
            tweet_ids = [f for f in listdir(directory) if isfile(join(directory, f)) ]
            result = True if status['id_str'] in tweet_ids else False
        return result

    def _save(self, status, language):
        directory = join(self._download_dir, language)
        if not exists(directory):
            mkdir(directory)
        f = open(join(directory, status['id_str']), 'w').write(str(status))

def main():
    if len(sys.argv) == 2:
        download_dir = sys.argv[1]
    else:
        download_dir = config.twitter['download_dir']

    languages = config.twitter['languages']
    if not exists(download_dir):
        mkdir(download_dir)
    for account in config.twitter['accounts']:
        t = TweetCollector( account['handle']
                          , account['consumer']['key']
                          , account['consumer']['secret']
                          , account['oauth']['token']
                          , account['oauth']['secret']
                          , languages
                          , account['lists']
                          , download_dir
                          )
        t.collect(count=99);

if __name__ == "__main__":
    main()
