from flask import Flask, render_template, request, url_for, send_file, flash, redirect, make_response


app = Flask(__name__)


@app.route("/")
@app.route("/home")
def Training():
    # cases, cured, death = CurrentStats.currentStatus()
    return render_template("Training.html" )


@app.route("/tutorial")
def Tutorial():
    return render_template("Tutorials.html" )


@app.route("/model")
def Model():
    return render_template("Model.html")


@app.route("/about")
def About():
    return render_template("About.html" )


@app.errorhandler(404)
def page_not_found(e):
    return render_template("PageNotFound.html")


if __name__ == '__main__':
    app.run(threaded=True, debug=True)
