const generateName = () => {
    const firstNames = [];

    // Generate 5000 random first names
    for (let i = 0; i < 5000; i++) {
      let name = '';
      const length = Math.floor(Math.random() * 5) + 5; // Random length between 5 and 10
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
      let useVowel = Math.random() < 0.5;
    
      // Generate the name
      for (let j = 0; j < length; j++) {
        if (useVowel) {
          name += vowels[Math.floor(Math.random() * vowels.length)];
        } else {
          name += consonants[Math.floor(Math.random() * consonants.length)];
        }
        useVowel = !useVowel;
      }
    
      // Capitalize the first letter
      name = name.charAt(0).toUpperCase() + name.slice(1);
    
      // Add the name to the array
      firstNames.push(name);
    }
    
    // Get a random name from the array
    const randomName = firstNames[Math.floor(Math.random() * firstNames.length)];
    
    return randomName;
}

export { generateName };