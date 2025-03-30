from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    # Render the homepage (create a matching templates/index.html later)
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    # Get user preferences from the form submission
    user_preferences = request.form.to_dict()
    
    # TODO: Integrate Llama Stack API here to get product recommendations
    # For now, we return a static placeholder list
    recommendations = [
        {
            "name": "Product 1",
            "price": 99.99,
            "description": "A great product for your needs.",
            "url": "https://example.com/product1"
        },
        {
            "name": "Product 2",
            "price": 149.99,
            "description": "Another excellent choice.",
            "url": "https://example.com/product2"
        }
    ]
    
    return render_template('index.html', recommendations=recommendations)

if __name__ == '__main__':
    app.run(debug=True)