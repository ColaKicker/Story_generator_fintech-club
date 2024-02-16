from flask import Flask, request, jsonify
from llama_cpp import Llama

app = Flask(__name__)

@app.route('/generate_story', methods=['POST'])
def generate_story():
    data = request.get_json()
    character = data['character']
    setting = data['setting']
    plot = data['plot']
    mood = data['mood']

    llm = Llama(
        model_path="./phi-2.Q4_K_S.gguf",
        n_ctx=2048,
        n_threads=8,
        n_gpu_layers=35
    )

    output = llm(
        f"{character} went to {setting} and encountered {plot}. {character} felt {mood}.",
        max_tokens=512,
        stop=["</s>"],
        echo=True
    )

    return jsonify({'story': output})

if __name__ == '__main__':
    app.run(debug=True)
