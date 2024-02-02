from kafka import KafkaConsumer

consumer = KafkaConsumer(
    'surprise_me',
     bootstrap_servers=['localhost:9092'],
     auto_offset_reset='earliest',
     enable_auto_commit=True,
)

for message in consumer:
    print(message)
    num = int(message.value.decode())
    if num % 2 == 1:
        print(f'Odd number {num} added to numtest. The whole message is {message}')
