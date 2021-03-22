# Pre-work - *Memory Game*

Disney Memory Game is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Sherina Marquez

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/foremost-bristle-building

## Required Functionality

The following **required** functionality is complete:

* [* ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [* ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [* ] Game buttons each light up and play a sound when clicked. 
* [* ] Computer plays back sequence of clues including sound and visual cue for each button
* [* ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [* ] User wins the game after guessing a complete pattern
* [* ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [* ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [* ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [* ] More than 4 functional game buttons
* [* ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [* ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Start Game:
https://cdn.glitch.com/e3d2292e-7370-4e8e-be0b-35929fe6806d%2FStart%20Game-Screen%20Recording.gif?v=1616444337050

Lose a Life:
https://cdn.glitch.com/e3d2292e-7370-4e8e-be0b-35929fe6806d%2FLose%20Life-Screen%20Recording.gif?v=1616444345824

Win Game:
https://cdn.glitch.com/e3d2292e-7370-4e8e-be0b-35929fe6806d%2FWin%20Game-Screen%20Recording.gif?v=1616444345927

Lose Game:
https://cdn.glitch.com/e3d2292e-7370-4e8e-be0b-35929fe6806d%2FLose%20Game-Screen%20Recording.gif?v=1616444345889


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Besides the directions listed in the pre-work tutorial, 
I used the additional websites that was linked in the expanding boxes of the tutorial, such as:

https://www.rapidtables.com/web/css/css-color.html

https://cssreference.io/property/position/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge that I encountered in creating this tutorial was making sure the appearance of my program was clear and organized.  
It is important that my web development is easy to understand by all, while having a clean look.  In addition, the increasing 
speed of each clue took a little longer than expected to achieve, but I overcame all challenges by trial and error.  The most 
efficient way to make sure my program worked properly was by testing it and breaking it down by what occurence in the game should 
come first.  By writing and testing my work incrementally, it gave me a better understanding of where my errors were coming from. 
For example, since I had a specific pattern sequence I wanted to follow, the increasing speed of each clue depended on the length 
of my pattern.  I tested each clue from the user's point of view to make sure the speeds were appropriate.  In addition, I wanted 
to make sure the nested statements of the guess function made sense.  To do so, I looked at the variables needed for each step and 
manipulated each one depending on the user guess possibilities. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing my submission, a question that comes to mind about web development is how to add more complex details and 
the best time to use those certain functions.  In addition, I would like to learn more about the web development process and how 
to further my skills in creating unique and helpful websites.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would refactor the clue functions to have the clues be played two tones at a 
time rather than by just adding a single tone to each clue.  This would help with games containing a longer pattern sequence or if 
the user wanted a more challenging approach. In addition, I would add a user text input box in which after winning the game, the user 
could win a bonus round by entering the song title of the completed memory song.


## License

    Copyright [Sherina Marquez]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.