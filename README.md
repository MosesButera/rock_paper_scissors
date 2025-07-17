# rock_paper_scissors
Complete project breakdown: https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors#assignment

Summary: 

This is a continuation of previously created rock,paper, scissors game that was entirely played in the browser console. It is expanded to include a user interface. 


Rock-Paper-Scissors Game — Pseudocode

1. Set up scores:
        Start with both human and computer scores at 0

2. Define how the computer picks its move

        FUNCTION getComputerChoice:
        Pick a random number between 0 and 2
        IF number is 0:
            Set choice to ROCK
        ELSE IF number is 1:
            Set choice to PAPER
        ELSE:
            Set choice to SCISSORS

        Display the computer's choice on the screen
        RETURN the choice

3. Play a single round:

        FUNCTION playRound(humanChoice):
        Get computer's choice by calling getComputerChoice

        IF human and computer picked the same thing:
            Show "It's a Draw!" on the screen
            RETURN that result

        IF human beats computer (e.g., ROCK beats SCISSORS):
            Show "You Win!" on the screen
            RETURN that result
        ELSE:
            Show "You Lose!" on the screen
            RETURN that resultFUNCTION playRound(humanChoice):
        Get computer's choice by calling getComputerChoice

        IF human and computer picked the same thing:
            Show "It's a Draw!" on the screen
            RETURN that result

        IF human beats computer (e.g., ROCK beats SCISSORS):
            Show "You Win!" on the screen
            RETURN that result
        ELSE:
            Show "You Lose!" on the screen
            RETURN that result

4. Update the score: 

        FUNCTION updateScoreDisplay(result):
            IF the result is "You Win!":
                Add 1 to human's score
                Update the score display on screen
            ELSE IF the result is "You Lose!":
                Add 1 to computer's score
                Update the score display on screen

5. Check if the game is over

        FUNCTION checkGameOver:
            IF human OR computer has 5 points:
                Show the final score and "Game Over" message
                Stop the game by disabling buttons

6. What happens when a player clicks a button

        FUNCTION handleButtonClick(event):
                1. Get the button the player clicked on
                → Use event.target to find out which button was pressed

                2. Get the text from the button
                → This will be "ROCK", "PAPER", or "SCISSORS"

                3. Show the player’s choice on the webpage
                → For example: "Player Choice: ROCK"

                4. Play one round of the game
                → Call playRound() and pass in the player’s choice
                → Store the result ("You Win!", "You Lose!", or "It's a Draw!")

                5. Show the result in the browser console
                → Example: "Game result: You Win!"

                6. Update the score on the screen
                → Call updateScoreDisplay() and give it the result
                → It will add 1 to the winner’s score and display it

                7. Show the new score in the browser console
                → For debugging: "Latest Score: 1"

                8. Check if either player has reached 5 points
                → If yes, display final message
                → Disable the buttons so the game stops


7. Start the game

        FUNCTION getHumanChoice:
            Set up event listeners on the ROCK, PAPER, and SCISSORS buttons
            When clicked, they will run handleButtonClick

8. Stop the game

        FUNCTION removeHumanChoice:
            Remove the click listeners from the buttons

9. Begin the game

        Call getHumanChoice to start listening for clicks
Creating the UI: 


Problem/Plan: 

    Play a round of rock paper scissors until either player or computer
    reaches 5 points. 

    Player input: 
    There are three buttons for each rock, paper, and scissor that you
    will use to input your choice.  

    output: 
    after user clicks one button computer outputs its own choice 


    order of items on the screen/UI design: 

    1. div - some clever title like ROCK, PAPER, SCISSORS, GO

    2. div - Random output of image of either ROCK, PAPER, or SCISSORS for
    computer. output should come out in the form of an image of rock,
    paper, or scissors only after the human has made decisions (6. is
    done.)

    3. div - Round result. saying either "you win the round" or 
    "computer wins this round". 

    4. Score result of each round recorded in separated in different 
    divs. 

    5. Output of the image after user selects either rock, paper, or 
    scissors. 

    6. three buttons with images on them to make it look more like 
    a game. 

    7. div - result of the final score for each and "Game over". 


Given your inputs, what are the steps necessary to return the 
desired output?

    - player chooses one of three buttons "ROCK, PAPER, or SCISSORS"
        1. create a reference to all the class names of the buttons
        and store them in a variable. create a reference to the 
        playerOutputDiv and store it in a variable. 
        2. add a click event lister and iterate through the buttons class
        nodes stored in button variable. when a button is clicked past its
        text content in the playerOutputDiv. save it in a new variable 
        called playerSelection making it easier to use it as a parameter 
        in the playRound function. that is after player selects button, 
        it is saved in playerOutputDiv and then goes through the playRound function logic. 

    - player's choice shows up in "player decision" div as an image.

    - computer is randomly assigned a choice in div as an image. 
        1. getComputerChoice () generates either 0,1,or 2 add an if 
        condition for if 0 return ROCK, 1 return PAPER, 2 return SCISSORS
        to the div class="computer-choice" and also use the result in 
        playRound () function. 

    - Round result is declared. "You win this round/ You loose"
        1.declare function playRound with parameter humanChoice. this logic
        will be used in the getHumanChoice function after a click event
        listener is added to all the buttons. when a button is clicked
        its textContent will be saved in a variable and compared to computerChoice
        to come to a result/win or loose round in the playRound function. 


    - PlayGam: 
    - computer/player score is increased depending on round result.
        1. write a function that adds 1 to two new variable humanScore/
        computerScore depending on if roundResultDiv.textContent =
        "You Win!" add 1 to humanScore else if add 1 to computerScore 
        else nothing in the case of draw. 

    - this iterates until either computer/player score reaches 5 points.
        1. if computerScore/playerScore is less 5 continue playRound 
        else announce "Game Oover!" you win/computer wins and announce
        computerScore and humanScore in the result div. 
        
        -move your click handler to a name function instead of anonymous on.
        -move humanScore and computerScore outside the click handler
        -create functions like updateScoreDisplay() and checkGameOver()
        - Inside your click handler:
            Call playRound()

            Then score(roundResult)

            Then checkGameOver()

        - if game over use 
        Use removeEventListener('click', handleClick) on all buttons.

        Display final results in finalResultDiv.
    
    
        - When 5 points is reached Game over is announced a Final Score is
    announced. 

Play a round of rock paper scissors until either player or computer
    reaches 5 points.

    
