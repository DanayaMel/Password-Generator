/**
 * Generates a password based on password configurations.
 */
const generatePassword = (password_options) => {
    let password;
    switch (password_options.type) {
        case 'Random':
            password = generateRandomPassword(password_options);
            break;
        case 'Memorable':
            password = generateMemorablePassword(password_options.length);
            break;
        case 'PIN':
            password = generatePIN(password_options.length);
            break;
        default:
            alert('Unable to generate password. Please try again!');
            break;
    };

    return password;
}

/**
 * Generates a random password with different characters.
 */
const generateRandomPassword = (password_options) => {
    let password = '';
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '1234567890';
    const symbols = '!@&#^%&#*';

    chars = password_options.include_numbers ? chars + numbers : '';
    chars = password_options.include_symbols ? chars + symbols : '';

    for (let i = 0; i < password_options.length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars.charAt(randomIndex);
    }

    return password;
}

/**
 * Generates a memorable password with a random word from an array of words.
 */
const generateMemorablePassword = (length) => {
    let password = getRandomWord();
    for (let i=0; i<length; i++) {
        password = password + '-' + getRandomWord();
    }

    return password;
}

/**
 * Generates a numerical PIN.
 */
const generatePIN = (length) => {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a random word.
 */
const getRandomWord = () => {
    let randomWords = ["red", "green", "blue", "pink", "purple"];
    let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

    return randomWord;
}

export default generatePassword;