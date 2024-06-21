# String Checker Using Node.

## how to run?
- install Node js.
- run npm app.js

# how it works?

### Enter Text:
 - You will be prompted to enter a text string that you want to analyze.

### Select an Option:
- Choose one of the following options by entering the corresponding number:
  - 1: Check if the entered text is a palindrome.
  - 2: Check if the entered text is a pangram.
  - 3: Check if the entered text and a subtext (for anagram check) are anagrams.

### Input Requirements:
- For option 3 (Anagram Check), after selecting the option, you will be prompted to enter a subtext to compare with the main text.

## Result:
- After inputting the necessary information, the application will display whether the input meets the selected criteria.
    - Success messages will be displayed in green.
    - Failure messages will be displayed in red.

### Palindrome String Check:
- A palindrome is a string that reads the same forward and backward. To determine if a string is a palindrome, you compare the string to its reverse. If both are identical, the string is a palindrome.

### Anagram String Check:
- Anagrams are strings that have the same characters in a different order. To check if two strings are anagrams, you compare their character frequencies. If both strings contain the same characters with the same frequencies, they are anagrams.

### Pangram String Check:
- A pangram is a string that contains every letter of the alphabet at least once. To verify if a string is a pangram, you typically check if it includes all 26 letters of the English alphabet, disregarding case.
