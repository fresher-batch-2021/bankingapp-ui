class Password {
    static isValidPassword(input, message) {
      if (input == "" || input.length < 8 || input.length > 15) {
        throw new Error(message);
      }
    }
  }