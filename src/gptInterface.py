import openai
import json
from os import environ as env

openai.api_key = env.get('chatGPT_API_Key', '')

def chat_with_gpt3(prompt):
    response = openai.Completion.create(
        engine='text-davinci-002',  # Choose the ChatGPT model you prefer
        prompt=prompt,
        max_tokens=500,  # Set the maximum length of the response
        temperature=0,  # Controls the randomness of the response
        n=1,  # Set the number of responses to generate
        stop=None  # Specify a stop token if desired
    )
    
    return response.choices[0].text.strip()

def gpt2objects(instring):
    return json.loads(instring)

def gptCodes(term):
    prompt = """
Write pseudocode to implement the math term `{textIn}`.  Use the following example for summation and say nothing else:

x = [2, 3, 5, 4]
sum = 0
for value in x:
\tsum += value
return sum
""".replace("{textIn}", term)
    return chat_with_gpt3(prompt)

def gptDefines(term):
    prompt = """
Write 5 definitions for the term `{textIn}` in layman's terms. Use the following format and say nothing else:
```
{
"definitions": ["first definition", "second definition", ... , "fifth definition"]
}
```
""".replace("{textIn}", term)
    return chat_with_gpt3(prompt)
    # return chat_with_gpt3(prompt)
