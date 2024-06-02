from flask import Flask, render_template
import random

app = Flask(__name__)


@app.route('/')
def home():
    initial_number = random.randint(0, 100)
    return render_template('index.html', initial_number=initial_number)
