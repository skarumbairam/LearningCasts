# SOLID PRINCIPLE & DESIGN PATTERNS 

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
SRP: One class, one responsibility ✅

OCP: Extend without modifying existing code ✅

LSP: Subclasses should behave as expected ✅

ISP: Don't force classes to implement unnecessary methods ✅

DIP: Depend on abstractions, not concrete classes ✅

## What are DESIGN Patterns?
Design patterns are reusable solutions to common problems in software design. They help improve code structure, maintainability, and scalability.

### Categories of Design Patterns
1. Creational Patterns → Object creation strategies.

2. Structural Patterns → Composition of objects and classes.

3. Behavioral Patterns → Communication between objects.


| Pattern | Category |  Use Case|
| -------- | --------- | --------------|
| Factory | Creational| Object creation|
| Abstract Factory | Creational| Creating related objects |
| Prototype | Creational | Object cloning |
| Singleton | Creational | Global instances (e.g., database) |
| Builder | Creational | Step-by-step object creation |
| | |
| Adapter | Structural | Making incompatible interfaces work |
| Proxy | Structural | Controlling access (e.g., caching) |
| Flyweight | Structural | Memory optimization |
| Bridge | Structural | Decoupling abstraction from implementation |
| Decorator | Structural | Adding extra functionality dynamically |
| Composite | Structural | lets you compose objects into tree structures and then work with these structures as if they were individual objects.|
| Facade | Structural | provides a simplified interface to a library, a framework, or any other complex set of classes. |
| | |
| Chain of Responsibility | Behavioral |  |
| Iterator | Behavioral | |
| Memento | Behavioral | |
| Template Method | Behavioral |  |
| Visitor | Behavioral | 
| Observer | Behavioral | Event-driven programming |
| Strategy | Behavioral | Switching algorithms dynamically |
| Command	 | Behavioral	| Encapsulating actions as objects |
| Mediator	| Behavioral	| Centralized communication |
| State	| Behavioral | Handling UI state changes

## Creational Patterns & code examples

Let's see some very often-used patterns deal with object creation efficiently.

### Factory Pattern
✔️ Used to create objects without specifying their exact class.

```
// Without Facotry

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

// With Factory Pattern
class CarFactory {
  static createCar(brand, model) {
    return new Car(brand, model);
  }
}

const car1 = CarFactory.createCar("Toyota", "Corolla");
const car2 = CarFactory.createCar("Honda", "Civic");

//Centralized object creation logic.
```

### Abstract Factory Pattern
✔️ Provides an interface for creating families of related objects without specifying their concrete classes.

✔️ Difference from Factory: A Factory creates a single type of object, while an Abstract Factory creates multiple related objects.

```
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(`Driving a ${this.brand}`);
  }
}

class Bike {
  constructor(brand) {
    this.brand = brand;
  }

  ride() {
    console.log(`Riding a ${this.brand}`);
  }
}

class VehicleFactory {
  static createVehicle(type, brand) {
    switch (type) {
      case "car":
        return new Car(brand);
      case "bike":
        return new Bike(brand);
      default:
        throw new Error("Unknown vehicle type");
    }
  }
}

// Usage
const car = VehicleFactory.createVehicle("car", "Tesla");
car.drive(); // ✅ Driving a Tesla

const bike = VehicleFactory.createVehicle("bike", "Yamaha");
bike.ride(); // ✅ Riding a Yamaha

//Creating UI components for different platforms (e.g., Material UI for Android and Cupertino UI for iOS).

```
### Prototype Pattern
✔️ Used to clone existing objects instead of creating new ones.

```
const carPrototype = {
  drive() {
    console.log(`Driving a ${this.brand}`);
  },
};

const myCar = Object.create(carPrototype);
myCar.brand = "Tesla";

myCar.drive(); // ✅ Driving a Tesla

//Performance optimization by cloning instead of instantiating.
```
### Singleton Pattern
✔️ Ensures only one instance of a class exists.

```
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // ✅ true (same instance)

//Database connections, configuration settings.
```
### Builder Pattern
✔️ Used for creating complex objects step by step.

```
class Car {
  constructor() {
    this.brand = "";
    this.model = "";
    this.color = "";
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  build() {
    return this.car;
  }
}

const myCar = new CarBuilder().setBrand("Tesla").setModel("Model S").setColor("Red").build();
console.log(myCar);

//Simplifies object creation with many configurations.
```

## Structural Patterns & code examples

