const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let enteredText;
  let selectedOption;
  let invalidCount = 0;
  
  readline.question('Please enter text: ', text => {
    enteredText = text.trim();
    selectOption();
  });
  
  function selectOption() {
    readline.question(`\nSelect an option:\n1. Palindrome\n2. Pangram\n3. Anagram\n\nEnter your choice: `, (option) => {
      selectedOption = option.trim();
  
      switch (selectedOption) {
        case '1':
          checkPalindrome();
          break;
        case '2':
          checkPangram();
          break;
        case '3':
          readline.question('\nEnter the subtext to check anagram: ', (subtext) => {
            checkAnagram(subtext.trim());
          });
          break;
        default:
          invalidCount++;
          if (invalidCount >= 4) {
            console.log('\x1b[31mFailure: please start again.\x1b[0m');
            readline.close();
          } else {
            console.log('\x1b[31mInvalid option. Please select 1, 2, or 3.\x1b[0m');
            selectOption();
          }
      }
    });
  }
  
  function checkPalindrome() {
    const cleanedStr = enteredText.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    const isPalindrome = cleanedStr === reversedStr;
    
    if (isPalindrome) {
      console.log(`\x1b[32mSuccess: The ${cleanedStr} is a palindrome.\x1b[0m`);
    } else {
      console.log(`\x1b[31mFailure: The ${cleanedStr} is not a palindrome.\x1b[0m`);
    }
    
    readline.close();
  }
  
  function checkPangram() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const isPangram = alphabet.split('').every((char) => enteredText.toLowerCase().includes(char));
    
    if (isPangram) {
      console.log(`\x1b[32mSuccess: The ${enteredText} is a pangram.\x1b[0m`);
    } else {
      console.log(`\x1b[31mFailure: The ${enteredText} is not a pangram.\x1b[0m`);
    }
    
    readline.close();
  }
  
  function checkAnagram(subtext) {
    const sortedInput = enteredText.toLowerCase().split('').sort().join('').trim();
    const sortedSubtext = subtext.toLowerCase().split('').sort().join('').trim();
    const isAnagram = sortedInput === sortedSubtext;
    
    if (isAnagram) {
      console.log(`\x1b[32mSuccess: "${enteredText}" and "${subtext}" are anagrams.\x1b[0m`);
    } else {
      console.log(`\x1b[31mFailure: "${enteredText}" and "${subtext}" are not anagrams.\x1b[0m`);
    }
    
    readline.close();
  }
  