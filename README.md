# Pokémon Ash

## Catch them all

Ash is catching Pokemon in a world consisting of an infinite two-dimensional grid of houses. In each house there is exactly one Pokemon.
Ash starts by catching the Pokemon that is in the house where he starts. Then it moves to the house immediately to the north, south, east or west of where it is and catches the Pokémon it finds there, and so on. Attention: if he passes a house where he has already passed (and therefore where he has already caught a Pokémon), there is no longer a Pokémon for him to catch!
What we want to know is: starting with a world full of Pokémon (one in each house!), how many Pokémon does Ash catch for a given sequence of moves?


### **Input Format**

The program must read a line from stdin, which contains a sequence of moves. Each movement is described by a letter N, S, E or O(respectively: north, south, east, west).

### **Output Format**

The program should write a line to stdout, just with a number: how many pokemons did Ash catch?


## **Examples**

| Input      | Output |
| ---------- | ------ |
| E          | 2      |
| NESO       | 4      |
| NSNSNSNSNS | 2      |

*****

## Configure the project

```properties
npm install
```

## Execute the project

```properties
npm start 
```

## Execute test by Jest

```properties
npm test 
```

## Execute test performance

```properties
npm run test-performance 
```

### Recommended requirements

- Node.js - minimum version 15.14.0
- NPM - minimum version 7.7.6
