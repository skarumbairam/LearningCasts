# SOLID PRINCIPLE & DESIGN PATTERS 

## What are SOLID Principles?

SOLID principles are five design principles that help developers create scalable, maintainable, and flexible software, mainly in object-oriented programming. 
These principles improve code readability, reduce dependencies, and make software easier to extend and modify.

### 1. Single Responsiblility (SRP)
A class should have only one reason to change.

Example: A User class should not handle user data save, send email, authentication, logging, or email notifications. Instead, create separate classes like AuthService, Logger, and EmailService.

```
BAD Example:

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  authentication() {
    console.log("Check user login ...");
  }

  saveToDatabase() {
    console.log("Saving user to the database...");
  }

  sendEmail() {
    console.log("Sending welcome email...");
  }
}

GOOD Example:

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {
    console.log(`Saving ${user.name} to the database...`);
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    console.log(`Sending welcome email to ${user.email}...`);
  }
}

// Usage
const user = new User("John Doe", "john@example.com");
const userRepository = new UserRepository();
const emailService = new EmailService();

userRepository.save(user);
emailService.sendWelcomeEmail(user);

```

### 2. Open/Closed Principle (OCP)
Software entities should be open for extension but closed for modification.

Example: Use inheritance or interfaces to extend functionality instead of modifying existing code. A PaymentProcessor class can be extended for CreditCardPayment and PayPalPayment instead of modifying the original class.

```
BAD EXAMPLE: Modifying a class every time a new payment method is added

class PaymentProcessor {
  process(paymentType) {
    if (paymentType === "creditCard") {
      console.log("Processing credit card payment...");
    } else if (paymentType === "paypal") {
      console.log("Processing PayPal payment...");
    }
  }
}

GOOD EXAMPLE: Using polymorphism to extend behavior

class Payment {
  pay() {
    throw new Error("Method not implemented");
  }
}

class CreditCardPayment extends Payment {
  pay() {
    console.log("Processing credit card payment...");
  }
}

class PayPalPayment extends Payment {
  pay() {
    console.log("Processing PayPal payment...");
  }
}

class PaymentProcessor {
  process(paymentMethod) {
    paymentMethod.pay();
  }
}

// Usage
const paymentProcessor = new PaymentProcessor();
paymentProcessor.process(new CreditCardPayment()); 
paymentProcessor.process(new PayPalPayment());

Now, we can easily add new payment methods (e.g., BitcoinPayment) without modifying PaymentProcessor.
```

### 3. Liskov Substitution Principle (LSP)
Subtypes should be substitutable for their base types without altering behavior.

Example: If Rectangle is a base class and Square is a subclass, Square should not break the functionality of Rectangle when used in place of it.

Subclasses should be interchangeable with their base class without breaking functionality.

```

BAD EXAMPLE: A subclass that violates expected behavior

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  setWidth(width) {
    this.width = width;
    this.height = width; // Unintended side effect!
  }
}

const square = new Square(4);
square.setWidth(5);
console.log(square.getArea()); // ❌ Unexpected result!

GOOD EXAMPLE: Using composition instead of inheritance

class Shape {
  getArea() {
    throw new Error("Method not implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  getArea() {
    return this.size * this.size;
  }
}

// Usage
const rectangle = new Rectangle(4, 5);
const square = new Square(4);

console.log(rectangle.getArea()); // ✅ 20
console.log(square.getArea());    // ✅ 16

Now, Square and Rectangle both follow expected behavior without modifying parent class behavior.

```

### 4. Interface Segregation Principle (ISP)
Clients should not be forced to depend on interfaces they do not use. 

Example: Instead of a MultifunctionPrinter interface with print(), scan(), and fax(), create separate interfaces like Printer, Scanner, and FaxMachine for classes that need only specific functionalities.

```
BAD EXAMPLE: A class forced to implement unnecessary methods

class MultiFunctionPrinter {
  print() {
    console.log("Printing...");
  }

  scan() {
    console.log("Scanning...");
  }

  fax() {
    console.log("Faxing...");
  }
}

class BasicPrinter extends MultiFunctionPrinter {
  fax() {
    throw new Error("Fax not supported!");
  }
}

BasicPrinter must implement fax() even if it doesn't support faxing.

GOOD EXAMPLE: Creating separate interfaces

class Printer {
  print() {
    throw new Error("Method not implemented");
  }
}

class Scanner {
  scan() {
    throw new Error("Method not implemented");
  }
}

class Fax {
  fax() {
    throw new Error("Method not implemented");
  }
}

class BasicPrinter extends Printer {
  print() {
    console.log("Printing...");
  }
}

class MultiFunctionDevice extends Printer {

  print() {
    console.log("Printing...");
  }
  
  scan() {
    console.log("Scanning...");
  }

  fax() {
    console.log("Fax...");
  }
}

// Usage
const printer = new BasicPrinter();
printer.print(); // ✅ Works fine

const mfd = new MultiFunctionDevice();
mfd.scan(); // ✅ Works fine
mfd.fax(); // ✅ Works fine

//🔹 Now, BasicPrinter is not forced to implement scan() or fax().

```
###  5. Dependency Inversion Principle (DIP)
High-level modules should not depend on low-level modules. Both should depend on abstractions.

```
BAD EXAMPLE: High-level module depending on low-level module

class MySQLDatabase {
  connect() {
    console.log("Connected to MySQL");
  }
}

class UserService {
  constructor() {
    this.database = new MySQLDatabase(); // ❌ Direct dependency
  }

  getUser() {
    this.database.connect();
    console.log("Fetching user...");
  }
}

UserService is tightly coupled with MySQLDatabase. Switching to MongoDB would require changing UserService.

GOOD EXAMPLE: Depend on abstractions (interfaces)

class Database {
  connect() {
    throw new Error("Method not implemented");
  }
}

class MySQLDatabase extends Database {
  connect() {
    console.log("Connected to MySQL");
  }
}

class MongoDB extends Database {
  connect() {
    console.log("Connected to MongoDB");
  }
}

class UserService {
  constructor(database) {
    this.database = database;
  }

  getUser() {
    this.database.connect();
    console.log("Fetching user...");
  }
}

// Usage
const db = new MongoDB(); // Can easily switch to MySQL
const userService = new UserService(db);
userService.getUser();

Now, UserService depends on the Database abstraction, not a specific database implementation.
```
