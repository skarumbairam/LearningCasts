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
| Builder | Creational | Step-by-step object creation |
| Prototype | Creational | Object cloning |
| Singleton | Creational | Global instances (e.g., database) |
| | |
| Adapter | Structural | Making incompatible interfaces work |
| Bridge | Structural | Decoupling abstraction from implementation |
| Composite | Structural | | 
| Decorator | Structural | Adding extra functionality dynamically |
| Flyweight | Structural | Memory optimization |
| Facade | Structural | provides a simplified interface to a library, a framework, or any other complex set of classes. |
| Proxy | Structural | Controlling access (e.g., caching) |
| | |
| Chain of Responsibility | Behavioral |  |
| Command	 | Behavioral	| Encapsulating actions as objects |
| Observer | Behavioral | Event-driven programming |
| Iterator | Behavioral | |
| Memento | Behavioral | |
| Mediator	| Behavioral	| Centralized communication |
| Strategy | Behavioral | Switching algorithms dynamically |
| State	| Behavioral | Handling UI state changes
| Template Method | Behavioral |  |
| Visitor | Behavioral | 

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

### Adapter Pattern
Allows incompatible interfaces to work together.
```
class OldSystem {
  request() {
    return "Old system response";
  }
}

class NewSystem {
  newRequest() {
    return "New system response";
  }
}

class Adapter {
  constructor(newSystem) {
    this.newSystem = newSystem;
  }

  request() {
    return this.newSystem.newRequest();
  }
}

const adapter = new Adapter(new NewSystem());
console.log(adapter.request()); // ✅ New system response

```
### Decorator Pattern
Adds new functionality dynamically without modifying existing code.

```
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

const myCoffee = new MilkDecorator(new Coffee());
console.log(myCoffee.cost()); // ✅ 7

//Middleware functions in Express.js.
```

### Proxy Pattern
Acts as a wrapper to control access to another object. Use case: Lazy initialization, security, caching.

```
class API {
  fetchData() {
    console.log("Fetching data from the API...");
    return { data: "Real API Response" };
  }
}

class APIProxy {
  constructor() {
    this.api = new API();
    this.cache = null;
  }

  fetchData() {
    if (!this.cache) {
      this.cache = this.api.fetchData();
    }
    console.log("Returning cached data...");
    return this.cache;
  }
}

// Usage
const proxy = new APIProxy();
console.log(proxy.fetchData()); // ✅ Fetching from API
console.log(proxy.fetchData()); // ✅ Returning cached data

//Proxying API requests to reduce server load.
```
### Flyweight Pattern
Reduces memory usage by sharing common object data instead of duplicating it. Use case: Handling a large number of similar objects efficiently (e.g., rendering thousands of UI elements).

```
class Character {
  constructor(char) {
    this.char = char;
  }

  render(font) {
    console.log(`Rendering '${this.char}' in ${font} font.`);
  }
}

class CharacterFactory {
  constructor() {
    this.characters = {};
  }

  getCharacter(char) {
    if (!this.characters[char]) {
      this.characters[char] = new Character(char);
    }
    return this.characters[char];
  }
}

// Usage
const factory = new CharacterFactory();
const charA = factory.getCharacter("A");
const charB = factory.getCharacter("B");
const anotherCharA = factory.getCharacter("A");

console.log(charA === anotherCharA); // ✅ true (same instance)
charA.render("Arial");

//Optimizing performance in games (reusing trees, enemies, etc.).
```

### Bridge Pattern
Decouples abstraction from implementation to allow independent development. Implementing UI components that work with different APIs.

```
class Device {
  turnOn() {
    throw new Error("Method not implemented");
  }
}

class TV extends Device {
  turnOn() {
    console.log("TV is turned ON");
  }
}

class Remote {
  constructor(device) {
    this.device = device;
  }

  pressPowerButton() {
    this.device.turnOn();
  }
}

// Usage
const tv = new TV();
const remote = new Remote(tv);
remote.pressPowerButton(); // ✅ TV is turned ON

//Decoupling UI rendering from backend logic.
```
##  Behavioral Patterns (Communication Between Objects) & code examples

### Mediator Pattern
Centralizes communication between multiple objects. Use case: Chat applications where multiple users communicate via a centralized mediator (chat server).

```
class ChatRoom {
  sendMessage(user, message) {
    console.log(`${user.name}: ${message}`);
  }
}

class User {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom;
  }

  send(message) {
    this.chatRoom.sendMessage(this, message);
  }
}

// Usage
const chatRoom = new ChatRoom();
const user1 = new User("Alice", chatRoom);
const user2 = new User("Bob", chatRoom);

user1.send("Hello, Bob!"); // ✅ Alice: Hello, Bob!
user2.send("Hey, Alice!"); // ✅ Bob: Hey, Alice!
// Centralized event handling.
```

### State Pattern
Allows an object to change behavior when its state changes. Use case: Handling UI states (e.g., button disabled/enabled).

```
class TrafficLight {
  constructor() {
    this.state = new RedLight();
  }

  changeState(state) {
    this.state = state;
  }

  showSignal() {
    this.state.showSignal();
  }
}

class RedLight {
  showSignal() {
    console.log("Stop! Red light.");
  }
}

class GreenLight {
  showSignal() {
    console.log("Go! Green light.");
  }
}

// Usage
const light = new TrafficLight();
light.showSignal(); // ✅ Stop! Red light.
light.changeState(new GreenLight());
light.showSignal(); // ✅ Go! Green light.

//UI elements that change behavior based on state.
```

### Observer Pattern
Used for event-driven programming, where multiple objects listen for state changes.

```
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log("Received data:", data);
  }
}

const subject = new Subject();
const observer1 = new Observer();
subject.subscribe(observer1);
subject.notify("New update!"); // ✅ Received data: New update!

```
### Strategy Pattern
Allows switching between different algorithms dynamically.

```
class PaymentContext {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  pay(amount) {
    this.strategy.pay(amount);
  }
}

class CreditCardPayment {
  pay(amount) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class PayPalPayment {
  pay(amount) {
    console.log(`Paid ${amount} using PayPal`);
  }
}

// Usage
const payment = new PaymentContext();
payment.setStrategy(new PayPalPayment());
payment.pay(100); // ✅ Paid 100 using PayPal

//Use case: Payment processing, authentication strategies.


```
### Command Pattern
Encapsulates actions as objects, allowing for undo/redo operations.

```

class Light {
  on() {
    console.log("Light is ON");
  }

  off() {
    console.log("Light is OFF");
  }
}

class LightOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}

class RemoteControl {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Usage
const light = new Light();
const lightOn = new LightOnCommand(light);

const remote = new RemoteControl();
remote.setCommand(lightOn);
remote.pressButton(); // ✅ Light is ON

//Use case: Implementing undo/redo functionality.


```

## Classes in TypeScript – A Complete Guide

In TypeScript, a class is a blueprint for creating objects with properties and methods. It supports OOP concepts like encapsulation, inheritance, and polymorphism while also adding type safety.

### What are the oops concepts

**1. Encapsulation (Data Hiding**

- Encapsulation restricts direct access to object data and modifies it using getters & setters.
- Protects data from unintended modifications.
- Improves security by exposing only necessary details.
```
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance; // Accessing private data safely
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // ✅ Output: 1500
// console.log(account.balance); ❌ Error: 'balance' is private
  
```
- private balance → Cannot be accessed directly.
- getBalance() → Safely retrieves the balance.

**2️. Inheritance (Code Reusability)**

- Inheritance allows one class to acquire properties & behaviors of another class.
- Reduces code duplication
- Promotes reusability
```
class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log("Some generic sound...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof Woof!"); // Overriding method
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // ✅ Output: Woof Woof!

```
- extends → Dog class inherits properties/methods of Animal.
-  Method Overriding → Dog modifies the behavior of makeSound().

**3. Polymorphism (One Interface, Many Forms)**

- Polymorphism allows a single function or method to have different implementations based on the context.
- Reduces complexity
- Increases flexibility
```
class Shape {
  calculateArea(): void {
    console.log("Calculating area...");
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): void {
    console.log(`Circle Area: ${Math.PI * this.radius * this.radius}`);
  }
}

const shape1: Shape = new Circle(5);
shape1.calculateArea(); // ✅ Output: Circle Area: 78.5

```
- Method Overriding → Child class provides its own version of calculateArea().
- Same interface (Shape), different implementations (Circle, Rectangle, etc.).

**4. Abstraction (Hiding Implementation Details)**

- Abstraction hides complex implementation and only exposes essential features.
- Simplifies code readability
- Enhances security by hiding unnecessary details

```
abstract class Vehicle {
  constructor(public brand: string) {}

  abstract move(): void; // Must be implemented by subclasses
}

class Car extends Vehicle {
  move(): void {
    console.log(`${this.brand} car is moving...`);
  }
}

const myCar = new Car("Toyota");
myCar.move(); // ✅ Output: Toyota car is moving...


```
- Abstract classes cannot be instantiated directly.
- Abstract methods must be implemented in child classes.


### Declaring a Class in TypeScript

A class is defined using the class keyword and can contain properties, methods, and a constructor.

```
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("John", 25);
person1.greet(); // Output: Hello, my name is John and I am 25 years old.

```

- name and age → Class properties
- constructor() → Initializes properties when creating an object
- greet() → Method inside the class

### Access Modifiers (Encapsulation) in TypeScript

Access modifiers define the visibility of class members. There are three types:

- public	- Accessible anywhere (default modifier)
- private - Accessible only inside the class
- protected - Accessible within the class and its subclasses

**Using Access Modifiers**

```
class Employee {
  public name: string; // Accessible anywhere
  private salary: number; // Only accessible inside the class
  protected department: string; // Accessible inside the class & subclasses

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  public getSalary(): number {
    return this.salary; // Accessible inside class
  }
}

class Manager extends Employee {
  getDepartment(): string {
    return this.department; // ✅ Allowed (protected members are accessible in subclasses)
  }
}

const emp = new Employee("Alice", 50000, "IT");
console.log(emp.name); // ✅ Accessible (public)
console.log(emp.getSalary()); // ✅ Accessible via public method
// console.log(emp.salary); ❌ Error (private members can't be accessed outside the class)

```

- public → Can be accessed anywhere
- private → Cannot be accessed outside the class
- protected → Can be accessed in the class and its child classes

### Readonly & Static Members in TypeScript

Prevents modification after initialization (used for constants).

```
class Company {
  readonly companyName: string = "TechCorp";
  constructor(name: string) {
    this.companyName = name;
  }
}

const c = new Company("InnovateX");
console.log(c.companyName); // ✅ Allowed
// c.companyName = "NewCorp"; ❌ Error: Cannot assign to 'companyName' because it is a read-only property.

```
### static Modifier

Belongs to the class itself, not an instance.

```
class MathUtils {
  static PI: number = 3.14;

  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

console.log(MathUtils.PI); // ✅ Access without creating an instance
console.log(MathUtils.circleArea(5)); // Output: 78.5
```

### Getters & Setters in TypeScript

Encapsulates data and controls access using getter & setter methods.

```
class Product {
  private _price: number = 0;

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) {
      console.log("Price cannot be negative");
    } else {
      this._price = value;
    }
  }
}

const item = new Product();
item.price = 50; // ✅ Setter called
console.log(item.price); // ✅ Getter called, Output: 50
item.price = -10; // ❌ Error: Price cannot be negative


```
- get → Retrieves the value
- set → Validates & modifies the value

### Inheritance in TypeScript (Extending Classes)

Allows a class to inherit properties & methods from another class using extends.

```
class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name); // Call the parent class constructor
  }

  makeSound(): void {
    console.log("Woof Woof!"); // Overriding the method
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.name); // ✅ Output: Buddy
myDog.makeSound(); // ✅ Output: Woof Woof!


```
- super(name) → Calls the parent class constructor
- Methods can be overridden in child classes

### Abstract Classes in TypeScript

- Cannot be instantiated directly
- Used as a base class for other classes
- Can have abstract methods (must be implemented by subclasses)

```
abstract class Vehicle {
  constructor(public brand: string) {}

  abstract move(): void; // Abstract method (must be implemented in subclass)
}

class Car extends Vehicle {
  move(): void {
    console.log(`${this.brand} car is moving`);
  }
}

const myCar = new Car("Toyota");
myCar.move(); // ✅ Output: Toyota car is moving
// const v = new Vehicle("Bike"); ❌ Error: Cannot create an instance of an abstract class

```
- abstract move() → Must be implemented in the child class

### Interfaces vs Classes in TypeScript

| Feature | Interface |  Class|
| -------- | --------- | --------------|
|  Purpose  |  Defines a structure	 |  Defines a blueprint with behavior |
|  Implementation  | Cannot have implementation	 | Can have methods & properties |
|  Instantiation  |  Not instantiable	 | Can create objects |
|  Usage  | Used for type-checking	 | Used for object creation |


```
interface AnimalInterface {
  name: string;
  makeSound(): void;
}

class Cat implements AnimalInterface {
  constructor(public name: string) {}

  makeSound(): void {
    console.log("Meow!");
  }
}

const myCat = new Cat("Whiskers");
myCat.makeSound(); // Output: Meow!

```
- Interfaces define a structure but do not provide implementation
- Classes can implement multiple interfaces

