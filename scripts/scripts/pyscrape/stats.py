from os import listdir
from os.path import isfile, join
import time
from datetime import datetime
from collections import Counter
from operator import itemgetter

TWEETS_DIR = '/data/edu/school/ub/cse/courses/sem-1/535/proj/a/src/pyscrape/pyscrape/data/tweets-download'

class Statistician:

    def __init__(self, files):
        self._files = files
        self._len_tweets = len(files)
        self._tweets_en = self.get_lang_tweets('en')
        self._tweets_de = self.get_lang_tweets('de')
        self._tweets_ru = self.get_lang_tweets('ru')
        self._tweets = self._tweets_en + self._tweets_de + self._tweets_ru
        self._len_tweets_en = len(self._tweets_en)
        self._len_tweets_de = len(self._tweets_de)
        self._len_tweets_ru = len(self._tweets_ru)
        self._date_spread_tweets = self.get_date_spread(self._tweets)
        self._date_spread_tweets_en = self.get_date_spread(self._tweets_en)
        self._date_spread_tweets_de = self.get_date_spread(self._tweets_de)
        self._date_spread_tweets_ru = self.get_date_spread(self._tweets_ru)

    def get_lang_tweets(self, lang):
        results = []
        for f in self._files:
            tweet = eval(open(f, 'r').read())
            if tweet['user']['lang'] == lang:
                results.append(tweet)
        return results

    def get_date_spread(self, tweets):
        dates = []
        for t in tweets:
            dates.append(self.get_tweet_date(t))
        return Counter(dates)

    def get_tweet_date(self, tweet):
        t = time.strptime(tweet['created_at'], '%a %b %d %H:%M:%S +0000 %Y')
        d = datetime.fromtimestamp(time.mktime(t))
        return time.strftime('%Y-%m-%d', t)

    def get_first_tweet(self, lang='all'):
        tweets = []
        if lang == 'en':
            tweets = self._tweets_en
        elif lang == 'de':
            tweets = self._tweets_de
        elif lang == 'ru':
            tweets = self._tweets_ru
        else:
            tweets = self._tweets
        sorted_tweets = sorted(tweets, key=lambda x: x['id'])
        return sorted_tweets[0]

    def print_stats(self):
        print('\n\n')
        print('Tweet Statistics:')
        print('~~~~~~~~~~~~~~~~~\n')
        print('Total number of tweets: ' + str(self._len_tweets))
        print('Total number English of tweets: ' + str(self._len_tweets_en) + ' (' + "{0:.2f}".format((self._len_tweets_en / self._len_tweets) * 100) + '%)')
        print('Total number German of tweets: ' + str(self._len_tweets_de) + ' (' + "{0:.2f}".format((self._len_tweets_de / self._len_tweets) * 100) + '%)')
        print('Total number Russian of tweets: ' + str(self._len_tweets_ru) + ' (' + "{0:.2f}".format((self._len_tweets_ru / self._len_tweets) * 100) + '%)')
        print('\n')
        print('Date spread of tweets: ', sorted(self._date_spread_tweets.items(), key=itemgetter(0)))
        print('Date spread of English tweets: ', sorted(self._date_spread_tweets_en.items(), key=itemgetter(0)))
        print('Date spread of German tweets: ', sorted(self._date_spread_tweets_de.items(), key=itemgetter(0)))
        print('Date spread of Russian tweets: ', sorted(self._date_spread_tweets_ru.items(), key=itemgetter(0)))
        #print('\n\n')
        #print(self.get_first_tweet(lang='de')['id_str'])
        #print(self.get_first_tweet(lang='ru')['id_str'])

def main():
    files = [join(TWEETS_DIR, f) for f in listdir(TWEETS_DIR) if isfile(join(TWEETS_DIR, f)) ]
    print('\nAnalyzing...')
    s = Statistician(files)
    s.print_stats()

if __name__ == "__main__":
    main()
