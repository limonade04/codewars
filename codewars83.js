/*  Grasshopper - Messi goals function
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/ 

/* 
P: laLiga = int ; copaDelRey = int ; champions = int 
R: sum as an int 
E:  5, 10, 2  -> 17 
P: laLiga + copaDelRey + champions 
*/ 

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}