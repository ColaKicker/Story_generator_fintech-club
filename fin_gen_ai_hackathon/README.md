# Fintech

This repository contains code for a Llama-based conversational AI model, specifically designed for generating text based on prompts. The model is trained on a dataset related to financial technology (fintech) and is capable of generating text that is relevant to this domain.

## Requirements

- Python 3.7 or higher
- `llama_cpp` library (install using `pip install llama_cpp`)
- GPU acceleration (optional, but recommended for faster inference)

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/Eeman1113/fintech.git
   ```

2. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Download the pre-trained model file (`phi-2.Q4_K_S.gguf`) from [here](https://example.com/model) and place it in the `models` directory.

4. Run the `main.py` script:

   ```bash
   python main.py
   ```

5. Follow the instructions in the console to interact with the model.

## Examples

### Simple Inference

```python
from llama_cpp import Llama

llm = Llama(
    model_path="./phi-2.Q4_K_S.gguf",
    n_ctx=2048,
    n_threads=8,
    n_gpu_layers=35
)

output = llm(
    "Instruct: {prompt}\nOutput:",
    max_tokens=512,
    stop=["</s>"],
    echo=True
)
```

### Chat Completion API

```python
llm = Llama(model_path="./phi-2.Q4_K_S.gguf", chat_format="llama-2")

response = llm.create_chat_completion(
    messages = [
        {"role": "system", "content": ""},
        {
            "role": "user",
            "content": "Write a story about llamas."
        }
    ]
)

print(response['choices'][0]['message']['content'])
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The Llama team for providing the `llama_cpp` library and pre-trained models.
- The financial technology community for providing the data used to train the model.
