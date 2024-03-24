import tensorflow as tf
from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
from io import BytesIO
from flask_cors import CORS

model = tf.keras.models.load_model('big_my_model.keras')


app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image part'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected image'}), 400

    if file:
        try:
            image_data = file.read()
            image = Image.open(BytesIO(image_data))

            if image.mode == 'RGBA':
                image = image.convert('RGB')

            image = image.resize((224, 224))
            image_array = np.array(image) / 255.0
            image_array = np.expand_dims(image_array, axis=0)

            predictions = model.predict(image_array)

            return jsonify(predictions=predictions.tolist())


        except Exception as e:
            return jsonify({'error': str(e)}), 500

    return jsonify({'error': 'Invalid request'}), 400


if __name__ == '__main__':
    app.run(debug=True)
