from helper import get_optimal_time
from datetime import datetime, time
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session

app = Flask(__name__)

# Configure session to use filesystem (instead of signed cookies) COPIED FROM WEEK 9 FINANCE!!!
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        session['selected_time'] = request.form.get('selected_time')
        return redirect("/home")
    else:
        return render_template("index.html")


@app.route("/home", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        return redirect("/")
    else:

        if 'selected_time' not in session or session['selected_time'] == None:
            return redirect("/")

        selected_time = session['selected_time']
        # convert to datetime
        timeObj = datetime.strptime(selected_time, "%I:%M %p").time()
        optimal_time = get_optimal_time(timeObj.hour, timeObj.minute, True)
        secondary_optimal_time = get_optimal_time(timeObj.hour, timeObj.minute, False)

        return render_template("home.html", selected_time=selected_time, optimal_time=optimal_time, secondary_optimal_time=secondary_optimal_time)
