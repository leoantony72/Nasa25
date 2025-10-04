from flask import Flask, jsonify, send_from_directory, request
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


# Route to serve images from the output directory
import os
@app.route('/output-image')
def serve_output_image():
    filename = request.args.get('filename')
    if not filename:
        return jsonify({'error': 'No filename provided'}), 400
    output_dir = os.path.join(os.path.dirname(__file__), 'output')
    file_path = os.path.join(output_dir, filename)
    if not os.path.isfile(file_path):
        return jsonify({'error': 'File not found'}), 404
    return send_from_directory(output_dir, filename)

if __name__ == "__main__":
    app.run(debug=True)
