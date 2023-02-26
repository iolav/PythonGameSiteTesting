from flask import Flask, request

app = Flask(__name__)

@app.route("/run")
def run_command():
    command = request.args.get("command")
    if command == "init":
        game_state = initialize_game()
        return game_state
    else:
        return "Invalid command"

def initialize_game():
    game_state = ""

    print("Welcome to the game!")
    input("Test: ")
    
    return game_state