from flask import Flask, render_template, Response
import requests

app = Flask(__name__)


@app.route('/')
def index():
    # Отправляем запрос к Steam
    return render_template('index.html')


@app.route('/steam')
def steam():
    # Прокси-запрос к Steam
    url = 'https://store.steampowered.com/'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }

    # Получаем контент с сайта Steam
    response = requests.get(url, headers=headers)

    # Отправляем контент обратно в браузер
    return Response(response.content, content_type='text/html')

@app.route('/steam')
def login():

    url = 'https://store.steampowered.com/login/'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }

    response = requests.get(url, headers=headers)

    print(response.text)

    # Отправляем контент обратно в браузер
    return Response(response.content, content_type='text/html')

if __name__ == '__main__':
    app.run(debug=True)
