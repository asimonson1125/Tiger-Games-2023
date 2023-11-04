# Tiger Games 2023 Hackathon
Andrew Simonson, ANdrew Issacson, Mo Alam

## we do things

## How to Run
To run the flask webserver:
#### Install Dependancies:
`pip3 install -r requirements.txt`

#### Navigate to src
`cd src`

#### Run:
`python3 app.py`
OR:
`flask run`


## Using ChatGPT
Right now we use chatgpt to fetch some data.  You'll need an api key.
Create `envs.py` in the src folder with the following:
```
import os

os.environ['chatGPT_API_Key'] = KEY_AS_STRING
```