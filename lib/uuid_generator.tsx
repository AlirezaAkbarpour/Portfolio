export function generateUUID() {
    // Generate random hexadecimal digits
    var digits = "0123456789";
    var n = digits.length;
  
    // Generate random hexadecimal digits and concatenate them to form the UUID
    var uuid = "";
    for (var i = 0; i < 8; i++) {
      uuid += digits[Math.floor(Math.random() * n)];
    }

    return uuid;
  }