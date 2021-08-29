class Validator {
    
    static isValidString(email, message) {
        alert(email)
      if (email.trim() == "" || email == null ){
        throw new Error(message);
      }
    }
  }