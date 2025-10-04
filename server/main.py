from flask import Flask, jsonify
from flask_cors import CORS
from routes.data import data_bp

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Register the blueprint
app.register_blueprint(data_bp)

@app.route("/")
def root():
    return jsonify({"message": "Welcome to Flask!"})

@app.route("/hello")
def hello():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == "__main__":
    app.run(debug=True)
