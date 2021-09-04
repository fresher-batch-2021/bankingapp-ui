class Validator {

  static isValidString(email, message) {
    if (email.trim() == "" || email == null) {
      throw new Error(message);
    }
  }

  static isValidContact(mobilenumber, message) {
    if (mobilenumber.length != 10) {
      throw new Error(message);
    }
  }
  

    static isValidNumber(aadhar, message) {
      if (aadhar.length != 12) {
        throw new Error(message);
      }

  }
}