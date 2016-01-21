from os import listdir
from os.path import isfile, join
import time

SOURCE_DIR = '/data/edu/school/ub/cse/courses/sem-1/535/proj/a/src/pyscrape/pyscrape/data/tweets-download'
DESTINATION_DIR = '/data/edu/school/ub/cse/courses/sem-1/535/proj/a/src/pyscrape/pyscrape/data/tweets'

class Splitter:

    def __init__(self, source_dir, destination_dir):
        self._source_dir = source_dir
        self._destination_dir = destination_dir

    def split(self):
        source_files = [f for f in listdir(self._source_dir) if isfile(join(self._source_dir, f))]
        tweets_en = []
        tweets_de = []
        tweets_ru = []
        for s in source_files:
            tweet = self.read_tweet(join(self._source_dir, s))
            if tweet['user']['lang'] == 'de':
                tweets_de.append(tweet)
            elif tweet['user']['lang'] == 'ru':
                tweets_ru.append(tweet)
            else:
                tweets_en.append(tweet)
        self.save_n_tweets(tweets_en, self._destination_dir, 700)
        self.save_n_tweets(tweets_de, self._destination_dir, 700)
        self.save_n_tweets(tweets_ru, self._destination_dir, 700)

    def read_tweet(self, source_file):
        content = open(source_file, 'r').read()
        return eval(content)

    def save_n_tweets(self, tweets, directory, n):
        for i in range(1, n):
            t = tweets[i]
            self.save(str(t), join(directory, str(t['id'])))

    def save(self, content, file):
        f = open(file, 'w')
        f.write(content)

def main():
    n = Splitter(SOURCE_DIR, DESTINATION_DIR)
    n.split()

if __name__ == '__main__':
    main()
