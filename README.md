# Monty-Hall-problem

> Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?


Original paradox is speaking about three doors and only one car, however to have some fun with probability you can input as many doors and prizes as you wish. It helps to get a sense of the basic dynamic behind this game. 

### Here are several simulations.
##### Base case.
![3-1](https://user-images.githubusercontent.com/15817581/35255436-73fa56c6-0008-11e8-8f24-d9896f56df4f.gif)


##### As wee see, when we double the prize, swapping your initial choice doesn't matter.
![3-2](https://user-images.githubusercontent.com/15817581/35255439-75b6d534-0008-11e8-99b4-39aeb4143da8.gif)


##### Adding one more door decreases chances to win.We fall from 66,7% to 37,5%. Moreover, our delta for swapping drastically shortens - from 33,3% to 12,5%. 
![4-1](https://user-images.githubusercontent.com/15817581/35255440-7718039e-0008-11e8-8ce1-a6a52cf12b4c.gif)


##### More doors, less advantage of changing choice. 
![50-1](https://user-images.githubusercontent.com/15817581/35255441-78652dd0-0008-11e8-9bbc-8c440207989b.gif)

### Confusions
When first presented with the Monty Hall problem, an overwhelming majority of people assume that each of the two unopened doors has an **equal probability** and conclude that switching does not matter (Mueser and Granberg, 1999)
The typical behavior of the majority, i.e., not switching, may be explained by phenomena known in the psychological literature as 1) [the endowment effect](https://en.wikipedia.org/wiki/Endowment_effect), in which people tend to overvalue the winning probability of the already chosen – already "owned" – door; 2) [the status quo bias](https://en.wikipedia.org/wiki/Status_quo_bias) , in which people prefer to stick with the choice of door they have already made.

Sasha Volokh (2015) wrote that 
> any explanation that says something like 'the probability of door 1 was 1/3, and nothing can change that…' is automatically fishy: probabilities are expressions of our ignorance about the world, and new information can change the extent of our ignorance.

There is another viewpoint, which seems to be more prominent. Look at the inital pick as a probabilty of choosing right door. It's intuitive that you will fail 2/3 of times as right door on first pick. Put it differently, you have 2/3 chances to pick right door when change your initial door.
