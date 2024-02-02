from kafka import KafkaProducer
from time import sleep
producer = KafkaProducer(bootstrap_servers=['localhost:9092'])
from random import randint

for _ in range(1000):
    random_integer = randint(1, 2500)
    data = str(random_integer).encode()
    producer.send('surprise_me', value=data)
    sleep(5)
