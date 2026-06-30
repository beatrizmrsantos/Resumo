# Technical Study Guide — Interview Preparation

*Beatriz Santos | Full-Stack / Software Engineer*


This document is a complete study guide. Each section explains concepts in
depth so you can learn and understand them, not just list topics.
Code examples are part of the learning — read them as explanatory text.


## Table of Contents



**Part 1 — Programming Languages**
- 1.01 Java
- 1.02 TypeScript
- 1.03 JavaScript
- 1.04 Dart
- 1.05 HTML
- 1.06 CSS
- 1.07 Python
- 1.08 C


**Part 2 — Backend Engineering**
- 2.01 Spring Boot
- 2.02 Node.js
- 2.03 REST APIs
- 2.04 GraphQL
- 2.05 Microservices
- 2.06 Authentication & Authorization
- 2.07 API Integration
- 2.08 WebSockets
- 2.09 SOAP
- 2.10 JSON
- 2.11 XML
- 2.12 Network protocols


**Part 3 — Frontend & Mobile**
- 3.01 React
- 3.02 Angular
- 3.03 Three.js
- 3.04 Next.js
- 3.05 React Native
- 3.06 Flutter
- 3.07 Kotlin
- 3.08 Swift
- 3.09 Vite
- 3.10 Tailwind CSS
- 3.11 SCSS
- 3.12 SPA (Single-Page Applications)
- 3.13 Responsive UI
- 3.14 Cross-Platform Development



**Part 4 — Cloud & Devops**
- 4.01 Cloud
- 4.02 Microsoft Azure
- 4.03 Google Cloud Platform (GCP)
- 4.04 Firebase
- 4.05 Docker
- 4.06 Kubernetes
- 4.07 CI/CD Pipelines
- 4.08 Git
- 4.09 GitHub
- 4.10 Bitbucket
- 4.11 Maven
- 4.12 YAML


**Part 5 — Databases**
- 5.01 SQL — Querying & Optimization
- 5.02 MySQL
- 5.03 PostgreSQL
- 5.04 NoSQL
- 5.05 MongoDB
- 5.06 Data Modelling


**Part 6 — Testing & Quality**
- 6.01 JUnit
- 6.02 Mockito
- 6.03 SonarQube
- 6.04 Types of Software Testing
- 6.05 Debugging
- 6.06 Code Reviews


**Part 7 — Engineering Practices**
- 7.01 Agile / Scrum
- 7.02 SDLC
- 7.03 Software Architecture
- 7.04 Secure Development
- 7.05 Performance Optimization
- 7.06 Production Support

**Part 8 — Quick Interview Questions**
- 8.01 Java
- 8.02 TypeScript
- 8.03 JavaScript
- 8.04 Dart
- 8.05 HTML
- 8.06 CSS
- 8.07 Python
- 8.08 C
- 8.09 Spring Boot
- 8.10 Node.js
- 8.11 REST APIs
- 8.12 GraphQL
- 8.13 Microservices
- 8.14 Authentication & Authorization
- 8.15 API Integration
- 8.16 WebSockets
- 8.17 SOAP
- 8.18 JSON
- 8.19 XML
- 8.20 Network Protocols
- 8.21 React
- 8.22 Angular
- 8.23 Three.js
- 8.24 Next.js
- 8.25 React Native
- 8.26 Flutter
- 8.27 Kotlin
- 8.28 Swift
- 8.29 Vite
- 8.30 Tailwind CSS
- 8.31 SCSS
- 8.32 SPA
- 8.33 Responsive UI
- 8.34 Cross-Platform Development
- 8.35 Cloud
- 8.36 Microsoft Azure
- 8.37 Google Cloud Platform
- 8.38 Firebase
- 8.39 Docker
- 8.40 Kubernetes
- 8.41 CI/CD Pipelines
- 8.42 Git
- 8.43 GitHub
- 8.44 Bitbucket
- 8.45 Maven
- 8.46 YAML
- 8.47 SQL — Querying & Optimization
- 8.48 MySQL
- 8.49 PostgreSQL
- 8.50 NoSQL
- 8.51 MongoDB
- 8.52 Data Modelling
- 8.53 JUnit 5
- 8.54 Mockito
- 8.55 SonarQube
- 8.56 Types of Software Testing
- 8.57 Debugging
- 8.58 Code Reviews
- 8.59 Agile / Scrum
- 8.60 SDLC
- 8.61 Software Architecture
- 8.62 Secure Development
- 8.63 Performance Optimization
- 8.64 Production Support


---

# Part 1 — Programming Languages



## 1.01 Java



### Overview

Java is a compiled-to-bytecode language, which means your source file (.java) is transformed into an intermediate format (.class) that is then executed by the JVM (Java Virtual Machine). This extra layer is what makes Java "write once, run anywhere" — the same bytecode runs on any operating system that has a JVM. Java is strongly typed (you must declare the type of every variable) and object-oriented, meaning code is organized into classes and objects.


### The Four Pillars of OOP



#### Encapsulation

Encapsulation means hiding the internal details of a class and exposing only what is necessary through public methods. 
Think of a bank account: the balance is private — you cannot directly access and change it. Instead, there are deposit() and withdraw() methods that control how the balance changes, including validations (e.g. you cannot withdraw more than you have). This protects the integrity of the object. 
In Java, encapsulation is done with private fields and public methods (getters/setters).

```java
class BankAccount {
    private double balance;   // private — nobody accesses this directly

    public void deposit(double amount) {
        if (amount > 0) balance += amount;   // validation lives here
    }

    public boolean withdraw(double amount) {
        if (amount > balance) return false;
        balance -= amount;
        return true;
    }

    public double getBalance() { return balance; }   // read-only access
}
```


#### Inheritance

Inheritance allows a class (subclass) to inherit fields and methods from another class (superclass), avoiding code duplication. 
It represents an IS-A relationship: a Dog IS-A Animal. 
The subclass can use everything the superclass has and add or override behaviour. A class can only have ONE superclass (single inheritance) but can implement multiple interfaces.

```java
class Animal {
    String name;
    void eat() { System.out.println(name + " is eating"); }
}

class Dog extends Animal {
    void bark() { System.out.println("Woof!"); }
}

Dog dog = new Dog();
dog.name = "Rex";
dog.eat();    // inherited from Animal
dog.bark();   // own method
```


#### Polymorphism

Polymorphism means "many forms". It allows the same reference type to behave differently depending on the actual object it holds. In the example below, both dog and cat are declared as Animal, but when you call speak(), each executes its own version. This lets you write generic code that works with any Animal without knowing the concrete type.

```java
class Animal  { void speak() { System.out.println("..."); } }
class Dog extends Animal { @Override void speak() { System.out.println("Woof"); } }
class Cat extends Animal { @Override void speak() { System.out.println("Meow"); } }

Animal[] animals = { new Dog(), new Cat() };
for (Animal a : animals) {
    a.speak();   // calls Dog.speak() or Cat.speak() at runtime (dynamic dispatch)
}
```

Two kinds of polymorphism:
  - **Compile-time (overloading)**: same method name, different parameter types. Java picks which version to call based on the argument types at compile time.
  - **Runtime (overriding)**: subclass redefines a parent's method. Java picks which version to call based on the actual object type at runtime.


#### Abstraction

Abstraction means hiding complexity and exposing only a simple interface. An abstract class or interface defines WHAT an object does, not HOW it does it. This allows you to change the implementation without affecting the code that uses the interface.

```java
interface PaymentGateway {
    PaymentResult processPayment(double amount, String currency);
}

// Two completely different implementations, same contract
class StripeGateway implements PaymentGateway { ... }
class PayPalGateway implements PaymentGateway { ... }

// Code using the interface doesn't care which implementation it gets
PaymentGateway gateway = new StripeGateway();
gateway.processPayment(99.99, "EUR");
```


### PRIMITIVES vs OBJECT TYPES

Java has two fundamentally different kinds of data:

**Primitive Types**: int, long, double, float, boolean, char, byte, short

- Stored directly in memory (stack), not objects, cannot be null, passed by value (a copy is made). They are much more efficient than objects.


**Object (reference) Types**: Integer, Long, Double, String, List, etc.

- Stored in the heap, are objects with methods, can be null, and are passed by reference (the variable points to the same object in memory).



Converting between the two is called boxing/unboxing:

```java
int primitive = 42;
Integer boxed = primitive;    // autoboxing: int → Integer
int back = boxed;             // auto-unboxing: Integer → int
Integer c = null;             // valid for object type
// int d = null;              // ERROR — primitive cannot be null
```

Why does this matter? 

Collections like List<Integer> cannot store primitives directly. Also, comparing object types with == compares references (addresses), not values — always use .equals() for objects.


```java
Integer a = 127;  Integer b = 127;
System.out.println(a == b);       // true (JVM caches -128 to 127)
Integer x = 1000; Integer y = 1000;
System.out.println(x == y);       // false! Different objects in heap
System.out.println(x.equals(y));  // true — compares values
```


### Access Modifiers


Control who can access a class, field, or method:

public            — accessible from any class in any package
protected         — accessible within the same class, subclasses, and same package
package-private — accessible only within the same package (no keyword written)
private           — accessible only within the same class

```java
class Example {
    public    String name;      // everyone can see
    protected int    age;       // subclasses and same package
              String email;    // same package only
    private   String password;  // this class only
}
```

**General rule**: make fields private, expose only what is necessary through public methods. The more restricted, the smaller the dependency surface.


### Collections Framework


Java has a hierarchy of interfaces and implementations for collecting data:


#### List
ordered sequence, allows duplicates, access by index

- ArrayList:  dynamic array — O(1) read by index, O(n) insertion in the middle
- LinkedList: doubly-linked list — O(1) insertion/removal at ends, O(n) access by index


#### SET
no duplicates, no guaranteed order (depends on implementation)

- HashSet:      uses HashMap internally — O(1) add/contains/remove, no order
- LinkedHashSet: insertion-order preserved
- TreeSet:      sorted order — O(log n) operations


#### MAP
key-value pairs, keys are unique

- HashMap:     O(1) amortised get/put, not thread-safe, allows null key/value
- LinkedHashMap: insertion-order preserved
- TreeMap:     sorted by key — O(log n)
- ConcurrentHashMap: thread-safe, for concurrent use



#### Queue
FIFO or priority-based

- ArrayDeque:    fast double-ended queue
- PriorityQueue: always removes the element with the highest priority


#### Stack
LIFO (Last In, First Out)

- ArrayDeque:  preferred modern implementation — push()/pop()/peek(), faster than Stack
- Stack:       legacy class (extends Vector) — avoid in new code, kept for historical reasons



How to choose:
  - Need fast random access? → **ArrayList**
  - Insert/remove at ends often? → **ArrayDeque** or **LinkedList**
  - Need unique elements? → **HashSet** (unordered) or **TreeSet** (sorted)
  - Need key-value lookup? → **HashMap**
  - Concurrent access? → **ConcurrentHashMap**
  - Need LIFO behaviour? → **ArrayDeque** (as a stack)


### Generics


Generics allow you to write code that works with any type but is type-checked at compile time. 
Before generics (Java < 5), List accepted any Object — type errors only appeared at runtime. 
With generics, errors appear at compile time:

```java
// Without generics (pre-Java 5) — runtime crash possible
List list = new ArrayList();
list.add("hello");
list.add(42);          // compiles fine
String s = (String) list.get(1);  // ClassCastException at runtime!

// With generics — compile-time safety
List<String> strings = new ArrayList<>();
// strings.add(42);    // COMPILE ERROR — much better!
String s = strings.get(0);  // no cast needed
```

The type between <> is erased at runtime (type erasure) — generics are only for the compiler. At runtime, a List<String> is just a List.

Wildcards:
? extends T  — "any type that is T or a subtype of T" (covariant, read-only)
? super T    — "any type that is T or a supertype of T" (contravariant, write-only)


### Exceptions


In Java, exceptions are objects that represent errors or exceptional conditions.


**Checked Exceptions**: extend Exception (but not RuntimeException). 
The compiler FORCES you to handle them or declare with throws. They represent recoverable conditions — file not found, database connection failed.


**Unchecked Exceptions**: extend RuntimeException. 
The compiler does NOT force you to handle them. They represent programming errors — NullPointerException, ArrayIndexOutOfBoundsException, IllegalArgumentException.


**try-with-resources**: ensures resources are automatically closed, even if an exception occurs:


```java
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line = reader.readLine();
} catch (IOException e) {
    log.error("Failed to read file", e);
}
// reader.close() is called automatically here
```

**General rule**: use unchecked exceptions for programming errors (bugs) and checked exceptions for conditions the caller can reasonably try to recover from.


### Lambdas, Streams, and Functional Interfaces


Instead of writing imperative loops (HOW to do something), you describe WHAT you want to do. A lambda is an anonymous function — a function without a name that you can pass as a value.


```java
// Imperative (how)
List<String> result = new ArrayList<>();
for (String name : names) {
    if (name.startsWith("A")) result.add(name.toUpperCase());
}

// Declarative with Streams (what)
List<String> result = names.stream()
    .filter(name -> name.startsWith("A"))    // keep only names starting with A
    .map(String::toUpperCase)                // transform each to uppercase
    .sorted()                                // sort alphabetically
    .collect(Collectors.toList());           // collect back into a list
```

#### Intermediate operations 
lazy — only execute when there is a terminal operation


filter(predicate)   — keep elements matching the condition
map(function)       — transform each element
flatMap(function)   — flatten nested collections
sorted()            — sort elements
distinct()          — remove duplicates
limit(n)            — take at most n elements
peek(consumer)      — inspect without transforming (useful for debugging)


#### Terminal operations (trigger execution)


collect(collector)  — collect into a list, set, or map
forEach(consumer)   — execute side effect for each element
count()             — count elements
findFirst()         — return the first element as Optional
anyMatch/allMatch   — boolean checks


#### Functional Interfaces
interfaces with exactly one abstract method


Function<T,R>  — transforms T to R: R apply(T t)
Predicate<T>   — tests condition: boolean test(T t)
Consumer<T>    — consumes without returning: void accept(T t)
Supplier<T>    — provides without input: T get()
BiFunction<T,U,R> — function with two inputs


### Optional


Optional is a container that may or may not hold a value, forcing you to explicitly handle the absence of a value instead of returning null and risking a NullPointerException.


```java
// Risky (null)
User user = repository.findById(id);  // might return null
String city = user.getAddress().getCity();  // NullPointerException if null

// Safe (Optional)
Optional<User> userOpt = repository.findById(id);
String city = userOpt
    .map(User::getAddress)
    .map(Address::getCity)
    .orElse("Unknown");

// Common Optional methods:
user.isPresent()              // check if value exists
user.isEmpty()                // opposite (Java 11+)
user.get()                    // get value (throws if empty — avoid)
user.orElse(defaultValue)     // return default if empty
user.orElseThrow()            // throw NoSuchElementException if empty
user.map(fn)                  // transform if present
user.filter(predicate)        // keep value if predicate matches
```


### Concurrency


Concurrency in Java is complex because multiple threads share memory.


**Race Condition**: two threads read and write the same variable simultaneously, producing unpredictable results because the interleaving is non-deterministic.


**Deadlock**: Thread A waits for the lock that Thread B holds, and Thread B waits for the lock that Thread A holds. Both block forever.


- **synchronized**- ensures only one thread executes the block at a time:

```java
class Counter {
    private int count = 0;
    public synchronized void increment() { count++; }  // atomic
    public synchronized int get() { return count; }
}
```

- **volatile**- ensures the variable is always read from main memory, not a thread's local cache. Does NOT fix race conditions on compound operations.

- **ExecutorService**- pool of reusable threads. You don't create threads manually:

```java
ExecutorService pool = Executors.newFixedThreadPool(4);
Future<Integer> future = pool.submit(() -> heavyComputation());
Integer result = future.get();    // blocks until result is ready
```

**CompletableFuture** (Java 8+)- non-blocking async, with chaining:


```java
CompletableFuture.supplyAsync(() -> fetchUser(id))
    .thenApply(user -> enrichWithProfile(user))
    .thenAccept(user -> sendWelcomeEmail(user))
    .exceptionally(ex -> { log.error("Failed", ex); return null; });
```


### Hashmap Internals (common Interview Topic)


A HashMap is backed by an array of "buckets". When you put(key, value):
1. Java calls key.hashCode() to get an integer
2. That integer is mapped to a bucket index (array position)
3. The entry is stored in that bucket

When two keys hash to the same bucket (collision), they form a linked list in that bucket (Java 8+: converts to a red-black tree when the list grows past 8 entries, for O(log n) rather than O(n) worst-case).

get(key) works the same: compute hash → find bucket → walk the list/tree, comparing with key.equals().

Why you must override BOTH hashCode() AND equals():
  - If equal objects had different hash codes → they'd be in different buckets and get() would not find the value put() stored.
• Contract: if a.equals(b) then a.hashCode() == b.hashCode()


Default load factor is 0.75 — when 75% of buckets are used, the array doubles in size and all entries are rehashed. This is why initial capacity matters for performance when you know the approximate size.

### @TRANSACTIONAL — HOW IT WORKS

@Transactional is a Spring annotation that wraps a method call in a database transaction. Spring uses AOP (Aspect-Oriented Programming) to create a proxy around your class. The proxy opens a transaction before calling your method and commits (or rolls back) after it returns (or throws).


```java
@Service
public class OrderService {
    @Transactional    // Spring creates a proxy — the real magic happens here
    public void placeOrder(Order order) {
        orderRepository.save(order);      // these two must succeed or fail
        inventoryRepository.reduce(order.getItems());  // together (atomically)
    }
}
```

#### Key propagation levels

REQUIRED (default) — join existing transaction, or create a new one
REQUIRES_NEW       — always create a new transaction (suspends the outer one)
SUPPORTS           — join if one exists, otherwise run without transaction

**Rollback rules**: by default, only RuntimeException triggers rollback. For checked exceptions, you need @Transactional(rollbackFor = Exception.class).


## 1.02 TypeScript



### Overview

TypeScript is a superset of JavaScript developed by Microsoft. This means that any valid JavaScript is also valid TypeScript — you can adopt TypeScript gradually. The compiler (tsc) transforms TypeScript into plain JavaScript, so it runs in any environment that runs JavaScript: browser, Node.js, Deno. The big advantage is static type checking at compile time — you find errors before running the code, and your editor gives you much more precise autocomplete.


### The Type System


TypeScript's type system is structural (also called "duck typing") — two types are compatible if they have the same shape, regardless of their names.


```typescript
// Basic types
let name: string = "Beatriz";
let age: number = 25;
let active: boolean = true;
let data: null = null;
let nothing: undefined = undefined;
let anything: any = "anything";    // escape hatch — avoid if possible
let safe: unknown = fetchData();   // like any but forces type checking before use

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple — fixed-length array with known types at each position
let point: [number, number] = [10, 20];
let entry: [string, number] = ["age", 25];

// Union types — value can be one of several types
let id: string | number = "abc123";
id = 42;  // also valid

// Literal types — only this exact value
type Direction = "north" | "south" | "east" | "west";
let dir: Direction = "north";
// dir = "up";  // ERROR
```

### INTERFACE vs TYPE

Both define the shape of an object, but they differ in capability:


```typescript
// Interface — preferred for object shapes, can be extended, can be merged
interface User {
    id: number;
    name: string;
    email?: string;    // optional property
}

interface AdminUser extends User {
    role: "admin";
    permissions: string[];
}

// Declaration merging — two interface declarations with the same name merge
interface Window { myProperty: string; }   // adds to the global Window type

// Type alias — more powerful: unions, intersections, mapped types, tuples
type ID = string | number;
type Point = { x: number; y: number };
type AdminUser = User & { role: "admin" };   // intersection
```

**Rule of thumb**: use interface for object shapes that may be extended or implemented by a class. Use type for everything else (unions, mapped types, utility compositions).


### Generics


Generics let you write code that works with any type while keeping type safety:


```tsx
// Without generics — loses type information
function identity(value: any): any { return value; }

// With generics — preserves type
function identity<T>(value: T): T { return value; }
const str = identity("hello");    // TypeScript infers T = string
const num = identity(42);         // TypeScript infers T = number

// Generic interfaces
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

type UserResponse = ApiResponse<User>;
type UserListResponse = ApiResponse<User[]>;

// Constraints — T must have certain properties
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
getProperty({ name: "Alice", age: 25 }, "name");  // "Alice" typed as string
```


### Utility Types


TypeScript includes built-in generic types that transform other types:


```tsx
interface User { id: number; name: string; email: string; age: number; }

Partial<User>           // all properties become optional
Required<User>          // all properties become required
Readonly<User>          // all properties become read-only
Pick<User, "id"|"name"> // only keep id and name
Omit<User, "age">       // everything except age
Record<string, User>    // object with string keys and User values
Exclude<"a"|"b"|"c", "a">  // "b" | "c"
Extract<"a"|"b"|"c", "a"|"d">  // "a"
NonNullable<string|null|undefined>  // string
ReturnType<typeof fn>   // the return type of a function

// Practical example
function updateUser(id: number, changes: Partial<User>) {
    // changes can have any subset of User's properties
}
```


### Type Narrowing


TypeScript narrows the type of a variable within a conditional block:


```typescript
function processInput(input: string | number) {
    if (typeof input === "string") {
        // TypeScript knows input is string here
        console.log(input.toUpperCase());
    } else {
        // TypeScript knows input is number here
        console.log(input.toFixed(2));
    }
}

// Discriminated unions — the most powerful narrowing pattern
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "rectangle"; width: number; height: number };

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle":     return Math.PI * shape.radius ** 2;
        case "rectangle":  return shape.width * shape.height;
    }
}

// in operator — check if property exists
function isUser(obj: User | Admin): obj is User {
    return "email" in obj;
}
```


### Decorators


Decorators are a TypeScript (and stage-3 JS) feature that lets you annotate classes, methods, and properties with metadata or modify their behaviour:


```typescript
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with`, args);
        return original.apply(this, args);
    };
    return descriptor;
}

class UserService {
    @log
    getUser(id: number) { return { id, name: "Alice" }; }
}
```

This is how NestJS, TypeORM, and Angular use decorators extensively.


## 1.03 JavaScript



### Overview

JavaScript is the only language that runs natively in browsers, making it the universal language of the web. It has evolved dramatically: from a simple scripting language (ES5) to a mature language with classes, modules, async/await, optional chaining, and more (ES2015+). Node.js brought JavaScript to the server.


### The Event Loop — HOW JAVASCRIPT HANDLES CONCURRENCY

JavaScript is single-threaded — there is only one call stack. Yet it handles asynchronous operations (network requests, timers) without blocking. How?

The EVENT LOOP continuously checks:
1. Is the CALL STACK empty?
2. If yes, pick the next task from the TASK QUEUE and push it onto the stack.


```javascript
console.log("1");           // synchronous → executes immediately
setTimeout(() => {
    console.log("3");       // macrotask → goes to task queue
}, 0);
Promise.resolve()
    .then(() => console.log("2"));  // microtask → goes to microtask queue
console.log("4");           // synchronous → executes immediately
// Output: 1, 4, 2, 3
```

Why "2" before "3"? 
Microtasks (Promises, queueMicrotask) have a separate queue that is ALWAYS fully drained before the event loop picks the next macrotask (setTimeout, setInterval, I/O callbacks). 
So the order is: synchronous code → microtasks → one macrotask → microtasks → one macrotask...

### Closures


A closure is a function that remembers the variables from the scope where it was defined, even after that scope has finished executing.


```javascript
function makeCounter() {
    let count = 0;               // count lives in makeCounter's scope
    return function() {
        count++;                  // the returned function closes over count
        return count;
    };
}

const counter = makeCounter();
counter();  // 1
counter();  // 2
counter();  // 3
```

Each call to makeCounter() creates a new closure with its own count. This is how React's useState works internally — each component instance has its own enclosed state.


### This — THE MOST CONFUSING PART OF JAVASCRIPT

In JavaScript, this is determined by HOW a function is called, not where it is defined (except arrow functions, which close over the surrounding this).


```javascript
const obj = {
    name: "Beatriz",
    greet: function() {
        console.log(this.name);     // "Beatriz" — this is obj
    },
    greetArrow: () => {
        console.log(this.name);     // undefined — arrow captures outer this
    }
};

const fn = obj.greet;
fn();          // undefined — this is the global object (or undefined in strict mode)
obj.greet();   // "Beatriz" — called as method of obj

// bind/call/apply explicitly set this
fn.call(obj);  // "Beatriz"
const bound = fn.bind(obj);
bound();       // "Beatriz"
```

**Rule**: use regular functions when you need dynamic this (event handlers, methods). Use arrow functions when you want to inherit the outer this (callbacks inside class methods, setTimeout inside methods).


### Prototype Chain


Every JavaScript object has an internal [[Prototype]] property that points to another object (or null). When you access a property, JavaScript first looks at the object itself, then walks up the prototype chain until it finds it or reaches null. This is JavaScript's inheritance mechanism.


```javascript
function Animal(name) { this.name = name; }
Animal.prototype.eat = function() { console.log(this.name + " eats"); };

const dog = new Animal("Rex");
dog.eat();   // found on Animal.prototype, not dog itself

// ES6 classes are syntactic sugar over this prototype system:
class Animal {
    constructor(name) { this.name = name; }
    eat() { console.log(this.name + " eats"); }
}
// Animal.prototype.eat is still where the method lives
```


### Async/Await and Promises


A Promise represents a value that will be available in the future. 
It has three states: pending, fulfilled, rejected.


```javascript
// Promise chain
fetch("/api/user/1")
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(error => console.error(error));

// async/await — syntactic sugar over Promises, reads like synchronous code
async function getUser(id) {
    try {
        const response = await fetch(`/api/user/${id}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error;
    }
}

// Run multiple Promises concurrently
const [user, posts] = await Promise.all([
    fetch("/api/user/1").then(r => r.json()),
    fetch("/api/posts").then(r => r.json()),
]);
// Both requests run in parallel; we wait for both to finish

// First to resolve wins
const result = await Promise.race([slowApi(), fastApi()]);
```

### ES2015+ FEATURES


```javascript
// Destructuring
const { name, age = 0 } = user;                    // object with default
const [first, ...rest] = [1, 2, 3, 4];             // array

// Spread
const merged = { ...defaults, ...overrides };
const copy = [...array, newItem];

// Optional chaining — stops at the first null/undefined
const city = user?.address?.city;                  // undefined, not TypeError
const method = obj?.method?.();

// Nullish coalescing — only falls back on null/undefined (not 0 or "")
const name = user.name ?? "Anonymous";
// vs logical OR — falls back on any falsy value (0, "", false, null, undefined)
const name = user.name || "Anonymous";

// Template literals
const msg = `Hello ${name}, you are ${age} years old`;

// Modules
export const PI = 3.14;
export default function add(a, b) { return a + b; }
import add, { PI } from "./math.js";
```



## 1.04 Dart



### Overview

Dart is a typed, object-oriented language developed by Google. It powers Flutter for mobile/web/desktop apps, and can also compile to native executables or JavaScript. 
Dart is ahead-of-time (AOT) compiled for production (fast startup, good performance) and just-in-time (JIT) compiled during development (hot reload).


### NULL Safety


Dart has sound null safety — the type system distinguishes between types that can be null and those that cannot. 
A variable of type String cannot be null; only String? (with ?) can.

```dart
String name = "Beatriz";     // cannot be null — compiler enforces this
String? nickname = null;     // can be null

// You must handle the nullable case before using it
String upper = name.toUpperCase();          // safe — name is non-null
// String upper = nickname.toUpperCase();   // compile error!
String upper = nickname?.toUpperCase() ?? "No nickname";  // safe

// Null-aware operators
nickname?.toUpperCase()    // call only if not null
nickname ?? "default"      // use default if null
nickname ??= "default"     // assign default if currently null

// Non-null assertion — only use when you are certain it is not null
String value = nickname!;  // throws if null at runtime
```

### FINAL vs CONST

Both prevent reassignment, but differ in when the value must be known:

```dart
final String name = "Beatriz";     // set once at runtime
final DateTime now = DateTime.now(); // determined at runtime, then fixed

const double PI = 3.14159;          // compile-time constant — must be known
                                    // before the program runs
const List<int> primes = [2, 3, 5, 7];  // entire object is compile-time constant
```

In Flutter: const widgets are created at compile time and reused, making them much more efficient than non-const widgets (they skip the rebuild phase).


### Async — FUTURE AND STREAM

**Future<T>** — represents a single value available asynchronously (like a Promise):

```dart
Future<User> fetchUser(int id) async {
    final response = await http.get(Uri.parse('/api/users/$id'));
    return User.fromJson(json.decode(response.body));
}

// Call with await
final user = await fetchUser(1);

// Or with .then()
fetchUser(1).then((user) => print(user.name))
             .catchError((e) => print("Error: $e"));
```


**Stream<T>** — represents multiple values over time (like an async generator or an Observable). Perfect for real-time data: WebSocket messages, sensor readings, database snapshots.

```dart
Stream<int> countUp(int to) async* {
    for (int i = 1; i <= to; i++) {
        await Future.delayed(Duration(seconds: 1));
        yield i;    // emit one value at a time
    }
}

await for (final value in countUp(5)) {
    print(value);  // 1, 2, 3, 4, 5 (one per second)
}

// StreamBuilder in Flutter: rebuilds UI whenever new data arrives
StreamBuilder<User>(
    stream: userStream,
    builder: (context, snapshot) {
        if (snapshot.hasData) return UserCard(snapshot.data!);
        return CircularProgressIndicator();
    },
);
```


### Isolates


The key fact about Dart concurrency: isolates DO NOT share memory. Each isolate has its own heap. This means no shared state, no race conditions, no mutex locks. Communication happens by passing messages (copies of data) through ports.


```dart
import 'dart:isolate';

void heavyTask(SendPort sendPort) {
    // This runs in a separate isolate with its own memory
    int result = expensiveCalculation();
    sendPort.send(result);  // send a copy of the result
}

void main() async {
    final receivePort = ReceivePort();
    await Isolate.spawn(heavyTask, receivePort.sendPort);
    final result = await receivePort.first;
    print("Result: $result");
}
```


In Flutter, use compute() for a simpler API that runs a function in an isolate:

```dart
final result = await compute(parseJsonList, jsonString);
```


## 1.05 HTML



### Overview

HTML (HyperText Markup Language) is the skeleton of every web page. It describes
the STRUCTURE and MEANING of content — not its appearance (that is CSS) or
behaviour (that is JavaScript). The browser parses HTML into the DOM (Document
Object Model), a tree of nodes that JavaScript and CSS then manipulate.


### Semantic Elements


Every HTML element has a semantic meaning that tells browsers, screen readers, and search engines what the content IS. Using <div> for everything is an anti-pattern — semantic elements improve accessibility and SEO.


```html
<header>    — document or section heading area (logo, nav, title)
<nav>       — primary navigation links
<main>      — the dominant, unique content of the page (only one per page)
<article>   — self-contained piece of content (blog post, news article)
<section>   — thematic grouping (should have a heading)
<aside>     — tangentially related content (sidebar, pull quotes)
<footer>    — document or section footer

<!-- Anti-pattern: everything is a div -->
<div class="header">...</div>
<div class="nav">...</div>

<!-- Correct: semantic structure -->
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>
```


### The DOM (Document Object Model)


The DOM (Document Object Model) is a tree-like in-memory representation of the HTML document. JavaScript interacts with web pages through the DOM API.


```html
// Selecting elements
const btn = document.getElementById("submit");
const items = document.querySelectorAll(".item");  // returns NodeList

// Manipulating content
btn.textContent = "Loading...";
btn.innerHTML = "<span>Save</span>";    // risky if user input — XSS!

// Changing styles and classes
btn.classList.add("active");
btn.classList.remove("disabled");
btn.classList.toggle("open");
btn.style.display = "none";

// Events
btn.addEventListener("click", (event) => {
    event.preventDefault();    // prevent default browser action
    handleSubmit();
});

// Creating elements
const li = document.createElement("li");
li.textContent = "New item";
document.querySelector("ul").appendChild(li);
```


### Script Loading: defer vs async

<script src="app.js"></script>          — blocks HTML parsing while downloading and executing
<script async src="analytics.js"></script> — downloads in parallel, executes immediately when ready (may interrupt parsing); order not guaranteed
<script defer src="app.js"></script>    — downloads in parallel, executes AFTER HTML is fully parsed, in order; almost always what you want

Use defer for your application scripts. 
Use async only for independent scripts (analytics, ads) that don't depend on the DOM or other scripts.


### ACCESSIBILITY (a11y)

Accessibility ensures people with disabilities can use your web app.
Screen readers narrate the page; keyboard users tab through interactive elements.


```html
<!-- Always provide alt text for images -->
<img src="chart.png" alt="Monthly sales chart showing 20% growth in Q3">
<img src="decoration.png" alt="">   <!-- decorative: empty alt skips it -->

<!-- ARIA attributes fill gaps where HTML semantics fall short -->
<button aria-label="Close dialog" aria-expanded="false">×</button>
<div role="alert" aria-live="polite">Form submitted successfully</div>

<!-- Forms: always link labels to inputs -->
<label for="email">Email address</label>
<input id="email" type="email" required aria-describedby="email-hint">
<span id="email-hint">We will never share your email</span>
```



## 1.06 CSS



### Overview

CSS (Cascading Style Sheets) controls the visual presentation of HTML. The "cascading" part means styles can come from multiple sources (browser defaults, author stylesheets, inline styles) and rules for which one wins are well-defined.


### The Box Model


Every HTML element is a rectangular box composed of four layers, from inside out:
CONTENT → PADDING → BORDER → MARGIN

```text
┌─────────────────────────────────┐
│           MARGIN                │
│  ┌───────────────────────────┐  │
│  │         BORDER            │  │
│  │  ┌─────────────────────┐  │  │
│  │  │       PADDING       │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │    CONTENT    │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

#### Critical: box-sizing

```css
/* Default: width applies to content only */
box-sizing: content-box;   /* width=200 + 20 padding + 2 border = 222px total */

/* More intuitive: width includes padding and border */
box-sizing: border-box;    /* width=200 always, padding and border are inside */

Best practice: set * { box-sizing: border-box; } globally.
```


### Selectors

```css
/* Type, class, ID */
p { }                    /* all <p> elements */
.card { }                /* elements with class="card" */
#hero { }                /* element with id="hero" */

/* Attribute */
input[type="text"] { }   /* input with specific attribute */
a[href^="https"] { }     /* href starts with https */
a[href$=".pdf"] { }      /* href ends with .pdf */

/* Combinators */
div p { }                /* <p> anywhere inside <div> (descendant) */
div > p { }              /* <p> direct child of <div> */
h1 + p { }               /* <p> immediately after <h1> (adjacent sibling) */
h1 ~ p { }               /* all <p> siblings after <h1> (general sibling) */

/* Pseudo-classes — element state */
a:hover { }              /* on mouse over */
a:focus { }              /* keyboard focus */
input:disabled { }
li:first-child { }       /* first child of its parent */
li:last-child { }
li:nth-child(2n) { }     /* even items */
li:nth-child(odd) { }
p:not(.special) { }      /* elements that do NOT match */

/* Pseudo-elements — virtual parts of an element */
p::before { content: '→ '; }   /* insert content before */
p::after  { content: ' ←'; }   /* insert content after */
p::first-line { }               /* first rendered line */
::placeholder { color: gray; }  /* input placeholder text */
::selection { background: yellow; }  /* selected text */
```


### Specificity

When multiple rules match the same element, specificity determines which wins:

```text
inline style="..."            →  1-0-0-0  (always wins)
#id                           →  0-1-0-0
.class  :pseudo-class  [attr] →  0-0-1-0
element  ::pseudo-element     →  0-0-0-1
```

```css
p            { color: blue; }    /* 0-0-0-1 */
.intro       { color: green; }   /* 0-0-1-0  wins */
#hero        { color: red; }     /* 0-1-0-0  wins */
style="..."                      /* 1-0-0-0  wins */
```

Equal specificity → the **later rule in the file wins**. `!important` overrides everything — last resort only.


### Display

```css
display: block;         /* takes full width, stacks vertically (div, p, h1…) */
display: inline;        /* flows with text, no width/height (span, a, strong…) */
display: inline-block;  /* flows with text but accepts width/height */
display: none;          /* removed from layout entirely (vs visibility: hidden) */
display: flex;          /* flex container */
display: grid;          /* grid container */
display: contents;      /* element itself disappears, children participate in parent layout */
```


### Position

```css
position: static;    /* default — follows normal document flow */
position: relative;  /* offset from its normal position; creates stacking context */
position: absolute;  /* removed from flow; positioned relative to nearest non-static ancestor */
position: fixed;     /* relative to the viewport; stays while scrolling */
position: sticky;    /* relative until scroll threshold, then fixed */
```

```css
.modal-overlay {
    position: fixed;
    inset: 0;              /* shorthand for top:0 right:0 bottom:0 left:0 */
    background: rgba(0,0,0,0.5);
}

.tooltip {
    position: absolute;
    top: 100%;             /* directly below parent */
    left: 50%;
    transform: translateX(-50%);  /* centre horizontally */
}

.sticky-header {
    position: sticky;
    top: 0;                /* sticks when scrolled to top of viewport */
    z-index: 100;
}
```


### Spacing — Margin & Padding

```css
/* Padding — inside the border (adds to clickable area) */
padding: 16px;                  /* all sides */
padding: 8px 16px;              /* vertical horizontal */
padding: 8px 12px 6px 12px;    /* top right bottom left (clockwise) */
padding-top: 8px;

/* Margin — outside the border (pushes other elements away) */
margin: 24px auto;   /* vertical=24px, horizontal=auto (centres block elements) */
margin: 0;

/* Margin collapsing: adjacent vertical margins merge into the larger one */
/* (only for block elements in normal flow, not in flex/grid) */
h1 { margin-bottom: 24px; }
p  { margin-top: 16px; }
/* actual gap between h1 and p = 24px, NOT 40px */
```


### Sizing

```css
width: 300px;            /* fixed */
width: 50%;              /* relative to parent */
width: 100vw;            /* 100% of viewport width */
width: fit-content;      /* shrinks to content */
width: min-content;      /* smallest without overflow */
width: max-content;      /* widest without wrapping */

min-width: 200px;        /* never smaller than this */
max-width: 800px;        /* never larger — great for readable text columns */

height: 100vh;           /* full viewport height */
min-height: 100dvh;      /* dynamic viewport height (avoids mobile browser bar issues) */

/* Useful pattern: full-page layout */
body { min-height: 100vh; display: flex; flex-direction: column; }
main { flex: 1; }        /* main fills remaining height */
```


### Overflow

```css
overflow: visible;  /* default — content can spill outside box */
overflow: hidden;   /* clips content + creates new block formatting context */
overflow: scroll;   /* always shows scrollbars */
overflow: auto;     /* shows scrollbars only when needed */

overflow-x: hidden; /* clip only horizontal */
overflow-y: auto;   /* scroll only vertical */

/* Clip long text */
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;   /* shows "…" */
```


### Typography

```css
font-family: 'Inter', sans-serif;   /* first = preferred, rest = fallbacks */
font-size: 16px;                     /* base; use rem for scalability */
font-size: 1rem;                     /* relative to root font-size (usually 16px) */
font-size: 1.25em;                   /* relative to parent font-size */
font-weight: 400;                    /* normal */
font-weight: 700;                    /* bold */
font-style: italic;

line-height: 1.6;                    /* unitless — relative to font-size (best practice) */
letter-spacing: 0.05em;             /* tracking */
text-align: left | center | right | justify;
text-transform: uppercase | lowercase | capitalize;
text-decoration: underline | line-through | none;

/* Clamp text to N lines */
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
```


### Colors & Backgrounds

```css
/* Color formats */
color: #3b82f6;              /* hex */
color: rgb(59, 130, 246);    /* rgb */
color: rgba(59, 130, 246, 0.5);  /* rgb with alpha (transparency) */
color: hsl(217, 91%, 60%);   /* hue saturation lightness */

background-color: #f8fafc;
background-image: url('image.jpg');
background-size: cover;      /* scale to fill, may crop */
background-size: contain;    /* scale to fit, may leave gaps */
background-position: center;
background-repeat: no-repeat;

/* Shorthand */
background: url('hero.jpg') center/cover no-repeat;

/* Gradients */
background: linear-gradient(135deg, #667eea, #764ba2);
background: radial-gradient(circle, #f093fb, #f5576c);

opacity: 0.5;   /* affects element AND all children */
```


### Borders

```css
border: 2px solid #e2e8f0;          /* shorthand: width style color */
border-top: 1px dashed #ccc;
border-radius: 8px;                  /* all corners */
border-radius: 4px 8px 4px 8px;     /* top-left top-right bottom-right bottom-left */
border-radius: 50%;                  /* circle (on equal width/height element) */
border-radius: 9999px;              /* pill shape */

outline: 2px solid blue;            /* outside border, doesn't affect layout */
outline-offset: 2px;                /* gap between element and outline */
outline: none;                      /* removes default focus outline — always replace with custom */

/* Box shadow */
box-shadow: 0 4px 6px rgba(0,0,0,0.1);
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);  /* multiple */
box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);  /* inset — inside the element */
```


### Flexbox

Flexbox is one-dimensional — one axis at a time (row OR column).

```css
.container {
    display: flex;
    flex-direction: row;            /* main axis direction: row | column | row-reverse | column-reverse */
    justify-content: space-between; /* main axis alignment */
    align-items: center;            /* cross axis alignment */
    align-content: flex-start;      /* when wrapping: how rows/columns distribute */
    flex-wrap: wrap;                /* allow items to wrap */
    gap: 16px;                      /* space between items (row-gap column-gap) */
}

/* justify-content values */
flex-start | flex-end | center | space-between | space-around | space-evenly

/* align-items values */
flex-start | flex-end | center | stretch | baseline

.item {
    flex-grow: 1;     /* proportion of free space to take (0 = don't grow) */
    flex-shrink: 1;   /* proportion to shrink when space is tight (0 = don't shrink) */
    flex-basis: 0;    /* initial size before growing/shrinking */
    flex: 1;          /* shorthand: grow=1 shrink=1 basis=0 — fills space equally */
    flex: 0 0 200px;  /* fixed 200px, never grow or shrink */

    align-self: flex-end;   /* override align-items for this specific item */
    order: 2;               /* controls display order (default: 0) */
}
```


### CSS Grid

Grid is two-dimensional — defines rows AND columns simultaneously. Best for page-level layouts.

```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);    /* 3 equal columns */
    grid-template-columns: 200px 1fr 2fr;     /* fixed + flexible */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));  /* responsive without media queries */
    grid-template-rows: 60px 1fr auto;        /* fixed header, flexible main, auto footer */
    gap: 24px;                                /* shorthand for row-gap + column-gap */
    row-gap: 16px;
    column-gap: 24px;
}

/* Placing items */
.header  { grid-column: 1 / -1; }     /* span from first to last column line */
.sidebar { grid-column: 1 / 2; grid-row: 2 / 4; }  /* explicit placement */
.main    { grid-column: 2 / -1; }

/* Named template areas — great for readable layouts */
.layout {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    grid-template-columns: 240px 1fr;
    grid-template-rows: 60px 1fr 40px;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```


### Transitions & Animations

```css
/* Transition — smooth change between two states */
.button {
    background: blue;
    transition: background 0.2s ease, transform 0.15s ease;
}
.button:hover {
    background: darkblue;
    transform: translateY(-2px);
}

/* transition shorthand: property duration timing-function delay */
transition: all 0.3s ease;      /* avoid 'all' — prefer specific properties */

/* Timing functions */
ease | linear | ease-in | ease-out | ease-in-out
cubic-bezier(0.4, 0, 0.2, 1)   /* custom curve */

/* Keyframe animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
}

.modal {
    animation: fadeIn 0.25s ease forwards;
    /* name duration timing fill-mode */
}

/* animation properties */
animation-name: fadeIn;
animation-duration: 0.3s;
animation-delay: 0.1s;
animation-iteration-count: infinite;   /* or a number */
animation-direction: alternate;        /* reverse on odd iterations */
animation-fill-mode: forwards;         /* keep final state after animation ends */
animation-play-state: paused;          /* pause/resume */
```


### Transform

```css
transform: translateX(20px);         /* move horizontally */
transform: translateY(-50%);         /* move vertically (% = % of element's own size) */
transform: translate(-50%, -50%);    /* centre absolutely positioned element */
transform: scale(1.05);              /* scale up 5% */
transform: rotate(45deg);
transform: skewX(10deg);

/* Multiple transforms — combine in one declaration */
transform: translateY(-4px) scale(1.02);

/* Performance: transform and opacity are GPU-accelerated — prefer them over
   animating width, height, margin, or top/left */
```


### Z-index & Stacking Context

```css
/* z-index only works on positioned elements (not static) */
.modal   { position: fixed; z-index: 1000; }
.overlay { position: fixed; z-index: 999; }
.header  { position: sticky; z-index: 100; }

/* A new stacking context is created by:
   - position + z-index other than auto
   - opacity < 1
   - transform, filter, will-change
   Elements inside a stacking context can't escape it — their z-index
   is only compared to siblings inside the same context. */
```


### Media Queries

```css
/* Mobile-first: base styles for small, then override for larger */
.grid { grid-template-columns: 1fr; }

@media (min-width: 768px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
}

/* Common breakpoints */
/* 640px  — sm  (small tablets) */
/* 768px  — md  (tablets) */
/* 1024px — lg  (small laptops) */
/* 1280px — xl  (desktops) */

/* Other media features */
@media (max-width: 767px) { }               /* only mobile */
@media (prefers-color-scheme: dark) { }     /* dark mode */
@media (prefers-reduced-motion: reduce) { } /* accessibility: disable animations */
@media (hover: none) { }                    /* touch devices */

/* Container queries (modern — style based on parent size, not viewport) */
.card-container { container-type: inline-size; }
@container (min-width: 400px) {
    .card { flex-direction: row; }
}
```


### CSS Custom Properties (Variables)

```css
:root {
    --color-primary: #3b82f6;
    --color-primary-dark: #2563eb;
    --spacing-md: 16px;
    --radius: 8px;
    --font-sans: 'Inter', sans-serif;
}

.button {
    background: var(--color-primary);
    padding: var(--spacing-md);
    border-radius: var(--radius);
    /* var() with fallback: */
    color: var(--button-color, white);
}

/* Override in a scope */
[data-theme="dark"] {
    --color-primary: #60a5fa;
}

.card {
    /* Local variable only available inside .card */
    --card-padding: 24px;
    padding: var(--card-padding);
}
```


### Cascade Layers (@layer)

```css
/* Control specificity order regardless of selector strength */
@layer reset, base, components, utilities;

@layer reset {
    * { margin: 0; padding: 0; box-sizing: border-box; }
}
@layer base {
    body { font-family: sans-serif; line-height: 1.6; }
}
@layer components {
    .btn { padding: 8px 16px; border-radius: 6px; }
}
@layer utilities {
    .hidden { display: none !important; }
}
/* Later layers win — utilities beat components beat base beat reset */
```


## 1.07 Python



### Overview

Python is an interpreted, dynamically typed language with very clean syntax. It is the most versatile language in the market: used in web backends (Flask, Django, FastAPI), data science (pandas, numpy), machine learning (TensorFlow, PyTorch), scripting, automation, and testing. Python values readability — there is always "one obvious way to do things" (the Zen of Python). Python does not need compilation — the interpreter executes the .py file directly, line by line. This makes development fast, but type errors appear at runtime (not at compile time like in Java).

### MUTABLE vs IMMUTABLE TYPES

Python types are either mutable (can be changed after creation) or immutable (cannot be changed — "changing" a string creates a new string).


```python
IMMUTABLE:
  int:    42, -7, 0
  float:  3.14, -0.5
  str:    "hello"  — individual characters cannot be changed
  bool:   True, False  (note: capitalised! They are a subclass of int: True == 1)
  bytes:  b"raw bytes"
  tuple:  (1, 2, 3)  — like a list but immutable

MUTABLE:
  list:   [1, 2, 3]       — ordered sequence, heterogeneous, allows duplicates
  dict:   {"key": "value"} — key-value pairs; since Python 3.7 preserves insertion order
  set:    {1, 2, 3}       — no duplicates, no order, supports set operations

# IMPORTANT: the type of a variable is determined at runtime
x = 42         # x is int
x = "hello"    # now x is str — Python doesn't complain!
x = [1, 2, 3]  # now x is list
```

Why mutability matters: passing a mutable object to a function lets the function modify the original (pass by reference semantics). Immutable objects cannot be modified — the function would have to return a new value.


```python
def add_item(lst, item):
    lst.append(item)   # modifies the original list!

my_list = [1, 2]
add_item(my_list, 3)
print(my_list)   # [1, 2, 3] — original was changed
```


### Lists — THE WORKHORSE COLLECTION


```python
fruits = ["apple", "banana", "cherry"]

# Access by index (0-based; negative counts from end)
fruits[0]    # "apple"
fruits[-1]   # "cherry"
fruits[1:3]  # ["banana", "cherry"] — slice: [start:end] (end is exclusive)
fruits[:2]   # ["apple", "banana"]
fruits[::-1] # ["cherry", "banana", "apple"] — reversed

# Common operations
fruits.append("date")          # add to end
fruits.insert(1, "avocado")    # insert at index 1
fruits.remove("banana")        # remove first occurrence
popped = fruits.pop()          # remove and return last item
fruits.sort()                  # sort in-place
sorted_copy = sorted(fruits)   # return a new sorted list, don't modify original
len(fruits)                    # number of items
```


### Dictionaries


```python
user = {"name": "Beatriz", "age": 25, "role": "admin"}

user["name"]                    # "Beatriz" — KeyError if missing
user.get("email")               # None — no error if missing
user.get("email", "no email")   # "no email" — default value
user["email"] = "b@example.com" # add or update a key
del user["role"]                # delete a key
"name" in user                  # True — membership test

# Iterate
for key, value in user.items():
    print(f"{key}: {value}")

# Dictionary comprehension
squares = {n: n**2 for n in range(1, 6)}  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```


### List Comprehensions and Generators


List comprehensions are a concise, Pythonic way to create lists — more readable than equivalent for loops, and often faster.


```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Without comprehension
evens = []
for n in numbers:
    if n % 2 == 0:
        evens.append(n)

# With comprehension — [expression for item in iterable if condition]
evens = [n for n in numbers if n % 2 == 0]       # [2, 4, 6, 8, 10]
squares = [n**2 for n in numbers]                 # [1, 4, 9, 16, ...]
upper = [s.upper() for s in ["hello", "world"]]   # ["HELLO", "WORLD"]

# Dict comprehension
word_lengths = {word: len(word) for word in ["apple", "banana", "cherry"]}
```


#### Generators
like comprehensions but lazy (do not load everything into memory)


```python
# List comprehension: creates the full list in memory immediately
squares_list = [n**2 for n in range(10_000_000)]   # uses ~80MB

# Generator expression: produces values one at a time, on demand
squares_gen = (n**2 for n in range(10_000_000))    # uses ~100 bytes

# Generator function — yields values one at a time
def fibonacci():
    a, b = 0, 1
    while True:
        yield a           # pause here, return a, resume on next()
        a, b = b, a + b

fib = fibonacci()
print(next(fib))   # 0
print(next(fib))   # 1
print(next(fib))   # 1
# Infinite sequence — uses no memory for future values
```


### Functions — *args, **kwargs, AND MORE


```python
def greet(name, greeting="Hello"):   # default parameter
    return f"{greeting}, {name}!"

greet("Beatriz")            # "Hello, Beatriz!"
greet("Beatriz", "Hi")      # "Hi, Beatriz!"
greet(greeting="Hey", name="Beatriz")  # keyword arguments (order doesn't matter)

# *args — captures extra positional arguments as a tuple
def add(*numbers):
    return sum(numbers)
add(1, 2, 3, 4)   # 10

# **kwargs — captures extra keyword arguments as a dictionary
def log_event(event_type, **details):
    print(f"Event: {event_type}, Details: {details}")
log_event("login", userId=123, ip="1.2.3.4")
```


### Decorators


A decorator is a function that wraps another function to add behaviour before, after, or around its execution — without modifying the original function's code.


```python
import functools, time

def timing(func):
    @functools.wraps(func)   # preserves the original function's name/docstring
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time()-start:.3f}s")
        return result
    return wrapper

@timing                      # equivalent to: process_data = timing(process_data)
def process_data(items):
    return [item * 2 for item in items]

process_data([1, 2, 3])     # "process_data took 0.000s"
```

Decorators are the foundation of Flask routes (@app.route), FastAPI endpoints (@router.get), and Python's @property, @staticmethod, @classmethod.


### Classes and OOP in Python

```python
class BankAccount:
    # Class variable — shared by ALL instances
    interest_rate = 0.05

    def __init__(self, owner: str, initial_balance: float = 0):
        # Instance variables — unique to each instance
        self.owner = owner
        self._balance = initial_balance   # _ prefix = convention for "protected"

    def deposit(self, amount: float) -> None:
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self._balance += amount

    def withdraw(self, amount: float) -> bool:
        if amount > self._balance:
            return False
        self._balance -= amount
        return True

    # Property — access as attribute but with logic
    @property
    def balance(self) -> float:
        return self._balance

    @classmethod
    def with_bonus(cls, owner: str, bonus: float) -> "BankAccount":
        """Factory method — creates account with initial bonus balance"""
        return cls(owner, bonus)

    def __repr__(self) -> str:
        return f"BankAccount(owner={self.owner!r}, balance={self._balance})"

# Inheritance
class SavingsAccount(BankAccount):
    def __init__(self, owner: str, initial: float = 0):
        super().__init__(owner, initial)   # call parent __init__

    def apply_interest(self) -> None:
        self._balance *= (1 + self.interest_rate)
```

#### Key dunder (double underscore) methods — Python's "magic methods"

__init__    — constructor
__repr__    — unambiguous string representation (for developers)
__str__     — human-readable string (for users)
__eq__      — defines == comparison
__len__     — defines len(obj)
__iter__    — makes the object iterable


### Context Managers


Context managers guarantee that resources are properly initialised and cleaned up, even if an exception occurs. The with statement calls __enter__ and __exit__.


```python
# Built-in context manager for files
with open("data.txt", "r") as file:
    content = file.read()
# file.close() called automatically here, even if an exception occurred

# Custom context manager using contextlib
from contextlib import contextmanager

@contextmanager
def timer(name: str):
    start = time.time()
    try:
        yield             # body of the with block runs here
    finally:
        print(f"{name}: {time.time() - start:.3f}s")

with timer("processing"):
    process_data()
```


### Type Hints


Type hints add optional static typing to Python. They don't enforce types at runtime — Python remains dynamically typed — but they enable IDE autocomplete, catch bugs with mypy (static type checker), and serve as documentation.


```python
from typing import Optional, List, Dict, Tuple, Union
from collections.abc import Callable

def get_user(user_id: int) -> Optional[dict]:
    ...

def process_users(users: List[str], limit: int = 10) -> Dict[str, int]:
    ...

# Python 3.10+ union shorthand
def parse(value: str | int | None) -> str:
    ...
```


### Async/Await and Fastapi


Python has async/await for non-blocking I/O, similar to JavaScript. The asyncio event loop runs coroutines concurrently on a single thread — perfect for I/O-bound workloads (HTTP calls, database queries).


```python
import asyncio, aiohttp

async def fetch_user(session: aiohttp.ClientSession, user_id: int) -> dict:
    async with session.get(f"https://api.example.com/users/{user_id}") as resp:
        return await resp.json()

async def main():
    async with aiohttp.ClientSession() as session:
        # Run 100 requests concurrently — not sequentially!
        tasks = [fetch_user(session, i) for i in range(100)]
        users = await asyncio.gather(*tasks)
```

FastAPI is the most modern Python framework for APIs — async by default, uses Pydantic for validation, auto-generates OpenAPI docs.


```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr

app = FastAPI()

class UserCreate(BaseModel):
    name: str
    email: EmailStr   # Pydantic validates email format automatically
    age: int

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    # password is NOT here — never returned in the response!

@app.post("/users", response_model=UserResponse, status_code=201)
async def create_user(user: UserCreate):
    # FastAPI automatically:
    #   - parses JSON body into UserCreate
    #   - validates all fields (required, format, type)
    #   - returns 422 if validation fails
    #   - serialises the response as UserResponse (excluding password)
    db_user = await user_service.create(user)
    return db_user

@app.get("/users/{user_id}", response_model=UserResponse)
async def get_user(user_id: int):
    user = await user_service.find_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
```

### VIRTUAL ENVIRONMENTS AND pip

Python uses virtual environments to isolate dependencies per project. Without a venv, all packages install globally and different projects can conflict.


```python
# Create a virtual environment
python3 -m venv venv

# Activate (macOS/Linux)
source venv/bin/activate

# Activate (Windows)
venv\Scripts\activate

pip install fastapi uvicorn    # installs into venv, not globally
pip freeze > requirements.txt  # save dependencies

pip install -r requirements.txt  # restore from requirements file
```

Modern projects use pyproject.toml (PEP 517/518) with tools like Poetry or uv instead of requirements.txt — they provide dependency locking and resolution.



## 1.08 C



### Overview

C is a low-level, compiled, procedural language. Unlike Java or Python, C does not have a garbage collector — you manage memory manually. C runs directly on the hardware with no virtual machine overhead, which is why operating systems, embedded systems, databases (SQLite, PostgreSQL), and device drivers are written in C. Understanding C gives you a deep mental model of how programs actually work at the machine level.


### Pointers


A pointer is a variable that stores the memory address of another variable. Think of memory as a long row of boxes, each with an address. A pointer holds one of those addresses.


```c
int x = 42;
int *p = &x;   // p holds the address of x (&x means "address of x")

printf("x = %d\n", x);    // 42
printf("&x = %p\n", &x);  // 0x7fff... (the memory address)
printf("p = %p\n", p);    // same address as &x
printf("*p = %d\n", *p);  // 42 — dereference: "value at the address p holds"

*p = 100;                  // change the value AT the address
printf("x = %d\n", x);    // 100 — x was changed through the pointer
```

Why pointers matter:
  - Pass large data structures to functions without copying (pass by reference)
  - Dynamic memory allocation — the only way to have variable-size data
  - Building data structures: linked lists, trees
  - Direct hardware access (memory-mapped I/O)


### STACK vs HEAP


**Stack** — automatic, fast, size known at compile time, freed when function returns
  - Local variables, function arguments live here
  - Allocated and freed automatically (LIFO order)
  - Limited in size (~8MB on most systems)


**Heap** — manual, flexible size, persists until you free it
  - Allocated with malloc(), freed with free()
  - Unlimited size (constrained only by system RAM)
  - Risk: memory leaks (forget to free), use-after-free bugs


```c
// Stack allocation — automatic
int arr[100];               // 100 ints on the stack

// Heap allocation — manual
int *arr = malloc(100 * sizeof(int));   // allocate 100 ints on the heap
if (arr == NULL) {                      // malloc can fail — always check!
    fprintf(stderr, "Out of memory\n");
    return -1;
}
arr[0] = 1;                             // use it like an array
free(arr);                              // MUST free — otherwise memory leak
arr = NULL;                             // good habit: prevent dangling pointer
```


### Buffer Overflow


A buffer overflow happens when you write beyond the end of an array, overwriting adjacent memory. This is the source of countless security vulnerabilities:


```c
char buffer[8];
strcpy(buffer, "Hello, this is much too long!");  // writes past buffer end!
// Overwrites adjacent memory — could be return address, other variables
```

**Safe alternatives**: strncpy, snprintf, strlcpy, or better — use a memory-safe language (Rust) or careful bounds checking.



---

# Part 2 — Backend Engineering



## 2.01 Spring Boot



### Overview

Spring Boot is the most popular way to build production Java applications. It builds on the Spring Framework (a vast ecosystem of Java modules) but adds auto-configuration and an embedded server (Tomcat by default). Without Spring Boot, configuring a Spring application required hundreds of lines of XML. With Spring Boot, a single class annotated with @SpringBootApplication gives you a running web application.


### Inversion of Control and Dependency Injection


**IoC (Inversion of Control)** : instead of your code creating the objects it needs (new Service()), the framework creates them and hands them to you. You "invert" who controls object creation.

**DI (Dependency Injection)** : the mechanism that implements IoC. The framework injects dependencies into your class, rather than you creating them.

Why does this matter? 
It decouples classes — your UserService does not decide which EmailService implementation to use; it just declares it needs one:


```java
@Service
public class UserService {
    private final EmailService emailService;   // dependency declared here

    @Autowired   // Spring injects the implementation at startup
    public UserService(EmailService emailService) {
        this.emailService = emailService;
    }

    public void registerUser(User user) {
        userRepository.save(user);
        emailService.sendWelcomeEmail(user);   // uses injected implementation
    }
}
```

Constructor injection (above) is preferred over field injection (@Autowired on fields) because it makes dependencies explicit, supports immutability (final), and makes the class testable without Spring.


### Beans and the Application Context


A Spring Bean is an object managed by the Spring container (called the ApplicationContext). Spring creates it, configures it, and injects it where needed. You declare beans with annotations:

@Component          — generic bean (component scan finds it automatically)
@Service            — business logic layer (alias for @Component with semantic meaning)
@Repository         — data access layer (adds exception translation)
@Controller         — MVC controller
@RestController     — REST endpoint (@Controller + @ResponseBody)
@Configuration+@Bean — explicit bean definition method


#### BEAN SCOPES

**Singleton  (default)** — one instance per Spring container, shared everywhere
**Prototype** — a new instance every time the bean is requested
**Request**   — one instance per HTTP request (web apps)
**Session**   — one instance per HTTP session (web apps)


### Auto-configuration


Spring Boot reads your classpath and application.yml/properties and automatically configures beans. If it sees spring-boot-starter-data-jpa on the classpath plus a datasource URL in properties, it auto-configures a DataSource, EntityManager, and transaction manager. You don't write any of that code.

You can always override auto-configuration by providing your own bean of the same type — Spring Boot backs off when it detects yours.


### SPRING DATA JPA AND THE N+1 PROBLEM

Spring Data JPA lets you write database queries by just defining a method name:


```java
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByEmailAndActive(String email, boolean active);
    Optional<User> findByEmail(String email);
    @Query("SELECT u FROM User u WHERE u.createdAt > :date")
    List<User> findRecentUsers(@Param("date") LocalDateTime date);
}
```

THE N+1 PROBLEM — the most important JPA performance pitfall:


```java
// If Post has a lazily loaded Author field:
List<Post> posts = postRepository.findAll();   // 1 query: SELECT * FROM posts
for (Post post : posts) {
    System.out.println(post.getAuthor().getName());  // N queries!
    // Each access triggers SELECT * FROM authors WHERE id=?
}
// Total: 1 + N queries instead of 1 query with a JOIN
```

Fix with JPQL JOIN FETCH or @EntityGraph:


```java
@Query("SELECT p FROM Post p JOIN FETCH p.author")
List<Post> findAllWithAuthors();

// Or with @EntityGraph
@EntityGraph(attributePaths = {"author", "tags"})
List<Post> findAll();
```


### Key Annotations

@SpringBootApplication   — combines @Configuration + @EnableAutoConfiguration + @ComponentScan
@RestController          — marks class as REST endpoint handler
@GetMapping("/path")     — HTTP GET handler (also @PostMapping, @PutMapping, @DeleteMapping)
@PathVariable            — extract variable from URL path: /users/{id}
@RequestBody             — deserialise JSON body into a Java object
@RequestParam            — extract query parameter: /users?page=0
@Valid / @Validated      — trigger bean validation on a parameter
@Transactional           — wrap method in a database transaction
@Scheduled(cron="0 0 * * * *") — schedule a method to run periodically
@Value("${property.key}") — inject a value from application.properties/yml
@ConditionalOnProperty   — conditionally enable a bean based on a property

### Spring Application Structure

A typical Spring Boot application is organized into layers, each with a clear responsibility.

Why this structure?

- Clear separation of concerns  
- Easier testing  
- Better scalability  
- Cleaner, maintainable code  


### Controller (API Layer)

Responsible for handling HTTP requests and returning responses.

- Defines endpoints (`GET`, `POST`, etc.)
- No business logic
- Acts as the entry point of the application

```java
@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }
}
```

### Service (Business Logic Layer)

Contains the core business logic.

- Implements business rules
- Handles validation and orchestration
- Calls repositories when data is needed

```java
@Service
public class UserService {

    public User getUserById(Long id) {
        return userRepository.findById(id);
    }
}
```


### Repository (Data Access Layer)

Responsible for interacting with the database.

- CRUD operations
- Queries
- Usually extends Spring Data JPA interfaces

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
```

### Model / Entity (Data Layer)

Represents database tables as Java objects.

```java
@Entity
public class User {

    @Id
    private Long id;

    private String name;
}
```


### Request Flow

```text
HTTP Request
    ↓
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
    ↓
Repository
    ↓
Service
    ↓
Controller
    ↓
HTTP Response
```



## 2.02 Node.js



### Overview

Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows JavaScript to run on the server, outside the browser. Node is event-driven and non-blocking: a single thread handles thousands of concurrent connections by never waiting — whenever an I/O operation (database query, HTTP call, file read) starts, Node registers a callback and immediately moves on to the next task. When the I/O finishes, the callback runs.


### Node.js Architecture

Node.js uses a single-threaded event loop to execute JavaScript code, but it is not limited to a single thread for all operations. Expensive I/O tasks such as file system operations, DNS lookups, compression, and some cryptographic operations are offloaded to a thread pool managed by libuv.

This architecture allows Node.js to handle many concurrent connections efficiently without creating a dedicated thread for each request, making it particularly well suited for I/O-intensive applications such as APIs, real-time systems, and microservices.


### CommonJS vs ES Modules

Node.js supports two module systems:

**CommonJS (traditional Node.js)**

```javascript
const express = require("express");

module.exports = myFunction;
```

**ES Modules (modern JavaScript)**

```javascript
import express from "express";

export default myFunction;
```

ES Modules are the standard JavaScript module system and are increasingly preferred in modern applications.


### Asynchronous Programming

Node.js relies heavily on asynchronous programming to avoid blocking the event loop.

**Callback**

```javascript
fs.readFile("file.txt", (err, data) => {
    console.log(data);
});
```

**Promise**

```javascript
fetch("/api/users")
    .then(response => response.json())
    .then(data => console.log(data));
```

**Async/Await**

```javascript
async function getUsers() {
    const response = await fetch("/api/users");
    const users = await response.json();
    return users;
}
```

`async/await` is generally preferred because it provides cleaner and more readable asynchronous code.


### Node.js Runtime APIs

Unlike browsers, Node.js provides APIs for interacting directly with the operating system.

Common built-in modules include:

- `fs` → file system operations
- `path` → file and directory path utilities
- `http` → creating HTTP servers
- `os` → operating system information
- `crypto` → hashing, encryption, random values
- `stream` → stream processing
- `events` → event-driven programming

Example:

```javascript
const fs = require("fs");

const content = fs.readFileSync("file.txt", "utf8");
```


### EventEmitter

Many Node.js APIs are built around events using the EventEmitter class.

```javascript
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("userCreated", user => {
    console.log(`User ${user.name} created`);
});

emitter.emit("userCreated", { name: "John" });
```

This pattern is widely used throughout Node.js for handling asynchronous events.


### When Node.js Is a Good Choice

Node.js excels at:

- REST APIs
- GraphQL APIs
- Real-time applications (chat, notifications, WebSockets)
- Microservices
- Streaming applications
- Server-side rendering

Node.js is generally less suitable for CPU-intensive workloads such as video processing, machine learning training, or large numerical computations, since these tasks can block the event loop and impact application responsiveness.


### The Event Loop in Node.js


Node.js's event loop has six phases, executed in order

  1. timers         — callbacks from setTimeout and setInterval
  2. pending I/O    — I/O callbacks deferred from previous iteration
  3. idle/prepare   — internal Node.js use
  4. poll           — retrieve new I/O events; execute I/O callbacks here
  5. check          — setImmediate() callbacks
  6. close          — close event callbacks (socket.on('close', ...))


Between each phase, Node drains the microtask queue:

```javascript
process.nextTick() callbacks run first (highest priority)
then Promise .then() callbacks

setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("Promise"));
// Order: nextTick → Promise → setTimeout or setImmediate (order varies)
```


### Express Middleware


Express middleware is a function with signature `(req, res, next)`.

Middleware acts as a layer between the incoming request and the final route handler. When a request reaches the server, it passes through one or more middleware functions before reaching the route that generates the response.

Middleware can:
- Execute logic before a route handler runs.
- Read or modify the `req` (request) and `res` (response) objects.
- End the request-response cycle by sending a response.
- Call `next()` to pass control to the next middleware or route handler.
- Handle errors and centralize error management.

A common Express application uses middleware for tasks such as authentication, authorization, request validation, logging, rate limiting, parsing request bodies, and error handling.

Middleware functions are executed in the order they are registered, creating a processing pipeline for each request.


```javascript
const express = require("express");
const app = express();

// Global middleware — runs on every request
app.use(express.json());                 // parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // parse form bodies

// Custom middleware
function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();   // token valid — continue to the next handler
    } catch {
        res.status(401).json({ error: "Invalid token" });
    }
}

// Route with middleware
app.get("/api/profile", authMiddleware, (req, res) => {
    res.json(req.user);
});

// Error handling middleware — MUST have 4 parameters
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error" });
});
```


### Streams


Streams process data in chunks rather than loading everything into memory at once. A 10GB CSV file can be processed line by line with a Stream using very little memory.

```javascript
// Without streams: reads entire file into memory
fs.readFile("huge.csv", (err, data) => processAll(data));

// With streams: processes chunks as they arrive
const readable = fs.createReadStream("huge.csv");
const writable = fs.createWriteStream("output.csv");
readable.pipe(transform).pipe(writable);

// HTTP response is a stream too
app.get("/download", (req, res) => {
    const stream = fs.createReadStream("large-file.pdf");
    stream.pipe(res);   // stream directly to the HTTP response
});
```



## 2.03 REST APIs



### Overview

REST (Representational State Transfer) is an architectural style for networked APIs. REST uses HTTP — meaning REST APIs leverage existing HTTP infrastructure (caching, load balancers, proxies) without extra protocol overhead.


### HTTP Methods and Idempotency


Idempotent means calling the method multiple times with the same input produces the same result (no additional side effects). Safe means the method does not modify server state.

Method   | Safe | Idempotent | Use case
---------|------|------------|---------------------------
GET      | Yes  | Yes        | Retrieve a resource
POST     | No   | No         | Create a resource
PUT      | No   | Yes        | Replace a resource completely
PATCH    | No   | No*        | Partial update
DELETE   | No   | Yes        | Delete a resource
HEAD     | Yes  | Yes        | Like GET but no body
OPTIONS  | Yes  | Yes        | Discover allowed methods

**PUT vs PATCH**: PUT replaces the entire resource (you must send all fields); PATCH updates only what you send.

**POST vs PUT for creation**: use POST when the server generates the ID (POST /users
returns the new ID); use PUT when the client specifies the ID (PUT /users/123).


### HTTP Status Codes


**2xx — Success**
200 OK              — standard success
201 Created         — resource created (include Location header with new URL)
204 No Content      — success but no body to return (DELETE, some PUTs)

**3xx — Redirection**
301 Moved Permanently — URL changed; update bookmarks
304 Not Modified      — client's cached version is still valid (ETags/Last-Modified)

**4xx — Client Error**
400 Bad Request     — malformed request, validation failure
401 Unauthorized    — not authenticated (no or invalid credentials)
403 Forbidden       — authenticated but not authorised (lacks permission)
404 Not Found       — resource doesn't exist
409 Conflict        — resource conflict (e.g. duplicate email)
422 Unprocessable Entity — request understood but semantically invalid
429 Too Many Requests — rate limit exceeded

**5xx — Server Error**
500 Internal Server Error — generic server failure (don't expose details!)
502 Bad Gateway     — upstream service returned an invalid response
503 Service Unavailable — server is down or overloaded
401 vs 403: "401 — I don't know who you are. 403 — I know who you are, but you
can't do this."


### REST Naming Conventions


#### Use nouns for resources, never verbs

GET  /users          — list all users
POST /users          — create a user
GET  /users/123      — get user 123
PUT  /users/123      — replace user 123
DELETE /users/123    — delete user 123
GET  /users/123/posts — list posts belonging to user 123


Use query parameters for filtering, sorting, pagination: GET /users?role=admin&sort=name&page=2&limit=20


#### Version your API

/api/v1/users   — explicit versioning in path

**Accept**: application/vnd.myapi.v1+json   — header versioning


## 2.04 GraphQL



### Overview

GraphQL is a query language for APIs developed by Facebook in 2012, open-sourced in 2015. It is not a database query language — it is an API communication protocol. Where REST has many endpoints (one URL per resource), GraphQL has a single endpoint. Clients specify exactly what data they need, and the server returns precisely that — no more, no less.


### The Problems Graphql Solves


**Over-fetching (rest)**: GET /api/users/42 returns 20 fields — the mobile client only needs name and avatar. You download 20x more data than necessary.


**Under-fetching (rest)**: A single endpoint doesn't have enough data, and the client must make multiple requests to assemble a view:

```text
GET /api/users/42
GET /api/users/42/posts
GET /api/users/42/followers
```

— three round trips, each with latency. GraphQL solution — one request for exactly what you need:

```typescript
query {
    user(id: "42") {
        name
        avatar
        posts(limit: 5) { title }
        followers { count }
    }
}
```


### The Schema — CONTRACT BETWEEN CLIENT AND SERVER

Every GraphQL API is defined by a schema written in SDL (Schema Definition Language). The schema declares all available types, queries, mutations, and subscriptions — it is the contract between client and server.


```typescript
scalar DateTime
scalar URL

type User {
    id:        ID!           # ID — unique identifier (serialised as String, but semantic ID)
    name:      String!       # ! means non-null — guaranteed to be present
    email:     String!
    bio:       String        # nullable — may be absent
    createdAt: DateTime!
    posts:     [Post!]!      # non-null list of non-null Posts
    avatar:    URL
}

type Post {
    id:        ID!
    title:     String!
    content:   String!
    published: Boolean!
    author:    User!         # relation to User
    tags:      [String!]!
}

enum Role { ADMIN EDITOR VIEWER }

input CreateUserInput {
    name:     String!
    email:    String!
    password: String!
    role:     Role = VIEWER   # default value
}

interface Node { id: ID! }   # interface — all implementors must have id

union SearchResult = User | Post   # a field can be one of several types
```


The schema has three special root types that define available operations:

```typescript
type Query {                  # read operations (equivalent to GET in REST)
    user(id: ID!): User
    users(limit: Int = 20, offset: Int = 0, role: Role): [User!]!
    search(query: String!): [SearchResult!]!
}

type Mutation {               # write operations (equivalent to POST/PUT/DELETE)
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): Boolean!
}

type Subscription {           # real-time (WebSocket-based)
    newPost(authorId: ID): Post!
    userStatusChanged: User!
}
```


### Writing Queries, Mutations, and Subscriptions

```typescript
# Basic query — request exactly the fields you need
query {
    user(id: "42") {
        name
        email
        posts(limit: 3) {
            title
            published
        }
    }
}

# Named query with variables — best practice for logging/debugging
query GetUserWithPosts($userId: ID!, $postLimit: Int = 5) {
    user(id: $userId) {
        name
        posts(limit: $postLimit) { title }
    }
}
# Variables passed separately as JSON:
{ "userId": "42", "postLimit": 3 }

# Fragments — reusable field selections
fragment UserBasicInfo on User {
    id
    name
    email
}

query {
    user(id: "1") { ...UserBasicInfo }
}

# Inline fragments for union types
query {
    search(query: "beatriz") {
        ... on User { name email }      # fields specific to User
        ... on Post { title content }   # fields specific to Post
    }
}

# Mutation
mutation CreateNewUser($input: CreateUserInput!) {
    createUser(input: $input) {
        id
        name
        createdAt
    }
}

# Variables:
{ "input": { "name": "Beatriz", "email": "b@example.com", "password": "secure" } }

# Multiple mutations in one request — execute in SEQUENCE (not in parallel)
mutation {
    createPost(input: { title: "Hello" }) { id }
    publishPost(id: "123") { published }
}
```


### Resolvers — HOW GRAPHQL ACTUALLY FETCHES DATA

For each field in the schema, there is a RESOLVER — a function that knows how to fetch that field's value. 
Resolvers receive four arguments:

parent  — the resolved value of the parent type
args    — the arguments passed to this field in the query
context — shared object (database connection, auth info, services)
info    — information about the query (fields requested, etc.)

```typescript
const resolvers = {
    Query: {
        user: async (parent, { id }, context) => {
            return context.db.users.findById(id);
        },
    },

    User: {
        posts: async (parent, { limit }, context) => {
            // parent is the User object resolved above
            return context.db.posts.findByAuthorId(parent.id, limit);
        },
    },
};
```

### THE N+1 PROBLEM AND DATALOADER

The most critical GraphQL performance issue. When loading 100 posts, each with an author, the User.author resolver is called 100 times — 100 database queries!

DataLoader solves this with batching:
  1. Collects all IDs requested within a single event loop tick
  2. Makes ONE batch query: SELECT * FROM users WHERE id IN (1, 2, 3, ...)
  3. Caches results — if the same user appears in multiple posts, only queried once


```javascript
const userLoader = new DataLoader(async (userIds) => {
    const users = await db.users.findByIds(userIds);
    // CRITICAL: return in the same order as the input IDs!
    return userIds.map(id => users.find(u => u.id === id));
});

// In resolver — uses loader instead of direct DB call
User: {
    author: (parent, args, context) =>
        context.loaders.user.load(parent.authorId),  // batched automatically
}
// 100 posts → 1 query for users + 1 query for posts. Not 101!
```


### REST vs GRAPHQL — WHEN TO USE WHICH

Use GraphQL when:
- Multiple clients (web, mobile, third-party) need different data shapes
- You have deeply nested, relational data
- You want to avoid over-fetching / under-fetching
- Rapid product iteration where data requirements change often

Use REST when:
- Public API for third parties (more familiar, better HTTP caching)
- Simple CRUD with predictable, uniform data
- File uploads (GraphQL handles these awkwardly)
- Strong HTTP caching requirements (GET + URL = cacheable; GraphQL POST is not)




## 2.05 Microservices



### Overview

Microservices architecture splits an application into small, independently deployable services. Each service is responsible for one business domain (users, orders, payments), has its own database, and communicates with others over the network (REST, gRPC, or message queues).

**Monolith first**: most teams should start with a monolith and extract services when specific scaling or team organisation problems demand it. Microservices introduce significant complexity (distributed tracing, eventual consistency, network failures) that is not justified for small teams or early-stage products.


### Inter-service Communication


#### SYNCHRONOUS (direct call, caller waits)

**REST over HTTP** — a widely used architectural style for building APIs over the HTTP protocol. It is based on standard HTTP methods (GET, POST, PUT, DELETE, PATCH) and uses stateless communication, meaning each request contains all the information needed to be processed.

REST APIs are:
- **Universal**: they work with any client that can make HTTP requests (browsers, mobile apps, servers, etc.)
- **Easy to debug**: requests can be tested directly using tools like Postman, curl, or even a browser
- **Simple and well-understood**: they follow standard conventions and are widely adopted across the industry

However, REST also has some drawbacks:
- **Tight coupling between client and server structure**: changes in API endpoints or response formats can require updates in multiple clients
- **Over-fetching or under-fetching of data**: clients may receive more or less data than needed, leading to inefficiencies
- **Multiple round trips**: complex data often requires several API calls

Despite these limitations, REST remains the default choice for most web APIs due to its simplicity, scalability, and strong tooling support.


#### ASYNCHRONOUS (via message broker, caller does not wait)

**Message queues (RabbitMQ, Kafka, AWS SQS)** — producer sends a message and continues; consumer processes it later. 
Enables loose coupling, buffering during spikes, and retry logic. 
Use for: order placed → send email + update inventory + notify warehouse (all triggered by the same event).



### Circuit Breaker

A Circuit Breaker is a resilience pattern used in distributed systems to prevent cascading failures when a downstream service is slow or failing.

When one service depends on another (e.g. API → database or API → external service), repeated failures or slow responses can exhaust resources such as threads, connections, and memory. This can cause the failure to spread to the entire system.

The circuit breaker solves this by **stopping requests early when a service is unhealthy**.


#### States

**Closed**
- Normal operation
- Requests are allowed through to the downstream service
- Failures are monitored and counted
- If failures exceed a threshold, the circuit "opens"


**Open**
- The downstream service is considered unhealthy
- All requests are immediately rejected (fast failure)
- No calls are made to the failing service
- After a timeout period, the state moves to HALF-OPEN


**Half-Open**
- A limited number of test requests are allowed through
- If they succeed → circuit closes again (system recovers)
- If they fail → circuit reopens and remains in Open state


#### Why it is useful

- Prevents system overload during failures
- Avoids wasting resources on failing services
- Improves overall system stability and responsiveness
- Enables graceful degradation instead of total failure


#### Implementation

In Spring-based systems, circuit breakers are commonly implemented using:

- **Resilience4j** (modern standard)
- **Hystrix** (legacy, no longer actively maintained)

These libraries automatically manage state transitions, failure thresholds, and recovery logic.


### CAP Theorem — KEY FOR INTERVIEWS

In a distributed system, you can guarantee at most TWO of these three properties

**Consistency**   — every read gets the most recent write (no stale data)
**Availability** — every request gets a response (even if it might be stale)
**Partition Tolerance** — the system keeps working even if the network splits


In practice, network partitions WILL happen. So you choose:

**CP (consistent + partition-tolerant)**: may reject requests to stay consistent.
  Examples: HBase, Zookeeper, etcd, most SQL databases in single-region

**AP (available + partition-tolerant)**: stays up but may return stale data.
  Examples: Cassandra, DynamoDB, CouchDB


**Saga Pattern**: for distributed transactions.
Traditional transactions (ACID) don't work across services. Sagas break a distributed transaction into a sequence of local transactions, each publishing an event that triggers the next step. On failure, compensating transactions undo the completed steps.


### Cache

Cache is a high-speed storage layer used to temporarily store data that is expensive to compute or frequently requested. Instead of repeatedly querying a database or calling an external API, the application first checks the cache.

A **cache hit** returns data instantly. A **cache miss** triggers a fetch from the database, and the result is stored in the cache for future requests.

A common tool is **Redis**, an in-memory key-value store. It is extremely fast because it stores data in RAM instead of disk. Redis is often used for:
- Session storage (user login sessions)
- API response caching
- Leaderboards or counters
- Rate limiting counters

Example:
- Cache user profile data so repeated requests don’t hit the database
- Store “top products” list updated every few minutes instead of recomputing on every request


### Load Balancing

Load balancing distributes incoming traffic across multiple servers to improve performance and reliability.

Instead of one server handling all requests, a load balancer routes traffic across multiple instances.

Example:
- 3 backend servers
- Requests distributed evenly across them

Strategies:
- **Round Robin**: rotate requests
- **Least Connections**: send to least busy server
- **Weighted routing**: stronger servers get more traffic

Tools:
- Nginx
- HAProxy
- AWS Elastic Load Balancer


### Data Storage Strategies

#### Sharding

Sharding splits a database into multiple smaller databases (shards), each holding a subset of data.

Example:
- Users A–M → Shard 1
- Users N–Z → Shard 2

Used when a single database becomes too large to scale vertically.

Pros:
- Horizontal scalability
- Faster queries on smaller datasets

Cons:
- Complex cross-shard queries


#### Replication

Replication copies data across multiple database instances.

Common model:
- Primary node handles writes
- Replica nodes handle reads

Example:
- Write user data → primary database
- Read user profile → replica database

Benefits:
- High availability
- Fault tolerance
- Read scalability


### Notifications

Notification systems in large-scale applications are usually built using an **event-driven architecture**. Instead of services calling each other directly (e.g. “order service calls email service”), the system is designed so that services **emit events when something happens**, and other services react to those events independently.

This approach makes the system more scalable and decoupled:
- Services do not need to know who will consume their events
- New consumers can be added without changing existing services
- Failures in one part of the system do not directly break others

Typical flow:
- A business action happens (e.g. user places an order)
- The system emits an event like `order_created`
- One or more services listen to this event and react (send email, push notification, update analytics, etc.)

This creates a flexible, asynchronous system where work is distributed across multiple services.



A common tool to implement this pattern at scale is **Kafka**.

#### Kafka

Kafka is a distributed event streaming platform designed to handle large volumes of real-time data reliably and efficiently.

It works as a **message broker** between services:

How it works:
- Producers publish events to Kafka (e.g. “order_created”)
- Kafka stores these events in **topics**
- Consumers subscribe to topics and process events independently

Key concepts:
- **Producer** → sends events
- **Topic** → category where events are stored
- **Consumer** → reads and processes events
- **Broker** → Kafka server that stores and distributes events

Example:
- Order Service → produces `order_created`
- Kafka stores the event in the `orders` topic
- Notification Service → consumes event and sends email/SMS
- Analytics Service → consumes event and updates dashboards

Why Kafka is used:
- High throughput (handles millions of events per second)
- Durability (events are persisted on disk and replicated)
- Scalability (multiple consumers can read independently)
- Decoupling (services do not directly depend on each other)

Common use cases:
- Notifications (email, push, SMS)
- Event-driven microservices
- Real-time analytics
- Data pipelines



## 2.06 Authentication & Authorization



### Overview

**Authentication (AuthN)** : proving who you are (login).
**Authorization (AuthZ)** : proving you are allowed to do something (permissions).

#### JWT — JSON Web Tokens

A JWT is a compact, self-contained token with three base64url-encoded parts separated by dots: HEADER.PAYLOAD.SIGNATURE


```json
Header:  { "alg": "HS256", "typ": "JWT" }
Payload: { "sub": "123", "name": "Beatriz", "role": "admin", "exp": 1735689600 }
Signature: HMACSHA256(base64(header) + "." + base64(payload), secret)
```

The server generates the token at login and gives it to the client. The client sends it on every subsequent request. The server VERIFIES the signature to confirm it was not tampered with — it does NOT need to look up a session in a database.

Key points:
- The payload is base64-encoded, NOT encrypted — anyone can decode it. Never put sensitive data (passwords, PII) in the payload.
- The signature guarantees integrity — changing the payload invalidates the signature.
- JWTs are stateless — the server stores no session state. This enables horizontal scaling but makes token revocation hard (you must wait for expiry or maintain a revocation list).
- Where to store: httpOnly cookie (prevents XSS but needs CSRF protection) is generally safer than localStorage (vulnerable to XSS).


#### Cookie-Based Authentication (Browser Sessions)

Cookie-based authentication is a traditional approach where the server creates a **session** after login and stores it on the server side. The client only keeps a small piece of data: a **session cookie** containing a session ID.

How it works:
- User logs in with credentials
- Server creates a session (e.g. `sessionId=abc123`) and stores it in memory or a database
- Server sends a cookie to the browser: `Set-Cookie: sessionId=abc123`
- Browser automatically attaches this cookie to every request
- Server uses the session ID to look up the user session and authenticate the request

Example flow:
- Login → server creates session
- Request → browser sends cookie automatically
- Server → validates session in database/cache (e.g. Redis)

Key points:
- Session data is stored **on the server**
- Cookie only stores a **reference (session ID)**, not user data
- Cookies are automatically handled by the browser (no manual attachment needed)
- Usually stored as **HttpOnly cookies** to prevent JavaScript access (reduces XSS risk)
- Requires CSRF protection because cookies are automatically sent with requests


#### JWT vs Cookie Sessions (Comparison)

##### JWT (Token-Based Authentication)
- Stateless (server does not store session)
- Scales easily across distributed systems
- User info is embedded in the token
- Harder to revoke immediately (unless extra mechanisms are added)
- More risk if stored incorrectly (e.g. localStorage → XSS risk)

##### Cookie-Based Sessions
- Stateful (server stores session data)
- Easier to revoke instantly (delete session on server)
- More secure by default when using HttpOnly cookies
- Requires session storage (e.g. Redis, database)
- Slightly harder to scale in very large distributed systems (needs shared session store)


##### Which is better?

**Cookie-based sessions are generally better for traditional web applications** because:
- They are more secure by default (HttpOnly + SameSite cookies)
- Sessions can be invalidated immediately
- Sensitive data stays on the server

**JWT is better for distributed systems and APIs** because:
- It is stateless and scales easily
- Useful for microservices and mobile apps
- Reduces server-side session storage overhead


- Use **cookie-based sessions** → when building secure web apps (especially browser-based apps)
- Use **JWT** → when building APIs, mobile apps, or distributed microservices systems


### Oauth2 and Openid Connect


OAuth2 is an authorisation framework — it grants limited access to a user's resources at a third-party service WITHOUT sharing credentials. "Sign in with Google" is OAuth2. OpenID Connect (OIDC) is a thin identity layer on top of OAuth2 that also provides authentication.

Authorization Code Flow (the most secure, for server-side apps):
  1. User clicks "Login with Google"
  2. App redirects user to Google with client_id, redirect_uri, scope
  3. User logs in at Google, grants permissions
  4. Google redirects back to redirect_uri with an authorization code
  5. Your server exchanges the code for access_token + id_token (server-to-server)
  6. Access token is used to call Google APIs; id_token contains user identity

**PKCE (Proof Key for Code Exchange)** — extends Authorization Code Flow for mobile/SPA apps where a client secret cannot be safely stored.


### RBAC vs ABAC

**RBAC (Role-Based Access Control)** : permissions are assigned to roles; users are assigned roles. Simple and well-understood.
- admin → can do everything
- editor → can create/edit posts but not manage users
- viewer → read-only

**ABAC (Attribute-Based Access Control)** : permissions are granted based on attributes of the user, resource, and environment. More flexible, more complex.
"User can edit a document if user.department == document.department AND document.status == 'draft' AND time is within business hours"


### Password Security


Never store plain-text passwords. Use a slow, salted hash algorithm designed specifically for passwords:


```java
bcrypt — adds an automatic random salt per-hash; has a configurable cost factor
Argon2 — winner of the Password Hashing Competition (2015); recommended for
          new systems

// Java with Spring Security (BCrypt)
BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);  // cost=12
String hashed = encoder.encode(rawPassword);        // produces unique hash each time
boolean matches = encoder.matches(rawPassword, hashed);  // verify
```

NEVER use MD5 or SHA-1 for passwords — they are fast, which is good for data integrity but terrible for passwords (allows billions of guesses per second).


## 2.07 API Integration



### Overview

API integration means connecting your application to external services: payment processors, email services, mapping APIs, social platforms. Getting it right involves handling auth, errors, rate limits, retries, and schema evolution.


### Integration Patterns


**Polling**: your service calls the external API on a schedule to check for updates.
Simple but inefficient — most calls return "nothing changed".


**Webhooks**: the external service calls YOUR endpoint when something happens.
Efficient (event-driven) but requires your endpoint to be publicly reachable.
You must validate the webhook signature to prevent spoofing.


```java
// Validate a Stripe webhook signature (never trust without verifying)
String signature = request.getHeader("Stripe-Signature");
try {
    Event event = Webhook.constructEvent(payload, signature, webhookSecret);
    handleStripeEvent(event);
} catch (SignatureVerificationException e) {
    return ResponseEntity.status(400).body("Invalid signature");
}
```

SDK vs raw HTTP: use the official SDK when available — it handles auth, retry, serialisation, and keeps up with API changes. Roll your own HTTP calls only when there is no SDK or when you need fine control.

### Rate Limiting

Rate limiting controls how many requests a user or service can make in a given time window. It protects systems from overload and abuse.

For example:
- 100 requests per minute per user
- 10 login attempts per minute to prevent brute-force attacks

Rate limiting is often implemented using Redis to store counters with expiration times.

Common algorithms:
- **Fixed window**: reset counter every X seconds
- **Sliding window**: smoother tracking over time
- **Token bucket**: users consume tokens; tokens refill over time

Tools: Redis, API gateways (Kong, Nginx, AWS API Gateway)



Most external APIs enforce rate limits (e.g. 100 requests per minute). When exceeded, you receive a 429 Too Many Requests response. 
Proper handling:

```java
EXPONENTIAL BACKOFF WITH JITTER:
retry attempt 1: wait 1s
retry attempt 2: wait 2s
retry attempt 3: wait 4s
retry attempt 4: wait 8s + random jitter (0-1s) to avoid thundering herd

// With Resilience4j Retry
RetryConfig config = RetryConfig.custom()
    .maxAttempts(4)
    .waitDuration(Duration.ofSeconds(1))
    .retryOnException(e -> e instanceof HttpServerErrorException)
    .build();
```

Only retry on transient errors (network timeouts, 500, 502, 503, 429). Never retry on 400 (bad request) or 401/403 (auth errors) — those won't succeed on retry.



## 2.08 WebSockets



### Overview

HTTP is request-response: the client asks, the server answers, then the connection closes. WebSockets are persistent, full-duplex connections — both client and server can send messages at any time. They are ideal for: chat applications, live notifications, collaborative editing, real-time dashboards, multiplayer games.


### The Upgrade Handshake


A WebSocket connection starts as a standard HTTP request with an upgrade:

```text
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13

Response:
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

After the handshake, the TCP connection remains open and the protocol switches to the WebSocket framing protocol. Neither side needs to re-establish the connection for subsequent messages.



### SSE vs WEBSOCKETS


**SSE (Server-Sent Events)** — one-way (server → client only), works over standard HTTP, automatically reconnects, simple. 
Good for: notifications, live feed, progress updates.

**WebSockets** — full-duplex (both directions), separate protocol, requires explicit reconnection logic. Good for: chat, collaborative tools, gaming.


**Scaling Websockets**: a WebSocket connection is stateful — it stays connected to one server. If you have multiple server instances, a client on server A cannot receive a message sent to server B. 
Solution: use a pub/sub broker (Redis pub/sub, Kafka) so any server can broadcast to all connected clients.


## 2.09 SOAP



### Overview

SOAP (Simple Object Access Protocol) is an XML-based messaging protocol used primarily in enterprise systems and legacy integrations. Unlike REST, which is an architectural style, SOAP is a formal protocol with strict specifications.


### Key Concepts


**WSDL (Web Services Description Language)** : an XML document that describes the SOAP service — what operations it offers, what parameters each takes, what data types are used, and where the service endpoint is. Equivalent to an OpenAPI spec for REST. You generate client code from the WSDL.


**SOAP Envelope**: every SOAP message wraps its content in an Envelope containing an optional Header (for auth tokens, routing info) and a mandatory Body (the actual request/response payload).


```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:auth="http://example.com/auth">
  <soapenv:Header>
    <auth:Credentials>
      <auth:Username>beatriz</auth:Username>
      <auth:Password>secret</auth:Password>
    </auth:Credentials>
  </soapenv:Header>
  <soapenv:Body>
    <auth:GetUserRequest>
      <auth:UserId>12345</auth:UserId>
    </auth:GetUserRequest>
  </soapenv:Body>
</soapenv:Envelope>
```

Generating Java client from WSDL with Spring:


```java
wsimport -keep -s src/main/java http://example.com/service?wsdl
// Generates Java classes for all types and port proxies

@Service
public class SoapClientService {
    @Autowired
    private UserServicePort userService;   // generated stub

    public User getUser(String id) {
        GetUserRequest req = new GetUserRequest();
        req.setUserId(id);
        return userService.getUser(req).getUser();
    }
}
```

When you encounter SOAP in the wild: it is common in banking, insurance, government, and healthcare systems where contracts are strict, auditable, and change slowly.


## 2.10 JSON

JSON (JavaScript Object Notation) is a lightweight data format used to represent structured data. It is the standard format for most modern APIs because it is simple, human-readable, and easy to convert into objects in almost any programming language.

At its core, JSON represents data as key-value pairs (objects) and ordered lists (arrays). It is very close to how JavaScript objects work, which is why it is so widely used in web development.

Typical use cases:
- REST APIs (request and response bodies)
- Configuration files
- Data exchange between frontend and backend

Because of its simplicity, JSON is fast to parse and generate, and it integrates naturally with JavaScript-based systems and modern backend frameworks like Spring Boot, Node.js, and Python APIs.

It supports six value types:
- string
- number
- boolean
- null
- array (`[]`)
- object (`{}`)

JSON focuses on simplicity and speed:
- Lightweight
- Easy for machines and humans
- Direct mapping to objects in code


### JSON in Java (Spring Boot + Jackson)

In Spring Boot, JSON serialization and deserialization is handled automatically by **Jackson**.

```java
@RestController
public class UserController {

    // Java object → JSON (serialization)
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }

    // JSON → Java object (deserialization)
    @PostMapping("/users")
    public User createUser(@RequestBody @Valid CreateUserRequest request) {
        return userService.create(request);
    }
}
```


### Jackson Customization

Jackson allows you to control how Java objects are converted to JSON.

```java
public class User {

    @JsonProperty("user_id")   // rename field in JSON output
    private Long id;

    @JsonIgnore                 // exclude field from JSON
    private String password;

    @JsonFormat(pattern = "yyyy-MM-dd")  // format dates
    private LocalDate birthDate;

    @JsonInclude(JsonInclude.Include.NON_NULL) // omit null values
    private String middleName;
}
```


## 2.11 XML

XML (eXtensible Markup Language) is a more structured and verbose data format designed to store and transport data in a highly flexible way. Unlike JSON, XML uses tags to define both structure and data, similar to HTML.

XML is more expressive than JSON because it supports:
- Attributes (extra metadata inside tags)
- Namespaces (to avoid naming conflicts)
- Mixed content (text + nested elements)
- Comments inside the document

Because of this flexibility, XML is often used in enterprise and legacy systems where strict structure and extensibility are important.

Typical use cases:
- SOAP APIs
- Banking and enterprise systems
- Legacy integrations
- Document-heavy data formats

However, XML is more verbose, harder to read, and slower to parse compared to JSON, which is why it is less common in modern web APIs.


### XML Parsing in Java

There are multiple ways to parse XML in Java:

#### DOM (Document Object Model)
- Loads the entire XML into memory as a tree
- Easy to navigate
- Slow for large files

#### SAX (Simple API for XML)
- Event-driven parsing (reads node by node)
- Very fast and memory efficient
- Harder to implement

#### JAXB (Java Architecture for XML Binding)
- Converts Java objects ↔ XML using annotations
- Common in enterprise applications and SOAP services


### JAXB Example

```java
@XmlRootElement(name = "user")
@XmlAccessorType(XmlAccessType.FIELD)
public class User {

    @XmlElement(name = "user-id")
    private Long id;

    private String name;
}
```

XML focuses on structure and flexibility:
- More verbose but more expressive
- Better for complex document structures
- Strong schema validation (XSD)


## 2.12 Network Protocols

Network protocols are standardized rules that define how data is exchanged between devices over a network. They enable different systems (browsers, servers, mobile apps, databases, etc.) to communicate reliably by agreeing on how data is structured, transmitted, and interpreted.

In practice, the internet is built as a layered system of protocols, where each layer has a specific responsibility in the communication process.


**Application-layer protocol**: defines how applications communicate and how data is structured and interpreted at the application level—for example, HTTP defines how requests, responses, resources, and headers are formatted and understood in web communication.

**Transport-layer protocol**: focuses on how data is transmitted between two machines over a network, without caring about its meaning. It is responsible for breaking data into packets, ensuring delivery, ordering, and reliability (as in TCP), or enabling fast, low-latency transmission without guarantees (as in UDP).



### HTTP (HyperText Transfer Protocol)

HTTP is an **application-layer protocol** used for communication between clients (like browsers or mobile apps) and servers.

It defines how requests and responses are structured:
- **Request methods** (GET, POST, PUT, DELETE, PATCH)
- **Headers** (metadata like authentication tokens, content type)
- **Body** (actual data being sent)


Key idea: HTTP is **stateless**, meaning every request is independent and does not automatically remember previous requests. Any "state" (like login sessions) must be handled separately (cookies, tokens, etc.).


HTTP runs on top of TCP, which ensures reliable delivery.


Typical use cases:
- REST APIs
- Web applications
- Fetching or sending data between frontend and backend


### TCP (Transmission Control Protocol)

TCP is a **transport-layer protocol** responsible for reliable communication between two machines.

It ensures that data is delivered:
- In the correct order
- Without loss
- Without corruption


How it works:
- Establishes a connection using a **three-way handshake**
- Splits data into packets
- Tracks delivery and retransmits missing packets


Key idea: TCP is **reliable but slower**, because it guarantees correctness and ordering.


Typical use cases:
- HTTP/HTTPS traffic
- Databases (PostgreSQL, MySQL connections)
- File transfers
- Email systems


### UDP (User Datagram Protocol)

UDP is also a **transport-layer protocol**, but it focuses on speed instead of reliability.

It sends packets without establishing a connection and without guaranteeing delivery.


Key characteristics:
- No handshake (connectionless)
- No guarantee that packets arrive
- No ordering of packets
- Very low latency and overhead


Key idea: UDP is **fast but unreliable**, making it ideal for real-time systems where speed matters more than perfect accuracy.


Typical use cases:
- Video calls (Zoom, Google Meet, WebRTC)
- Online gaming
- Live streaming
- DNS queries


### Key Takeaway

- **HTTP** defines *how applications communicate*
- **TCP** ensures *reliable delivery of data*
- **UDP** prioritizes *speed for real-time communication*



---

# Part 3 — Frontend & Mobile



## 3.01 React



### Overview

React is a JavaScript library for building user interfaces, created by Facebook Meta. It is declarative — you describe how the UI SHOULD look based on state, and React ensures the DOM stays in sync. It uses a Virtual DOM to minimise actual DOM changes (which are slow). React is only the view layer — you complement it with React Router (routing), Zustand/Redux (state), and React Query/SWR (data fetching).


### Virtual DOM and Reconciliation


The Virtual DOM is an in-memory representation of the real DOM. When state changes, React creates a new Virtual DOM tree, diffs it against the previous one (reconciliation), and applies only the minimal set of real DOM changes needed. This batching and diffing is what makes React fast.

React 18 introduced Concurrent Mode — React can now pause, interrupt, and resume rendering. Long renders don't block the UI. 

### Key APIs

**useTransition** — mark a state update as non-urgent (show stale UI while transitioning, update in background)

**useDeferredValue** — defer re-rendering of a slow component

### Hooks


Hooks let you use React state and lifecycle features in function components.

**useState** — local component state

```javascript
const [count, setCount] = useState(0);
// Always use the setter: setCount(prev => prev + 1) for updates based on
// previous value (safe with concurrent rendering)
```

**useEffect** — synchronise with an external system (API, DOM, timers)

```javascript
useEffect(() => {
    const subscription = dataSource.subscribe(setData);
    return () => subscription.unsubscribe();   // cleanup on unmount or re-run
}, [dataSource]);   // dependency array: re-run when dataSource changes
// [] — run only once (on mount)
// no array — run after every render
// [a, b] — run when a or b change
```

**useContext** — consume a Context value without prop drilling

```javascript
const theme = useContext(ThemeContext);
```

**useReducer** — complex state with multiple sub-values (like Redux but local)

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: "INCREMENT" });
```

**useMemo** — memoize an expensive calculation

```javascript
const sorted = useMemo(() => items.sort(compareFn), [items]);
// only re-sorts when items changes, not on every render
```

**useCallback** — memoize a function reference

```javascript
const handleClick = useCallback(() => doSomething(id), [id]);
// stable reference prevents unnecessary re-renders of children
```

**useRef** — mutable value that does NOT trigger re-render; also for DOM references

```javascript
const inputRef = useRef(null);
inputRef.current.focus();
```

Every time a component re-renders, all functions and calculations inside it are recreated. useMemo and useCallback avoid this for expensive or reference-sensitive values.


### Keys


Keys help React identify which list items have changed, been added, or removed.
They must be stable, unique among siblings, and not array indices (index keys cause subtle bugs when items are reordered or deleted).


```javascript
// Bad — array index as key
{items.map((item, i) => <Item key={i} {...item} />)}

// Good — stable, unique ID
{items.map(item => <Item key={item.id} {...item} />)}
```


### Performance Patterns

React.memo  — prevents re-render if props have not changed (shallow comparison)

```javascript
  const MyComponent = React.memo(({ name }) => <div>{name}</div>);

Code splitting with React.lazy and Suspense:
  const HeavyChart = React.lazy(() => import("./HeavyChart"));
  <Suspense fallback={<Spinner />}>
      <HeavyChart />
  </Suspense>
```

State lifting: when two components need to share state, lift it to their nearest common ancestor and pass it down as props.


## 3.02 Angular



### Overview

Angular is a complete framework — not just a library. It includes routing, forms, HTTP client, testing utilities, and an opinionated architecture, all out of the box. Built with TypeScript by Google. Angular uses a component-based architecture and relies heavily on RxJS for reactive programming.


### Components, Templates, and Change Detection


**Change Detection**: by default (Default strategy), Angular checks every component on every browser event. 
OnPush strategy only checks when:
  - A component's @Input reference changes
  - An event originates from the component
  - An async pipe emits a new value
  - You manually call markForCheck()

OnPush dramatically improves performance in large apps.

```typescript
@Component({
    selector: "app-user-card",
    template: `
      <div *ngIf="user; else loading">
        <h2>{{ user.name }}</h2>
        <button (click)="onEdit()">Edit</button>
      </div>
      <ng-template #loading><p>Loading...</p></ng-template>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush   // only check on new ref or input
})
export class UserCardComponent {
    @Input() user: User;       // data flows in
    @Output() edit = new EventEmitter<User>();  // events flow out
    onEdit() { this.edit.emit(this.user); }
}
```


### Services and Dependency Injection


**providedIn**: "root" registers the service as a singleton without needing to add it to any module's providers array.

```typescript
@Injectable({ providedIn: "root" })   // singleton for the entire app
export class UserService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>("/api/users");
    }
}
```


### Rxjs Operators (critical for Angular Interviews)


**switchMap** — cancels the previous inner Observable when a new outer value arrives.

Use for: autocomplete search (cancel old search when user types again)

```typescript
this.searchInput.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(query => this.api.search(query))  // old request cancelled on new keystroke
).subscribe(results => this.results = results);
```

**mergeMap** — subscribes to all inner Observables concurrently, merges results.

Use for: multiple independent operations in parallel (upload multiple files)


**concatMap** — subscribes to inner Observables one at a time, in order.

Use for: sequential operations where order matters (process items one by one)


**exhaustMap** — ignores new outer values while the current inner Observable is active.

Use for: login button (ignore extra clicks while request is in-flight)

```html
// async pipe in template — subscribes and auto-unsubscribes
<ul>
  <li *ngFor="let user of users$ | async">{{ user.name }}</li>
</ul>
```



## 3.03 Three.js



### Overview

Three.js is a JavaScript library that wraps WebGL, making 3D rendering accessible without writing low-level shader code. WebGL is a JavaScript API for GPU-accelerated graphics in the browser — powerful but complex. Three.js abstracts it into scenes, cameras, meshes, lights, and materials.


### Core Concepts


Every Three.js application has three essential components:

**Scene**   — the 3D world container; you add objects to it

**Camera**  — defines your viewpoint (PerspectiveCamera for 3D realism; OrthographicCamera for 2D/isometric)

**Renderer** — draws the scene from the camera's perspective onto a canvas

```javascript
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Mesh = geometry (shape) + material (appearance)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x3b82f6 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Light — without light, most materials appear black
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

camera.position.z = 5;

// Animation loop — runs every frame (60fps target)
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
```


**Performance**: 3D rendering is GPU-intensive. 
Key practices:
  - Reuse geometries and materials across Mesh instances
  - Use LOD (Level of Detail) — simpler meshes for distant objects
  - Dispose geometry/material/texture when removing from scene
  - Use BufferGeometry (not Geometry) — already the default in Three.js r125+


## 3.04 Next.js

### Overview
 
Next.js is the most popular React framework, developed by Vercel. It extends React by adding features such as Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), file-based routing, API routes, image optimisation, and more.

One of React's biggest limitations is that it performs Client-Side Rendering (CSR) by default. The server initially sends almost empty HTML containing only a root element. The browser must then download the JavaScript bundle, execute React, and finally generate the page. This gives poor SEO (Search Engine Optimization), because search engines may not wait for JavaScript, and slow initial load.

Example of a React app initial response:

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <script src="main.js"></script>
  </body>
</html>
```

Flow of Client-Side Rendering:

```text
Browser
  ↓
Download HTML
  ↓
Download JavaScript
  ↓
Execute React
  ↓
Render UI
  ↓
Display page
```

Why CSR is a problem
- Slower initial load (user waits for JavaScript)
- Poor SEO (Search engines may not execute JS immediately)
- Empty initial HTML


**How Next.js solves this**:

Next.js allows React components to be rendered on the server using Node.js before sending HTML to the browser.

Example component:

```Javascript
export default function Home() {
  return <h1>Hello World</h1>;
}
```

On the server (Node.js), React renders this component into HTML:

```Javascript
import { renderToString } from "react-dom/server";

const html = renderToString(<Home />);
```

Result:

```html
<h1>Hello World</h1>
```

Flow of Server-Side Rendering:

```text
Browser request
  ↓
Node.js runs React
  ↓
HTML is generated
  ↓
HTML sent to browser
  ↓
Page displayed immediately
  ↓
JavaScript loads
  ↓
Hydration
```

**Hydration**: After the HTML is displayed, React “hydrates” the page
```text
Static HTML
  ↓
Load JavaScript bundle
  ↓
Attach event listeners
  ↓
Page becomes interactive
```



### The Four Rendering Modes


**CSR (Client-Side Rendering)** : browser downloads JavaScript and renders entirely in the browser. Standard React.
```text
Browser
  ↓
Download HTML
  ↓
Download JS
  ↓
Render UI in browser
```

Pros:
- Fast navigation after load

Cons:
- Slow initial load
- Poor SEO (Search Engine Optimization)
- Empty initial HTML


**SSR (Server-Side Rendering)** : HTML is generated on the server per request, sent to the browser, then hydrated (React takes over). 
```text
Request
  ↓
Server renders React
  ↓
HTML sent to browser
  ↓
Hydration
```

Pros:
- Good SEO
- Fast first render
- Always fresh data

Cons:
- Server work on every request
- Slower than static pages


**SSG (Static Site Generation)** : HTML is generated at BUILD time and cached as a static file.
```text
Build time
  ↓
Generate HTML
  ↓
Serve from CDN
```

Pros:
- Extremely fast
- Excellent SEO
- No server computation per request

Cons:
- Data can become outdated until next build

**ISR (Incremental Static Regeneration)** : like SSG, but pages are regenerated in the background after a specified time. You get static performance with reasonably fresh data. The best of SSG and SSR for most cases.
```text
Build time
  ↓
Generate static page
  ↓
Serve from CDN
  ↓
Background revalidation
  ↓
Regenerate page
```

Pros:
- Fast like SSG
- More up-to-date than SSG
- Scales extremely well

Cons:
- Data is not instantly updated


### APP ROUTER FILE CONVENTIONS (NEXT.JS 13+)

Next.js 13 introduced the App Router — a significant change. The file structure IS the routing structure. 

Inside the `app/` directory:

```text
app/
  layout.tsx       — root layout (wraps all pages; never unmounts)
  page.tsx         — the "/" route
  loading.tsx      — automatic Suspense boundary while page loads
  error.tsx        — automatic error boundary
  not-found.tsx    — rendered when notFound() is called

  dashboard/
    layout.tsx     — layout for all routes under /dashboard
    page.tsx       — "/dashboard" route
    users/
      page.tsx     — "/dashboard/users" route
      [id]/
        page.tsx   — "/dashboard/users/42" — [id] is a dynamic parameter
```

### SERVER COMPONENTS vs CLIENT COMPONENTS

This is the central innovation of the App Router. 
By default, ALL components in the app/ directory are **React Server Components** — they run ONLY on the server and send HTML to the browser. No JavaScript for them is shipped to the client.


```Javascript
// app/users/page.tsx — Server Component (no "use client" needed)
// This can query the database directly — the code never runs in the browser
export default async function UsersPage() {
    const users = await db.query("SELECT * FROM users LIMIT 20");
    // async/await works directly in the component!
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
```

**Client Components** are needed when you require browser APIs or interactivity (the user can do things on the page that change the content without reloading the page, for exemple see a counter on click in a button, onClick):


```Javascript
"use client";   // ← REQUIRED directive — makes this a Client Component
import { useState, useEffect } from "react";

export function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
    const [query, setQuery] = useState("");   // hooks only work in Client Components
    return (
        <input
            value={query}
            onChange={e => { setQuery(e.target.value); onSearch(e.target.value); }}
            placeholder="Search..."
        />
    );
}
```

When to use each:
**Server Component (default)** — data fetching, accessing backends/databases, large dependencies (keep them off the client bundle)
**Client Component** — onClick/onChange, useState, useEffect, browser-only APIs, real-time updates, complex animations


### Route Handlers (api Routes)


In Next.js 13+ (App Router), API endpoints are route.ts files:


```Javascript
// app/api/users/route.ts — handles /api/users
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get("role");
    const users = await db.findUsers({ role });
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const user = await db.createUser(body);
    return NextResponse.json(user, { status: 201 });
}

// app/api/users/[id]/route.ts — dynamic route
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const user = await db.findUserById(params.id);
    if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(user);
}
```


### Data Fetching and Caching


Next.js extends the native fetch() with caching options:


```javascript
// SSG — cached indefinitely, rebuilt only on next deployment
const data = await fetch("https://api.example.com/posts", {
    cache: "force-cache"   // default behaviour
});

// SSR — never cached, always fresh
const data = await fetch("https://api.example.com/posts", {
    cache: "no-store"
});

// ISR — revalidate every 60 seconds
const data = await fetch("https://api.example.com/posts", {
    next: { revalidate: 60 }
});

// On-demand revalidation — trigger from a webhook or API route
import { revalidatePath } from "next/cache";
revalidatePath("/posts");   // invalidates the cache for this path
```


### Next/Image and Next/Font



```Javascript
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// Google Font is downloaded at build time, self-hosted — no runtime network request

// next/image: automatic WebP conversion, lazy loading, prevents layout shift (CLS)
<Image
    src="/hero.jpg"
    alt="Hero image"
    width={1200}
    height={600}
    priority   // preload above-the-fold images
/>

// External images need the domain whitelisted in next.config.js:
// images: { domains: ["images.unsplash.com"] }
```


### Metadata and Seo



```Javascript
// app/layout.tsx — static metadata
export const metadata: Metadata = {
    title: { default: "MyApp", template: "%s | MyApp" },
    description: "My application",
};

// app/users/[id]/page.tsx — dynamic metadata per page
export async function generateMetadata({ params }): Promise<Metadata> {
    const user = await db.findUserById(params.id);
    return {
        title: user.name,
        description: user.bio,
        openGraph: {
            title: user.name,
            images: [user.avatar],
        },
    };
}
```


## 3.05 React Native



### Overview

React Native lets you build native iOS and Android apps using React and JavaScript. Unlike a web view wrapper (Cordova), React Native renders actual native UI components — a <View> becomes a UIView on iOS, a View on Android.
The JavaScript runs on a separate thread; it communicates with the native side through a bridge (or directly with JSI in the new architecture).


### Key Components



```javascript
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

// Layout is always flexbox (column by default, unlike web which is row)
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
    button: { backgroundColor: "#3b82f6", padding: 12, borderRadius: 8 },
    buttonText: { color: "#fff", textAlign: "center" },
});

// Always use StyleSheet.create (not inline objects) — it optimises styles
// by converting them once, improving render performance
```

### FLATLIST vs SCROLLVIEW

**ScrollView** renders ALL children at once — fine for short lists but causes performance issues with hundreds of items (all rendered even if off-screen).

**FlatList** renders only visible items plus a small buffer (virtualised). 
Always use FlatList for dynamic lists of unknown or large length.

```Javascript
<FlatList
    data={users}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <UserCard user={item} />}
    onEndReached={loadMore}         // infinite scroll
    onEndReachedThreshold={0.5}    // trigger when 50% from end
/>
```

### BRIDGE vs JSI (NEW ARCHITECTURE)

**Old architecture**: JavaScript communicates with native code via an asynchronous bridge — serialises data to JSON, sends across, deserialises. 
This is a performance bottleneck for frequent calls.

**New architecture (JSI — JavaScript Interface)**: JavaScript can call native functions synchronously, holding references to native objects directly. No serialisation. Enables React Native's Fabric renderer and Turbo Modules.



## 3.06 Flutter



### Overview

Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Written in Dart. Unlike React Native, Flutter does NOT use native UI components — it draws every pixel itself using its own Skia/Impeller rendering engine. This gives pixel-perfect consistency across platforms.


### Widgets — EVERYTHING IS A WIDGET

In Flutter, the entire UI is built from widgets — from layout containers to buttons to padding to the app itself. 

There are two kinds:

**StatelessWidget** — immutable; build() always produces the same output for the same inputs. No mutable state.

```dart
class Greeting extends StatelessWidget {
    final String name;
    const Greeting({required this.name, Key? key}) : super(key: key);

    @override
    Widget build(BuildContext context) {
        return Text("Hello, $name!");
    }
}
```


**StatefulWidget** — has mutable state that can change over time. Flutter creates a separate State object that persists between rebuilds. When you call setState(), Flutter schedules a rebuild of the widget.

```dart
class Counter extends StatefulWidget {
    const Counter({Key? key}) : super(key: key);
    @override
    State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
    int _count = 0;

    @override
    Widget build(BuildContext context) {
        return Column(
            children: [
                Text("Count: $_count"),
                ElevatedButton(
                    onPressed: () => setState(() => _count++),
                    child: const Text("Increment"),
                ),
            ],
        );
    }
}
```

### BuildContext — THE KEY TO THE WIDGET TREE

BuildContext is a handle to the widget's location in the widget tree. It represents *where the widget is positioned* in the hierarchy and allows it to interact with other parts of the app.

It is NOT data storage and NOT used to pass values between widgets. Instead, it is used to:
- Access inherited widgets (Theme, MediaQuery, Navigator, Provider, etc.)
- Locate services provided higher up in the tree
- Interact with the Flutter framework


Flutter is like a tree:

```text
MaterialApp
  └── HomePage
        └── Column
              └── Button (has BuildContext)
```

Each widget has its own BuildContext, which tells Flutter:
***“Where am I inside this tree?”***

Instead of passing values manually through every widget, Flutter lets you access shared data directly using context.


Common uses of BuildContext:

```dart
@override
Widget build(BuildContext context) {
    final theme = Theme.of(context);      // access app theme
    final size = MediaQuery.of(context).size;  // screen dimensions
    return Text("Hello", style: theme.textTheme.headline6);
    Navigator.push(                      // navigation
        context,
        MaterialPageRoute(
            builder: (context) => SecondPage(),
        ),
    );
}
```



## 3.07 Kotlin



### Overview

Kotlin is a statically typed language developed by JetBrains, running on the JVM (and compilable to native/JS). Google made it the preferred language for Android development. Kotlin is fully interoperable with Java — you can call Java code from Kotlin and vice versa. Kotlin's design goal is to be more concise, safer, and more expressive than Java.


### NULL Safety


Kotlin distinguishes nullable and non-nullable types at the type-system level, eliminating NullPointerExceptions at compile time:

```kotlin
var name: String = "Beatriz"    // non-nullable — cannot be null
var nickname: String? = null    // nullable — explicitly marked with ?

val length = nickname?.length   // safe call — null if nickname is null
val len = nickname?.length ?: 0 // elvis operator — default value if null
val upper = nickname!!.uppercase()  // non-null assertion — throws if null
```


### Data Classes (Kotlin)

A `data class` in Kotlin is a special type of class designed to hold data. It is mainly used for models such as API responses, user objects, or any structure whose primary purpose is storing values.

Instead of writing a lot of boilerplate code like in Java (getters, setters, equals, hashCode, toString, etc.), Kotlin automatically generates all of this for you.


```kotlin
data class User(val id: Long, val name: String, val email: String)
```


With a single data class, Kotlin generates automatically:
- equals() and hashCode() → object comparison
- toString() → readable string representation
- copy() → create a modified copy of an object
- componentN() functions → used for destructuring

Example usage:

```javascript
val user = User(1, "Beatriz", "b@example.com")
val updated = user.copy(email = "new@example.com")   // copy with one field changed
val (id, name) = user    // destructuring
```


### Coroutines


Coroutines are Kotlin's solution for asynchronous programming. They are lightweight "suspendable computations" — a coroutine can suspend at a suspension point without blocking its underlying thread, and resume later (possibly on a different thread). You can have thousands of coroutines on a handful of threads.


```kotlin
// suspend function — can be paused and resumed
suspend fun fetchUser(id: Long): User {
    return withContext(Dispatchers.IO) {    // run on IO thread pool
        api.getUser(id)                    // suspend here while network request runs
    }
}

// Launch a coroutine in a ViewModel
viewModelScope.launch {
    val user = fetchUser(1)   // suspends, doesn't block the main thread
    _uiState.value = UiState.Success(user)
}
```

#### Dispatchers control which thread pool a coroutine runs on

Dispatchers.Main   — Android UI thread (for UI updates)
Dispatchers.IO     — for network/disk I/O (large pool of threads)
Dispatchers.Default — CPU-intensive work (bounded pool, one per CPU core)



## 3.08 Swift



### Overview

Swift is Apple's programming language for iOS, macOS, watchOS, and tvOS development. Released in 2014, it replaced Objective-C with a safer, more modern syntax. Swift is statically typed, compiled, and designed for both safety (optionals, immutability) and performance.


### Optionals


Swift uses optionals to express the possibility of a value being absent.
An optional is either a value or nil — it wraps the actual type.


```swift
var name: String? = nil     // optional — might be nil
var age: Int = 25           // non-optional — always has a value

// if let — safely unwrap, only runs block if not nil
if let name = name {
    print("Hello, \(name)")
}

// guard let — early return pattern (preferred in functions)
guard let name = name else {
    print("No name")
    return
}
print("Hello, \(name)")   // name is safely unwrapped here

// Optional chaining
let length = name?.count   // Int? — nil if name is nil

// Nil coalescing
let display = name ?? "Anonymous"

// Force unwrap — only if you are certain it is not nil
let forcedName = name!     // crashes if nil — use sparingly
```


### SwiftUI


SwiftUI is Apple's declarative UI framework (2019+). Like React, you describe what the UI should look like, and SwiftUI renders it. Views are structs (value types), making them lightweight.


```swift
struct ContentView: View {
    @State private var count = 0       // local mutable state

    var body: some View {
        VStack(spacing: 16) {
            Text("Count: \(count)")
                .font(.title)
            Button("Increment") {
                count += 1
            }
            .buttonStyle(.borderedProminent)
        }
    }
}
```

#### State management annotations

@State          — local state for a view
@StateObject    — owns an ObservableObject (create it)
@ObservedObject — observes an ObservableObject (passed in)
@EnvironmentObject — injected from ancestor view
@Binding        — two-way connection to parent's @State


### Async/Await in Swift



```swift
func fetchUser(id: Int) async throws -> User {
    let url = URL(string: "https://api.example.com/users/\(id)")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode(User.self, from: data)
}

// Call from SwiftUI
.task {
    do {
        self.user = try await fetchUser(id: 1)
    } catch {
        self.errorMessage = error.localizedDescription
    }
}
```



## 3.09 Vite



### Overview

Vite is a modern frontend build tool created by Evan You (Vue.js creator). It was designed to solve the pain points of webpack-based tools: slow cold starts and slow Hot Module Replacement (HMR) in large projects. Vite achieves this by leveraging native ES modules in the browser during development — no bundling needed at dev time.


### How Vite Works


**DEVELOPMENT (no bundling)**:
Vite starts instantly because it does not bundle anything upfront. When the browser requests a file, Vite transforms it on demand (TypeScript → JS, CSS → injected styles) using esbuild (written in Go — extremely fast).
The browser uses native ES module imports, loading files lazily.


**PRODUCTION (bundled with Rollup)**:
For production, Vite uses Rollup to bundle and optimise everything — tree shaking, code splitting, asset fingerprinting. The browser gets efficient bundles, not individual module files (which would be too many HTTP requests).

```Typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: { port: 3000 },
    build: {
        outDir: "dist",
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"],   // separate vendor chunk
                }
            }
        }
    }
});
```



## 3.10 Tailwind CSS


### Overview

Tailwind CSS is a **utility-first CSS framework**. Instead of writing custom CSS classes, you compose pre-defined utility classes directly in HTML/JSX. Every class does exactly one thing: `text-blue-500` sets the text colour, `p-4` sets 16px padding, `flex` makes an element a flex container.

At build time, Tailwind scans your source files for class names and generates a CSS file containing **only the classes actually used** — production bundles are typically a few KB.

```html
<!-- Traditional approach — CSS written separately -->
<button class="btn-primary">Save</button>

<!-- Tailwind — compose utilities directly in markup -->
<button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold
               px-4 py-2 rounded-lg shadow-md transition-colors duration-150">
  Save
</button>
```


### Spacing Scale

Tailwind uses a consistent numeric scale where **1 unit = 4px**:

```text
p-0   →  0px        p-1   →  4px        p-2   →  8px
p-3   →  12px       p-4   →  16px       p-6   →  24px
p-8   →  32px       p-10  →  40px       p-12  →  48px
p-16  →  64px       p-20  →  80px       p-24  →  96px
```

The same scale applies to **margin** (`m-`), **gap** (`gap-`), **width** (`w-`), **height** (`h-`), and others.

Directional variants:
- `p-4` — all sides
- `px-4` — left + right (horizontal)
- `py-4` — top + bottom (vertical)
- `pt-4` / `pr-4` / `pb-4` / `pl-4` — individual sides
- `mx-auto` — auto margin (centres block elements horizontally)


### Color System

Colors follow the pattern `{property}-{color}-{shade}`. Shades range from 50 (lightest) to 950 (darkest):

```text
slate  gray  zinc  neutral  stone          — neutrals
red  orange  amber  yellow  lime  green    — warm/cool
emerald  teal  cyan  sky  blue  indigo     — cool
violet  purple  fuchsia  pink  rose        — purple/pink
```

```html
<p class="text-blue-600">Blue text</p>
<div class="bg-emerald-100 border border-emerald-300">Green card</div>
<button class="bg-red-500 hover:bg-red-600 text-white">Delete</button>
```

Common shade usage:
- `50`–`100` — very light backgrounds, tints
- `200`–`300` — borders, dividers
- `400`–`600` — primary interactive colours
- `700`–`900` — dark text, dark backgrounds


### Typography

```text
font-sans / font-serif / font-mono        — font family

text-xs    →  12px       text-sm   →  14px
text-base  →  16px       text-lg   →  18px
text-xl    →  20px       text-2xl  →  24px
text-3xl   →  30px       text-4xl  →  36px

font-thin / font-light / font-normal / font-medium
font-semibold / font-bold / font-extrabold / font-black

leading-none / leading-tight / leading-snug
leading-normal / leading-relaxed / leading-loose

tracking-tight / tracking-normal / tracking-wide / tracking-widest

text-left / text-center / text-right / text-justify

uppercase / lowercase / capitalize / normal-case

truncate            — overflow: hidden + ellipsis on one line
line-clamp-2        — clamp to N lines with ellipsis
```


### Layout — Flexbox

```html
<div class="flex items-center justify-between gap-4">
  <span>Left</span>
  <span>Right</span>
</div>
```

```text
flex                — display: flex
inline-flex         — display: inline-flex
flex-row            — direction: row (default)
flex-col            — direction: column
flex-wrap           — wrap: wrap

justify-start / justify-center / justify-end
justify-between / justify-around / justify-evenly

items-start / items-center / items-end / items-stretch / items-baseline

flex-1              — flex: 1 1 0 (fill available space)
flex-none           — flex: none (fixed size)
shrink-0            — flex-shrink: 0 (don't shrink)
grow                — flex-grow: 1
```


### Layout — Grid

```html
<div class="grid grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

```text
grid                       — display: grid
grid-cols-1 to grid-cols-12
grid-cols-none             — no fixed columns
col-span-2                 — span 2 columns
col-span-full              — span all columns

grid-rows-3                — 3 explicit rows
row-span-2                 — span 2 rows

gap-4                      — gap on both axes
gap-x-4 / gap-y-4         — horizontal / vertical gap
```


### Sizing

```text
w-full      — width: 100%          h-full     — height: 100%
w-screen    — width: 100vw         h-screen   — height: 100vh
w-auto      — width: auto          h-auto     — height: auto
w-1/2       — width: 50%           w-1/3 / w-2/3 / w-1/4
w-fit       — width: fit-content   w-max      — width: max-content
min-w-0     — min-width: 0         max-w-sm / max-w-md / max-w-lg
max-w-xl / max-w-2xl / max-w-prose / max-w-screen-xl
```


### Borders & Shadows

```text
border              — 1px border (uses border-color, default gray-200)
border-2            — 2px border
border-t / border-b / border-l / border-r

border-gray-300     — border colour
rounded             — border-radius: 4px
rounded-md          — 6px
rounded-lg          — 8px
rounded-xl          — 12px
rounded-2xl         — 16px
rounded-full        — 9999px (circles, pills)

shadow-sm / shadow / shadow-md / shadow-lg / shadow-xl / shadow-2xl
shadow-none
ring-2              — focus ring (outline-style: solid)
ring-blue-500       — ring colour
```


### Position & Display

```text
block / inline-block / inline / hidden
relative / absolute / fixed / sticky

top-0 / right-0 / bottom-0 / left-0
inset-0             — top+right+bottom+left: 0 (fill parent)

z-0 / z-10 / z-20 / z-30 / z-40 / z-50
overflow-hidden / overflow-auto / overflow-scroll
```


### Responsive Prefixes

Tailwind is **mobile-first** — unprefixed classes apply to all screen sizes, prefixed classes apply at the breakpoint and above:

```text
sm:   — ≥ 640px
md:   — ≥ 768px
lg:   — ≥ 1024px
xl:   — ≥ 1280px
2xl:  — ≥ 1536px
```

```html
<div class="flex-col md:flex-row">     <!-- stack on mobile, row on desktop -->
<p class="text-sm lg:text-base">       <!-- smaller text on mobile -->
<div class="hidden md:block">          <!-- visible only on md+ -->
```


### State Variants

```text
hover:bg-blue-600      — on mouse hover
focus:ring-2           — when focused
active:scale-95        — while being clicked
disabled:opacity-50    — when disabled
checked:bg-blue-500    — when checkbox is checked
group-hover:underline  — when parent (.group) is hovered
peer-focus:block       — when sibling (.peer) is focused
dark:bg-gray-900       — in dark mode
```

```html
<!-- group: parent controls children on hover -->
<div class="group cursor-pointer">
  <h3 class="group-hover:text-blue-500">Title</h3>
  <p class="group-hover:underline">Description</p>
</div>
```


### Dark Mode

Add `dark:` prefix — Tailwind toggles based on the `dark` class on `<html>` (or `prefers-color-scheme` media query):

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  Content adapts to dark mode
</div>
```

```js
// tailwind.config.js — 'class' strategy lets you toggle manually
module.exports = {
  darkMode: 'class',   // or 'media' to follow system preference
}
// Toggle: document.documentElement.classList.toggle('dark')
```


### Extracting Reusable Styles

When the same utility combination repeats, extract it with `@apply` in CSS:

```css
/* globals.css */
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-600 text-white font-semibold
           px-4 py-2 rounded-lg transition-colors;
  }
  .card {
    @apply bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200;
  }
}
```

```html
<!-- Now use the abstracted class -->
<button class="btn-primary">Save</button>
```

`@layer` tells Tailwind where to inject the CSS so it can be purged correctly:
- `@layer base` — HTML element defaults (body, h1, a…)
- `@layer components` — reusable component classes
- `@layer utilities` — custom one-off utilities


### Configuration (tailwind.config.js)

```js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],  // files to scan for classes
  theme: {
    extend: {
      colors: {
        brand: '#E84393',          // adds text-brand, bg-brand, etc.
      },
      fontFamily: {
        hand: ['Caveat', 'cursive'],
      },
      spacing: {
        '18': '72px',              // adds p-18, m-18, w-18, etc.
      },
      screens: {
        'xs': '480px',             // adds xs: prefix
      },
    },
  },
  plugins: [],
}
```

`extend` adds to the default theme without replacing it. Without `extend`, you would completely override the defaults.



## 3.11 SCSS



### Overview

SCSS (Sassy CSS) is a CSS preprocessor — it adds programming features (variables,
functions, nesting, loops) on top of CSS and compiles down to regular CSS that the
browser understands. SCSS is the most widely used syntax of Sass (Syntactically
Awesome Style Sheets). Every valid CSS file is also valid SCSS, making migration
easy. SCSS is not a new language: it compiles to CSS and adds zero runtime overhead.

Why use SCSS over plain CSS:
  - Variables with logic and type safety (before CSS custom properties existed)
  - Nesting eliminates repetitive selectors
  - Mixins are reusable chunks of CSS with parameters (like functions)
  - Partials let you split your styles into multiple files and import them
  - Built-in functions: darken(), lighten(), mix(), rgba()
  - Loops (@for, @each, @while) generate repetitive utility classes automatically


### Variables — SCSS vs CSS CUSTOM PROPERTIES

Both SCSS and modern CSS have variables, but they work very differently:

SCSS variables ($name):
- Resolved at compile time — the final CSS has the value baked in, not a variable
- Cannot be changed at runtime (no JavaScript access, no media query override)
- Can be used in calculations and logic during compilation
- Scoped to the block they're declared in

CSS custom properties (--name):
- Resolved at runtime — the browser evaluates them on the fly
- Can be changed with JavaScript: document.body.style.setProperty('--color', 'red')
- Can be overridden inside media queries (great for dark mode)
- Inherited through the DOM: a child element inherits the parent's --variable


```scss
// SCSS variable — compiled away, only the value remains in the output
$primary: #E84393;
$spacing-unit: 8px;

.button {
  background: $primary;
  padding: $spacing-unit * 2;   // arithmetic: 16px in output
}
```

```css
/* CSS custom property — lives in the browser, dynamic */
:root {
  --primary: #E84393;
  --spacing-unit: 8px;
}

.button {
  background: var(--primary);
  padding: calc(var(--spacing-unit) * 2);
}

/* Can be overridden at runtime or in media queries */
@media (prefers-color-scheme: dark) {
  :root { --primary: #FF79C6; }
}
```

Rule of thumb: 
- use CSS custom properties for theme tokens and values that need to change at runtime; 
- use SCSS variables for build-time constants like breakpoints or to feed into SCSS functions and loops.


### Nesting


SCSS lets you nest selectors inside each other, mirroring the HTML structure. This eliminates repetition and keeps related styles together. 

The & symbol refers to the parent selector and is used for pseudo-classes, modifiers, and BEM naming.


```scss
// SCSS — written once, clear hierarchy
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;

  &:hover {              // compiles to .card:hover
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  }

  &--featured {          // BEM modifier: compiles to .card--featured
    border: 2px solid $primary;
  }

  .card__title {         // BEM element: compiles to .card .card__title
    font-size: 1.5rem;
    font-weight: 700;
  }

  .card__body {
    color: #555;
    line-height: 1.6;
  }
}
```

```css
/* CSS equivalent — repetitive selectors */
.card { background: white; border-radius: 12px; padding: 24px; }
.card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
.card--featured { border: 2px solid #E84393; }
.card .card__title { font-size: 1.5rem; font-weight: 700; }
.card .card__body { color: #555; line-height: 1.6; }
```

Avoid nesting more than 3 levels deep — it generates overly specific selectors that are hard to override and slow for the browser to match.


### Mixins** — REUSABLE STYLE BLOCKS WITH PARAMETERS

A mixin is a named block of CSS declarations that can be included anywhere with @include. Mixins can accept parameters, making them far more powerful than copy-pasting CSS. They are the SCSS equivalent of a function that outputs CSS.


```scss
// Define a mixin — like declaring a function
@mixin flex-center($direction: row) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: $direction;
}

@mixin responsive($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 768px) { @content; }
  } @else if $breakpoint == tablet {
    @media (max-width: 1024px) { @content; }
  }
}

// Use the mixin with @include
.hero {
  @include flex-center(column);
  height: 100vh;

  @include responsive(mobile) {
    height: auto;
    padding: 40px 16px;
  }
}

.modal {
  @include flex-center;          // uses default: row
}
```

```css
/* Compiled CSS output */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}
@media (max-width: 768px) {
  .hero { height: auto; padding: 40px 16px; }
}
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
```


### Extend and Inheritance


@extend lets one selector inherit all the styles of another. Useful for shared base styles (e.g. all buttons share a base, then each variant extends it).
Use %placeholder selectors (silent classes) to avoid generating unused CSS.


```scss
// %placeholder — never compiled to CSS on its own, only when extended
%button-base {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

.btn-primary {
  @extend %button-base;
  background: $primary;
  color: white;
}

.btn-secondary {
  @extend %button-base;
  background: transparent;
  border: 2px solid $primary;
  color: $primary;
}
```

```css
/* Compiled CSS — grouped selector (efficient) */
.btn-primary, .btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}
.btn-primary { background: #E84393; color: white; }
.btn-secondary { background: transparent; border: 2px solid #E84393; color: #E84393; }
```

**Mixin vs Extend:**
  - Use @mixin when you need parameters or when the same styles appear in many unrelated components — mixins copy the CSS into each selector.
  - se @extend when styles are shared between closely related selectors — extend groups selectors together, which is more efficient but less flexible.


### Partials and @use


Partials are SCSS files prefixed with _ (e.g. _variables.scss). They are not compiled to CSS on their own — they must be imported into another file. This lets you split your styles into logical modules.


```scss
// _variables.scss
$primary: #E84393;
$font-stack: 'Inter', sans-serif;
$breakpoint-md: 768px;

// _mixins.scss
@use 'variables' as v;
@mixin respond($bp) { ... }

// main.scss — compiled to main.css
@use 'variables' as v;
@use 'mixins' as m;
@use 'components/card';
@use 'components/button';

body {
  font-family: v.$font-stack;
  color: v.$primary;
}
```

#### @use (modern) vs @import (legacy)

@import — global scope, everything pollutes the same namespace, deprecated
@use    — namespaced (v.$primary), no global leaks, loads each file only once


### Built-in Functions and Loops


SCSS ships with colour functions and control flow that let you generate CSS programmatically — impossible in plain CSS.


```scss
$base: #E84393;

// Colour functions
.dark  { background: darken($base, 15%); }    // #b3006a
.light { background: lighten($base, 20%); }   // #f589bf
.fade  { background: rgba($base, 0.2); }

// @each loop — generate utility classes automatically
$sizes: (sm: 4px, md: 8px, lg: 16px, xl: 32px);

@each $name, $value in $sizes {
  .p-#{$name} { padding: $value; }
  .m-#{$name} { margin: $value; }
}

// Compiles to:
// .p-sm { padding: 4px; }   .m-sm { margin: 4px; }
// .p-md { padding: 8px; }   .m-md { margin: 8px; }
// .p-lg { padding: 16px; }  .m-lg { margin: 16px; }
// .p-xl { padding: 32px; }  .m-xl { margin: 32px; }

// @for loop
@for $i from 1 through 12 {
  .col-#{$i} { width: percentage($i / 12); }
}
```

### SCSS vs CSS — WHEN TO USE EACH

Use SCSS when:
  - Working on a large codebase with many components (mixins and partials pay off)
  - Building a design system or component library
  - You need to generate many similar utility classes programmatically
  - The project already uses a build step (Webpack, Vite, Angular CLI)
  - Team members are already familiar with SCSS

Use plain CSS when:
  - Building small projects or prototypes where a build step adds overhead
  - Using a CSS framework like Tailwind (which already generates utility classes)
  - You need runtime theming — CSS custom properties change dynamically, SCSS variables cannot
  -  Working in a CSS-in-JS context (Styled Components, Emotion) where JavaScript already provides variables and logic


Key interview facts:
  - SCSS compiles to CSS — browsers never see SCSS, zero runtime overhead
  - & is the parent selector reference: .card { &:hover {} } → .card:hover {}
  - %placeholder selectors are invisible until extended — they prevent dead CSS
  - @use replaced @import (deprecated in Dart Sass 1.23) — it's namespaced
  - darken() and lighten() are deprecated in new Sass; use color.adjust() instead
  - SCSS is a strict superset of CSS — any valid CSS file can be renamed .scss



## 3.12 SPA (Single-Page Applications)



### Overview

A Single-Page Application loads one HTML page and dynamically updates content as the user navigates, instead of requesting a new HTML page from the server on every navigation. React, Angular, and Vue are SPA frameworks.


### How Routing Works in an SPA


Client-side routing intercepts navigation and updates the URL and rendered component WITHOUT a server request:

**History API**: window.history.pushState() changes the URL bar silently.
The browser does NOT send a request to the server.
React Router or Angular Router listen for these URL changes and render the matching component.

**Server configuration**: the server must return the SPA's index.html for ALL routes (not just /). If a user refreshes /users/123, the server must serve index.html — the SPA's JavaScript then reads the URL and renders the right component. Without this config, a refresh on any non-root URL gives a 404.



### SPA Tradeoffs


Advantages:
- Smooth, app-like UX — no full page reloads
- Rich interactivity — can update parts of the page independently
- Reduced server load after initial load

Disadvantages:
- Initial load is heavy — must download JS bundle before anything renders
- SEO is harder — crawlers may not execute JavaScript (SSR/SSG mitigate this)
- Browser history management requires care
- Accessibility: focus management on route changes must be handled manually



## 3.13 Responsive UI



### Overview

Responsive UI means the interface adapts its layout to the screen size and device capabilities — desktop, tablet, or phone — using the same HTML/CSS codebase.


### Core Techniques



**Viewport Meta Tag** - required for mobile rendering to work correctly.

Without this, mobile browsers render at 980px and shrink down (tiny text).

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

**Media Queries** - apply styles conditionally based on screen characteristics

```css
@media (max-width: 768px) {       /* mobile */
    .sidebar { display: none; }
}
@media (min-width: 769px) and (max-width: 1199px) { /* tablet */ }
@media (min-width: 1200px) { /* desktop */ }

/* Prefer min-width (mobile-first) over max-width (desktop-first) */
```

**Relative Units**

```text
%    — relative to parent element
em   — relative to the element's own font-size
rem  — relative to the root (html) font-size — more predictable than em
vw/vh — relative to viewport width/height
clamp (min, preferred, max) — fluid sizing: font-size: clamp(16px, 2vw, 24px)
```

**Flexible Images**

```css
img { max-width: 100%; height: auto; }   /* images never overflow container */
<img srcset="img-400.jpg 400w, img-800.jpg 800w" sizes="(max-width: 600px) 400px, 800px">
```

**Core Web Vitals (what Google measures)**:

LCP (Largest Contentful Paint) — time until largest visible element renders
                                 Target: < 2.5 seconds
INP (Interaction to Next Paint) — delay between user input and next paint
                                  Target: < 200ms
CLS (Cumulative Layout Shift) — how much content unexpectedly shifts around
                                 Target: < 0.1



## 3.14 Cross-Platform Development



### Overview

Cross-platform development means writing one codebase that runs on multiple platforms: iOS, Android, web, or desktop. The main approaches differ in their output and performance tradeoffs.


### Approaches


**Native** — separate codebases per platform (Swift/ObjC for iOS, Kotlin/Java for Android). Maximum performance and access to all platform APIs, but doubles the work. 
Used by: large companies with dedicated iOS and Android teams.


**React Native** — JavaScript + React. Renders actual native components. Good performance for most apps; some limits for animation-heavy or graphics-intensive apps. Large ecosystem (Expo), code sharing with web is possible.


**Flutter** — Dart. Renders everything itself with its own engine (no native UI components). Pixel-perfect consistency across platforms; excellent animation performance. Faster to develop than native but larger app size.


**Progressive Web Apps (pwa)** — web apps that can be installed on devices, run offline (Service Worker), and access some native features (notifications, camera). Works on all platforms with a browser; limited access to native APIs.


### Tradeoffs

|              | Native  | React Native | Flutter   |
|--------------|---------|--------------|-----------|
| Performance  | Best    | Good         | Very Good |
| Code sharing | 0%      | ~70-80%      | ~90%+     |
| Native feel  | Perfect | Good         | Custom    |
| Time to ship | Slowest | Medium       | Fast      |
| Team needed  | 2 teams | 1 team       | 1 team    |



---

# Part 4 — Cloud & Devops


## 4.01 Cloud

### Overview

**Cloud computing** is the delivery of computing services over the internet instead of running everything on your own physical hardware.

Rather than buying, maintaining, and upgrading servers, you rent computing resources from cloud providers whenever you need them.

Cloud platforms provide services such as:
- Virtual machines
- Storage
- Databases
- Networking
- Containers
- AI services
- Monitoring
- Identity management
- Serverless computing


The main advantages of cloud computing are:
- Pay only for what you use
- Scale resources on demand
- No physical hardware to maintain
- High availability
- Faster deployment
- Global infrastructure


### Cloud Service Models


#### On-Premises

Everything runs on your own infrastructure.

You are responsible for:
- Servers
- Storage
- Networking
- Operating systems
- Security
- Updates
- Applications
- Data

This offers maximum control but also maximum responsibility.



#### IaaS (Infrastructure as a Service)

The cloud provider gives you virtual infrastructure.

You manage:
- Operating system
- Runtime
- Applications
- Data

The provider manages:
- Servers
- Storage
- Networking
- Virtualization

Think of IaaS as **renting a virtual computer**.


#### CaaS (Containers as a Service)

The cloud provider manages the infrastructure needed to run containers.

You manage:
- Docker images
- Containers
- Applications

The provider manages:
- Infrastructure
- Kubernetes
- Networking
- Scaling

Ideal for containerized and microservice architectures.



#### PaaS (Platform as a Service)

The provider also manages the operating system and runtime.

You simply deploy your application.

You manage:
- Application
- Configuration
- Data

The provider manages:
- Infrastructure
- Operating system
- Runtime
- Scaling

Ideal for web applications and APIs.


#### FaaS (Function as a Service)

Also called **Serverless Computing**.

Instead of deploying an entire application, you deploy individual functions that execute only when triggered.

Typical triggers include:
- HTTP requests
- Timers
- Queue messages
- Database changes
- File uploads

You only pay while the function is executing.



#### SaaS (Software as a Service)

The provider delivers a complete application.

You simply use the software.

Examples include:
- Microsoft 365
- Gmail
- Slack
- Notion
- Dropbox

No infrastructure or application management is required.



Cloud providers offer different levels of abstraction. The higher the abstraction, the less infrastructure you manage yourself.

| Service Model | You Manage | Cloud Provider Manages |
|---------------|------------|------------------------|
| On-Premises | Everything | Nothing |
| IaaS | OS, runtime, applications, data | Infrastructure |
| CaaS | Containers and applications | Infrastructure and container platform |
| PaaS | Application and data | Infrastructure, OS and runtime |
| FaaS | Individual functions | Almost everything |
| SaaS | Nothing (just use the software) | Everything |

As you move from **On-Premises** to **SaaS**, you give up some control over the infrastructure, but you also have far less to maintain.

```
You manage more
        ↑

On-Premises
      │
IaaS
      │
CaaS
      │
PaaS
      │
FaaS
      │
SaaS

        ↓
Cloud provider manages more
```


## 4.02 Microsoft Azure

### Overview

**Microsoft Azure** is Microsoft's cloud computing platform.

It provides hundreds of cloud services that allow businesses to build, deploy, and manage applications without owning physical infrastructure.

Azure is one of the three largest public cloud providers alongside:
- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)

Azure is especially popular among organizations that already use Microsoft technologies such as:
- Windows Server
- Active Directory
- Microsoft 365
- .NET
- SQL Server


### Azure Service Models

Azure provides services across all major cloud models.

| Cloud Model | Azure Services |
|-------------|----------------|
| IaaS | Azure Virtual Machines, Virtual Network, Managed Disks |
| CaaS | Azure Kubernetes Service (AKS), Azure Container Apps, Azure Container Instances |
| PaaS | Azure App Service, Azure SQL Database, Azure Database for PostgreSQL |
| FaaS | Azure Functions |
| SaaS | Microsoft 365 |


### Why Azure?

Azure allows developers to choose the level of abstraction that best fits their application.

For example:

- Need full control over the operating system? → Use **Azure Virtual Machines (IaaS)**.
- Want to deploy a web application without managing servers? → Use **Azure App Service (PaaS)**.
- Running Docker containers? → Use **Azure Kubernetes Service (CaaS)**.
- Need event-driven code? → Use **Azure Functions (FaaS)**.
- Just need productivity software? → Use **Microsoft 365 (SaaS)**.

This flexibility is one of Azure's biggest strengths, allowing organizations to balance control, scalability, maintenance effort, and development speed according to their needs.


### Key Services


**App Service** — fully managed platform to deploy web apps (Java, .NET, Node.js, Python, Docker). You bring the code; Azure manages the OS, runtime, scaling.

Key features:
- Deployment slots — deploy to staging, test, then swap to production with zero downtime (traffic is redirected atomically)
- Scale up (bigger VM) or scale out (more instances) via settings
- Built-in CI/CD integration with GitHub Actions



**Azure Functions** — serverless compute. Write a function that responds to a trigger; Azure handles the infrastructure and scales to zero when idle.

- Triggers: HTTP, Timer (cron), Blob Storage, Service Bus, Cosmos DB change feed.

```java
@FunctionName("GetUser")
public HttpResponseMessage run(
    @HttpTrigger(
        name = "request",
        methods = { HttpMethod.GET },
        route = "users/{id}",
        authLevel = AuthorizationLevel.FUNCTION
    )
    HttpRequestMessage<Optional<String>> request,
    @BindingName("id") String id,
    final ExecutionContext context
) {

    User user = userRepository.findById(id);

    if (user == null) {
        return request
            .createResponseBuilder(HttpStatus.NOT_FOUND)
            .build();
    }

    return request
        .createResponseBuilder(HttpStatus.OK)
        .body(user)
        .build();
}
```


**Azure Key Vault** — store and retrieve secrets, connection strings, certificates, and API keys without embedding them in code or environment variables. Apps retrieve secrets at runtime using Managed Identity (no credentials needed).


**Managed Identity** — lets an Azure resource (App Service, VM, Function) identify itself to other Azure services (Key Vault, Azure SQL, Blob Storage) WITHOUT any stored credentials. The platform handles the token exchange invisibly.


```java
// Spring Boot: get secret from Key Vault (no password in code)
@Value("${my-database-password}")  // read from Key Vault via Spring Cloud Azure
private String dbPassword;
```

**AZURE ACTIVE DIRECTORY (AAD / Entra ID)** — identity provider for authentication and SSO (Single Sign-On) in enterprise environments. Supports OAuth2/OIDC, SAML, and multi-factor authentication.


**Azure Service Bus** — enterprise message broker (queues and topics with subscriptions). Use for reliable async communication between services.


## 4.03 Google Cloud Platform (GCP)


### Overview

**Google Cloud Platform (GCP)** is Google's cloud computing platform. Like Azure and AWS, it allows organizations to build, deploy, and scale applications without owning physical infrastructure.

GCP is known for its strengths in:
- Data analytics
- Artificial Intelligence (AI) and Machine Learning (ML)
- Kubernetes and container orchestration
- Global networking
- Big data processing

Many of Google's own products, such as **Google Search**, **YouTube**, and **Gmail**, run on the same global infrastructure that powers GCP.



### Google Cloud Service Models

Like other cloud providers, GCP offers services across all major cloud service models.

| Cloud Model | GCP Services |
|-------------|--------------|
| IaaS | Compute Engine, Persistent Disk, VPC |
| CaaS | Google Kubernetes Engine (GKE), Cloud Run |
| PaaS | App Engine, Cloud SQL |
| FaaS | Cloud Functions |
| SaaS | Google Workspace |


### Why GCP?

GCP is often chosen by organizations that:
- Build cloud-native applications
- Use Kubernetes and Docker extensively
- Process large amounts of data
- Develop AI and machine learning solutions
- Already rely on Google's ecosystem

Its networking infrastructure is one of its biggest advantages, offering low latency and high-performance connections across Google's global network.


### Common GCP Services

#### Compute Engine (IaaS)

Provides virtual machines running on Google's infrastructure.

Use it when you need:
- Full operating system control
- Custom software installation
- Legacy application migration

Comparable to:
- Azure Virtual Machines
- Amazon EC2


#### Google Kubernetes Engine (GKE) (CaaS)

A fully managed Kubernetes platform for deploying and orchestrating containerized applications.

Google originally created Kubernetes, making GKE one of the most mature managed Kubernetes services available.

Use it for:
- Docker containers
- Microservices
- Highly scalable applications

Comparable to:
- Azure Kubernetes Service (AKS)
- Amazon Elastic Kubernetes Service (EKS)


#### App Engine (PaaS)

A fully managed platform for deploying web applications without managing servers.

Developers simply upload their application, while Google handles:
- Infrastructure
- Operating system
- Runtime
- Scaling
- Load balancing

Ideal for:
- Web applications
- REST APIs
- Backend services

Comparable to:
- Azure App Service
- AWS Elastic Beanstalk


#### Cloud SQL (PaaS)

A fully managed relational database service supporting:
- PostgreSQL
- MySQL
- SQL Server

Google manages:
- Backups
- Updates
- High availability
- Scaling

Comparable to:
- Azure SQL Database
- Amazon RDS


#### Cloud Functions (FaaS)

Google's serverless computing service.

Instead of deploying an entire application, you deploy individual functions that execute in response to events.

Common triggers include:
- HTTP requests
- Cloud Storage uploads
- Pub/Sub messages
- Database events

Example workflow:

```
User uploads a file
        ↓
Cloud Storage
        ↓
Cloud Function executes
        ↓
Process file
        ↓
Save results
```

You only pay while the function is executing.

Comparable to:
- Azure Functions
- AWS Lambda


#### Google Workspace (SaaS)

Google's suite of productivity applications.

Examples include:
- Gmail
- Google Docs
- Google Sheets
- Google Drive
- Google Meet

Users simply access these applications through a web browser without managing any infrastructure.


### GCP vs Azure vs AWS

| Feature | Google Cloud | Microsoft Azure | AWS |
|---------|--------------|-----------------|-----|
| Best known for | AI, Data Analytics, Kubernetes | Enterprise & Microsoft ecosystem | Largest cloud ecosystem |
| Container platform | Google Kubernetes Engine (GKE) | Azure Kubernetes Service (AKS) | Elastic Kubernetes Service (EKS) |
| Serverless | Cloud Functions | Azure Functions | AWS Lambda |
| Web Apps | App Engine | App Service | Elastic Beanstalk |
| Virtual Machines | Compute Engine | Azure Virtual Machines | Amazon EC2 |
| Managed SQL | Cloud SQL | Azure SQL Database | Amazon RDS |


### When Should You Choose GCP?

GCP is an excellent choice when your application focuses on:
- Kubernetes and containerized workloads
- Artificial Intelligence and Machine Learning
- Data analytics and big data
- High-performance global networking
- Modern cloud-native architectures

It is particularly popular among startups, data-driven companies, and organizations building scalable cloud-native applications.


### Key Services



**Cloud Run** — fully managed serverless platform for containerised applications.
You give it a Docker image; Cloud Run runs it and scales from zero to thousands of instances automatically. Pay per request (no cost when idle).

```text
gcloud run deploy my-service \
--image gcr.io/my-project/my-app:v1 \
--region europe-west1 \
--allow-unauthenticated \
--port 8080
```

**Cloud Functions** — event-driven serverless functions. Similar to Azure Functions; triggers include HTTP, Pub/Sub, Cloud Storage events.


**Bigquery** — serverless data warehouse for analytics. Querying petabytes of data in seconds using standard SQL. NOT for OLTP (transactional) workloads — it is optimised for analytical queries over large datasets, not individual row updates.

```sql
-- BigQuery SQL example
SELECT DATE_TRUNC(created_at, MONTH) AS month, COUNT(*) AS orders
FROM `project.dataset.orders`
WHERE created_at >= '2024-01-01'
GROUP BY month
ORDER BY month;
```


**Cloud Pub/Sub** — managed message bus for event-driven architectures.
Delivery guarantee: at-least-once (messages may be delivered more than once; your consumer must be idempotent). FIFO ordering not guaranteed by default (use message ordering with ordering keys if needed).

**GKE** (Google Kubernetes Engine) — managed Kubernetes service. Google invented Kubernetes and runs the control plane for you.


## 4.04 Firebase



### Overview

Firebase is Google's backend-as-a-service platform aimed at mobile and web apps.
It provides a real-time database, authentication, hosting, functions, and more — letting frontend developers build full-stack apps without managing servers.


### Firestore Data Model


Firestore is a NoSQL document database organised into Collections and Documents:

**Collection** — like a folder or a table; holds Documents
**Document** — like a row; holds fields (key-value pairs) and can have sub-collections

```javascript
// Structure: users/userId/posts/postId
// Each document has a unique ID (auto-generated or custom)

const userRef = db.collection("users").doc("user123");
await userRef.set({
    name: "Beatriz",
    email: "b@example.com",
    createdAt: FieldValue.serverTimestamp(),
});

// Real-time listener — auto-updates whenever the document changes
const unsubscribe = userRef.onSnapshot((doc) => {
    setUser(doc.data());
});
// Clean up to avoid memory leaks — ALWAYS unsubscribe
useEffect(() => unsubscribe, []);
```


### Security Rules


Firestore Security Rules control access to documents at the database level.
They run on Google's servers — even if your client-side code is bypassed, the rules protect your data.


```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read and write their own document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    // Posts: anyone can read; only the owner can write
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth.uid == resource.data.authorId;
    }
  }
}
```



## 4.05 Docker



### Overview

Docker packages an application and all its dependencies into a container — a lightweight, portable, isolated unit that runs consistently on any machine with Docker installed. "Works on my machine" problems disappear because the container carries its own runtime environment.

Key distinction: Image vs Container

**Image** — a read-only blueprint (like a class). Contains the filesystem, environment variables, and startup command.

**Container** - a running instance of an image (like an object). Has its own isolated process, network, and filesystem layer on top of the image.


### Dockerfile and Layer Caching


A Dockerfile is a script of instructions for building an image. Each instruction creates a LAYER. Docker caches layers — if an instruction has not changed since the last build, Docker reuses the cached layer and skips re-running it.


```dockerfile
# Layer 1: base image (cached unless base image changes)
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Layer 2: COPY just the dependency descriptor first (rarely changes)
# This lets Docker reuse the cached dependency download layer
COPY pom.xml .
RUN mvn dependency:go-offline -B    # this layer is reused if pom.xml unchanged

# Layer 3: copy source code (changes often — invalidates from here)
COPY src ./src
RUN mvn package -DskipTests         # compile and package

# Layer 4: runtime image (multi-stage: smaller final image)
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=0 /app/target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]   # executed as PID 1
```

### CMD vs ENTRYPOINT

**Entrypoint** — the main process of the container; cannot be overridden with docker run args (only --entrypoint flag overrides it)

**CMD** — default arguments to ENTRYPOINT; can be overridden with docker run args


### Multi-stage Builds


Multi-stage builds solve the problem of build tooling (JDK, Maven, node_modules) ending up in the final image, making it huge. Build in one stage; copy only the compiled artifact into a minimal runtime image.

Result: a Spring Boot app built with a JDK image produces a ~600MB image. With multi-stage (JDK build → JRE runtime), the final image is ~150MB.



## 4.06 Kubernetes (K8s)


### Overview

Kubernetes is an open-source system for automating deployment, scaling, and management of containerised applications. It was created by Google. Kubernetes runs on a cluster of nodes; you describe the desired state and Kubernetes continuously works to maintain it.


### Core Objects


#### POD
the smallest deployable unit. Wraps one or more containers that share the same network namespace and storage. 
Pods are ephemeral — they can be killed and replaced at any time.


**Deployment** — declares the desired state for a set of Pods (which image, how many replicas). The Deployment controller ensures that state is maintained. Handles rolling updates and rollbacks.


**Service** — a stable network endpoint for a set of Pods. Pods die and are replaced with new IPs; the Service provides a stable IP and DNS name that routes to healthy Pods.


#### Types

**ClusterIP** — internal only (default); accessible within the cluster

**NodePort** — exposes on a port of every node; for testing

**LoadBalancer** — creates an external cloud load balancer; for production

**Ingress** — HTTP(S) routing rules at the cluster edge. Routes external traffic to internal Services based on hostname or URL path. Requires an Ingress Controller (Nginx, Traefik, AWS ALB controller).

**Configmap** — non-sensitive configuration as key-value pairs, injected as env vars or mounted as files.

**Secret** — like ConfigMap but for sensitive data (base64-encoded in etcd, or encrypted with envelope encryption). Always use Secrets for passwords, tokens, and keys — never put them in ConfigMaps or image layers.


### REQUESTS vs LIMITS


```dockerfile
resources:
  requests:
    memory: "256Mi"   # what the container is guaranteed to get
    cpu: "250m"       # used for scheduling (where to place the Pod)
  limits:
    memory: "512Mi"   # max it can use — exceed this → OOMKilled
    cpu: "500m"       # exceed this → throttled (not killed)
```

### LIVENESS vs READINESS PROBES

**Liveness probe**: is the container ALIVE? If it fails, Kubernetes restarts the container. 
Use for: detecting deadlocks or infinite loops.


**Readiness probe**: is the container READY to serve traffic? If it fails, Kubernetes removes the Pod from the Service's endpoints (no traffic is sent).
Use for: startup time, database connections, dependency warm-up.



## 4.07 CI/CD Pipelines



### Overview

**CI (Continuous Integration)** : developers merge code changes frequently (multiple times per day), and each merge triggers an automated pipeline that compiles, tests, and validates the code.

**CD (Continuous Delivery)** : every passing build can be deployed to production with a single click (or fully automatically, which is Continuous Deployment).


### Typical Pipeline Stages

Trigger (push to main/PR open)
  → Checkout code
  → Install dependencies / restore cache
  → Compile / build
  → Lint and static analysis
  → Unit tests + integration tests
  → Security scan (SAST, dependency CVEs)
  → Build Docker image
  → Push image to registry
  → Deploy to staging
  → Smoke tests / end-to-end tests on staging
  → Manual approval gate (for CD → production)
  → Deploy to production
  → Notify team (Slack, email)



### Deployment Strategies

**Blue-green** — run two identical production environments (blue = current, green = new version). Switch traffic from blue to green atomically. 
Rollback: switch back instantly. Requires double the infrastructure.


**Canary** — gradually route a small percentage of traffic (5-10%) to the new version while most users still use the old one. Monitor error rates and latency before increasing the traffic percentage. 
Rollback: route 0% to canary.


**Rolling Update** — replace old Pods with new ones gradually. Default Kubernetes Deployment strategy. No extra infrastructure needed, but for a brief period both old and new versions serve traffic.


**Feature Flags** — deploy code but control which users see new features via configuration, without a new deployment. Enables A/B testing, gradual rollouts to specific user segments, and instant "kill switch" if a feature causes problems.


## 4.08 Git

### Overview

**Git** is a distributed version control system (VCS) used to track changes in a project's source code over time.

It allows multiple developers to work on the same project simultaneously, keeps a complete history of changes, and makes it easy to collaborate through branches and merges.

Unlike centralized version control systems, every developer has a complete copy of the repository, including its history. This means developers can commit, branch, and inspect history even while offline.

Git was created in 2005 by **Linus Torvalds** to manage the development of the Linux kernel and is now the industry standard for version control.


It runs locally on your computer and is responsible for:
- Tracking changes to files
- Creating commits
- Managing branches
- Merging code
- Viewing project history
- Allowing developers to work offline

Git does **not** require an internet connection or a remote server.


### How Git Stores Data

One of Git's key design decisions is that it stores **snapshots** (a complete picture of the project’s state at a specific point in time), not file differences.

When you create a commit, Git records a snapshot of the project's tracked files at that moment.

For example:

```
Commit A

Main.java
User.java
README.md
```

After modifying only `Main.java`:

```
Commit B

Main.java  ← updated
User.java
README.md
```

Although each commit represents the entire project, Git is highly efficient. Unchanged files are **not duplicated**; Git simply reuses the existing version internally.

This allows Git to provide a complete history of the project while keeping repositories relatively small.



### Git Objects and SHA-1 Hashes

Git identifies every stored object (such as a file or commit) using a **SHA-1 hash**, which is generated from the object's contents.

This means:
- If the content changes, the hash changes.
- If two files have exactly the same content, they share the same hash and Git stores only one copy internally.

This content-based storage helps Git efficiently track changes and verify the integrity of the repository.


#### Object types

blob — stores file content
tree — stores directory listing (mapping filenames to blobs or other trees)
commit — stores a tree pointer + parent commit pointer + author + message
tag — named pointer to a commit

A BRANCH is just a file containing one SHA-1 hash — the tip commit.
HEAD is a pointer to the current branch (or a specific commit in detached HEAD state). Moving between branches is just updating these pointers.


### Essential Commands

```bash
git init                        # create a new repository
git clone <url>                 # clone a remote repository
git status                      # show working tree status
git add <file>                  # stage a specific file
git add -p                      # stage changes interactively (by hunk)
git commit -m "message"         # create a commit
git log --oneline --graph       # visual branch history
git diff                        # unstaged changes
git diff --staged               # staged changes (what will be in next commit)

git branch feature/new-thing    # create branch
git checkout -b feature/new     # create and switch in one step
git switch -c feature/new       # modern equivalent
git merge feature/new           # merge into current branch
git rebase main                 # reapply commits on top of main

git stash                       # temporarily shelve changes
git stash pop                   # restore the most recent stash

git reset HEAD~1                # undo last commit, keep changes staged
git reset --hard HEAD~1         # undo last commit AND discard changes (destructive!)
git revert <hash>               # create a new commit that undoes a commit (safe)
git cherry-pick <hash>          # apply a specific commit to the current branch
```

### Merge vs Rebase

Both **merge** and **rebase** are used to incorporate changes from one branch into another.

The difference is **how Git combines the commit history**.

#### Merge

A **merge** combines two branches while preserving their original histories.

Suppose `main` has progressed while you're working on a feature.

```
main

A ── B ── C

feature

      \
       D ── E
```

When you merge `feature` into `main`:

```
A ── B ── C ───────── M
      \             /
       D ───────── E
```

Git creates a new **merge commit (`M`)** that joins the two histories.

Advantages:
- Preserves the real history.
- Safe for shared branches.
- Easy to see when branches were merged.

Disadvantages:
- History can become cluttered with many merge commits.


#### Rebase

A **rebase** rewrites your branch so it appears as though you started working from the latest version of `main`.

Starting point:

```
main

A ── B ── C

feature

      \
       D ── E
```

After rebasing `feature` onto `main`:

```
A ── B ── C ── D' ── E'
```

Git **replays** your commits (`D` and `E`) on top of `C`.

Notice that the commits become **D'** and **E'**.

They contain the same code changes, but they are **new commits with new hashes**.

Advantages:
- Clean, linear history.
- Easier to read `git log`.
- Makes it look like the feature was developed from the latest version of `main`.

Disadvantages:
- Rewrites commit history.
- Creates new commit hashes.
- Can cause problems if the original commits were already shared with other developers.


#### Why Shouldn't You Rebase Shared Branches?

Suppose you push commits `D` and `E` to GitHub.

Your teammate pulls them.

If you later rebase:

```
D → D'
E → E'
```

Git sees these as completely different commits because their hashes changed.

Now your teammate has:

```
D
E
```

while you have:

```
D'
E'
```

Git thinks both sets of commits are different, leading to duplicate commits or merge conflicts.

For this reason:

> **Never rebase commits that have already been pushed to a shared branch.**


#### When Should You Use Each?

Use Merge when:
- Working on shared branches.
- You want to preserve the actual history.
- You don't mind merge commits.

Use Rebase when:
- Cleaning up your own local feature branch.
- Updating your branch with the latest changes from `main`.
- You want a clean, linear commit history.


## Common Workflow

```
main
   ↑
git pull

feature
   ↑
git rebase main

feature (updated)
   ↓
Create Pull Request

main
   ↓
git merge feature
```

A common convention is:
- Rebase your **local feature branch** onto the latest `main`.
- Once the Pull Request is approved, merge it into `main`.
- Never rebase branches that other developers are already using.



## 4.09 GitHub



### Overview

GitHub is a cloud-based platform for hosting Git repositories.

It builds on top of Git by adding collaboration features such as:
- Remote repository hosting
- Pull Requests (PRs)
- Code reviews
- Issue tracking
- Team collaboration
- CI/CD integration (GitHub Actions)
- Project management

GitHub stores your Git repository online so multiple developers can work on the same project.

Example Git commands that interact with GitHub:

```bash
git push origin main
git pull origin main
git clone https://github.com/user/repository.git
```

### Pull Requests


A Pull Request (PR) is a request to merge code from one branch into another.
It is the unit of code review in most teams.

PR best practices:
  - Keep PRs small and focused — one concern per PR. Large PRs are hard to review.
  - Write a clear description: WHAT changed, WHY, and HOW to test.
  - Link to the issue or ticket it resolves (Closes #123 auto-closes the issue).
  - Check CI passes before requesting review.
  - Address all reviewer comments; don't dismiss without resolution.

Branch protection rules: require PR reviews, passing CI checks, and branch up-to-date with base before merging. Prevents direct pushes to main.


### Github Actions


GitHub Actions is GitHub's built-in CI/CD system. Workflows are defined in .github/workflows/*.yml and triggered by GitHub events (push, PR, schedule, manual dispatch).

See YAML section (4.12) for a full GitHub Actions workflow example Marketplace has thousands of pre-built actions (setup-java, setup-node, docker/login-action, aws-actions, etc.) that you reuse with the uses: directive.



## 4.10 Bitbucket



### Overview

Bitbucket is Atlassian's Git code hosting platform. It integrates natively with Jira (Atlassian's issue tracker) and Confluence (wikis). Popular in organisations already using the Atlassian ecosystem.


#### GitHub vs Bitbucket (Comparison)

Both **GitHub** and **Bitbucket** are cloud platforms used to host Git repositories and enable collaboration, but they differ in focus, ecosystem, and typical usage.

| Feature | GitHub | Bitbucket |
|----------|--------|-----------|
| Ownership | Microsoft | Atlassian |
| Main focus | Open-source & developer community | Enterprise teams & private repos |
| CI/CD | GitHub Actions | Bitbucket Pipelines |
| Project management | GitHub Issues / Projects | Strong Jira integration |
| Popularity | Very high (largest platform) | Lower, but strong in enterprises |
| Ecosystem | Huge open-source ecosystem | Strong Atlassian ecosystem |
| Repo visibility | Many public repos | Mostly private repos |

- **GitHub** → community & open-source first

- **Bitbucket** → enterprise & Jira-integrated workflows


### Bitbucket Pipelines


Bitbucket Pipelines is the built-in CI/CD system, configured with bitbucket-pipelines.yml at the repo root.

image: maven:3.9-eclipse-temurin-17   # Docker image to run pipeline steps

pipelines:

```bash
default:                            # runs on any branch without a specific rule

- step:
name: Build and Test
caches:
- maven
script:
- mvn clean verify

branches:
main:
- step:
name: Build and Deploy to Production
script:
- mvn clean package -DskipTests
- pipe: atlassian/aws-elasticbeanstalk-deploy:0.6.6
variables:

AWS_ACCESS_KEY_ID: $AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY: $AWS_SECRET_ACCESS_KEY
APPLICATION_NAME: "my-app"
ENVIRONMENT_NAME: "my-app-prod"
```


Bitbucket-specific features:
- **Pull Request pipelines** — run on the merged result of a PR before merging
- **Deployment environments** — track which version is deployed where (staging, prod)
- **Branch permissions** — similar to GitHub branch protection rules
- **Smart Mirroring** — sync repositories across multiple regions for global teams



## 4.11 Maven

### Overview 

Maven is a build automation and project management tool for Java projects, maintained by the Apache Software Foundation. 

It standardises how Java projects are built by managing:
- compilation
- testing
- packaging
- dependency management
- deployment

Instead of manually running multiple commands and managing JAR files yourself, Maven uses a **declarative configuration (`pom.xml`)** and a predefined lifecycle to automate the entire build process in a consistent way.


### How Maven Compiles Your Code

When you run:

```bash
mvn compile
```

Maven does not compile the code itself. Instead, it delegates the work to the Java compiler (**`javac`**) under the hood.

The process is:

```
Java source files (.java)
        ↓
Maven compile phase
        ↓
Java Compiler (javac)
        ↓
Bytecode files (.class)
        ↓
Stored in target/classes/
```

So Maven acts as an **orchestrator** that triggers the correct tools in the correct order, rather than replacing the compiler.

The important idea is:

> Maven defines *what should happen* (compile), and Java tools like `javac` perform the actual work.


### THE POM FILE — Project Object Model

Every Maven project is defined by a pom.xml file at its root. POM stands for Project Object Model. It is an XML file that acts as the single source of truth for your project's identity, dependencies, plugins, and build behaviour(how a project is compiled, tested, and packaged).

A minimal pom.xml looks like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
             http://maven.apache.org/xsd/maven-4.0.0.xsd">

  <!-- Every POM must declare this; 4.0.0 is the only supported version -->
  <modelVersion>4.0.0</modelVersion>

  <!-- GAV coordinates — the unique identity of THIS project -->
  <groupId>com.beatriz</groupId>       <!-- reverse-domain, like a package -->
  <artifactId>my-app</artifactId>       <!-- the project name -->
  <version>1.0.0-SNAPSHOT</version>     <!-- SNAPSHOT = in-development -->
  <packaging>jar</packaging>            <!-- jar, war, pom (default: jar) -->

  <properties>
    <!-- Define variables reusable throughout the POM -->
    <java.version>17</java.version>
    <spring.boot.version>3.2.0</spring.boot.version>
    <maven.compiler.source>${java.version}</maven.compiler.source>
    <maven.compiler.target>${java.version}</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>

  <dependencies>
    <!-- Each dependency is identified by its own GAV coordinates -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
      <version>${spring.boot.version}</version>
      <!-- scope not set → defaults to "compile" (available everywhere) -->
    </dependency>

    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.10.0</version>
      <scope>test</scope>  <!-- only on the test classpath, not in final JAR -->
    </dependency>

    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <version>1.18.30</version>
      <scope>provided</scope>  <!-- needed at compile time, not at runtime -->
    </dependency>
  </dependencies>

</project>
```

The three coordinates — groupId, artifactId, version — are called GAV coordinates (or simply "coordinates"). They uniquely identify any artifact in the Maven ecosystem. When you declare a dependency, Maven uses these to look up the artifact in a repository.

### DEPENDENCY SCOPES

Scope controls when a dependency is available on the classpath:

- **compile** — (default) available in main code, tests, and bundled in the final artifact. Use for everything your app needs at runtime.

- **test** — only available when compiling and running tests. JUnit, Mockito, AssertJ all belong here. They are NOT included in the JAR/WAR you ship to production.

- **provided** — available at compile time but NOT bundled, because the runtime environment provides it. Lombok (annotation processor), Servlet API (provided by Tomcat), and Jakarta EE APIs are common examples.

- **runtime** — NOT needed at compile time, but needed at runtime. JDBC drivers are the classic example: you compile against java.sql.* (standard interfaces), but at runtime you need the specific driver JAR.

- **import** — only valid in <dependencyManagement>; used to import a BOM (Bill of Materials) to align dependency versions without declaring a parent POM.


### HOW MAVEN RESOLVES DEPENDENCIES — THE LOCAL REPOSITORY

When you run a Maven build for the first time, Maven checks your local repository (by default ~/.m2/repository/) for each dependency. If the JAR is not there, Maven downloads it from a remote repository (by default Maven Central at search.maven.org) and caches it locally. Every subsequent build uses the local cache, so you only download once.

The directory structure in the local repo mirrors the GAV coordinates:

```text
  ~/.m2/repository/org/springframework/boot/spring-boot-starter-web/3.2.0/
    spring-boot-starter-web-3.2.0.jar
    spring-boot-starter-web-3.2.0.pom   ← Maven reads this to get transitive deps
```

This is how transitive dependencies work: Maven reads the POM of every dependency, finds THEIR dependencies, and downloads those too. If spring- boot-starter-web depends on jackson-databind, you don't need to declare jackson-databind yourself — Maven resolves the whole tree.

### THE BUILD LIFECYCLE

Maven's default build lifecycle is a fixed, ordered sequence of phases. When you invoke a phase, all preceding phases run first:

  validate      → verify the POM is valid and all info is available
  compile       → compile src/main/java into target/classes/
  test-compile  → compile src/test/java into target/test-classes/
  test          → run unit tests (Surefire plugin)
  package       → create the JAR/WAR in target/
  verify        → run integration tests (Failsafe plugin)
  install       → copy the artifact into ~/.m2/repository/
  deploy        → push the artifact to a remote repository (Nexus, Artifactory)

Common commands:

```bash
mvn compile          # compile main sources only
mvn test             # compile + run all unit tests
mvn package          # compile + test + package into JAR/WAR
mvn package -DskipTests   # package WITHOUT running tests (useful in CI when
                           # tests run as a separate step)
mvn install          # package + put in local .m2 cache (useful when
                      # project-A depends on project-B locally)
mvn clean package    # delete target/ first, then build fresh
                      # always use "clean" in CI to avoid stale artifacts
mvn dependency:tree  # print the full dependency tree, great for diagnosing
                      # version conflicts
mvn dependency:resolve  # force Maven to download all deps without building
```

### PARENT POM AND INHERITANCE

A child POM can inherit from a parent POM. The most common parent is the Spring Boot parent, which pre-configures dozens of plugin versions, default properties, and dependency versions so you don't have to manage them yourself.

```xml
<parent>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-parent</artifactId>
  <version>3.2.0</version>
  <relativePath/> <!-- tells Maven to fetch from repo, not local filesystem -->
</parent>

<!-- Because of the parent, you no longer need to specify versions for
     Spring Boot starters — they are managed by the parent's BOM -->
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <!-- version omitted — inherited from parent -->
  </dependency>
</dependencies>
```

### DEPENDENCY MANAGEMENT AND BOMS

A Bill of Materials (BOM) is a special POM that declares the versions of a set of related dependencies, without actually pulling them in. You import a BOM to get consistent, tested version combinations.

```xml
<dependencyManagement>
  <dependencies>
    <!-- Import the Spring Cloud BOM to get aligned versions for all
         Spring Cloud modules without specifying versions individually -->
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-dependencies</artifactId>
      <version>2023.0.0</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

<dependencies>
  <!-- Version is managed by the BOM above -->
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
  </dependency>
</dependencies>
```

### MULTI-MODULE PROJECTS

Large projects split into modules: separate Maven projects each with their own pom.xml, coordinated by a root "aggregator" POM. This is the standard layout for microservice mono-repos or layered architectures.

```text
my-system/
  pom.xml              ← aggregator (packaging=pom)
  domain/
    pom.xml
    src/main/java/...
  api/
    pom.xml
    src/main/java/...
  service/
    pom.xml
    src/main/java/...
```

Root aggregator pom.xml:

```xml
<groupId>com.beatriz</groupId>
<artifactId>my-system</artifactId>
<version>1.0.0-SNAPSHOT</version>
<packaging>pom</packaging>   <!-- THIS is what makes it an aggregator -->

<modules>
  <module>domain</module>    <!-- refers to the subdirectory name -->
  <module>api</module>
  <module>service</module>
</modules>
```

Running `mvn install` from the root builds all modules in the correct order.

One module can depend on another:

```xml
<!-- In service/pom.xml -->
<dependency>
  <groupId>com.beatriz</groupId>
  <artifactId>domain</artifactId>
  <version>1.0.0-SNAPSHOT</version>
</dependency>
```

### PLUGINS

Maven itself does very little — almost all build work is done by plugins.
The Spring Boot Maven plugin is the most common one in the Spring ecosystem:

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
      <!-- Creates an executable "fat JAR" that bundles all dependencies -->
      <!-- Run with: java -jar target/my-app-1.0.0.jar -->
      <executions>
        <execution>
          <goals>
            <goal>repackage</goal>  <!-- runs during the package phase -->
          </goals>
        </execution>
      </executions>
    </plugin>

    <plugin>
      <!-- Controls how unit tests are discovered and run -->
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-surefire-plugin</artifactId>
      <version>3.1.2</version>
      <configuration>
        <!-- Include JUnit 5 tests (required for older Surefire versions) -->
        <includes>
          <include>**/*Test.java</include>
          <include>**/*Tests.java</include>
        </includes>
      </configuration>
    </plugin>
  </plugins>
</build>
```

### MAVEN vs GRADLE

Maven uses XML (pom.xml) and a strict, opinionated lifecycle. 
Gradle uses Groovy or Kotlin DSL (build.gradle / build.gradle.kts) and is more flexible
and faster (incremental builds, build cache). 

Spring Boot projects work with both. In interviews, knowing Maven is expected for Java/Spring roles; Gradle is more common in Android (where it is mandatory) and newer Spring projects.

Key Maven conventions to memorise:

```text
• src/main/java/   → production source code
• src/main/resources/ → properties, YAML, static files
• src/test/java/   → test source code
• target/          → all build output (always in .gitignore)
• ~/.m2/repository/ → local dependency cache
```


## 4.12 YAML

### Overview

YAML (YAML Ain't Markup Language — a recursive acronym) is a human-readable data serialisation format. It is not a programming language and has no executable logic. Its only job is to represent structured data (strings, numbers, booleans, lists, maps) in a format that humans can read and write comfortably. YAML is the dominant configuration format in modern software: Kubernetes manifests, Docker Compose files, CI/CD pipelines (GitHub Actions, GitLab CI), Spring Boot's application.yml, and Ansible playbooks are all YAML.

### YAML vs JSON vs XML

All three formats represent the same kinds of data. The differences are:

**JSON** — machine-friendly, no comments, strict quoting rules, verbose brackets. Best for APIs and data exchange between programs.

```json
{
  "server": {
    "port": 8080,
    "host": "localhost"
  },
  "features": ["auth", "logging"],
  "debug": true
}
```


**XML** — very verbose, supports attributes and namespaces, required for SOAP and many enterprise standards.

```xml
<config>
  <server>
    <port>8080</port>
    <host>localhost</host>
  </server>
  <features>
    <feature>auth</feature>
    <feature>logging</feature>
  </features>
  <debug>true</debug>
</config>
```


**YAML** — human-friendly, uses indentation instead of brackets, supports comments (#), optional quotes. Best for configuration files that humans edit.

```yaml
server:
  port: 8080
  host: localhost
features:
  - auth
  - logging
debug: true
# This comment is valid YAML; JSON has no comment syntax
```


YAML is clearly the most readable for humans. This is why it won in the configuration space.


### CORE SYNTAX RULES

1. **INDENTATION IS STRUCTURE**. YAML uses spaces (NEVER tabs) to define nesting. Two-space indentation is the universal convention.

2. **KEY-VALUE PAIRS (mappings)**: 
    key: value
    Colons must be followed by a space. "key:value" is NOT valid.

3. **LISTS (sequences)**:
   items:
     - first
     - second
     - third

4. **SCALARS (values)**:
   - Strings: can be unquoted if they don't contain special chars
   - Numbers: 42, 3.14 (no quotes)
   - Booleans: true / false (also yes/no, on/off — avoid these ambiguous forms)
   - Null: null or ~
   - Dates: 2024-01-15 (ISO 8601)

5. **COMMENTS**: # everything after this is ignored

6. **MULTILINE STRINGS**:
   Two operators:
   - | (literal block) — preserves newlines exactly
   - > (folded block)  — folds newlines into spaces (good for long sentences)

```yaml
# Literal block: newlines preserved
script: |
  #!/bin/bash
  echo "Hello"
  echo "World"

# Folded block: newlines become spaces
description: >
  This is a long description
  that wraps across multiple lines
  but will be read as one paragraph.
```

### SPRING BOOT — application.yml vs application.properties

Both `.properties` and `.yml` (YAML) files are used in Spring Boot to configure applications externally, without changing the source code. They typically define settings such as server ports, database connections, and environment-specific configuration.


#### .properties

The `.properties` file uses a **flat key-value structure**.

Example:
```properties
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=secret
```

Characteristics:
- Simple key = value format
- Everything is flat (no nesting)
- Easy to read for small configurations
- Can become repetitive for complex setups


#### .yml (YAML)

The `.yml` file uses a **hierarchical, indentation-based structure**.

Example:

```yaml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: secret
```

Characteristics:
- Supports nested structure
- More readable for complex configurations
- Reduces repetition
- Sensitive to indentation (spaces matter)


#### Key Differences

| Feature | .properties | .yml |
|----------|------------|------|
| Structure | Flat | Hierarchical |
| Syntax | key=value | indentation-based |
| Readability | Good for small configs | Better for complex configs |
| Repetition | High | Low |
| Error risk | Low | Higher (indentation mistakes) |


- **.properties** → simple applications or small configurations  
- **.yml** → complex applications with multiple environments and nested configuration




Spring Boot supports both application.properties and application.yml. YAML is preferred when there is nesting, because it avoids repetitive prefixes.

Properties format (repetitive):

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=secret
spring.jpa.hibernate.ddl-auto=validate
```

YAML format (hierarchical, cleaner):
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: ${DB_PASSWORD}      # reference an environment variable
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false

server:
  port: 8080
  servlet:
    context-path: /api

logging:
  level:
    root: INFO
    com.beatriz: DEBUG             # set DEBUG only for your own packages

app:
  jwt:
    secret: ${JWT_SECRET}
    expiration-ms: 86400000        # 24 hours in milliseconds
  cors:
    allowed-origins:
      - http://localhost:3000
      - https://myapp.com
```

Spring profiles in YAML — all profiles in one file, separated by ---:
```yaml
spring:
  profiles:
    active: dev   # default profile

---
spring:
  config:
    activate:
      on-profile: dev
  datasource:
    url: jdbc:h2:mem:testdb   # H2 in-memory for local dev

---
spring:
  config:
    activate:
      on-profile: prod
  datasource:
    url: jdbc:mysql://prod-db:3306/mydb
```

### DOCKER COMPOSE

Docker Compose uses YAML to define multi-container applications:

```yaml
# docker-compose.yml
version: "3.9"

services:
  app:
    build: .                          # build from Dockerfile in current dir
    ports:
      - "8080:8080"                   # host:container port mapping
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - DB_URL=jdbc:mysql://db:3306/mydb
    depends_on:
      db:
        condition: service_healthy    # wait until db passes health check
    networks:
      - backend

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: mydb
    volumes:
      - db-data:/var/lib/mysql        # named volume for persistence
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - backend

volumes:
  db-data:                            # declare the named volume

networks:
  backend:
    driver: bridge
```

### KUBERNETES MANIFESTS

Kubernetes uses YAML for every resource: Deployments, Services, ConfigMaps, Secrets, Ingresses. Each manifest has four required top-level fields:

```yaml
# Deployment — manages a set of identical Pod replicas
apiVersion: apps/v1          # which Kubernetes API group handles this
kind: Deployment             # the type of resource
metadata:
  name: my-app
  labels:
    app: my-app

spec:

  replicas: 3                # run 3 identical copies
  selector:
    matchLabels:
      app: my-app            # this Deployment manages Pods with this label
  template:                  # template for each Pod
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app
          image: my-app:1.0.0
          ports:
            - containerPort: 8080
          env:
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:          # read from a Kubernetes Secret
                  name: db-secret
                  key: password
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"             # 250 millicores = 0.25 CPU
            limits:
              memory: "512Mi"
              cpu: "500m"

---
# Service — stable network endpoint for the Deployment
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app                        # routes traffic to these Pods
  ports:
    - port: 80
      targetPort: 8080
  type: ClusterIP                      # internal only (use LoadBalancer for external)

---
# ConfigMap — non-sensitive configuration as key-value pairs
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-app-config
data:

  LOG_LEVEL: "INFO"
  APP_ENV: "production"
```

### GITHUB ACTIONS WORKFLOW

GitHub Actions CI/CD pipelines are defined in .github/workflows/*.yml:

```yaml
name: CI Pipeline

on:                          # triggers
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Java 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'

      - name: Cache Maven dependencies
        uses: actions/cache@v3
        with:
          path: ~/.m2
          key: ${{ runner.os }}-m2-${{ hashFiles('**/pom.xml') }}

      - name: Build and test
        run: mvn clean verify

      - name: Upload test results
        if: always()         # run even if tests fail
        uses: actions/upload-artifact@v4
        with:
          name: test-results
          path: target/surefire-reports/
```

### COMMON PITFALLS

1. **TABS vs SPACES**: YAML strictly forbids tab characters for indentation.
   Editors set to use tabs will produce a ParseException. Always configure your editor to use spaces for .yml/.yaml files.

2. **INCONSISTENT INDENTATION**: Every level must be indented by the same number of spaces (2 is standard). Mixing 2-space and 4-space breaks parsing.

3. **UNQUOTED SPECIAL VALUES**:
   - "yes", "no", "true", "false", "null", "~" are reserved. If a value looks like one of these but should be a string, quote it: "yes"
   - Colons in values must be quoted: message: "Error: file not found"
   - Values starting with { or [ look like JSON and may confuse parsers. Quote them: tag: "[feature]"

4. **THE NORWAY PROBLEM**: Country codes "NO" and "SE" were historically parsed as booleans (no=false, se is fine). Modern YAML 1.2 fixed this, but some parsers still use YAML 1.1 rules. Quote country codes as strings: "NO"

5. **ANCHORS AND ALIASES (advanced but useful)**: YAML allows you to define a block once and reuse it:
   ```yaml
   defaults: &defaults       # & defines the anchor named "defaults"
     retries: 3
     timeout: 30s

   development:
     <<: *defaults           # << merges the anchor; * references it
     host: localhost

   production:
     <<: *defaults
     host: prod.example.com
   retries: 5              # override the merged value
   ```
   This avoids repeating configuration across environments.

Key YAML facts for interviews:
- YAML is a superset of JSON — all valid JSON is valid YAML
- Indentation = structure (spaces only, never tabs)
- --- separates multiple documents in one file (used in Kubernetes and Spring profiles to combine configs)
- Environment variable substitution ($VAR or ${VAR}) is NOT part of YAML itself — it is handled by the consuming tool (Spring Boot, Docker, etc.)


---

# Part 5 — Databases


## 5.01 SQL — Querying & Optimization


### Overview

SQL (Structured Query Language) is the standard language for relational databases.
The same concepts — SELECT, JOINs, aggregations, subqueries, window functions — work across MySQL, PostgreSQL, SQL Server, and Oracle with minor syntax differences.

Every SQL query is built by combining clauses. The database always executes them in a fixed logical order, regardless of how you write them:

FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT


### SELECT — Choosing Columns

SELECT defines which columns (or expressions) the query returns.

```sql
-- All columns
SELECT * FROM employees;

-- Specific columns
SELECT name, salary FROM employees;

-- With an alias (rename the column in the result)
SELECT name AS employee_name, salary * 12 AS annual_salary
FROM employees;

-- Calculated expression
SELECT name, salary, salary * 0.2 AS tax FROM employees;
```

**DISTINCT** removes duplicate rows from the result:

```sql
SELECT DISTINCT department FROM employees;
-- Returns each department name only once, even if many employees share it.
```


### FROM — Source Table

FROM specifies which table (or tables) the query reads from.
You can give a table a short alias to reduce typing:

```sql
SELECT e.name, e.salary
FROM employees e;   -- "e" is now an alias for employees
```


### WHERE — Filtering Rows

WHERE filters rows before any grouping or aggregation.
Only rows where the condition is TRUE are kept.

```sql
SELECT name, salary FROM employees WHERE salary > 50000;
```

#### Comparison Operators

```sql
WHERE salary = 50000      -- equal
WHERE salary != 50000     -- not equal (also written <>)
WHERE salary > 50000      -- greater than
WHERE salary >= 50000     -- greater than or equal
WHERE salary < 50000      -- less than
WHERE salary <= 50000     -- less than or equal
```

#### BETWEEN

```sql
WHERE salary BETWEEN 40000 AND 70000
-- Equivalent to: WHERE salary >= 40000 AND salary <= 70000
-- Both limits are inclusive.
```

#### IN — match a list of values

```sql
WHERE department IN ('Engineering', 'Design', 'Product')
-- Equivalent to multiple OR conditions. Much cleaner.

WHERE department NOT IN ('HR', 'Legal')
```

#### LIKE — pattern matching on strings

```sql
WHERE name LIKE 'B%'        -- starts with B (% = any sequence of characters)
WHERE name LIKE '%santos'   -- ends with santos
WHERE name LIKE '%beat%'    -- contains "beat" anywhere
WHERE name LIKE 'B_a%'      -- B, then any one character, then a, then anything
                             -- _ matches exactly one character
```

#### IS NULL / IS NOT NULL

```sql
WHERE manager_id IS NULL       -- find rows where the value is missing
WHERE email IS NOT NULL        -- only rows that have an email
-- Never use = NULL. In SQL, NULL = NULL is not TRUE — it is UNKNOWN.
```

#### AND / OR / NOT

```sql
WHERE department = 'Engineering' AND salary > 60000
WHERE department = 'Engineering' OR department = 'Design'
WHERE NOT department = 'HR'
```


### ORDER BY — Sorting Results

ORDER BY sorts the final result. Applied after all other clauses.

```sql
SELECT name, salary FROM employees ORDER BY salary;           -- ascending (default)
SELECT name, salary FROM employees ORDER BY salary DESC;      -- descending
SELECT name, salary FROM employees ORDER BY department ASC, salary DESC;
-- Sort by department A→Z, then by salary high→low within each department.
```


### LIMIT / OFFSET — Restricting Rows Returned

```sql
SELECT name FROM employees ORDER BY salary DESC LIMIT 10;
-- Return only the top 10 highest-paid employees.

SELECT name FROM employees ORDER BY salary DESC LIMIT 10 OFFSET 20;
-- Skip the first 20 rows, return the next 10. Used for pagination (page 3 of 10-per-page).
```

OFFSET becomes slow on large tables because the database must scan and discard all preceding rows. For large datasets, prefer keyset/cursor pagination instead:

```sql
-- Instead of OFFSET, remember the last seen value and filter on it:
SELECT * FROM posts
WHERE created_at < '2024-03-15T10:30:00'
ORDER BY created_at DESC
LIMIT 20;
-- The index on created_at lets the database jump directly to the right position.
```


### Aggregate Functions — Computing Summary Values

Aggregate functions collapse many rows into a single value.
They are always used with GROUP BY (or alone to aggregate the entire table).

#### COUNT

```sql
SELECT COUNT(*) FROM employees;
-- Counts all rows, including rows with NULLs.

SELECT COUNT(email) FROM employees;
-- Counts only rows where email is NOT NULL.

SELECT COUNT(DISTINCT department) FROM employees;
-- Counts how many unique departments exist.
```

#### SUM

```sql
SELECT SUM(salary) FROM employees;
-- Total of all salary values. Ignores NULLs.

SELECT department, SUM(salary) AS total_payroll
FROM employees
GROUP BY department;
-- Total salary per department.
```

#### AVG

```sql
SELECT AVG(salary) FROM employees;
-- Arithmetic mean of all salary values. Ignores NULLs.

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;
```

#### MIN and MAX

```sql
SELECT MIN(salary) FROM employees;   -- lowest value
SELECT MAX(salary) FROM employees;   -- highest value

SELECT department, MIN(salary) AS lowest, MAX(salary) AS highest
FROM employees
GROUP BY department;
```

#### Combining aggregates

```sql
SELECT
    department,
    COUNT(*)        AS headcount,
    AVG(salary)     AS avg_salary,
    MIN(salary)     AS min_salary,
    MAX(salary)     AS max_salary,
    SUM(salary)     AS total_payroll
FROM employees
GROUP BY department
ORDER BY total_payroll DESC;
```


### GROUP BY — Grouping Rows

GROUP BY groups rows that share the same value in one or more columns, then applies aggregate functions to each group.

```sql
SELECT department, COUNT(*) AS headcount
FROM employees
GROUP BY department;
-- One row per department. COUNT(*) counts how many employees are in each.
```

Rules:
- Every column in SELECT that is NOT inside an aggregate function MUST appear in GROUP BY.
- You can group by multiple columns:

```sql
SELECT department, job_title, AVG(salary)
FROM employees
GROUP BY department, job_title;
-- One row per unique (department, job_title) combination.
```


### HAVING — Filtering Groups

HAVING is like WHERE, but it filters after grouping — it can use aggregate functions.
WHERE filters individual rows before grouping; HAVING filters groups after grouping.

```sql
SELECT department, COUNT(*) AS headcount
FROM employees
GROUP BY department
HAVING COUNT(*) > 10;
-- Only show departments with more than 10 employees.

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 60000;
-- Only departments where the average salary exceeds 60,000.
```


### JOINs — Combining Tables

A JOIN combines rows from two or more tables based on a related column.

#### INNER JOIN — only matching rows

```sql
SELECT o.id, o.amount, c.name AS customer
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;
-- Only returns orders that have a matching customer.
-- Orders with no customer (orphaned rows) are excluded.
```

#### LEFT JOIN — all rows from the left table

```sql
SELECT c.name, COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name;
-- Returns ALL customers, even those with no orders.
-- For customers with no orders, o.id will be NULL → COUNT(o.id) returns 0.
```

#### RIGHT JOIN — all rows from the right table

```sql
SELECT c.name, o.amount
FROM orders o
RIGHT JOIN customers c ON o.customer_id = c.id;
-- All customers appear, even if they have no orders.
-- Equivalent to flipping the tables in a LEFT JOIN — rarely used.
```

#### FULL OUTER JOIN — all rows from both tables

```sql
SELECT c.name, o.amount
FROM customers c
FULL OUTER JOIN orders o ON c.id = o.customer_id;
-- Customers with no orders → NULL on the orders side.
-- Orders with no customer → NULL on the customers side.
-- MySQL doesn't support FULL OUTER JOIN natively; use UNION of LEFT and RIGHT JOIN.
```

#### CROSS JOIN — every combination

```sql
SELECT colours.name, sizes.name
FROM colours CROSS JOIN sizes;
-- Returns every colour paired with every size — the cartesian product.
-- 5 colours × 3 sizes = 15 rows.
```

#### Joining more than two tables

```sql
SELECT o.id, c.name, p.name AS product, oi.quantity
FROM orders o
INNER JOIN customers c  ON o.customer_id = c.id
INNER JOIN order_items oi ON oi.order_id = o.id
INNER JOIN products p   ON oi.product_id = p.id
WHERE o.status = 'completed';
```


### Subqueries — Queries Inside Queries

A subquery is a SELECT statement nested inside another query.

#### Subquery in WHERE

```sql
-- Find employees earning more than the company average
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

#### Subquery with IN

```sql
-- Find customers who placed at least one order in 2024
SELECT name FROM customers
WHERE id IN (
    SELECT DISTINCT customer_id FROM orders
    WHERE YEAR(created_at) = 2024
);
```

#### Correlated subquery — references the outer query

```sql
-- Find each employee's salary compared to their department's average
SELECT name, salary,
    (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e1.department) AS dept_avg
FROM employees e1;
-- The subquery runs once per outer row, using the current row's department.
```

#### Subquery in FROM (derived table)

```sql
SELECT dept, avg_salary
FROM (
    SELECT department AS dept, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
) AS dept_averages
WHERE avg_salary > 55000;
```


### CTEs — Common Table Expressions

A CTE (defined with WITH) is a named temporary result set that can be referenced
in the main query. It makes complex queries readable by breaking them into steps.

```sql
WITH active_customers AS (
    SELECT id, name
    FROM customers
    WHERE last_order_date > CURRENT_DATE - INTERVAL 90 DAY
),
big_spenders AS (
    SELECT customer_id, SUM(amount) AS total
    FROM orders
    GROUP BY customer_id
    HAVING SUM(amount) > 1000
)
SELECT ac.name, bs.total
FROM active_customers ac
JOIN big_spenders bs ON ac.id = bs.customer_id
ORDER BY bs.total DESC;
```

You can define multiple CTEs separated by commas. Later CTEs can reference earlier ones.

#### Recursive CTEs — hierarchical data

```sql
WITH RECURSIVE org_chart AS (
    -- Base case: start from the top (CEO has no manager)
    SELECT id, name, manager_id, 0 AS level
    FROM employees WHERE manager_id IS NULL

    UNION ALL

    -- Recursive step: find employees whose manager is in the previous result
    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    INNER JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT level, name FROM org_chart ORDER BY level;
```


### Window Functions — Row-Level Aggregation

Window functions compute a value for each row based on a related set of rows (the "window"), WITHOUT collapsing them like GROUP BY.
Each row keeps its identity but also sees an aggregated perspective.

```sql
SELECT
    name,
    department,
    salary,
    AVG(salary) OVER (PARTITION BY department) AS dept_avg,
    salary - AVG(salary) OVER (PARTITION BY department) AS diff_from_avg,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank_in_dept,
    SUM(salary) OVER (PARTITION BY department ORDER BY salary) AS running_total,
    LAG(salary, 1) OVER (PARTITION BY department ORDER BY salary) AS prev_salary,
    LEAD(salary, 1) OVER (PARTITION BY department ORDER BY salary) AS next_salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS global_rank
FROM employees;
```

**OVER()** defines the window. 

**PARTITION BY** divides rows into groups.

**ORDER BY** inside OVER determines row order within each partition.


#### Ranking functions

```sql
RANK()        -- 1, 2, 2, 4   (gaps after ties)
DENSE_RANK()  -- 1, 2, 2, 3   (no gaps)
ROW_NUMBER()  -- 1, 2, 3, 4   (always unique, arbitrary tiebreaker)
NTILE(4)      -- divides rows into 4 equal buckets (quartiles)
```

#### Navigation functions

```sql
LAG(salary, 1)   -- value from the previous row
LEAD(salary, 1)  -- value from the next row
FIRST_VALUE(salary) OVER (...)  -- first value in the window
LAST_VALUE(salary) OVER (...)   -- last value in the window
```


### String Functions

```sql
UPPER(name)              -- 'beatriz' → 'BEATRIZ'
LOWER(name)              -- 'BEATRIZ' → 'beatriz'
LENGTH(name)             -- number of characters
TRIM(name)               -- remove leading and trailing spaces
CONCAT(first, ' ', last) -- join strings: 'Beatriz' + ' ' + 'Santos' → 'Beatriz Santos'
SUBSTRING(name, 1, 3)    -- extract characters: 'Beatriz' → 'Bea'
REPLACE(name, 'a', '@')  -- replace all occurrences
LEFT(name, 4)            -- first 4 characters
RIGHT(name, 4)           -- last 4 characters
```


### Date Functions

```sql
NOW()                           -- current date and time
CURDATE()                       -- current date only
YEAR(created_at)                -- extract the year
MONTH(created_at)               -- extract the month (1–12)
DAY(created_at)                 -- extract the day of month
DATEDIFF(end_date, start_date)  -- difference in days
DATE_ADD(created_at, INTERVAL 30 DAY)   -- add 30 days
DATE_FORMAT(created_at, '%Y-%m-%d')     -- format as string
```


### CASE — Conditional Logic in Queries

CASE is SQL's if-else, usable anywhere an expression is valid.

```sql
SELECT name, salary,
    CASE
        WHEN salary >= 80000 THEN 'Senior'
        WHEN salary >= 50000 THEN 'Mid'
        ELSE 'Junior'
    END AS level
FROM employees;
```

```sql
-- Counting by condition (pivot pattern)
SELECT
    COUNT(CASE WHEN status = 'completed' THEN 1 END) AS completed,
    COUNT(CASE WHEN status = 'pending'   THEN 1 END) AS pending,
    COUNT(CASE WHEN status = 'cancelled' THEN 1 END) AS cancelled
FROM orders;
```


### INSERT, UPDATE, DELETE

```sql
-- INSERT — add new rows
INSERT INTO employees (name, department, salary)
VALUES ('Beatriz', 'Engineering', 75000);

-- INSERT multiple rows at once
INSERT INTO employees (name, department, salary) VALUES
    ('João', 'Design', 60000),
    ('Ana', 'Product', 70000);

-- UPDATE — change existing rows
UPDATE employees
SET salary = 80000
WHERE name = 'Beatriz';

-- UPDATE multiple columns
UPDATE employees
SET salary = salary * 1.1, department = 'Senior Engineering'
WHERE department = 'Engineering' AND salary > 70000;

-- DELETE — remove rows
DELETE FROM employees WHERE id = 42;

-- Always test your WHERE clause with a SELECT first before deleting.
SELECT * FROM employees WHERE id = 42;
```


### Indexes

An index is a data structure (usually a B-tree) the database builds on one or more
columns. It allows finding rows in O(log n) instead of scanning the entire table O(n).

```sql
-- Create an index on a single column
CREATE INDEX idx_employees_department ON employees (department);

-- Unique index — enforces uniqueness + speeds up lookups
CREATE UNIQUE INDEX idx_employees_email ON employees (email);

-- Composite index — useful when you frequently filter by both columns together
CREATE INDEX idx_orders_customer_status ON orders (customer_id, status);
```

When to add an index:
- Columns used in WHERE, JOIN ON, or ORDER BY
- Columns with high cardinality (many unique values — email, id, timestamp)

When NOT to add an index:
- Columns with very low cardinality (e.g. a boolean column)
- Tables with very few rows
- Columns written to very frequently (indexes slow down INSERT/UPDATE/DELETE)


### Query Execution Order

SQL clauses execute in this logical order, which explains many common errors:

```text
1. FROM        — identify the source tables
2. JOIN        — combine tables
3. WHERE       — filter individual rows
4. GROUP BY    — group rows into buckets
5. HAVING      — filter groups (can use aggregate functions)
6. SELECT      — choose columns and expressions
7. DISTINCT    — remove duplicates
8. ORDER BY    — sort the result
9. LIMIT       — restrict the number of rows returned
```

This is why you CANNOT use a SELECT alias in a WHERE clause (WHERE runs before SELECT), but you CAN use it in ORDER BY (ORDER BY runs after SELECT).


## 5.02 MySQL



### Overview

MySQL is the world's most widely deployed open-source relational database. It stores data in **structured tables (rows and columns)** and is queried using **SQL (Structured Query Language)**.

It enforces relationships between data using concepts like **primary keys and foreign keys**, ensuring consistency and integrity across tables.

MySQL supports **ACID transactions** (Atomicity, Consistency, Isolation, Durability), which guarantee that database operations are reliable even in case of failures.

Its default storage engine, **InnoDB**, provides support for transactions, foreign keys, and crash recovery.


### ACID Properties


**Atomicity** — a transaction is all-or-nothing. If you transfer €100 between accounts, both the debit and the credit happen together, or neither does. No partial updates.


**Consistency** — a transaction brings the database from one valid state to another. All constraints (NOT NULL, FOREIGN KEY, UNIQUE, CHECK) are enforced. A transaction that would violate a constraint is rolled back entirely.


**Isolation** — concurrent transactions do not interfere with each other. Each transaction sees a snapshot of the database, as if it were running alone. Isolation levels trade off between data accuracy and concurrency:


**Read Uncommitted** — can read another transaction's uncommitted changes (dirty read)


**Read Committed** — only reads committed data (most databases' default)


**Repeatable Read** — same row always returns same value within a transaction (MySQL default)


**Serializable** — fully isolated, as if transactions ran one at a time (slowest)


**Durability** — once a transaction commits, it is permanent. Even if the server crashes, the data survives. InnoDB achieves this with a Write-Ahead Log (WAL): changes are written to the log before the data files, so they can be replayed on recovery.



### Indexes and How They Work


An index is a separate data structure (InnoDB uses a B-tree) that maps column values to row locations, so the database can find rows without scanning the entire table (full table scan).

Think of it like a book index: without it, you read every page to find a topic. With it, you jump directly to the right page.

**B-tree indexes (default)**:
- Efficient for: equality (=), range (<, >, BETWEEN), ORDER BY, and prefix matches on strings (LIKE 'prefix%')
- NOT efficient for: LIKE '%suffix' (leading wildcard), functions on columns

```sql
-- Simple index
CREATE INDEX idx_email ON users(email);

-- Composite index (column order matters!)
CREATE INDEX idx_role_created ON users(role, created_at);
-- This index is used for: WHERE role = 'admin'
--                          WHERE role = 'admin' AND created_at > '2024-01-01'
-- NOT efficiently for:    WHERE created_at > '2024-01-01' alone (leftmost prefix rule)

-- Unique index (also enforces uniqueness constraint)
CREATE UNIQUE INDEX idx_unique_email ON users(email);

-- EXPLAIN shows how MySQL executes a query
EXPLAIN SELECT * FROM users WHERE role = 'admin' AND created_at > '2024-01-01';
-- Look for: type=ref or range (good), type=ALL (full scan — bad)
-- Key column: which index is used
-- rows: estimated rows examined (lower is better)
```


**Covering index**: an index that contains ALL the columns a query needs means MySQL never has to read the actual table row — the index itself is the answer.

```sql
CREATE INDEX idx_cover ON orders(user_id, status, created_at);
SELECT status, created_at FROM orders WHERE user_id = 5;
-- Only reads the index, never touches the orders table
```


**Character Set** — utf8mb4

Always use utf8mb4 (not utf8) in MySQL. MySQL's "utf8" is a broken 3-byte variant that cannot store 4-byte Unicode characters (emoji, some East Asian characters). utf8mb4 is the real UTF-8 standard.

```sql
CREATE TABLE users (
    name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
);

-- Set at connection level in application.yml
spring.datasource.url=jdbc:mysql://localhost:3306/mydb?characterEncoding=utf8mb4
```



## 5.03 PostgreSQL



### Overview

PostgreSQL is an advanced open-source relational database management system (RDBMS). Like MySQL, it uses **SQL (Structured Query Language)** to store and query structured data in tables with rows and columns.

However, PostgreSQL is often considered more powerful and extensible, earning the reputation of being **“the most feature-rich open-source database”**.

Compared to MySQL, PostgreSQL provides:
- A richer set of **data types** (e.g. JSONB, arrays, UUIDs, geometric types)
- More powerful **SQL capabilities** such as CTEs (WITH queries) and window functions
- A more advanced **query planner and optimizer**
- A highly **extensible architecture** with extensions like PostGIS (geospatial data) and pgvector (AI embeddings)
- Better adherence to the **SQL standard**

Because of these features, PostgreSQL is often preferred for complex applications, analytics, and systems that require flexibility and advanced querying capabilities.

It also fully supports **ACID transactions**, relational integrity (primary/foreign keys), and complex querying capabilities.


### JSONB vs JSON

PostgreSQL has two JSON types — almost always prefer JSONB:

**json**: stores JSON as text, preserving exact whitespace and key order. Re-parses on every access. Not indexable. Rarely useful.

**jsonb**: stores JSON in optimised binary format — indexable, much faster to query and filter. Key order is not preserved (deduplicates keys). Always use this.


```sql
CREATE TABLE events (
    id      BIGSERIAL PRIMARY KEY,
    type    TEXT NOT NULL,
    payload JSONB NOT NULL,    -- use jsonb, not json
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert a JSON document
INSERT INTO events (type, payload) VALUES (
    'user_signup',
    '{"userId": 42, "email": "b@example.com", "source": "organic"}'
);

-- Query JSON fields
SELECT payload->>'email' AS email FROM events;     -- ->> returns TEXT
SELECT payload->'userId' AS user_id FROM events;   -- -> returns JSONB

-- Filter by nested JSON value
SELECT * FROM events WHERE payload->>'source' = 'organic';
SELECT * FROM events WHERE payload @> '{"source": "organic"}';
-- @> means "contains" — checks if left JSONB contains the right JSONB

-- Check if a key exists
SELECT * FROM events WHERE payload ? 'email';

-- Full-text search within JSONB
SELECT * FROM events WHERE payload @@ '$.userId > 10'::jsonpath;

-- GIN index for efficient JSONB queries
CREATE INDEX idx_events_payload ON events USING GIN (payload);
-- GIN index makes @>, ?, and @@ operators very fast
```


### Native Arrays


PostgreSQL supports native arrays — useful when data is simple and does not need its own table (tags, roles, phone numbers):


```sql
CREATE TABLE articles (
    id     BIGSERIAL PRIMARY KEY,
    title  TEXT NOT NULL,
    tags   TEXT[] NOT NULL DEFAULT '{}',   -- array of text
    scores INTEGER[]
);

INSERT INTO articles (title, tags) VALUES
    ('PostgreSQL Guide', ARRAY['database', 'sql', 'postgres']);

-- Search articles that HAVE a specific tag
SELECT * FROM articles WHERE 'database' = ANY(tags);

-- Search articles with ANY of these tags
SELECT * FROM articles WHERE tags && ARRAY['sql', 'nosql'];

-- GIN index on array column
CREATE INDEX idx_articles_tags ON articles USING GIN (tags);

-- Unnest — expand array to rows (useful in queries and aggregations)
SELECT title, unnest(tags) AS tag FROM articles;
```


### Upsert with on Conflict

```sql
-- Update if email already exists, insert if it doesn't
INSERT INTO users (email, name, login_count)
VALUES ('b@example.com', 'Beatriz', 1)
ON CONFLICT (email) DO UPDATE
    SET name = EXCLUDED.name,
        login_count = users.login_count + 1,
        updated_at = NOW();
-- EXCLUDED refers to the row that was attempted to be inserted

-- Page view counter — increment if exists, create if not
INSERT INTO page_views (page_slug, views) VALUES ('home', 1)
ON CONFLICT (page_slug) DO UPDATE SET views = page_views.views + 1;

-- ON CONFLICT DO NOTHING — ignore if already exists (idempotent insert)
INSERT INTO user_roles (user_id, role) VALUES (42, 'admin')
ON CONFLICT DO NOTHING;
```


**Returning Clause** - get the inserted/updated row back without a second query

```sql
-- Get the generated ID after INSERT
INSERT INTO users (name, email) VALUES ('Beatriz', 'b@example.com')
RETURNING id, created_at;

-- Get updated values after UPDATE
UPDATE users SET last_login = NOW() WHERE id = 42
RETURNING id, last_login;
```


### Advanced Index Types

PostgreSQL offers more index types than most databases:

**B-TREE** (default): balanced tree. Good for equality and range queries on comparable types (numbers, dates, text).

**GIN (Generalised Inverted Index)** : for composite values — arrays, JSONB, full-text search. Stores each element of the collection separately, so "does this array contain 'x'?" is fast. Slow to build, fast to query.

**GiST (Generalised Search Tree)** : extensible index for geometric types, ranges, full-text search, and other non-scalar data. Used by PostGIS for spatial queries.

**BRIN (Block Range INdex)** : only stores min/max per block of pages — tiny index. Extremely fast to build and very small. Best for large, naturally ordered tables (time-series data where rows are inserted in time order). Not good for random access.
- Partial index — only index rows matching a condition CREATE INDEX idx_active_users ON users(email) WHERE active = true;
- Smaller index, queries for active users use it, inactive users are ignored
- Functional index — index on an expression CREATE INDEX idx_email_lower ON users(lower(email));
- Enables case-insensitive searches: WHERE lower(email) = lower($1)


### Full-text Search

```sql
-- tsvector: optimised representation for full-text search
-- to_tsvector normalises text: removes stop words, stems words
ALTER TABLE articles ADD COLUMN search_vector tsvector
    GENERATED ALWAYS AS (to_tsvector('english', title || ' ' || content)) STORED;

CREATE INDEX idx_articles_fts ON articles USING GIN (search_vector);

-- Search using @@
SELECT title FROM articles
WHERE search_vector @@ to_tsquery('english', 'database & optimisation')
ORDER BY ts_rank(search_vector, to_tsquery('english', 'database')) DESC;

-- ts_rank: relevance score — higher is better match
```


#### Explain Analyze — QUERY DIAGNOSIS

EXPLAIN ANALYZE shows you exactly how PostgreSQL executes a query, with actual timings. Use it to diagnose slow queries.

```sql
SELECT u.name, COUNT(o.id) AS orders
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.active = true
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 5;

-- Output (read from inside out, or bottom to top):
-- HashAggregate (cost=... actual time=...)
--   -> Hash Left Join (...)
--        -> Bitmap Heap Scan on users    <- uses index
--             -> Bitmap Index Scan on idx_active_users
--        -> Hash
--             -> Seq Scan on orders      <- full table scan — might need index
```

#### Key terms to understand

Seq Scan       — full table scan. May be fine on small tables, problematic on large ones.
Index Scan     — uses B-tree index for point lookups
Bitmap Heap Scan — uses index to get row IDs, then reads pages in bulk (for many rows)
Hash Join      — builds a hash table from one side, probes with the other
actual time    — REAL milliseconds (vs estimated cost); this is what matters
rows=N         — actual vs estimated row count (large discrepancy = stale statistics)

-- Update statistics if estimates are very wrong
ANALYZE users;          -- update statistics for one table
VACUUM ANALYZE users;   -- reclaim dead rows AND update statistics



### Extensions

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
SELECT uuid_generate_v4();   -- generate UUID

CREATE EXTENSION IF NOT EXISTS pg_trgm;
-- Trigram similarity — fuzzy text matching (typo-tolerant search)
CREATE INDEX idx_users_name_trgm ON users USING GIN (name gin_trgm_ops);
SELECT * FROM users WHERE name % 'Beatrz';   -- finds "Beatriz" despite typo
SELECT * FROM users ORDER BY similarity(name, 'Beatrz') DESC LIMIT 10;

CREATE EXTENSION IF NOT EXISTS vector;
-- pgvector — store and query AI embeddings (RAG, semantic search)
ALTER TABLE documents ADD COLUMN embedding vector(1536);
-- Find the 5 most semantically similar documents to a query embedding
SELECT title FROM documents
ORDER BY embedding <-> '[0.1, 0.2, ...]'::vector   -- L2 distance
LIMIT 5;

-- PostGIS — geospatial data (coordinates, polygons, distances)
-- Used by PostGIS for geospatial queries. Essential for apps with maps.
CREATE EXTENSION IF NOT EXISTS postgis;
SELECT name FROM restaurants
WHERE ST_DWithin(location, ST_MakePoint(-9.14, 38.71)::geography, 5000);
-- Find restaurants within 5km of Lisbon city centre
```


### Lateral Join

LATERAL lets a subquery reference columns from the left-hand side — like a correlated subquery but usable as a table:

```sql
-- For each user, get their 3 most recent orders (without LATERAL, this is complex)
SELECT u.name, recent.order_date, recent.amount
FROM users u
JOIN LATERAL (
    SELECT order_date, amount
    FROM orders
    WHERE user_id = u.id        -- references u from the outer query
    ORDER BY order_date DESC
    LIMIT 3
) recent ON true;
```



## 5.04 NoSQL


### Overview

**NoSQL** (Not Only SQL) is a broad category of database systems that store and retrieve data using models other than the traditional relational table-row model.

NoSQL databases were built to address limitations of relational databases at scale:
- Horizontal scaling across many cheap servers
- Flexible or schema-less data models
- High write throughput for large volumes of data
- Support for unstructured or semi-structured data

NoSQL does not mean "no SQL at all" — it means SQL is not the primary interface, and the relational model is not enforced.


### Types of NoSQL Databases

There are four main types of NoSQL databases. Each is optimised for a different data access pattern.


#### Document Databases

Store data as self-contained documents, typically JSON or BSON.

Each document can have a different structure — there is no enforced schema.

```json
{
  "id": "u_001",
  "name": "Beatriz Santos",
  "email": "beatriz@example.com",
  "address": {
    "city": "Lisbon",
    "country": "Portugal"
  },
  "tags": ["engineer", "backend"]
}
```

Related data is embedded directly inside the document rather than split across tables and joined.

Best for: content management, user profiles, product catalogues, e-commerce.

Examples: **MongoDB**, **Firestore**, **CouchDB**, **Amazon DocumentDB**


#### Key-Value Stores

The simplest NoSQL model. Each entry is a key paired with a value. The value is opaque — the database doesn't care about its structure.

```text
user:1001        →  { "name": "Beatriz", "role": "admin" }
session:xyz      →  "eyJhbGciOiJIUzI1NiJ9..."
counter:visits   →  94231
```

Extremely fast reads and writes. Ideal for caching, session storage, and feature flags.

Examples: **Redis**, **DynamoDB** (also document), **Memcached**


#### Column-Family (Wide-Column) Databases

Data is stored in rows and columns, but columns are grouped into **column families** and each row can have a completely different set of columns. Optimised for high-volume writes and reads distributed across many nodes.

Unlike a relational table where all rows share the same columns, each row here only stores the columns it actually has data for — sparse storage.

Best for: time-series data, IoT sensor data, analytics pipelines, event logging, write-heavy workloads.

Examples: **Apache Cassandra**, **Apache HBase**, **Google Bigtable**


#### Graph Databases

Store data as **nodes** (entities) and **edges** (relationships between them). Both nodes and edges can have properties.

```text
(Beatriz)-[:WORKS_AT]->(Company A)
(Beatriz)-[:KNOWS]->(João)
(João)-[:WORKS_AT]->(Company A)
```

Optimised for traversing relationships — queries like "find all friends of friends who work at the same company" are natural and fast, whereas the same query in SQL requires multiple expensive JOINs.

Best for: social networks, recommendation engines, fraud detection, knowledge graphs, access control systems.

Examples: **Neo4j**, **Amazon Neptune**, **ArangoDB**


### NoSQL vs SQL

| | SQL (Relational) | NoSQL |
|---|---|---|
| Schema | Fixed, enforced at write | Flexible or schema-less |
| Scaling | Vertical (scale up) | Horizontal (scale out) |
| Transactions | Full ACID | Varies (often BASE) |
| Joins | Native | Manual or embedded data |
| Query language | SQL (standardised) | Database-specific |
| Best for | Complex queries, integrity | High volume, varied data |


### ACID vs BASE

Relational databases guarantee **ACID** properties for transactions:
- **A**tomicity — all or nothing
- **C**onsistency — data is always valid
- **I**solation — concurrent transactions don't interfere
- **D**urability — committed data survives crashes

Many NoSQL databases follow **BASE** instead:
- **B**asically Available — the system is always available but may return stale data
- **S**oft state — state may change over time even without new input
- **E**ventually consistent — the system will converge to a consistent state given enough time

BASE trades strict consistency for availability and partition tolerance, following the trade-off described by the CAP theorem.


### The CAP Theorem

In any distributed system you can only guarantee two of three properties simultaneously:

- **C**onsistency — every read returns the most recent write
- **A**vailability — every request gets a response (not an error)
- **P**artition Tolerance — the system continues operating despite network failures between nodes

Since network partitions are unavoidable in distributed systems, the practical choice is between:
- **CP** — consistent but may refuse requests during a partition (e.g. HBase, Zookeeper)
- **AP** — always available but may return stale data during a partition (e.g. Cassandra, DynamoDB)

Most NoSQL databases are designed as **AP systems** — they prioritise availability and reach consistency eventually. This is why reading from a NoSQL database immediately after a write might return old data in certain configurations.


### When to Use NoSQL

**Use NoSQL when:**
- Data is hierarchical or document-shaped, avoiding many JOINs
- You need to scale writes horizontally across many servers
- The schema needs to evolve frequently (e.g. product attributes vary per category)
- Write throughput is extremely high (IoT, logging, analytics, real-time feeds)
- You are building graph or relationship-heavy features

**Use SQL when:**
- Data is highly relational with many entities referencing each other
- You need strong ACID transactions (financial systems, inventory management)
- Complex ad-hoc queries are common
- Data integrity and referential constraints are critical


### Embedding vs Referencing in Document Databases

Document databases require you to decide how to model relationships at schema design time.

**Embedding** — store related data inside the parent document:
- One query returns everything — no JOIN needed
- Atomic updates on a single document
- Risk: data duplication if the same sub-document is shared across many parents; large documents become slow to load

**Referencing** — store only an identifier pointing to another document (like a foreign key):
- Avoids duplication
- Keeps documents small
- Requires multiple queries or a $lookup aggregation stage
- Better when related data changes independently or is very large

The key difference from SQL: there is no automatic JOIN — you must plan data access patterns at design time and choose accordingly.




## 5.05 MongoDB


### Overview

MongoDB is a document-oriented NoSQL database. Instead of rows in tables, data is stored as JSON-like BSON documents within collections. Documents in the same collection can have different fields — schema-flexible by default. The primary query interface is JavaScript-like method chaining in the MongoDB shell or driver.

Core concepts:
- **Database** — contains collections (like a SQL database contains tables)
- **Collection** — a group of documents (like a SQL table, but schema-free)
- **Document** — a single record stored as BSON (like a SQL row, but nested)
- **_id** — every document has a unique `_id` field (auto-generated as ObjectId if omitted)


### find() — Querying Documents

`find()` returns all documents that match a filter. With no filter it returns everything.

```javascript
// Return all documents in the collection
db.users.find()

// Find with a filter — users from Lisbon
db.users.find({ city: "Lisbon" })

// Find one document — stops after the first match
db.users.findOne({ email: "beatriz@example.com" })
```


### Comparison Operators

Filter documents based on field values using operators prefixed with `$`.

```javascript
// $eq — equal (same as writing the value directly)
db.products.find({ price: { $eq: 29.99 } })
db.products.find({ price: 29.99 })              // shorthand, identical result

// $ne — not equal
db.users.find({ status: { $ne: "inactive" } })

// $gt, $gte — greater than, greater than or equal
db.products.find({ price: { $gt: 100 } })
db.products.find({ price: { $gte: 100 } })

// $lt, $lte — less than, less than or equal
db.products.find({ stock: { $lt: 10 } })        // items running low

// Combine: price between 50 and 200
db.products.find({ price: { $gte: 50, $lte: 200 } })
```


### $in and $nin — Match a List of Values

```javascript
// $in — field matches any value in the array
db.users.find({ country: { $in: ["Portugal", "Spain", "France"] } })

// $nin — field does NOT match any value in the array
db.orders.find({ status: { $nin: ["cancelled", "refunded"] } })
```


### $and and $or — Logical Operators

```javascript
// $and — both conditions must be true
db.products.find({
    $and: [
        { price: { $lt: 100 } },
        { category: "electronics" }
    ]
})

// Shorthand: multiple fields in the same filter object imply AND
db.products.find({ price: { $lt: 100 }, category: "electronics" })

// $or — at least one condition must be true
db.users.find({
    $or: [
        { country: "Portugal" },
        { country: "Brazil" }
    ]
})

// Combining $and and $or
db.orders.find({
    status: "pending",
    $or: [
        { amount: { $gt: 500 } },
        { priority: "high" }
    ]
})
```


### $exists and $type — Field Presence and Type

```javascript
// $exists — documents where the field exists (true) or is missing (false)
db.users.find({ phone: { $exists: true } })
db.users.find({ phone: { $exists: false } })    // users with no phone field

// $type — documents where the field is a specific BSON type
db.products.find({ price: { $type: "double" } })
db.users.find({ age: { $type: "int" } })
```


### Querying Nested Fields and Arrays

```javascript
// Dot notation — query a nested field
db.users.find({ "address.city": "Lisbon" })
db.orders.find({ "shipping.status": "delivered" })

// Array contains a value — MongoDB checks if the array includes the value
db.posts.find({ tags: "mongodb" })              // posts where tags array contains "mongodb"

// $all — array must contain ALL listed values
db.posts.find({ tags: { $all: ["mongodb", "nosql"] } })

// $size — array has exactly N elements
db.orders.find({ items: { $size: 3 } })         // orders with exactly 3 items

// $elemMatch — at least one array element matches multiple conditions
db.orders.find({
    items: { $elemMatch: { product: "Laptop", quantity: { $gte: 2 } } }
})
```


### Projection — Selecting Which Fields to Return

The second argument to `find()` controls which fields appear in the result.
`1` means include, `0` means exclude. You cannot mix 1s and 0s (except for `_id`).

```javascript
// Include only name and email (plus _id by default)
db.users.find({}, { name: 1, email: 1 })

// Exclude _id from the result
db.users.find({}, { name: 1, email: 1, _id: 0 })

// Exclude a field — return everything except password
db.users.find({}, { password: 0 })
```


### sort() — Ordering Results

`1` = ascending (A→Z, 0→9), `-1` = descending (Z→A, 9→0).

```javascript
// Sort by price ascending (cheapest first)
db.products.find().sort({ price: 1 })

// Sort by price descending (most expensive first)
db.products.find().sort({ price: -1 })

// Sort by multiple fields — first by category A→Z, then by price high→low
db.products.find().sort({ category: 1, price: -1 })
```


### limit() and skip() — Pagination

```javascript
// Return only the first 10 documents
db.products.find().limit(10)

// Skip the first 20, return the next 10 — page 3 of 10-per-page
db.products.find().sort({ createdAt: -1 }).skip(20).limit(10)
```

`skip()` becomes slow on large collections (must scan and discard skipped docs).
For large datasets, use range-based pagination instead:

```javascript
// Cursor-based: remember the last _id and filter from there
db.products.find({ _id: { $gt: lastSeenId } }).limit(10)
```


### Counting Documents

```javascript
// Count all documents in the collection
db.users.countDocuments()

// Count documents matching a filter
db.orders.countDocuments({ status: "completed" })

// estimatedDocumentCount() — faster but uses metadata, not actual count
db.users.estimatedDocumentCount()
```


### insertOne() and insertMany()

```javascript
// Insert a single document
db.users.insertOne({
    name: "Beatriz Santos",
    email: "beatriz@example.com",
    city: "Lisbon",
    createdAt: new Date()
})
// MongoDB auto-generates _id if not provided.

// Insert multiple documents at once
db.products.insertMany([
    { name: "Laptop", price: 999, stock: 15 },
    { name: "Mouse",  price: 29,  stock: 120 },
    { name: "Desk",   price: 350, stock: 8 }
])
```


### updateOne() and updateMany()

Update operators modify specific fields without replacing the whole document.

```javascript
// $set — set a field value (creates the field if it doesn't exist)
db.users.updateOne(
    { email: "beatriz@example.com" },       // filter: which document to update
    { $set: { city: "Porto", updatedAt: new Date() } }
)

// $unset — remove a field entirely
db.users.updateOne(
    { _id: userId },
    { $unset: { temporaryToken: "" } }
)

// $inc — increment a numeric field by a value
db.products.updateOne(
    { name: "Laptop" },
    { $inc: { stock: -1 } }                 // decrease stock by 1 after a sale
)

// $push — add an element to an array
db.posts.updateOne(
    { _id: postId },
    { $push: { comments: { user: "João", text: "Great post!" } } }
)

// $addToSet — add to array only if the value is not already present
db.users.updateOne(
    { _id: userId },
    { $addToSet: { tags: "premium" } }      // won't add "premium" twice

)

// $pull — remove elements from an array that match a condition
db.users.updateOne(
    { _id: userId },
    { $pull: { tags: "trial" } }            // remove "trial" from the tags array
)

// Update many documents at once
db.orders.updateMany(
    { status: "pending", createdAt: { $lt: cutoffDate } },
    { $set: { status: "expired" } }
)

// upsert: true — insert if no document matches the filter
db.settings.updateOne(
    { userId: userId },
    { $set: { theme: "dark" } },
    { upsert: true }
)
```


### deleteOne() and deleteMany()

```javascript
// Delete the first document matching the filter
db.sessions.deleteOne({ token: "abc123" })

// Delete all documents matching the filter
db.logs.deleteMany({ createdAt: { $lt: cutoffDate } })

// Delete all documents in the collection (keep the collection itself)
db.tempCache.deleteMany({})
```


### EMBED vs REFERENCE

The most important design decision in MongoDB: should related data be embedded inside a document, or stored separately and referenced by ID?

**Embed when:**
- Data is always accessed together (a blog post and its author's name)
- The nested data is owned by the parent and has no independent existence
- The embedded array has a small, bounded size

```json
{
    "_id": "post_001",
    "title": "My First Post",
    "author": { "id": "u1", "name": "Beatriz" },
    "tags": ["tech", "java"]
}
```

**Reference when:**
- Data is shared by multiple documents (a user referenced by many posts)
- The referenced data changes frequently
- The array could grow unboundedly

```json
{
    "_id": "post_001",
    "title": "My First Post",
    "authorId": "u1"
}
```


### Aggregation Pipeline

The aggregation pipeline processes documents through sequential stages, each transforming the result for the next. It is MongoDB's equivalent of SQL's SELECT + JOIN + GROUP BY + HAVING.

```javascript
db.orders.aggregate([
    { $match: { status: "completed" } },            // WHERE
    { $group: {
        _id: "$customerId",                          // GROUP BY customerId
        totalSpent: { $sum: "$amount" },             // SUM(amount)
        orderCount: { $count: {} }
    }},
    { $sort: { totalSpent: -1 } },                  // ORDER BY totalSpent DESC
    { $limit: 10 },                                 // LIMIT 10
    { $lookup: {                                    // JOIN customers collection
        from: "customers",
        localField: "_id",
        foreignField: "_id",
        as: "customer"
    }},
    { $unwind: "$customer" },                       // flatten the joined array
    { $project: { "customer.name": 1, totalSpent: 1, orderCount: 1 } }
])
```

Common pipeline stages:

| Stage | Purpose | SQL equivalent |
|---|---|---|
| $match | Filter documents | WHERE / HAVING |
| $group | Group and aggregate | GROUP BY |
| $sort | Order results | ORDER BY |
| $limit | Restrict result count | LIMIT |
| $skip | Skip N documents | OFFSET |
| $project | Include/exclude/reshape fields | SELECT |
| $lookup | Join another collection | JOIN |
| $unwind | Flatten an array field into separate docs | — |
| $addFields | Add computed fields | SELECT expr AS name |
| $count | Count remaining documents | COUNT(*) |


### Indexes in MongoDB

```javascript
// Single field index
db.users.createIndex({ email: 1 })

// Unique index — prevents duplicate values
db.users.createIndex({ email: 1 }, { unique: true })

// Compound index — useful when filtering by both fields together
db.orders.createIndex({ userId: 1, createdAt: -1 })

// TTL index — automatically deletes documents after N seconds
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })

// Text index — enables full-text search
db.posts.createIndex({ title: "text", content: "text" })
db.posts.find({ $text: { $search: "mongodb nosql" } })

// View existing indexes on a collection
db.users.getIndexes()

// Drop an index
db.users.dropIndex("email_1")
```


## 5.06 Data Modelling



### Overview

Data modelling is the process of designing how data is structured, stored, and related in a database. Good data models prevent anomalies, support queries efficiently, and remain maintainable as the system evolves.


### Normalisation

Normalisation eliminates redundancy and prevents update anomalies. Each normal form builds on the previous.

**1NF (First Normal Form)**:
  - Each column holds an atomic (indivisible) value
  - No repeating groups (each cell has one value, not a list)

**2NF (Second Normal Form)**:
  - Is in 1NF
  - Every non-key column depends on the WHOLE primary key (no partial dependencies)
  - Only matters if the table has a composite primary key

**3NF (Third Normal Form)**:
  - Is in 2NF
  - Every non-key column depends ONLY on the primary key (no transitive dependencies)
  - Example violation: orders table with city, zip_code, and country — city depends on zip_code (not on order_id). Fix: separate address table. In practice, design to 3NF, then selectively denormalise for performance where needed (and document why).



### Common Patterns

**Soft Delete** — mark records as deleted instead of removing them. Enables recovery, audit trails, and referential integrity:

```sql
ALTER TABLE users ADD COLUMN deleted_at TIMESTAMP NULL;
-- "Delete" a user
UPDATE users SET deleted_at = NOW() WHERE id = 123;
-- Query only active users
SELECT * FROM users WHERE deleted_at IS NULL;
```


**Audit Columns** - standard fields every table should have

```text
created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
created_by  BIGINT REFERENCES users(id)    -- who created it
updated_by  BIGINT REFERENCES users(id)    -- who last modified it
```


**Price Snapshot Pattern** — when an order is placed, the price of the product might change later. Store the price AT THE TIME OF PURCHASE in the order line, not just a reference to the current product price:

```sql
CREATE TABLE order_items (
    id           BIGINT PRIMARY KEY AUTO_INCREMENT,
    order_id     BIGINT NOT NULL,
    product_id   BIGINT NOT NULL,            -- reference to the product
    product_name VARCHAR(255) NOT NULL,      -- snapshot: name at purchase time
    unit_price   DECIMAL(10,2) NOT NULL,     -- snapshot: price at purchase time
    quantity     INT NOT NULL
);
```


**Many-to-many** - always use a junction table

```sql
CREATE TABLE student_courses (
    student_id BIGINT REFERENCES students(id),
    course_id  BIGINT REFERENCES courses(id),
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (student_id, course_id)
);
```



---

# Part 6 — Testing & Quality



## 6.01 JUnit 5



### Overview

JUnit is the standard testing framework for Java. JUnit 5 (also called Jupiter) is modular — split into Jupiter (the API for writing tests), Platform (the launcher), and Vintage (compatibility with JUnit 4).


### The Aaa Pattern — HOW TO STRUCTURE TESTS

Every test should follow the Arrange-Act-Assert pattern:

**Arrange** — set up the test data and preconditions
**ACT** — execute the code under test
**ASSERT** — verify the outcome

```java
@Test
void should_apply_discount_when_order_exceeds_threshold() {
    // Arrange
    Order order = new Order();
    order.addItem(new Item("Laptop", 1200.00));
    DiscountService service = new DiscountService();

    // Act
    double discounted = service.applyDiscount(order);

    // Assert
    assertThat(discounted).isEqualTo(1080.00);   // 10% discount
}
```


### Key Annotations

@Test              — marks a method as a test
@BeforeEach        — runs before each test method (setup)
@AfterEach         — runs after each test method (teardown)
@BeforeAll         — runs once before all tests in the class (static method)
@AfterAll          — runs once after all tests (static method)
@Disabled          — skips a test with an optional reason message
@DisplayName       — human-readable name for the test in reports
@Nested            — groups related tests in an inner class (great for readability)
@Tag               — categorise tests for selective execution


```java
@Test
@DisplayName("Should throw exception when user is not found")
void should_throw_when_user_not_found() {
    assertThrows(UserNotFoundException.class,
        () -> userService.findById(-1L));
}
```

### Parameterised Tests

Parameterized tests allow you to run the same test multiple times with different input values. Instead of writing several almost identical test methods, you write one test and provide a set of parameters.

```java
@ParameterizedTest
@CsvSource({
    "ADMIN,   true",
    "EDITOR,  true",
    "VIEWER,  false",
    "GUEST,   false"
})
void should_return_correct_edit_permission(String role, boolean expected) {
    boolean canEdit = permissionService.canEdit(Role.valueOf(role));
    assertThat(canEdit).isEqualTo(expected);
}

// Method source for complex objects
@ParameterizedTest
@MethodSource("invalidEmailProvider")
void should_reject_invalid_email(String email) {
    assertThat(validator.isValid(email)).isFalse();
}

static Stream<String> invalidEmailProvider() {
    return Stream.of("notanemail", "@missing.com", "noat.com", "");
}
```


### Spring Boot Testing Annotations


@SpringBootTest — loads the FULL application context. Use for true integration tests. Slow but comprehensive.

@WebMvcTest(UserController.class) — loads only the web layer (Controller, Filter, Interceptor). Beans like services must be mocked. Fast for testing HTTP endpoints.

@DataJpaTest — loads only the JPA layer. Uses an in-memory database by default. Use for testing repository queries.

@ExtendWith(MockitoExtension.class) — pure unit test, no Spring context. Fastest. Use for testing service logic in isolation.

@TestContainers — run tests against real databases in Docker containers.


```java
@WebMvcTest
class UserControllerTest {
    @Autowired MockMvc mockMvc;
    @MockBean UserService userService;   // mock the service layer

    @Test
    void should_return_user_json() throws Exception {
        given(userService.findById(1L)).willReturn(new User(1L, "Beatriz"));

        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("Beatriz"));
    }
}
```



## 6.02 Mockito

### Overview

Mockito is the most popular Java mocking framework. It lets you replace real dependencies with controlled fakes during unit testing, so you can test a class in isolation without needing a real database, HTTP client, or email server.


### MOCK vs SPY

**Mock** — a completely fake object. All methods return default values (null, 0, false, empty list) unless you stub them. No real code runs.

```java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    UserRepository userRepository;    // Fake repository

    @InjectMocks
    UserService userService;          // Class under test

    @Captor
    ArgumentCaptor<User> userCaptor;

    @Test
    void should_save_user_with_hashed_password() {
        // Arrange
        User input = new User("Beatriz", "password123");

        when(userRepository.save(any(User.class)))
                .thenAnswer(inv -> inv.getArgument(0));

        // Act
        userService.register(input);

        // Assert
        verify(userRepository).save(userCaptor.capture());

        User saved = userCaptor.getValue();
        assertThat(saved.getPassword()).doesNotContain("password123");
        assertThat(saved.getPassword()).startsWith("$2a$");
    }
}
```


**SPY** - wraps a real object. Real methods run by default, but you can stub specific ones. Use when you want most real behaviour but need to intercept certain calls.

```java
class PriceCalculator {

    public double calculatePrice(double price) {
        return price + calculateTax(price);
    }

    public double calculateTax(double price) {
        return price * 0.20;
    }
}

@ExtendWith(MockitoExtension.class)
class PriceCalculatorTest {

    @Spy
    PriceCalculator calculator;

    @Test
    void should_stub_only_tax_calculation() {
        // Stub only one method
        doReturn(5.0).when(calculator).calculateTax(100);

        // The real calculatePrice() method is still executed
        double total = calculator.calculatePrice(100);

        assertEquals(105.0, total);

        // Verify the stubbed method was called
        verify(calculator).calculateTax(100);
    }
}
```


In this example:
- `calculatePrice()` executes its **real implementation**.
- `calculateTax()` is **stubbed**, so it returns `5.0` instead of calculating `20%` of the price.
- The final result is `100 + 5 = 105`, demonstrating that a spy lets you override only part of an object's behavior while keeping the rest unchanged.



### Common Mockito Patterns

Mockito provides a set of common patterns for configuring (**stubbing**) and verifying the behavior of mock objects.


#### Stubbing

**Stubbing** defines what a mock should return (or throw) when one of its methods is called.

```java
when(repo.findById(1L)).thenReturn(Optional.of(user));
when(repo.findById(99L)).thenReturn(Optional.empty());
when(repo.save(any())).thenThrow(new DataIntegrityViolationException("Duplicate"));
```

In this example:
- Calling `findById(1L)` returns a user.
- Calling `findById(99L)` returns an empty `Optional`.
- Calling `save()` throws an exception.


Without stubbing, Mockito returns default values:
- `null` for objects
- `0` for numbers
- `false` for booleans
- empty collections for collection types


#### BDD Style

Mockito also supports a **Behavior-Driven Development (BDD)** syntax through `BDDMockito`.

Instead of:

```java
when(repo.findById(1L)).thenReturn(Optional.of(user));
verify(repo).save(user);
```

you can write:

```java
given(repo.findById(1L)).willReturn(Optional.of(user));
then(repo).should().save(user);
```

Many developers find this syntax more readable because it follows the **Given → When → Then** structure:

- **Given** some initial conditions
- **When** an action occurs
- **Then** verify the expected behavior



#### Verifying Interactions

Mockito can verify that methods were called correctly.

```java
verify(emailService).sendWelcomeEmail(user);
```

Verifies the method was called **exactly once**.



```java
verify(emailService, times(2)).sendReminder(any());
```

Verifies it was called **twice**.



```java
verify(emailService, never()).sendUnsubscribeEmail(any());
```

Verifies it was **never called**.


You can also verify arguments using matchers:

```java
verify(repo).save(argThat(u -> u.getEmail().contains("@")));
```

Here, Mockito checks that the saved user's email contains `"@"`.



#### ArgumentCaptor

Sometimes you want to inspect the actual object passed to a mocked method.

Instead of simply verifying that a method was called, you can capture its argument.

```java
ArgumentCaptor<Email> captor = ArgumentCaptor.forClass(Email.class);

verify(emailService).send(captor.capture());

assertThat(captor.getValue().getSubject()).isEqualTo("Welcome!");
```

This is useful when:

- the object is created inside the method under test,
- you cannot access it directly,
- and you want to verify its contents.

For example, you may want to verify that:

- an email has the correct subject,
- a DTO contains the expected values,
- a request object was built correctly before being sent.

`ArgumentCaptor` lets you inspect the exact object that was passed to the mock.



## 6.03 SonarQube


### Overview

SonarQube is a static code analysis platform that continuously inspects code for bugs, security vulnerabilities, code smells, and test coverage. It integrates into CI/CD pipelines so every pull request gets an automatic code quality report.


### Issue Types


**BUG** - code that is demonstrably wrong: will produce incorrect behaviour or crash. 
Example: using == to compare strings instead of .equals().


**Vulnerability** — code that could be exploited by an attacker: SQL injection, XSS, storing passwords in plain text, using insecure algorithms (MD5, DES).


**Security Hotspot** — potentially sensitive code that needs manual human review but isn't necessarily a vulnerability. 
Example: disabling CSRF protection — might be intentional (API endpoint) or a mistake (web form). SonarQube marks it for human review without automatically flagging it as a vulnerability.


**Code Smell** — code that is not wrong but is hard to maintain: overly long methods, deeply nested code, duplicate code, dead code, too many parameters. Left alone, code smells accumulate into technical debt that slows down the team.



### Quality Gate

A Quality Gate is a set of conditions that code must meet to be considered production-ready. The default SonarWay quality gate checks the NEW code in a PR against these conditions:
- Coverage on new code: ≥ 80%
- Duplicated lines on new code: < 3%
- Maintainability rating: A (no blocker or critical code smells)
- Reliability rating: A (no bugs)
- Security rating: A (no vulnerabilities)

If any condition fails, the quality gate status is FAILED and the CI pipeline should block the merge.




## 6.04 Types of Software Testing


### Overview

Software testing can be divided into several levels, each focusing on a different scope of the application. The most common are **Unit Tests**, **Integration Tests**, **End-to-End (E2E) Tests**, and **Acceptance Tests**.

A common way to visualize them is the **Testing Pyramid**:

```text
      /  \
     / E2E\          ← few: browser automation, full system
    /------\
   /  Integ \       ← moderate: API tests, DB tests, service tests
  /----------\
 / Unit Tests \    ← many: test individual functions/classes in isolation
/--------------\
```

The higher you go, the fewer tests you should have because they are generally slower, more expensive, and more brittle.



### Unit Testing

A **unit test** verifies the behavior of a **single unit of code**, usually a single method or class, in complete isolation.

Dependencies such as databases, APIs, and external services are replaced with **mocks** or **stubs**.

#### Example

```java
@Test
void shouldCalculateDiscount() {
    PriceCalculator calculator = new PriceCalculator();

    double result = calculator.calculateDiscount(100);

    assertEquals(90, result);
}
```

#### Characteristics

- Fast (milliseconds)
- Runs in isolation
- Uses mocks when needed
- Easy to debug
- Should make up the majority of your tests

Typical tools:
- JUnit
- Mockito
- AssertJ



### Integration Testing

An **integration test** verifies that multiple components work together correctly.

Instead of mocking everything, it tests the interaction between real parts of the application.

Examples include:
- Service ↔ Repository
- Repository ↔ Database
- REST Controller ↔ Service
- Application ↔ External API

#### Example

```java
@SpringBootTest
@AutoConfigureMockMvc
class UserControllerIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void shouldReturnUser() throws Exception {
        mockMvc.perform(get("/users/1"))
               .andExpect(status().isOk());
    }
}
```

Or testing a repository against a real test database:

```java
@DataJpaTest
class UserRepositoryTest {

    @Autowired
    UserRepository repository;

    @Test
    void shouldFindUserByEmail() {
        repository.save(new User("Alice", "alice@example.com"));

        assertTrue(repository.findByEmail("alice@example.com").isPresent());
    }
}
```

#### Characteristics

- Slower than unit tests
- Uses real infrastructure (database, Spring context, etc.)
- Verifies components integrate correctly



### End-to-End (E2E) Testing

An **End-to-End (E2E) test** verifies the complete application from the user's perspective.

It exercises the entire stack:

```text
Browser
   ↓
Frontend
   ↓
Backend
   ↓
Database
```

Example:
1. Open website
2. Log in
3. Add product to cart
4. Checkout
5. Verify confirmation page

Typical tools:
- Selenium
- Cypress
- Playwright

#### Characteristics

- Slow
- Expensive to maintain
- Tests complete user journeys
- Finds issues that unit tests cannot



### 4. Acceptance Testing

Acceptance tests verify that the software satisfies the **business requirements**.

Instead of asking:

> "Does this method work?"

they ask:

> "Does the system solve the user's problem?"

Example:

```text
Scenario:
Given a registered customer
When they place an order
Then the order should appear in their purchase history
```

Acceptance tests are often written using **BDD (Behavior-Driven Development)**.

Common tools:
- Cucumber
- SpecFlow



### Smoke Testing

A **smoke test** is a quick check that verifies the application's most important functionality after deployment.

Examples:
- Application starts
- Database connection works
- Login endpoint responds
- Home page loads

If smoke tests fail, further testing is usually stopped.



### Regression Testing

Regression testing ensures that **new code hasn't broken existing functionality**.

Whenever a bug is fixed or a feature is added, existing tests are run again.

Regression testing is usually automated as part of the CI/CD pipeline.



### Performance Testing

Performance testing measures how well an application performs under different workloads.

Examples include:
- Response time
- Throughput
- Resource usage
- Scalability

Types include:
- Load testing
- Stress testing
- Spike testing
- Endurance (soak) testing

Common tools:
- JMeter
- Gatling
- k6



### Security Testing

Security testing looks for vulnerabilities in the application.

Examples:
- SQL Injection
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Authentication issues
- Authorization problems

Common tools:
- OWASP ZAP
- Burp Suite



### Comparison

| Test Type | Scope | Speed | Uses Real Components? |
|------------|-------|-------|-----------------------|
| Unit | Single class or method | Very Fast | No |
| Integration | Multiple components | Medium | Yes |
| End-to-End (E2E) | Entire application | Slow | Yes |
| Acceptance | Business requirements | Slow | Yes |
| Smoke | Critical functionality | Fast | Usually Yes |
| Regression | Existing functionality | Varies | Depends |
| Performance | System performance | Slow | Yes |
| Security | Application security | Slow | Yes |



### Testing Pyramid

The recommended strategy is to have:

- **Many Unit Tests** (fast and isolated)
- **Fewer Integration Tests** (verify component interaction)
- **Very Few End-to-End Tests** (verify critical user journeys)

```text
               End-to-End
             ───────────────
            Few, slow, expensive

            Integration Tests
         ───────────────────────
             Moderate number

              Unit Tests
      ────────────────────────────
      Many, fast, cheap, reliable
```

This approach provides fast feedback, good test coverage, and lower maintenance costs.



## 6.05 Debugging


### Overview

Debugging is the systematic process of finding and fixing the root cause of unexpected behaviour. Good debugging is about forming and testing hypotheses efficiently, not guessing.


### Reading Stack Traces


A stack trace shows the call stack at the moment an exception was thrown. 
Read it from the TOP (the exact exception and immediate cause) downward (the call chain that led to it).


```java
java.lang.NullPointerException: Cannot invoke "String.length()" because "name" is null
    at com.example.UserService.formatName(UserService.java:42)   ← your code — look here first
    at com.example.UserController.getUser(UserController.java:18)
    at ...Spring framework frames (skip these)...
```

Focus on lines from YOUR package first. Spring/framework lines are usually not the bug — they correctly call your code, and your code failed.

For "Caused by:" chains, the LAST "Caused by:" is the original root cause


```java
IOException: Failed to read config
```

Caused by: FileNotFoundException: /etc/app/config.yml (No such file or directory)
← This is the real problem — the file does not exist


### Debugger Techniques

**Breakpoints** — pause execution at a specific line to inspect variables.


**Conditional Breakpoints** - only pause when a condition is true (i == 500) or (user.getId() == 123)
Invaluable for finding bugs that only occur with specific data in loops.


**Step Over** — execute the current line and pause on the next (stays in current method)


**Step Into** — enter the method being called (explore deeper)


**Step Out**  — complete the current method and pause in the caller


**Evaluate Expression** — execute any expression in the current scope while paused. Call methods, inspect objects, try different values.



### Structured Logging


Log structured, contextual information — not just human-readable text:


```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

private static final Logger log = LoggerFactory.getLogger(UserService.class);

log.info("User registered successfully: userId={}, email={}", user.getId(), user.getEmail());
log.warn("Login attempt failed: email={}, attempts={}, ip={}", email, attempts, clientIp);
log.error("Failed to send welcome email: userId={}", user.getId(), exception);
// Always pass exception as last argument — it logs the full stack trace

// WRONG — string concatenation creates a new String even when logging is disabled
log.debug("User: " + user.toString());

// RIGHT — SLF4J evaluates lazily only if debug level is enabled
log.debug("User: {}", user);
```

#### Log levels

**Error** — something failed; requires immediate attention

**Warn**  — something unexpected happened but the system continues

**Info**  — normal operational events (startup, user registered, job ran)

**Debug** — detailed diagnostic information for development

**Trace** — very fine-grained — every method call, every SQL query



## 6.06 Code Reviews


### Overview

Code review is the practice of having peers examine code before it is merged. Reviews catch bugs, enforce consistency, share knowledge, and mentor developers.
A good review culture is one of the highest-leverage engineering practices a team can adopt.


### Writing Review Comments

**Blocking Comments** — must be addressed before merging. Use for: bugs, security
issues, violating team standards, logic errors, missing tests.

**Non-Blocking Comments (nits)** — suggestions or preferences. 
Mark clearly:
"Nit: could extract this to a method for readability"
"Nit: prefer Optional.orElseThrow() over .get() here"
These do not need to be resolved to merge, but the author should acknowledge them.

**Feedback on Code, Not the Person**:
- **Bad**: "You should know better than to use raw types"
- **Good**: "Raw types lose type safety — using List<String> here would catch issues at compile time"

**Explain the Why, Not Just the What**:
- **Bad**: "Don't do this"
- **Good**: "Using Thread.sleep() in tests makes them slow and flaky — consider awaitility or a mock clock"

**SUGGEST, DON'T DICTATE (when it's a preference)**: 
- "What do you think about extracting this to a helper?" vs "Extract this to a helper"


### Being Reviewed

- Write a clear PR description — context saves the reviewer time
- Don't take feedback personally — it is about the code
- Respond to every comment (even if just "done" or "good point, left as-is because X")
- If you disagree, explain your reasoning and discuss — don't silently ignore it
- Resolve conversations after addressing them (so the reviewer can see progress)


---

# Part 7 — Engineering Practices



## 7.01 Agile / Scrum


### Overview

Agile is a methodology/philosophy for iterative, incremental software development. Instead of planning everything upfront and delivering at the end (Waterfall), you deliver value in short cycles, adapting as you learn. 
Scrum is the most popular Agile framework, with well-defined roles, artefacts, and ceremonies.

Waterfall is a linear software development methodology where each phase (requirements, design, implementation, testing, deployment) is completed sequentially, with no overlap or iteration between stages.


### The 4 Values of the Agile Manifesto

```text
Individuals and interactions  OVER  processes and tools
Working software              OVER  comprehensive documentation
Customer collaboration        OVER  contract negotiation
Responding to change          OVER  following a plan
```

The right-hand side items still have value — the manifesto values the left-hand side MORE. 

The key insight: agility comes from people collaborating and adapting, not from following a rigid process.


### Scrum Roles

**Product Owner (po)** — represents the business and customers. Owns and prioritises the Product Backlog. Decides WHAT gets built and WHY. The single point of decision authority for product scope. Does NOT decide HOW or WHEN (that is the team's responsibility).


**Scrum Master (sm)** — a servant leader and process facilitator. Removes impediments, coaches the team on Scrum, protects the team from external interruptions. Does NOT manage the team — that is not the SM's job.


**Development Team** - the people who build the product. 
- **Self-organising**: they decide how to do the work. 
- **Cross-functional**: collectively they have all the skills needed (design, backend, frontend, testing, DevOps).



### Artefacts

**Product Backlog** — the ordered list of everything that might be needed in the product. Owned by the PO. The top items are refined, estimated, and ready for the next Sprint. Items lower down are less defined.


**Sprint Backlog** — the subset of Product Backlog items selected for the current Sprint, plus the plan to achieve the Sprint Goal. Owned by the Development Team.


**Increment** — the sum of all Product Backlog items completed during a Sprint, plus the value of all previous Sprints. Must be in a potentially shippable state. Each Sprint adds to the previous Increment — the product grows Sprint by Sprint.



### Ceremonies

**Sprint Planning** — at the start of the Sprint. Team selects items from the Product Backlog, creates a Sprint Goal, and breaks items into tasks. 
Output: Sprint Backlog.


**Daily Scrum (stand-up)**
15-minute daily sync. Each person answers
- What did I do yesterday that helped the team reach the Sprint Goal?
- What will I do today toward the Sprint Goal?
- Are there any impediments blocking my progress?


**Sprint Review** — at the end of the Sprint. Team demonstrates the Increment to stakeholders. Stakeholders give feedback. The PO updates the backlog based on learnings. This is the feedback loop with the real world.


**Sprint Retrospective** — team reflects on PROCESS (not product): What went well? What could be improved? What will we commit to trying next Sprint? The engine of continuous improvement.


**Key Metric**: Velocity = how many story points the team completes per Sprint. Velocity is a planning tool — it predicts capacity for future Sprints. It is NOT a productivity metric and should not be used to compare teams.




## 7.02 SDLC


### Overview

The Software Development Life Cycle (SDLC) is a structured process for planning, creating, testing, and deploying software. Different organisations use different models (Waterfall, Agile, DevOps) but all cover the same fundamental phases.


### The 7 Phases


1. **PLANNING** — define the project scope, feasibility, timeline, budget, and team. What are we building? Is it worth building? How long will it take?

2. **REQUIREMENTS ANALYSIS** — gather and document what the system must do.
- FUNCTIONAL requirements: what the system does (user can log in, search products)
- NON-FUNCTIONAL requirements: how the system performs (response < 200ms, availability 99.9%, GDPR compliance, supports 10,000 concurrent users)

3. **SYSTEM DESIGN** — translate requirements into architecture. Decide on: tech stack, database schema, API contracts, cloud infrastructure, security model, data flows.

4. **IMPLEMENTATION (CODING)** — developers write the code following the design. In Agile, phases 1-4 repeat every Sprint, at progressively finer granularity.

5. **TESTING** — verify the system meets requirements and contains no critical bugs.
Unit → integration → system testing → user acceptance testing (UAT).

6. **DEPLOYMENT** — release the software to production. May involve staged rollouts, feature flags, blue-green deployments.

7. **MAINTENANCE** — fix bugs, apply security patches, monitor performance, add enhancements based on user feedback. Often the longest phase.



## 7.03 Software Architecture


### Overview

Software architecture defines the high-level structure of a system: the components it consists of, how they interact, and the principles guiding those decisions. Good architecture enables change; bad architecture resists it.


### SOLID Principles

**S — Single Responsibility Principle**

A class should have only ONE reason to change. If a class handles HTTP parsing, business logic, AND database access, changing any of those concerns forces changes to the class. Split into **Controller, Service, Repository**.


**O — Open/Closed Principle**

Classes should be open for extension, closed for modification. Add new behaviour by adding new code, not by changing existing code (which could break what already works). Achieved with interfaces and polymorphism.

```java
// Violation: adding a new shape requires modifying AreaCalculator
class AreaCalculator {
    double calculate(Object shape) {
        if (shape instanceof Circle c) return Math.PI * c.radius * c.radius;
        if (shape instanceof Rectangle r) return r.width * r.height;
        // adding Triangle means editing this class
    }
}

// Correct: each new shape is a new class
interface Shape { double area(); }
class Circle implements Shape { public double area() { return Math.PI * r * r; } }
class Triangle implements Shape { public double area() { return 0.5 * b * h; } }
```

**L — Liskov Substitution Principle**

Subtypes must be substitutable for their base types without breaking the program. If code works with Animal, replacing Animal with Dog (a subclass) should not break anything. Violated when a subclass throws an exception or returns a different type than the parent promised.


**I — Interface Segregation Principle**

Clients should not be forced to depend on interfaces they don't use. Split large interfaces into smaller, focused ones. A ReadOnlyRepository interface (findById, findAll) and a WriteRepository interface (save, delete) are better than one large Repository interface when some consumers only read.


**D — Dependency Inversion Principle**

High-level modules should not depend on low-level modules. Both should depend on abstractions. Your UserService should depend on the UserRepository INTERFACE, not on the concrete MySQLUserRepository. This allows swapping implementations (for testing, or when migrating databases) without changing the service.



### Design Patterns

**Singleton** — ensures only one instance of a class exists. In Spring, all beans are Singletons by default.
Used for: database connection pools, configuration objects, logging. 

```java
public class AppConfig {
    private static AppConfig instance;
    private AppConfig() {}    // private constructor prevents external instantiation
    public static synchronized AppConfig getInstance() {
        if (instance == null) instance = new AppConfig();
        return instance;
    }
}
```


**Factory** — a method or class that creates objects without exposing the creation logic. The caller gets the object it needs without knowing which concrete class was instantiated.

```java
PaymentGateway gateway = PaymentGatewayFactory.create("STRIPE");
```


**Builder** — construct complex objects step by step. Avoids constructors with many parameters (where you easily confuse the order of arguments).

```java
User user = User.builder()
    .name("Beatriz")
    .email("b@example.com")
    .role(Role.ADMIN)
    .build();
```


**Observer** — an object (Subject) maintains a list of observers and notifies them when its state changes. Foundation of event-driven systems, RxJS, and Spring's ApplicationEvent.

```java
// Spring ApplicationEvent
applicationEventPublisher.publishEvent(new UserRegisteredEvent(user));

@EventListener
public void onUserRegistered(UserRegisteredEvent event) {
    emailService.sendWelcomeEmail(event.getUser());
}
```


**Decorator** — add behaviour to an object dynamically, by wrapping it in another object with the same interface. Java's InputStream/BufferedInputStream is the classic example:

```java
InputStream raw    = new FileInputStream("file.txt");     // raw bytes
InputStream buffered = new BufferedInputStream(raw);       // adds buffering
InputStream zipped   = new GZIPInputStream(buffered);      // adds decompression
// Each decorates the previous, adding one behaviour
```


**Strategy** — define a family of algorithms, encapsulate each one, and make them interchangeable. The client can switch algorithms without changing the code that uses them.

```java
interface SortStrategy { void sort(int[] data); }
class QuickSort implements SortStrategy { ... }
class MergeSort implements SortStrategy { ... }

class Sorter {
    private SortStrategy strategy;
    Sorter(SortStrategy strategy) { this.strategy = strategy; }
    void sort(int[] data) { strategy.sort(data); }
}
```


### System Design Framework for Interviews

When asked "Design Twitter" or "Design a URL shortener", follow this framework:

#### 1. CLARIFY REQUIREMENTS (5 min)

**Functional**: what features? (post tweet, follow, timeline, search?) 

**Non-functional**: scale? (1M users vs 500M users changes everything)

**Constraints**: read-heavy vs write-heavy? Latency requirements?


#### 2. ESTIMATE SCALE

DAU (daily active users), requests per second, storage per year
1M users * 10 actions/day = 10M requests/day = ~116 req/sec

#### 3. HIGH-LEVEL DESIGN

Draw the major components: clients → load balancer → API servers → databases, caches, queues. 
Identify the core data entities and their relationships.

#### 4. DEEP DIVE INTO CRITICAL COMPONENTS

Which components are most challenging? Where are the bottlenecks? Database choice (SQL vs NoSQL), caching strategy (what to cache, eviction), how to handle hot spots.

#### 5. IDENTIFY AND ADDRESS BOTTLENECKS

Single points of failure? How do you scale each component? What happens at 10x current load?



## 7.04 Secure Development


### Overview

Security is not a feature added at the end — it is a property built in from the start. Every developer on the team is responsible for security, not just a separate security team.


### Owasp Top 10 — THE MOST CRITICAL WEB VULNERABILITIES

1. **BROKEN ACCESS CONTROL** — users can access resources or actions they should not.
Fix: always authorise on the server, never trust the client. Deny by default.

2. **CRYPTOGRAPHIC FAILURES** — sensitive data in plaintext; weak algorithms (MD5, SHA-1, DES); unencrypted HTTP. 
Fix: HTTPS everywhere, bcrypt for passwords, encrypt sensitive data at rest.

3. **INJECTION (SQL, NoSQL, LDAP, OS command)** — attacker-controlled data is executed as code. 
Fix: parameterised queries (NEVER concatenate user input into SQL strings); input validation; parameterised OS commands.

```java
// Vulnerable
String sql = "SELECT * FROM users WHERE id = " + userId;  // userId = "1 OR 1=1"

// Safe — parameterised query
PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE id = ?");
stmt.setLong(1, userId);   // userId is always treated as a value, never as SQL
```

4. **INSECURE DESIGN** — architectural flaws that enable attacks. 
Fix: threat modelling during design; security design review; rate limiting; account lockout.

5. **SECURITY MISCONFIGURATION** — default credentials, open S3 buckets, stack traces exposed in HTTP responses, unnecessary features enabled. 
Fix: secure defaults, disable what you don't use, secrets management.

6. **VULNERABLE AND OUTDATED COMPONENTS** — using libraries with known CVEs.
Fix: dependency scanning (OWASP Dependency-Check, Snyk, GitHub Dependabot), regular updates.

7. **IDENTIFICATION AND AUTHENTICATION FAILURES** — weak passwords, missing MFA, poor session management. 
Fix: use an established auth library; enforce MFA for sensitive actions; set short session timeouts.

8. **SOFTWARE AND DATA INTEGRITY FAILURES** — including unsigned code, insecure CI/CD, deserialization of untrusted data. 
Fix: verify signatures, use SLSA framework.

9. **SECURITY LOGGING AND MONITORING FAILURES** — not logging failed logins, not alerting on anomalies. 
Fix: log security events, set up alerts, incident response.

10. **SERVER-SIDE REQUEST FORGERY (SSRF)** — server makes HTTP requests to attacker- controlled URLs, potentially hitting internal services. 
Fix: validate and allowlist URLs; block requests to private IP ranges.



### Content Security Policy

CSP is an HTTP header that tells the browser which sources of scripts, styles, and other resources are trusted. It mitigates XSS attacks:

```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://cdn.trusted.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  frame-ancestors 'none';   ← prevents clickjacking
```



## 7.05 Performance Optimization


### Overview

***"Premature optimisation is the root of all evil."*** — Donald Knuth.

Always measure first — you cannot optimise what you do not measure. Then fix the measured bottleneck, not what you assume is slow.


### Measure First


#### Tools

JProfiler / VisualVM — CPU and memory profiling for Java
Chrome DevTools Performance tab — JavaScript profiling in the browser
EXPLAIN ANALYZE (SQL) — actual query execution plan with real timings
APM tools (Datadog, New Relic, Dynatrace) — production performance monitoring


#### Metrics to watch

Latency — p50, p95, p99 (percentiles matter; averages hide tail latency)
Throughput — requests per second
Error rate — percentage of failed requests
Resource utilisation — CPU, memory, disk I/O, network


### Caching Strategies

Cache types and where to apply them:

**Browser Cache** — HTTP cache headers tell the browser how long it can reuse previously downloaded resources instead of requesting them again from the server. This reduces page load times, saves bandwidth, and decreases server load. 
For example, versioned static assets (such as `app.abc123.js`) can be cached for a year because their filename changes whenever the content changes, while resources marked with `no-cache` must be revalidated with the server before being used. An `ETag` allows the browser to perform a conditional request, so if the resource hasn't changed, the server simply responds with `304 Not Modified` instead of sending the full file again.

```http
Cache-Control: public, max-age=31536000  (1 year for content-hashed assets)
Cache-Control: no-cache                  (always revalidate)
ETag: "abc123"                           (conditional request; 304 if unchanged)
```

**CDN (Content Delivery Network)** — a CDN is a globally distributed network of servers that caches and serves static assets (such as images, CSS, JavaScript, videos, and downloadable files) from locations geographically close to users. Instead of every request reaching the application's origin server, users are served by a nearby edge server, reducing latency, improving page load times, lowering bandwidth usage, and decreasing the load on the origin infrastructure. Many CDNs can also cache dynamic HTTP responses when appropriate.

**Application Cache (Redis, Memcached)** — an application cache stores frequently accessed or expensive-to-compute data in memory so that the application can retrieve it much faster than querying a database or calling an external API. Typical use cases include caching database query results, user sessions, API responses, and computed values. Because memory access is significantly faster than disk or network operations, application caching greatly improves response times and reduces database load, making it an essential technique for building scalable applications.

```java
// Spring Boot with Redis
@Cacheable(value = "users", key = "#id")   // cache the result
public User findById(Long id) {
    return userRepository.findById(id).orElseThrow();
}

@CacheEvict(value = "users", key = "#user.id")  // invalidate on update
public User updateUser(User user) {
    return userRepository.save(user);
}
```

#### CACHE EVICTION STRATEGIES

**LRU (Least Recently Used)**  — evict the item not accessed for the longest time
**LFU (Least Frequently Used)** — evict the item accessed the fewest times
**TTL (Time To Live)**         — evict after a fixed duration regardless of access


### Backend Performance Patterns

**N+1 QUERY** — the most common database performance bug (described in Spring Boot section).
Fix: eager loading with JOIN FETCH or DataLoader (for GraphQL).


**Database Connection Pooling** — creating a new database connection for every request is expensive (TCP handshake, auth, protocol negotiation = ~20-50ms). HikariCP (Spring Boot default) maintains a pool of ready connections:

```properties
spring.datasource.hikari.maximum-pool-size=20
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.connection-timeout=30000
``` 

**Pagination** — used to avoid returning large, unbounded result sets from a database or API by limiting the number of records returned per request using LIMIT and retrieving data in chunks. 
Instead of fetching everything at once, which can be slow and resource-intensive, you return a fixed number of items (e.g., 20 per page). 
For large datasets, keyset pagination is preferred over offset-based pagination because it uses a reference point (like the last seen ID) to efficiently fetch the next set of results without the performance degradation caused by skipping large numbers of rows.


**Async Processing** — for slow operations (sending email, generating reports, calling slow APIs), don't make the user wait. Put the work on a message queue and return immediately; process asynchronously.




## 7.06 Production Support


### Overview

Production support means keeping running systems healthy: monitoring for problems, responding to incidents, and learning from failures. The three pillars of observability — logs, metrics, and traces — are what make this possible.


### The Three Pillars of Observability


**Logs** — structured, timestamped records of discrete events. They answer "what happened?". 
Each log entry should have: timestamp, level (INFO/WARN/ERROR), message, correlation ID (to link a request across services), and relevant context (userId, orderId, endpoint). 
Use structured JSON logs in production for easy ingestion into Elasticsearch/Loki.

```json
{
    "timestamp": "2024-03-15T10:30:00.123Z",
    "level": "ERROR",
    "service": "order-service",
    "traceId": "abc123",
    "message": "Payment failed",
    "orderId": "ord_456",
    "errorCode": "INSUFFICIENT_FUNDS"
}
```


**Metrics** — numeric measurements over time. They answer "how is the system doing?".

Types:
- Counter — monotonically increasing number (total requests, total errors)
- Gauge — current value (active connections, queue size, memory usage)
- Histogram — distribution of values (request latency distribution)
- Summary — pre-calculated percentiles

KEY METRICS to monitor:
Error rate, request latency (p50/p95/p99), throughput (req/sec), CPU, memory, GC time, DB connection pool saturation, queue depth.



**Traces** — records of a request's journey across multiple services. They answer "where did the time go?".
Instead of looking at isolated logs or aggregated metrics, a trace shows how one action flows across multiple services (e.g., API gateway → backend service → database → external API), including timing and relationships between each step.
A trace is usually made up of spans, where each span represents one operation (like a function call or service request) and includes details such as start time, duration, and metadata. This helps engineers understand where latency comes from, where failures happen, and how different services depend on each other in complex microservice architectures.
Each trace has multiple spans — one per service called.

Tools: Jaeger, Zipkin, OpenTelemetry (the standard).



### Sli / SLO / SLA / Error Budget


**SLI (Service Level Indicator)** — a real measured metric that reflects system performance or reliability, such as latency, error rate, or availability (e.g., “p99 latency = 120ms” or “error rate = 0.05%”). It describes *what is actually happening in production*.

**SLO (Service Level Objective)** — a target value set for an SLI that defines acceptable performance (e.g., “p99 latency < 200ms”). It is an internal engineering goal used to balance reliability work and feature development.

**SLA (Service Level Agreement)** — a formal contract with customers that defines service expectations and includes consequences like refunds or credits if not met. It is typically more conservative than SLOs to provide a safety buffer.

**Error Budget** — the allowed amount of failure within an SLO (e.g., 99.9% availability allows ~43.8 minutes of downtime per month). If the error budget is exhausted, teams usually stop or slow feature development to focus on improving system reliability.



### Blameless Post-mortems

After a significant incident, a post-mortem (or incident review) documents:
- Timeline of events: what happened and when
- Root cause: the fundamental technical or process failure
- Impact: users affected, duration, revenue impact
- Detection: how was it discovered? Should an alert have caught it sooner?
- Resolution: what fixed it?
- Action items: what changes prevent recurrence?

BLAMELESS means the goal is systemic improvement, not assigning blame to individuals. People make mistakes — the system should be designed to prevent those mistakes from causing incidents, or to detect and recover from them quickly.




# Part 8 — Quick Interview Questions

## 8.01 Java

### Interview Questions

**Q: What is the difference between an abstract class and an interface?**
An abstract class can have constructors, instance fields, and concrete methods. Interfaces define a contract — all methods are implicitly public and abstract (before Java 8 default methods). A class can implement many interfaces but extend only one class. Use abstract class for shared base implementation; use interface for capabilities across unrelated class hierarchies.

**Q: Explain the four pillars of OOP.**
Encapsulation hides internal state behind public methods. Inheritance lets a class extend another, reusing and overriding behaviour. Polymorphism allows one interface to represent multiple types at runtime. Abstraction exposes only what is necessary, hiding implementation details.

**Q: What is the difference between == and .equals() in Java?**
== compares object references (memory addresses) for objects, and values for primitives. .equals() compares object content — it can be overridden. Always use .equals() for String comparisons; == for Strings only works by coincidence when the JVM interns them.

**Q: What is the difference between checked and unchecked exceptions?**
Checked exceptions (e.g. IOException) must be declared with throws or caught at compile time — they represent recoverable conditions. Unchecked exceptions (RuntimeException subclasses, e.g. NullPointerException) are programming errors and don't need to be declared.

**Q: What are generics and why are they used?**
Generics parameterise types at compile time (e.g. List<String>). They provide type safety without casting and eliminate ClassCastException at runtime. The compiler erases generic types at runtime (type erasure), so List<String> and List<Integer> are both List at bytecode level.

**Q: What is the difference between HashMap and Hashtable?**
HashMap is not synchronised (not thread-safe) and allows one null key. Hashtable is synchronised and doesn't allow null keys or values. For thread-safe maps, prefer ConcurrentHashMap over Hashtable — it has far better concurrency performance via lock striping.

**Q: What is the Java Memory Model and what are the main JVM memory areas?**
The JVM divides memory into: Heap (objects and class instances, managed by GC), Stack (per-thread, holds stack frames with local variables and method calls), Metaspace (class metadata, replaced PermGen in Java 8), and Code Cache (compiled native code from JIT).

**Q: What is the Stream API and when would you use it?**
Streams (Java 8+) provide a declarative, functional way to process collections. They support lazy evaluation — intermediate operations (filter, map) are only executed when a terminal operation (collect, forEach, count) is called. Use streams for clean, composable data transformations on collections.


## 8.02 TypeScript

### Interview Questions

**Q: What is TypeScript and how does it differ from JavaScript?**
TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds optional type annotations, interfaces, generics, and enums that catch errors at compile time. The output is valid JavaScript, so TypeScript runs anywhere JavaScript runs.

**Q: What is the difference between type and interface?**
Both define object shapes, but interface is open — it can be extended with additional declarations. type is closed and can represent union types, tuples, or computed types. Prefer interface for object shapes and public APIs; prefer type for unions, intersections, or complex computed types.

**Q: What are union and intersection types?**
A union type (A | B) means a value can be one of several types. An intersection type (A & B) means a value must satisfy all combined types simultaneously. Union is used for values that can vary; intersection is used for mixing and combining type structures.

**Q: What is a generic in TypeScript?**
A generic is a type parameter that makes a function, class, or interface work with multiple types without losing type information. Example: function identity<T>(x: T): T returns the same type it receives, preserving the caller's specific type rather than returning any.

**Q: What is the difference between any, unknown, and never?**
any disables type checking entirely. unknown is the type-safe counterpart — you must narrow it before using. never represents a value that can never occur (e.g. a function that always throws, or the bottom of an exhaustive switch).

**Q: What is a type guard?**
A type guard is a runtime check that narrows a type within a conditional block. Built-in guards include typeof and instanceof. Custom type guards use the is keyword in the return type (e.g. param is string) so the compiler trusts your runtime check.

**Q: What are decorators in TypeScript?**
Decorators are functions that modify class, method, property, or parameter behaviour at design time using the @ syntax. They're widely used by frameworks like Angular and NestJS for dependency injection, routing, and validation. They require experimentalDecorators: true in tsconfig.


## 8.03 JavaScript

### Interview Questions

**Q: What is the difference between var, let, and const?**
var is function-scoped and hoisted (initialised to undefined). let and const are block-scoped and exist in a temporal dead zone until their declaration. const requires initialisation and prevents reassignment of the binding, but the referenced object can still be mutated.

**Q: What is a closure?**
A closure is a function that retains access to variables from its lexical scope even after that scope has exited. Closures are how JavaScript modules, callbacks, and private state patterns work — the inner function closes over the outer function's variables.

**Q: What is the event loop?**
JavaScript is single-threaded. The event loop processes the call stack first, then the microtask queue (Promises, queueMicrotask), then the macrotask queue (setTimeout, setInterval, I/O). Promises resolve before setTimeout even with the same delay.

**Q: What is the difference between == and ===?**
=== (strict equality) compares both value and type without coercion. == performs type coercion before comparison, producing surprising results (e.g. 0 == '0' is true). Always prefer === in practice.

**Q: What are Promises and async/await?**
A Promise represents a future value with three states: pending, fulfilled, or rejected. async/await is syntactic sugar over Promises that lets you write asynchronous code in a synchronous style. await pauses execution of the async function until the Promise settles.

**Q: What is prototypal inheritance?**
Every JavaScript object has a prototype chain. When you access a property, JS looks up the chain until it finds it or reaches null. Classes (ES6) are syntactic sugar over this prototype mechanism — they don't introduce a new inheritance model.

**Q: What is the difference between call, apply, and bind?**
All three change the this context of a function. call invokes immediately with individual arguments. apply invokes immediately with an array of arguments. bind returns a new function with this permanently set, without invoking immediately.


## 8.04 Dart

### Interview Questions

**Q: What is Dart and why does Flutter use it?**
Dart is a strongly typed, object-oriented language from Google. Flutter uses Dart because it compiles to native ARM code (AOT) for high performance in production, while also supporting JIT compilation during development for fast hot reload. Dart's sound null safety makes Flutter apps safer at compile time.

**Q: What is sound null safety in Dart?**
Sound null safety means the compiler guarantees that non-nullable types can never be null at runtime. Types are non-nullable by default; nullable types are declared with ? (e.g. String?). The late keyword marks non-nullable variables that will be initialised after declaration.

**Q: What is the difference between final and const in Dart?**
final means the variable can be set once (at runtime). const means the value is a compile-time constant — it's deeply immutable and the compiler can share instances. A const constructor creates a canonical instance if called with the same arguments.

**Q: What are async, await, and Future in Dart?**
Future<T> represents an asynchronous computation that will eventually return T. async marks a function as asynchronous. await pauses execution until the Future completes. This is nearly identical to JavaScript's Promise/async-await model.

**Q: What is the difference between Stream and Future?**
A Future delivers one value asynchronously. A Stream delivers a sequence of values over time — like an event emitter. Streams can be single-subscription (one listener) or broadcast (multiple listeners). Used in Flutter for real-time data like user input or network events.

**Q: What are mixins in Dart?**
Mixins allow adding functionality to a class without inheritance. Declared with the mixin keyword and used with the with clause. Unlike abstract classes, a mixin cannot have constructors and is meant purely to add capabilities (e.g. with Serializable, with Logging).


## 8.05 HTML

### Interview Questions

**Q: What is the difference between semantic and non-semantic HTML?**
Semantic elements (<article>, <nav>, <main>, <section>, <header>, <footer>) describe the meaning of content to browsers and assistive technologies. Non-semantic elements (<div>, <span>) carry no inherent meaning. Semantic HTML improves SEO, accessibility, and code readability.

**Q: What is the difference between inline and block elements?**
Block elements (<div>, <p>, <h1>) start on a new line and take the full available width. Inline elements (<span>, <a>, <strong>) flow within text and only take as much width as their content. This distinction is overridable with the CSS display property.

**Q: What is the difference between id and class attributes?**
id must be unique per page and is used for direct element targeting (CSS, JS, fragment links). class can be reused on multiple elements and is used for styling groups. Multiple classes can be applied to one element; only one id is allowed.

**Q: What are data attributes and when would you use them?**
data-* attributes store custom data on HTML elements (e.g. data-user-id="42"). They're accessible via JavaScript (element.dataset.userId) and are useful for storing state without using hidden inputs, or passing information to JS without polluting global scope.

**Q: What is the difference between script with defer and async?**
Without attributes, a script blocks HTML parsing while downloading and executing. async downloads in parallel and executes as soon as ready (order not guaranteed). defer downloads in parallel and executes after HTML is parsed, in order — preferred for most scripts.

**Q: What is ARIA and when should you use it?**
ARIA (Accessible Rich Internet Applications) adds semantic meaning to non-semantic HTML for screen readers using attributes like role, aria-label, and aria-hidden. Use ARIA only when semantic HTML elements can't express the needed semantics — native HTML semantics are always preferred.


## 8.06 CSS

### Interview Questions

**Q: What is the CSS box model?**
Every element is a rectangular box. Content is surrounded by padding (space inside the border), then border, then margin (space outside). With box-sizing: border-box, width and height include padding and border. With the default content-box, they apply only to the content area.

**Q: What is specificity and how is it calculated?**
Specificity determines which CSS rule wins when multiple rules target the same element. It's calculated as a four-part score: inline styles, IDs, classes/attributes/pseudoclasses, elements. Inline styles beat IDs, IDs beat classes, classes beat elements. !important overrides everything but is considered bad practice.

**Q: What is the difference between Flexbox and Grid?**
Flexbox is one-dimensional — it lays out items along a single axis (row or column). Grid is two-dimensional — it controls both rows and columns simultaneously. Use Flexbox for linear components like navigation bars; use Grid for page-level layouts and complex two-dimensional arrangements.

**Q: What are CSS custom properties (variables)?**
Custom properties (--variable-name) store reusable values and are scoped to the element they're declared on (the cascade applies). Accessed via var(--variable-name). They're live — changing a variable's value instantly updates all usages, unlike SCSS variables which are resolved at build time.

**Q: What is the difference between position relative, absolute, fixed, and sticky?**
relative offsets from normal position without removing from flow. absolute positions relative to the nearest positioned ancestor (not static), removed from flow. fixed positions relative to the viewport, removed from flow. sticky toggles between relative and fixed based on a scroll threshold.

**Q: What is the CSS cascade?**
The cascade determines which rule applies when multiple declarations target the same property. Priority order: origin and importance (!important), then specificity, then source order. The cascade is the C in CSS and is why specificity management matters so much in large codebases.

**Q: What are pseudo-classes and pseudo-elements?**
Pseudo-classes (:hover, :focus, :nth-child) select elements based on state or position. Pseudo-elements (::before, ::after, ::placeholder) create virtual elements or target specific sub-parts of an element. Pseudo-classes use a single colon; pseudo-elements use double colon (::).


## 8.07 Python

### Interview Questions

**Q: What is the difference between a list and a tuple?**
Lists are mutable ordered sequences ([1, 2, 3]). Tuples are immutable ordered sequences ((1, 2, 3)). Tuples are faster and use less memory. Use tuples for fixed data (coordinates, RGB values); use lists when items need to change.

**Q: What are Python decorators?**
Decorators are functions that wrap another function to add behaviour without modifying its source code. Applied with @decorator_name above the function definition. Common uses: logging, authentication checks, caching (@functools.lru_cache), and Flask/FastAPI route registration.

**Q: What is the difference between *args and **kwargs?**
*args collects extra positional arguments as a tuple. **kwargs collects extra keyword arguments as a dictionary. They allow functions to accept a variable number of arguments. The names are convention — the * and ** syntax is what matters.

**Q: What is a generator in Python?**
A generator function uses yield instead of return. It returns a generator object that produces values lazily — one at a time on demand. This is memory-efficient for large sequences since values aren't all created at once. Generator expressions use () instead of [].

**Q: What is the GIL (Global Interpreter Lock)?**
The GIL is a mutex in CPython that allows only one thread to execute Python bytecode at a time. This means Python threads don't achieve true CPU parallelism for CPU-bound tasks. Use multiprocessing (separate processes) for CPU parallelism, and asyncio for I/O-bound concurrency.

**Q: What is list comprehension and how does it differ from a regular loop?**
List comprehensions provide a concise syntax for creating lists: [x*2 for x in range(10) if x % 2 == 0]. They're faster than equivalent for loops because they're optimised at the bytecode level, and more readable for simple transformations.


## 8.08 C

### Interview Questions

**Q: What is a pointer in C?**
A pointer is a variable that stores the memory address of another variable. Declared with * (e.g. int *p). Dereferenced with * to access the value at that address. & gets the address of a variable. Pointers enable dynamic memory allocation and efficient array and struct manipulation.

**Q: What is the difference between malloc and calloc?**
malloc(size) allocates a block of uninitialised memory. calloc(n, size) allocates n elements of size bytes and initialises all bytes to zero. Both return void* and require free() when done. realloc() resizes an existing allocation.

**Q: What is a memory leak?**
A memory leak occurs when dynamically allocated memory (malloc/calloc) is never freed with free(). The process holds onto memory indefinitely even after it's no longer needed. In long-running programs this causes steadily increasing memory usage until the OS runs out.

**Q: What is the difference between stack and heap memory?**
Stack memory is managed automatically — it grows and shrinks with function calls and is fast but limited in size. Heap memory is manually managed with malloc/free, is larger, but requires explicit deallocation. Stack overflow occurs when recursion is too deep.

**Q: What is the difference between #define and const?**
#define is a preprocessor directive that substitutes text before compilation — it has no type and no scope. const declares a typed, scoped constant that participates in type checking. Prefer const for type safety; use #define for macro constants or conditional compilation.

**Q: What are struct and union in C?**
A struct groups named fields, each occupying its own memory — total size is the sum of field sizes (plus padding). A union also groups fields but all share the same memory — total size is the largest field. Unions are used when a value can only be one type at a time.


## 8.09 Spring Boot

### Interview Questions

**Q: What is Spring Boot and how does it differ from the Spring Framework?**
Spring Framework is a comprehensive IoC/DI container. Spring Boot adds auto-configuration, an embedded web server (Tomcat/Netty), starter POMs, and production-ready features (Actuator). Spring Boot eliminates most XML configuration and lets you write a runnable application with minimal setup.

**Q: What is IoC (Inversion of Control) and DI (Dependency Injection)?**
IoC is a design principle where object creation and lifecycle management are delegated to a container rather than done manually. DI is the specific pattern IoC uses — dependencies are injected into objects (via constructor, setter, or field) rather than instantiated inside them. Spring's ApplicationContext is the IoC container.

**Q: What is the difference between @Component, @Service, @Repository, and @Controller?**
All four are stereotypes that mark classes as Spring beans. @Component is generic. @Service semantically marks business logic. @Repository marks data access and adds exception translation. @Controller marks MVC controllers. @RestController is @Controller + @ResponseBody combined.

**Q: What is the difference between constructor injection, setter injection, and field injection?**
Constructor injection is preferred — dependencies are required and the class is immutable. It makes testing easier since no Spring context is needed to instantiate with mocks. Field injection (@Autowired on a field) is concise but hides dependencies and makes unit testing harder. Setter injection is for optional dependencies.

**Q: What is @Transactional and what does it do?**
@Transactional wraps a method in a database transaction. If the method completes successfully, the transaction commits; if a RuntimeException is thrown, it rolls back. Transactions are managed via AOP proxy — the class must be called from another Spring bean for the proxy to intercept.

**Q: What is Spring Data JPA?**
Spring Data JPA provides repository abstractions over JPA. By extending JpaRepository<Entity, ID>, you get save, findById, findAll, delete, and more for free. Query methods can be derived from method names (findByEmailAndActive) or written with @Query. No boilerplate DAO code needed.

**Q: What is the purpose of Spring Actuator?**
Actuator exposes production-ready endpoints for health checks (/actuator/health), metrics (/actuator/metrics), and environment properties. It's used by load balancers (Kubernetes liveness/readiness probes) and monitoring tools (Prometheus). Endpoints can be individually enabled and secured.


## 8.10 Node.js

### Interview Questions

**Q: What is Node.js and how does its event loop work?**
Node.js is a runtime that executes JavaScript outside the browser, built on Chrome's V8 engine. It's single-threaded with a non-blocking I/O model. The event loop processes callbacks from I/O operations, timers, and network requests without spawning threads — ideal for high-concurrency I/O-bound workloads.

**Q: What is the difference between require() and import?**
require() is CommonJS (Node's original module system) — synchronous, dynamic, evaluated at runtime. import is ES Modules — static, hoisted, and enables tree-shaking. Node.js supports both; ES Modules require .mjs extension or "type": "module" in package.json.

**Q: What is middleware in Express?**
Middleware is a function with (req, res, next) signature that sits in the request-response cycle. It can modify req/res objects, end the request, or call next() to pass control to the next middleware. Used for logging, authentication, body parsing, error handling, and more.

**Q: What is the difference between process.nextTick, setImmediate, and setTimeout with 0ms delay?**
process.nextTick runs before the next event loop iteration — highest priority, before any I/O. setImmediate runs in the check phase after I/O events. setTimeout with 0ms runs in the timers phase — which may come before or after I/O depending on load. nextTick beats I/O beats setImmediate/setTimeout.

**Q: What is an npm package-lock.json and why is it important?**
package-lock.json records the exact version tree of every installed dependency and its transitive dependencies. This ensures deterministic installs — everyone on the team and CI gets identical dependency versions regardless of which newer versions have been published since.

**Q: How do you handle CPU-intensive work in Node.js without blocking the event loop?**
Since Node is single-threaded, CPU-intensive work blocks all other requests. Solutions: worker_threads (true parallelism on a thread pool), child_process.fork() (separate processes), or offloading to a message queue or dedicated service. For I/O-bound work, async/await is sufficient.


## 8.11 REST APIs

### Interview Questions

**Q: What are the core REST constraints?**
REST has six constraints: Client-Server (separation of concerns), Stateless (each request contains all information needed), Cacheable (responses declare their cacheability), Uniform Interface (standard HTTP methods and URIs), Layered System (clients don't know if they're talking to a proxy), and Code on Demand (optional — return executable code).

**Q: What is the difference between PUT and PATCH?**
PUT replaces the entire resource — the client sends a complete representation. PATCH applies a partial update — only the fields sent are changed. PUT is idempotent; PATCH may or may not be depending on implementation.

**Q: What do HTTP status codes 2xx, 4xx, and 5xx mean?**
2xx: success (200 OK, 201 Created, 204 No Content). 4xx: client error — request is wrong (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity). 5xx: server error — server failed (500 Internal Server Error, 503 Service Unavailable).

**Q: What is HATEOAS?**
Hypermedia As The Engine Of Application State. Responses include links to related actions and resources so clients discover them dynamically rather than hardcoding URLs. For example, a GET /orders/123 response includes links to cancel, pay, or track the order. Rarely implemented fully in practice.

**Q: What is the difference between authentication and authorisation?**
Authentication verifies identity (who are you?). Authorisation determines permissions (what are you allowed to do?). In REST APIs: authentication typically uses JWT or session tokens; authorisation checks roles and scopes before returning or modifying resources.

**Q: What is API versioning and what are the common strategies?**
Versioning ensures clients aren't broken by API changes. Strategies: URI versioning (/v1/users), query parameter (?version=1), request header (Accept: application/vnd.api.v1+json), or content negotiation. URI versioning is most common and easiest to consume.


## 8.12 GraphQL

### Interview Questions

**Q: What is GraphQL and how does it differ from REST?**
GraphQL is a query language where the client specifies exactly what data it needs — no over-fetching (extra fields) or under-fetching (needing multiple requests for related data). A single /graphql endpoint handles all operations. The schema defines types and relationships; resolvers fetch the data.

**Q: What is the difference between Query, Mutation, and Subscription?**
Query: read-only data fetching (equivalent to GET). Mutation: data modification — create, update, delete (equivalent to POST/PUT/DELETE). Subscription: long-lived connections for real-time updates — the server pushes data when specified events occur, typically via WebSocket.

**Q: What is the N+1 problem in GraphQL and how is it solved?**
When resolving a list of N items and fetching related data for each, a naive implementation makes 1 query for the list plus N queries for related items. DataLoader solves this by batching and deduplicating database calls within a single request tick, reducing 1+N queries to just 1+1.

**Q: What is a GraphQL schema?**
The schema is the contract between client and server — it defines types (type User { id: ID! name: String! }), queries (type Query { user(id: ID!): User }), mutations, subscriptions, and custom scalars. The schema is strongly typed and introspectable, enabling tools like GraphiQL and schema-based code generation.

**Q: What are the pros and cons of GraphQL vs REST?**
GraphQL pros: precise data fetching, single endpoint, strong typing, self-documenting, great for complex UIs. REST pros: simpler HTTP-level caching (by URL), familiar to all clients, no special library needed, easier to rate-limit per endpoint. GraphQL cons: complex caching, all requests are POST (bypasses HTTP caching), harder to secure per-operation.


## 8.13 Microservices

### Interview Questions

**Q: What are microservices and how do they differ from monoliths?**
A monolith is a single deployable unit containing all functionality. Microservices split functionality into small, independently deployable services that each own their data. Microservices enable independent scaling and deployment, but introduce network latency, distributed tracing complexity, and data consistency challenges.

**Q: What is service discovery?**
Services in a microservices architecture need to locate each other dynamically since instances come and go. Client-side discovery: the client queries a registry (Eureka) and picks an instance. Server-side discovery: the client calls a load balancer that queries the registry. Kubernetes provides built-in service discovery via DNS.

**Q: What is the difference between synchronous and asynchronous communication in microservices?**
Synchronous: Service A calls Service B via HTTP/gRPC and waits for a response — simple but creates temporal coupling. Asynchronous: Service A publishes a message to a queue (Kafka, RabbitMQ) and continues — Service B consumes when ready. Async decouples services and improves resilience but adds complexity.

**Q: What is a circuit breaker?**
A circuit breaker (pattern from Resilience4j / Hystrix) monitors calls to an external service. When failures exceed a threshold, it opens the circuit — subsequent calls fail immediately without attempting the downstream call. After a timeout, it enters half-open to test recovery. Prevents cascade failures.

**Q: What is the Saga pattern?**
Sagas manage distributed transactions across multiple services. Instead of a 2-phase commit, a saga is a sequence of local transactions where each step publishes events that trigger the next. If a step fails, compensating transactions undo previous steps. Two variants: Choreography (event-driven) and Orchestration (central coordinator).

**Q: What is the API Gateway pattern?**
An API Gateway is the single entry point for all clients. It handles: routing requests to the correct microservice, authentication and authorisation, rate limiting, SSL termination, request aggregation, and response transformation. Examples: Kong, AWS API Gateway, Spring Cloud Gateway.


## 8.14 Authentication & Authorization

### Interview Questions

**Q: What is JWT and how does it work?**
A JSON Web Token has three Base64url-encoded parts: Header (algorithm), Payload (claims like sub, exp, roles), and Signature (HMAC of header.payload using a secret, or RSA/EC signature). The server validates the signature on each request — no database lookup needed. Tokens expire via the exp claim.

**Q: What is the difference between OAuth 2.0 and OpenID Connect?**
OAuth 2.0 is an authorisation framework — it grants third-party apps access to resources on behalf of a user. OpenID Connect (OIDC) is an identity layer on top of OAuth 2.0 — it adds authentication, providing an ID token with user identity information. OAuth answers what you can do; OIDC answers who you are.

**Q: What is PKCE and why is it needed?**
PKCE (Proof Key for Code Exchange) prevents authorisation code interception attacks in public clients (SPAs, mobile apps) where a client secret can't be kept confidential. The client generates a code_verifier, sends its SHA-256 hash (code_challenge) to the auth server, then proves ownership by sending the original verifier when exchanging the code for a token.

**Q: What is the difference between stateful and stateless sessions?**
Stateful (session-based): the server stores session data; the client holds only a session ID cookie. Server must share session state across instances (Redis). Stateless (token-based): all session data is in the token (JWT). No server state needed, scales horizontally — but token revocation before expiry is harder.

**Q: What is the principle of least privilege?**
Users and services should only have the minimum permissions required to perform their function. In APIs this means scopes on tokens, role-based access control (RBAC), and resource-level permissions. Reduces attack surface if credentials are compromised.

**Q: What is CORS and how does it work?**
Cross-Origin Resource Sharing lets browsers make requests to a different origin. The browser sends a preflight OPTIONS request asking if the origin is allowed. The server responds with Access-Control-Allow-Origin and related headers. Only after the response permits the origin does the browser send the real request.


## 8.15 API Integration

### Interview Questions

**Q: What is the difference between REST and gRPC?**
REST uses HTTP/1.1 with JSON — human-readable, widely supported, easy to debug. gRPC uses HTTP/2 with Protocol Buffers (binary) — smaller payloads, strongly typed via .proto schema, bidirectional streaming, and faster serialisation. gRPC is preferred for internal service-to-service communication; REST for public APIs.

**Q: How do you handle API rate limiting?**
Implement exponential backoff with jitter on the client side — retry after increasing delays when receiving 429 Too Many Requests. Respect Retry-After headers. On the server side, common rate limiting algorithms include token bucket, leaky bucket, and fixed/sliding window counters.

**Q: What is a webhook and how does it differ from polling?**
Polling: the client repeatedly calls an API to check for updates — wastes bandwidth when there's nothing new. Webhook: the server calls the client's registered URL when an event occurs — real-time and efficient. Webhooks require the client to have a public HTTP endpoint and to handle payload verification (HMAC signature).

**Q: What is API pagination and what are the common strategies?**
Pagination prevents returning thousands of records in one response. Strategies: offset/limit (?page=2&limit=20), cursor-based (next_cursor token pointing to the last item — consistent even if data changes), and keyset pagination (WHERE id > last_seen_id ORDER BY id LIMIT 20). Cursor and keyset are preferred for large datasets.

**Q: How do you secure API keys?**
Never commit to source control — use .gitignore and environment variables. Store in secrets managers (AWS Secrets Manager, Vault, Kubernetes Secrets). Rotate regularly. Scope keys to minimum required permissions. Use short-lived tokens where possible rather than long-lived API keys.


## 8.16 WebSockets

### Interview Questions

**Q: What is WebSocket and how does it differ from HTTP?**
WebSocket provides a full-duplex, persistent connection between client and server over a single TCP connection. Unlike HTTP's request-response cycle, either side can send messages at any time. The connection starts as HTTP and upgrades via the Upgrade header. Used for real-time features like chat, live updates, and gaming.

**Q: What is the WebSocket handshake?**
The client sends an HTTP request with Upgrade: websocket and Sec-WebSocket-Key headers. The server responds with 101 Switching Protocols and a Sec-WebSocket-Accept value derived from the key. After this, the connection is no longer HTTP — it's a WebSocket tunnel.

**Q: What is Socket.IO and how does it relate to WebSockets?**
Socket.IO is a library that provides event-based real-time communication. It uses WebSocket when available, with automatic fallback to long-polling. It adds rooms (logical groupings of sockets), namespaces, automatic reconnection, and broadcasting. It uses its own framing on top of WebSocket — not a pure WebSocket protocol.

**Q: What are the main challenges of scaling WebSocket connections?**
WebSocket connections are stateful and long-lived, making horizontal scaling harder. When a message arrives on one server, clients connected to other servers won't receive it. Solution: use a pub/sub broker (Redis Pub/Sub, Kafka) to fan out messages across all server instances, or use sticky sessions.

**Q: When would you choose WebSockets over Server-Sent Events (SSE)?**
Choose WebSockets for true bidirectional communication where the client also sends messages frequently. Choose SSE for server-to-client streaming only (notifications, live feeds) — SSE is simpler, uses plain HTTP (no special handshake), supports automatic reconnection natively, and works naturally through HTTP/2 multiplexing.


## 8.17 SOAP

### Interview Questions

**Q: What is SOAP and what are its main components?**
SOAP (Simple Object Access Protocol) is an XML-based messaging protocol for web services. Components: Envelope (wrapper for the whole message), Header (optional metadata like auth tokens), Body (the actual request or response), and Fault (error information). Transmitted over HTTP or SMTP.

**Q: What is WSDL?**
Web Services Description Language is an XML document that describes a SOAP service — available operations, message formats, data types, and endpoint addresses. Clients use WSDL to generate type-safe stubs. It's the equivalent of an OpenAPI spec for SOAP services.

**Q: What is the difference between SOAP and REST?**
SOAP is a protocol with strict standards (WSDL, WS-Security, WS-AtomicTransaction). REST is an architectural style — more flexible, uses HTTP natively, typically JSON. SOAP has built-in standards for security and distributed transactions, which is why it's still used in banking, healthcare, and enterprise legacy systems.

**Q: What are WS-Security standards?**
WS-Security is a SOAP extension providing message-level security: authentication (username/password or X.509 certificates in the header), digital signing (ensures message integrity), and encryption (ensures confidentiality). Unlike transport-level TLS, message-level security survives intermediary processing.


## 8.18 JSON

### Interview Questions

**Q: What are the valid JSON data types?**
String (double-quoted), Number (integer or float), Boolean (true/false), null, Array ([]), and Object ({}). Keys must be strings. Dates have no native JSON type — use ISO 8601 strings or Unix timestamps by convention.

**Q: What is the difference between JSON.parse() and JSON.stringify()?**
JSON.stringify() converts a JavaScript value to a JSON string. JSON.parse() converts a JSON string back to a JavaScript value. Both accept optional replacer/reviver functions for customising serialisation and deserialisation. Circular references in objects throw an error in JSON.stringify.

**Q: What is JSON Schema?**
JSON Schema is a vocabulary for validating the structure and types of JSON documents. It defines required fields, data types, formats, constraints (min/max, pattern), and allows nested schemas. Used for API validation, form generation, and documentation — similar to XSD for XML.

**Q: What are common JSON security concerns?**
Never concatenate user input into JSON strings — use proper serialisation libraries to avoid JSON injection. Watch for prototype pollution when using insecure deep-merge patterns with untrusted JSON in JavaScript. Always validate JSON against a schema on untrusted input at API boundaries.


## 8.19 XML

### Interview Questions

**Q: What is the difference between XML and HTML?**
HTML is a specific markup language with predefined tags for displaying content. XML is a general-purpose markup language where you define your own tags. HTML is about presentation; XML is about data storage and transport. HTML parsers are lenient; XML parsers are strict — malformed XML is a fatal error.

**Q: What is XML Schema (XSD)?**
XML Schema Definition validates the structure and content types of an XML document. It defines allowed elements, attributes, data types, constraints, and nesting rules — like a type system for XML. WSDL uses XSD to define SOAP message types.

**Q: What is XPath?**
XPath is a query language for navigating XML documents using path expressions (e.g. /catalog/book[@id='bk101']/title) to select nodes. It's used by XSLT for transformations, Java's javax.xml.xpath API, and in testing (Selenium locators support XPath).

**Q: What is XSLT?**
XSLT (XSL Transformations) transforms XML into another format — another XML document, HTML, or plain text — using a stylesheet written in XML. Still used for document pipelines, report generation, and transforming legacy XML feeds from enterprise systems.


## 8.20 Network Protocols


**Q: What is the difference between TCP and UDP?**
TCP (Transmission Control Protocol) is connection-oriented — it guarantees delivery, ordering, and error-checking via a three-way handshake. UDP (User Datagram Protocol) is connectionless — it sends packets without guaranteeing delivery or order, making it faster and suited for video streaming, DNS, and games.

**Q: What happens during the HTTP request-response cycle?**
The client opens a TCP connection to the server (or reuses one with keep-alive), sends an HTTP request with method, headers, and optional body, and waits. The server processes the request, returns a status code (2xx, 3xx, 4xx, 5xx), headers, and an optional body. HTTPS adds a TLS handshake before the first request to negotiate keys and authenticate the server.

**Q: What is HTTPS and how does TLS work?**
HTTPS is HTTP over TLS (Transport Layer Security). During the TLS handshake: the client sends supported cipher suites, the server responds with its certificate (containing a public key), the client verifies the certificate against a trusted CA, they exchange keys, and then all traffic is encrypted with a symmetric key derived from that exchange.

**Q: What is HTTP/2 and how does it differ from HTTP/1.1?**
HTTP/2 multiplexes multiple requests over a single TCP connection (no head-of-line blocking per request), compresses headers (HPACK), and supports server push. HTTP/1.1 opens a new connection per request (or serialises over keep-alive), which wastes round trips. HTTP/3 replaces TCP with QUIC (UDP-based) for even lower latency.

**Q: What is DNS and how does a domain resolve to an IP?**
DNS (Domain Name System) translates domain names to IP addresses. Resolution order: browser cache → OS cache → local resolver → recursive DNS resolver → root nameserver → TLD nameserver → authoritative nameserver, which returns the A/AAAA record. Results are cached per TTL.

**Q: What is the difference between a REST API call and a WebSocket connection?**
REST is request-response over HTTP — the client initiates each exchange, the connection closes (or is returned to pool) after the response. WebSockets upgrade an HTTP connection to a persistent, full-duplex channel — either side can send messages at any time. REST suits stateless CRUD; WebSockets suit real-time push (chat, live scores, collaborative editing).

**Q: What are common HTTP status codes and what do they mean?**
- 200 OK — request succeeded; 201 Created — resource created; 204 No Content — success with no body
- 301 Moved Permanently — redirect, update bookmark; 304 Not Modified — cached response valid
- 400 Bad Request — malformed input; 401 Unauthorized — authentication required; 403 Forbidden — authenticated but lacks permission; 404 Not Found; 409 Conflict; 422 Unprocessable Entity
- 500 Internal Server Error; 502 Bad Gateway; 503 Service Unavailable; 504 Gateway Timeout

## 8.21 React

### Interview Questions

**Q: What is the virtual DOM and how does React use it?**
React maintains a lightweight in-memory representation of the real DOM. When state or props change, React re-renders the component tree into a new virtual DOM, diffs it against the previous one (reconciliation), and applies only the minimal set of changes to the real DOM. This batching avoids expensive direct DOM manipulations.

**Q: What is the difference between useState and useReducer?**
useState is for simple, independent state values. useReducer is better for complex state with multiple sub-values, or when the next state depends on the previous and requires actions to describe transitions. useReducer works like Redux — dispatch(action) triggers reducer(state, action) to return the new state.

**Q: What is useEffect and when does it run?**
useEffect runs after every render by default. With an empty dependency array [], it runs only after the first mount. With [dep1, dep2], it runs after mount and whenever those values change. Return a cleanup function to run before the next effect or on unmount — clear timers, cancel subscriptions, abort fetches.

**Q: What is the difference between controlled and uncontrolled components?**
Controlled: form input value is driven by React state via value prop and onChange handler — React is the single source of truth. Uncontrolled: input manages its own state in the DOM; React reads it via useRef. Controlled is preferred for validation and programmatic control.

**Q: What is React Context and when should you use it?**
Context provides a way to pass data through the component tree without prop drilling. Use it for truly global data: current user, theme, locale. Don't use it as a substitute for state management in performance-sensitive scenarios — every consumer re-renders when the context value changes.

**Q: What is useMemo and useCallback?**
useMemo memoises the result of an expensive computation, recomputing only when dependencies change. useCallback memoises a function reference, preventing child components from re-rendering because a new function instance was passed as a prop. Both are optimisations — only use them when a performance problem exists.

**Q: What is the React reconciliation algorithm (Fiber)?**
React Fiber is the reconciliation engine introduced in React 16. It renders work in increments (units of work called fibers), allowing high-priority updates (user input) to interrupt low-priority renders. This enables concurrent features like useTransition and Suspense without blocking the main thread.


## 8.22 Angular

### Interview Questions

**Q: What is Angular and how does it differ from React?**
Angular is a complete opinionated framework from Google with its own module system, router, HTTP client, forms module, and CLI. React is a UI library — you compose your own stack. Angular uses TypeScript by default, has a strong structure (modules, components, services, pipes), and uses two-way data binding.

**Q: What is dependency injection in Angular?**
Angular's DI system creates and manages service instances. Services declared as @Injectable are registered in a provider (module, component, or root). Angular injects them via constructor parameters based on type. This decouples components from concrete implementations and makes testing easy by allowing mock injection.

**Q: What is the difference between @Component and @NgModule?**
@Component defines a UI building block with its template, styles, and logic. @NgModule organises related components, directives, pipes, and services into a cohesive unit. Modules declare what they contain, import what they need from other modules, and export what they share. In standalone components (Angular 14+), NgModule is optional.

**Q: What is change detection and what strategies are available?**
Angular's change detection checks if the view needs updating. Default strategy: checks every component on every event. OnPush: only checks when input references change, an event originates in the component, or an observable emits. OnPush is a major performance optimisation for large component trees.

**Q: What are Angular pipes?**
Pipes transform values in templates: {{ date | date:'shortDate' }}, {{ price | currency:'EUR' }}. Built-in pipes: async (subscribes to Observables/Promises), date, currency, percent, json, keyvalue. Custom pipes implement PipeTransform. Mark pure: false for pipes that should re-run even when the input reference hasn't changed.

**Q: What is RxJS and why does Angular use it?**
RxJS provides Observable-based reactive programming. Angular uses it throughout: HttpClient returns Observables, Router exposes navigation events as Observables, and forms expose value changes as Observables. Operators (map, filter, switchMap, combineLatest) let you compose asynchronous streams declaratively.


## 8.23 Three.js

### Interview Questions

**Q: What is Three.js and what does it abstract?**
Three.js is a JavaScript library that abstracts WebGL — the low-level browser API for GPU-accelerated 3D graphics. Without Three.js, you'd write GLSL shader programs, manage buffers, and handle the full GPU pipeline manually. Three.js provides Scenes, Cameras, Geometries, Materials, Meshes, and Lights as easy-to-use objects.

**Q: What are the three core concepts needed to render a 3D scene?**
Scene (container that holds all objects, lights, and cameras), Camera (defines what's visible and how — perspective or orthographic), and Renderer (draws the scene to a canvas using WebGL). Minimum: create a Mesh, add to scene, point a camera, call renderer.render(scene, camera).

**Q: What is the difference between PerspectiveCamera and OrthographicCamera?**
PerspectiveCamera mimics human vision — objects farther away appear smaller (defined by FOV, aspect ratio, near/far clip planes). OrthographicCamera has no perspective — parallel lines remain parallel regardless of distance, useful for 2D overlays, architectural views, and isometric games.

**Q: What is the render loop and why is requestAnimationFrame used?**
The render loop calls renderer.render(scene, camera) on every frame. requestAnimationFrame is used instead of setInterval because it syncs to the display refresh rate, pauses when the tab is hidden (saving battery and CPU), and provides a high-resolution timestamp for smooth animations.

**Q: What are geometries and materials in Three.js?**
Geometry defines the shape — vertex positions, faces, and UVs (BoxGeometry, SphereGeometry, or custom BufferGeometry). Material defines the surface appearance — how it reacts to light, its colour, texture, and transparency (MeshBasicMaterial ignores light; MeshStandardMaterial uses PBR). A Mesh combines geometry and material.


## 8.24 Next.js

### Interview Questions

**Q: What is Next.js and what problem does it solve?**
Next.js is a React framework that adds server-side rendering (SSR), static site generation (SSG), file-based routing, API routes, and image optimisation on top of React. It solves React SPA limitations: poor SEO (no HTML on initial load), slow time-to-first-byte, and lack of a built-in routing and data-fetching convention.

**Q: What is the difference between SSR, SSG, and ISR in Next.js?**
SSR (Server-Side Rendering): page rendered on each request — data is always fresh but adds latency. SSG (Static Site Generation): page pre-rendered at build time — fast and cacheable, but stale if data changes. ISR (Incremental Static Regeneration): pages are static but revalidated in the background after a specified interval — best of both.

**Q: What is the App Router and how does it differ from the Pages Router?**
The App Router (Next.js 13+) uses the app/ directory and React Server Components by default — server-rendered with zero client JavaScript sent. The Pages Router (pages/) uses Client Components with getServerSideProps/getStaticProps. The App Router enables streaming, nested layouts, and parallel routes.

**Q: What are React Server Components?**
Server Components run only on the server — they can fetch data directly (database, filesystem), produce no client-side JavaScript, and never re-render. Client Components (marked 'use client') run in the browser and can use hooks and browser APIs. Server Components can render Client Components but not vice versa.

**Q: What is Next.js middleware?**
Middleware runs before a request is processed, at the edge (CDN network layer). It can redirect, rewrite, add headers, or return responses. Common uses: authentication checks (redirect to login before serving a page), A/B testing, and geolocation-based routing. Written in middleware.ts at the project root.


## 8.25 React Native

### Interview Questions

**Q: What is React Native and how does it render?**
React Native is a framework for building native mobile apps using JavaScript and React. Unlike a WebView, React Native uses a bridge to communicate with native components — so UI elements are real native views (UIView on iOS, View on Android), not HTML. This gives native look, feel, and performance.

**Q: What is the difference between React Native and Flutter?**
React Native uses JavaScript and renders native platform components via a bridge. Flutter uses Dart and draws all UI with its own Skia/Impeller rendering engine — consistent pixel-for-pixel across platforms. Flutter has better performance (no bridge overhead) but less native platform fidelity; React Native leverages the platform's own UI components.

**Q: What is Expo?**
Expo is a toolchain and platform built on React Native that provides a unified build system, pre-built native modules (camera, location, notifications), over-the-air updates, and a managed workflow where you don't touch native code. Ideal for apps that don't need custom native modules.

**Q: What is the Metro bundler?**
Metro is React Native's JavaScript bundler — it resolves imports, bundles JS, and serves files to the device during development. It supports fast refresh (hot module replacement). In production, Metro produces a single JS bundle that the native app loads at startup.

**Q: How do you handle platform differences in React Native?**
Platform.OS ('ios' | 'android') for conditional logic in code. Platform.select({ios: ..., android: ...}) for object-based switching. File-name suffixes (.ios.tsx, .android.tsx) for component-level platform splits. StyleSheet.create with Platform.OS for platform-specific styles.


## 8.26 Flutter

### Interview Questions

**Q: What is Flutter and what language does it use?**
Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single Dart codebase. Unlike React Native, Flutter doesn't use native platform components — it draws every pixel itself using the Skia/Impeller graphics engine, ensuring consistent UI across all platforms.

**Q: What is the widget tree?**
In Flutter, everything is a widget — layouts, buttons, text, padding, animations. Widgets are immutable configuration objects describing what to render. Flutter builds a widget tree, a corresponding element tree (managing state and lifecycle), and a render object tree. When state changes, Flutter rebuilds the minimal subtree.

**Q: What is the difference between StatelessWidget and StatefulWidget?**
StatelessWidget is immutable and renders based only on its constructor parameters — suitable for UI that doesn't change. StatefulWidget has a companion State object that persists across rebuilds and can call setState() to trigger re-renders. Prefer Stateless; use Stateful only when local mutable state is needed.

**Q: What is the BLoC pattern?**
Business Logic Component separates UI from business logic using Streams. The BLoC receives events (user actions), processes them, and emits states. The UI listens to state streams and rebuilds accordingly. The flutter_bloc package provides BlocBuilder, BlocProvider, and Cubit (a simplified BLoC with direct method calls instead of events).

**Q: What is hot reload vs hot restart in Flutter?**
Hot reload injects updated source code into the running app while preserving state — useful for UI tweaks. Hot restart restarts the app from scratch (losing state) but picks up changes to app initialisation code. Neither requires recompiling the native shell.

**Q: What is pubspec.yaml?**
pubspec.yaml is Flutter's package manifest — it declares dependencies, dev dependencies, assets (images, fonts), and Flutter SDK constraints. Equivalent to package.json in Node.js. Run flutter pub get after changes to download packages.


## 8.27 Kotlin

### Interview Questions

**Q: What are the main improvements Kotlin makes over Java?**
Null safety (nullable types with ?), data classes (auto-generated equals, hashCode, toString, copy), extension functions (add methods to existing classes without inheritance), coroutines (structured concurrency), smart casts, string templates, concise lambda syntax, and sealed classes.

**Q: What is null safety in Kotlin?**
Types are non-nullable by default — String cannot hold null. Nullable types are declared with ? (String?). The safe call operator (?.) returns null instead of throwing NPE. The Elvis operator (?:) provides a default value. The !! operator forces non-null and throws NPE if null — use sparingly.

**Q: What is a data class?**
A data class (data class User(val name: String, val age: Int)) automatically generates: equals() and hashCode() based on all properties, toString(), copy() for creating modified copies, and componentN() functions for destructuring. Ideal for value objects and DTOs.

**Q: What are coroutines and how do they differ from threads?**
Coroutines are lightweight suspended computations. Unlike threads (OS-managed, ~1MB stack each), thousands of coroutines can run on a small thread pool by suspending (not blocking) when waiting for I/O. launch creates a fire-and-forget coroutine; async returns a Deferred. Structured concurrency via CoroutineScope ensures no coroutine outlives its scope.

**Q: What is a sealed class?**
A sealed class restricts subclasses to the same file or package — the compiler knows all possible subtypes. This makes when expressions exhaustive without an else branch. Perfect for modelling states: sealed class Result { class Success(val data: T) : Result(); class Error(val msg: String) : Result() }.

**Q: What are extension functions?**
Extension functions add methods to existing classes without modifying their source or subclassing. fun String.capitalise() = this.replaceFirstChar { it.uppercase() }. They're syntactic sugar — compiled to static functions at bytecode level. Widely used in Android via Kotlin KTX extensions.


## 8.28 Swift

### Interview Questions

**Q: What is the difference between struct and class in Swift?**
Structs are value types (copied on assignment), usually stored on the stack. Classes are reference types (shared on assignment), stored on the heap and managed by ARC. Swift prefers structs for model types — they're safer (no shared mutable state) and often faster. Classes are needed for inheritance, Objective-C interop, and identity semantics.

**Q: What is ARC (Automatic Reference Counting)?**
ARC automatically manages memory for class instances by tracking the reference count. When the count reaches zero, the memory is freed. Retain cycles (two objects holding strong references to each other) prevent deallocation — broken with weak (optional, zeroed when deallocated) or unowned (non-optional, crashes if accessed after deallocation) references.

**Q: What are Optionals in Swift?**
An Optional (String?) wraps a value that may be absent. Unwrapped safely with if let or guard let. Optional chaining (object?.property?.method()) returns nil if any link is nil. Force unwrap (!) crashes if nil — avoid it. Similar in purpose to Kotlin's nullable types.

**Q: What is the difference between @escaping and non-escaping closures?**
A non-escaping closure is guaranteed to be called before the function returns — the compiler can optimise stack allocation. An @escaping closure can outlive the function (stored, called later, or passed to async work). Self must be captured explicitly in @escaping closures to clarify ownership and avoid retain cycles.

**Q: What is SwiftUI?**
SwiftUI is Apple's declarative UI framework (Swift-only, iOS 13+). Views are structs that describe what to render; state changes trigger automatic re-renders. @State, @Binding, @ObservedObject, and @StateObject manage state. Similar philosophy to React — UI is a function of state.

**Q: What are generics in Swift?**
Generics parameterise functions and types over types unknown at definition time. func swap<T>(_ a: inout T, _ b: inout T). Protocols with associated types (associatedtype) enable generic protocol conformance. Swift generics are monomorphised at compile time — no type erasure like in Java.


## 8.29 Vite

### Interview Questions

**Q: What is Vite and how does it differ from Webpack?**
Vite uses native ES Modules in the browser during development — no bundling step at startup. Only the requested module is transformed (via esbuild, written in Go) and served directly. Webpack bundles everything upfront. Vite starts in milliseconds; large Webpack projects can take seconds to minutes.

**Q: What is HMR (Hot Module Replacement) and how does Vite implement it?**
HMR updates changed modules in the browser without a full page reload, preserving state. Vite uses a WebSocket to notify the browser of changes. Since Vite serves unbundled modules, only the changed file is retransformed and sent — making HMR nearly instant even in large projects.

**Q: What is esbuild and what role does it play in Vite?**
esbuild is a JavaScript bundler and transpiler written in Go — 10-100x faster than JS-based tools. Vite uses esbuild to pre-bundle node_modules (CommonJS to ESM) once at startup and for TypeScript/JSX transpilation during development. For production builds, Vite uses Rollup for better code splitting and tree-shaking.

**Q: What are Vite plugins?**
Vite plugins extend the build pipeline using a Rollup-compatible API. They can transform files, inject code, handle virtual modules, or modify the dev server. Examples: @vitejs/plugin-react (React Fast Refresh), vite-plugin-svgr (SVG as React components). Plugins are configured in the plugins array in vite.config.ts.

**Q: What is the ?raw import suffix in Vite?**
Vite supports special import suffixes: ?raw imports the file content as a string (useful for reading text files, markdown, GLSL shaders). ?url returns the asset's URL. ?worker imports a Web Worker. These suffixes let you import non-JS assets in a type-safe way without needing Webpack loaders.


## 8.30 Tailwind CSS

### Interview Questions

**Q: What is utility-first CSS and how does Tailwind implement it?**
Utility-first means building UIs by composing small, single-purpose utility classes directly in HTML/JSX — rather than writing semantic CSS in separate files. Tailwind provides classes like flex, pt-4, text-gray-900, rounded-lg, hover:bg-blue-500. There's no context-switching to CSS files; styles live alongside structure.

**Q: How does Tailwind handle responsive design?**
Tailwind uses mobile-first breakpoint prefixes: sm: (640px), md: (768px), lg: (1024px), xl: (1280px), 2xl: (1536px). Prefix any utility with a breakpoint to apply it only at that viewport width and above. Example: class="w-full md:w-1/2" — full width on mobile, half width on medium and larger screens.

**Q: What is the Tailwind configuration file and what can you customise?**
tailwind.config.js allows extending or overriding the default theme: colours, spacing, fonts, breakpoints, shadows, border radii. The extend key adds to defaults; values at the top level replace them. Also configure content paths (for tree-shaking), plugins, and dark mode strategy.

**Q: How does Tailwind remove unused styles in production?**
Tailwind scans files specified in content (HTML, JSX, TSX, etc.) for class names and removes all unused utilities — a process called purging. This reduces a full Tailwind CSS bundle (~3MB) to typically just a few KB of actually used utilities.

**Q: What is the JIT (Just-In-Time) compiler?**
JIT mode (now the default) generates styles on demand as you write classes. This enables arbitrary values (w-[137px], bg-[#1a2b3c]), all variants without configuration, faster build times, and a smaller dev bundle. Previously, arbitrary values required explicitly extending the config file.


## 8.31 SCSS

### Interview Questions

**Q: What is SCSS and how does it relate to CSS?**
SCSS (Sassy CSS) is a preprocessor that extends CSS with variables, nesting, mixins, functions, and modules. It compiles to plain CSS. SCSS syntax is a superset of CSS — valid CSS is valid SCSS. The older Sass indented syntax uses indentation instead of braces.

**Q: What are SCSS variables and how do they differ from CSS custom properties?**
SCSS variables ($primary: #E84393) are resolved at compile time — they don't exist in the output CSS. CSS custom properties (--primary: #E84393) are evaluated at runtime and can be changed dynamically via JavaScript or media queries. CSS custom properties are preferable for theming; SCSS variables for build-time constants.

**Q: What are SCSS mixins and when would you use them?**
A mixin is a reusable block of CSS that can accept arguments: @mixin flex-center($direction: row) { display: flex; justify-content: center; align-items: center; flex-direction: $direction; }. Included with @include flex-center(column). Use mixins for repeated patterns that vary by parameter.

**Q: What is the difference between @extend and mixins?**
@extend shares a ruleset — selectors are grouped in the output (.btn, .btn-primary { ... }). Mixins copy the CSS into each usage, which can increase output size. @extend can lead to surprising selector groupings across file boundaries; most modern style guides prefer mixins for clarity and predictability.

**Q: What are SCSS modules (@use and @forward)?**
@use imports a file as a namespace (sass.math.round()), preventing global variable conflicts. @forward re-exports a file's members to consumers. These replaced the older @import which polluted the global namespace and loaded files multiple times.


## 8.32 SPA

### Interview Questions

**Q: What is a Single-Page Application?**
A SPA loads a single HTML page and dynamically updates content using JavaScript as the user navigates — no full page reloads. The initial HTML is minimal; routing and rendering happen client-side. SPAs provide native app-like interactions but face challenges with SEO, initial load time, and browser history management.

**Q: How does client-side routing work?**
Client-side routers intercept navigation events and update the URL (via the History API — pushState/replaceState) without triggering a full browser reload. The router matches the current URL to a component tree and renders it. On page refresh, the server must return the same HTML for all routes (a catch-all in server config).

**Q: What is code splitting and why is it important for SPAs?**
Code splitting breaks the JavaScript bundle into chunks loaded on demand. Without it, the entire app JS is downloaded before any content shows. With splitting, only the code needed for the current route loads initially. React.lazy + Suspense and Vite's dynamic import() both achieve this.

**Q: What are the SEO challenges of SPAs and how are they addressed?**
Search engine crawlers historically couldn't execute JavaScript, so SPAs rendered empty pages. Solutions: SSR (pre-render HTML on the server), SSG (pre-render at build time), prerendering tools, or dynamic rendering (serve pre-rendered HTML to crawlers). Modern Googlebot executes JavaScript but can still miss late-loaded content.

**Q: What is the difference between localStorage, sessionStorage, and cookies?**
localStorage persists until explicitly cleared — available across tabs and sessions, same origin only. sessionStorage persists for the tab's lifetime — cleared when the tab closes. Cookies are sent with every HTTP request, can have expiry, httpOnly (inaccessible from JS), Secure (HTTPS only), and SameSite flags. Cookies are the only option for cross-request server-side state.


## 8.33 Responsive UI

### Interview Questions

**Q: What is responsive design and what are its core techniques?**
Responsive design makes UIs adapt to different screen sizes with a single codebase. Core techniques: fluid layouts (percentage widths), CSS media queries (@media (min-width: 768px)), relative units (em, rem, %, vw, vh), flexible images (max-width: 100%), and mobile-first CSS (base styles for small screens, add complexity for larger).

**Q: What is the difference between em and rem units?**
em is relative to the font-size of the parent element — it compounds in nested elements. rem is relative to the root element's font-size (html, typically 16px) — consistent regardless of nesting. Use rem for component sizing and typography; use em for component-internal proportional scaling.

**Q: What is the viewport meta tag and why is it critical for mobile?**
The viewport meta tag tells the browser to use the actual device width as the viewport width instead of a virtual desktop width (~980px). Without it, mobile browsers scale everything down, making responsive CSS useless. Always include: content="width=device-width, initial-scale=1.0".

**Q: What are CSS media queries and what can they target?**
Media queries apply CSS conditionally based on device characteristics: viewport width (min-width, max-width), orientation (landscape/portrait), resolution (for HiDPI/Retina), colour scheme (prefers-color-scheme: dark), reduced motion (prefers-reduced-motion), and print. Used to implement responsive breakpoints.

**Q: What is a CSS container query?**
Container queries (@container) apply styles based on the size of a parent container rather than the viewport. This enables truly component-based responsive design — a card component responds to its container's width regardless of where in the page it's placed. Supported in all modern browsers since 2023.


## 8.34 Cross-Platform Development

### Interview Questions

**Q: What are the main approaches to cross-platform mobile development?**
Native (separate Swift/Kotlin codebases) — maximum performance and platform fidelity, highest cost. Hybrid/WebView (Ionic, Cordova) — web tech in a native shell, lowest performance. Cross-compiled (Flutter) — single Dart codebase compiled to native code with a custom rendering engine. JavaScript bridge (React Native) — JS controls native components via a bridge. Each trades performance against development speed.

**Q: What is the trade-off between native and cross-platform development?**
Native gives best performance, full platform API access, native UX patterns, and no abstraction overhead — at the cost of maintaining two separate codebases. Cross-platform reduces code duplication and team specialisation requirements. The gap has narrowed — Flutter and React Native offer near-native performance. Choose cross-platform for standard UIs; native for deeply platform-specific features.

**Q: How does Flutter achieve cross-platform consistency?**
Flutter renders all UI using its own graphics engine (Skia/Impeller) instead of native platform components. This means UI looks pixel-identical across iOS, Android, web, and desktop. The trade-off is that platform-specific UI conventions (iOS Cupertino style vs Android Material Design) must be manually implemented.

**Q: What are common challenges in cross-platform development?**
Platform API differences (push notifications, biometrics, file system access), platform-specific UI conventions, native module gaps, performance tuning for different hardware, testing on many physical devices, and handling OS-specific bugs. Good abstractions and platform-specific code paths (Platform.OS, #if os(iOS)) mitigate these.


## 8.35 Cloud

### Interview Questions

**Q: What is cloud computing and what are its main advantages?**
Cloud computing is the delivery of computing services (servers, storage, databases, networking, software) over the internet instead of owning and maintaining physical hardware. Main advantages: pay-per-use pricing, on-demand scaling, no hardware maintenance, high availability across global data centres, and faster provisioning of resources.

**Q: What is the difference between IaaS, PaaS, FaaS, and SaaS?**
IaaS (Infrastructure as a Service) gives you virtual machines — you manage the OS, runtime, and applications (e.g. Azure VMs, EC2). PaaS (Platform as a Service) manages the OS and runtime for you — you just deploy the application (e.g. App Service, Heroku). FaaS (Function as a Service / Serverless) runs individual functions triggered by events — you pay only during execution (e.g. Azure Functions, AWS Lambda). SaaS (Software as a Service) delivers a complete application you just use (e.g. Gmail, Slack). As you move up the stack, you manage less and the provider manages more.

**Q: What is CaaS (Containers as a Service) and how does it differ from IaaS?**
CaaS provides managed infrastructure specifically for running containers — you supply Docker images and the provider handles the underlying cluster, networking, and scaling (e.g. GKE, AKS, ECS). With IaaS you rent a raw VM and must install and manage Docker and Kubernetes yourself. CaaS sits in the middle: more control than PaaS, less operational burden than IaaS.

**Q: What is serverless computing and when would you choose it?**
Serverless (FaaS) means you deploy individual functions that execute only when triggered (HTTP request, queue message, timer, file upload). The provider manages all infrastructure — there are no servers to provision or idle capacity to pay for. Choose serverless for event-driven, short-lived tasks with unpredictable traffic. Avoid it for long-running workloads or when cold start latency is unacceptable.

**Q: What is the shared responsibility model in cloud security?**
The cloud provider is responsible for security of the cloud (physical data centres, hypervisor, network infrastructure). The customer is responsible for security in the cloud (what you deploy: data, access controls, OS patches on VMs, application code). The boundary shifts depending on the service model — in SaaS the provider covers almost everything; in IaaS you own most of the stack above the hardware.

**Q: What is the difference between regions and availability zones?**
A region is a geographic area containing one or more data centres (e.g. West Europe, US East). An availability zone (AZ) is an isolated physical location within a region with independent power, cooling, and networking. Deploying across multiple AZs protects against a single data centre failure. Deploying across multiple regions protects against regional outages and provides lower latency for global users.

**Q: What is auto-scaling and how does it work?**
Auto-scaling automatically adjusts the number of compute instances based on current demand. Horizontal scale-out adds more instances when load increases; scale-in removes them when load drops. Triggers are typically metrics (CPU usage, request queue depth, memory). This ensures cost efficiency (no idle over-provisioning) and handles traffic spikes without manual intervention.


## 8.36 Microsoft Azure

### Interview Questions

**Q: What is the difference between Azure App Service, Azure Functions, and Azure Container Apps?**
App Service runs long-lived web apps with always-on compute — choose it for traditional web APIs. Functions are event-driven and serverless, billed per execution — ideal for short tasks triggered by HTTP, queues, or timers. Container Apps is a managed Kubernetes-based platform for containerised microservices with automatic scaling including scale-to-zero.

**Q: What is Azure Active Directory (Entra ID)?**
Azure AD (now Microsoft Entra ID) is Microsoft's cloud identity platform. It provides authentication (OAuth 2.0, OIDC), single sign-on, multi-factor authentication, and application registration for securing APIs. Enterprise apps integrate via app registrations; users authenticate with Microsoft accounts or organisation identities.

**Q: What is a Managed Identity in Azure?**
A Managed Identity gives an Azure resource (VM, App Service, Function) an automatic identity in Azure AD — without storing credentials in configuration. The resource can authenticate to any Azure service that supports Azure AD auth (Storage, Key Vault, SQL) without secrets in config files. Always prefer Managed Identity over connection strings.

**Q: What is Azure Service Bus vs Azure Event Hub?**
Service Bus is an enterprise message queue/topic broker for reliable, ordered, at-least-once message delivery between services — suited for command-driven workflows. Event Hub is a high-throughput event streaming platform for ingesting millions of events per second (telemetry, logs) — suited for analytics pipelines and Kafka-compatible workloads.

**Q: What is Azure Blob Storage vs Azure Table Storage?**
Blob Storage stores unstructured binary or text data (files, images, backups) organised in containers. Table Storage is a NoSQL key-value store for structured schemaless data accessed by partition and row key. For most structured data scenarios, Cosmos DB is now preferred over Table Storage.


## 8.37 Google Cloud Platform

### Interview Questions

**Q: What is the difference between GCE, GKE, Cloud Run, and Cloud Functions?**
GCE (Compute Engine) is raw VMs — maximum control. GKE (Google Kubernetes Engine) is managed Kubernetes for containerised workloads. Cloud Run is serverless containers — runs stateless containers scaled to zero, billed per request. Cloud Functions is event-driven serverless — individual functions triggered by HTTP, Pub/Sub, or Cloud Storage events.

**Q: What is Google Cloud Pub/Sub?**
Pub/Sub is a managed asynchronous messaging service. Publishers send messages to a topic; subscribers pull from subscriptions or receive push delivery. Guaranteed at-least-once delivery, global availability, and scales to millions of messages per second. Used for event-driven architectures, pipeline ingestion, and service decoupling.

**Q: What is BigQuery?**
BigQuery is Google's serverless, fully managed data warehouse for analytics at petabyte scale. It uses columnar storage and separates compute from storage. Queries use Standard SQL. Optimised for OLAP (large analytical queries), not OLTP. Pricing is per byte scanned — use column selection and partitioning to reduce costs.

**Q: What is Cloud IAM?**
Identity and Access Management controls who (principal) can do what (role) on which resource. Roles bundle permissions: primitive (Owner/Editor/Viewer — too broad), predefined (roles/storage.objectViewer — service-specific), or custom. Always grant the narrowest role at the lowest scope (resource > project > organisation) following least privilege.


## 8.38 Firebase

### Interview Questions

**Q: What is Firebase and what services does it provide?**
Firebase is Google's app development platform providing: Firestore (NoSQL document database with real-time sync), Realtime Database (JSON tree, simpler), Authentication (OAuth, email/password, phone), Cloud Storage (files), Cloud Functions (serverless backend), Hosting (static and dynamic), and App Check (abuse prevention).

**Q: What is the difference between Firestore and Realtime Database?**
Realtime Database is a single JSON tree — simpler, lower latency for basic sync, but hard to query at scale. Firestore is a document/collection model with richer query support, better scalability, offline support, and stronger security rules. New projects should use Firestore.

**Q: How do Firestore security rules work?**
Security rules are server-side rules controlling read/write access to documents. Evaluated before any operation reaches the database. Rules can check authentication status (request.auth != null), user roles stored in a document, or field values. Rules run on Google's servers — they cannot be bypassed from the client even with direct API access.

**Q: What is Firebase Authentication and how does it integrate with Firestore?**
Firebase Auth handles sign-in flows and issues JWTs. The signed-in user's UID (request.auth.uid) is available in Firestore security rules, allowing per-user data isolation (allow read, write: if request.auth.uid == resource.data.userId). Auth state syncs in real-time; the SDK provides an onAuthStateChanged listener.


## 8.39 Docker

### Interview Questions

**Q: What is Docker and what problem does it solve?**
Docker packages applications and their dependencies into containers — lightweight, isolated environments that run identically regardless of the host OS. It solves the "works on my machine" problem by ensuring the same runtime environment from development through production. Containers share the host OS kernel, making them far lighter than VMs.

**Q: What is the difference between a Docker image and a container?**
An image is a read-only template — a layered filesystem defined by a Dockerfile. A container is a running instance of an image. Multiple containers can run from the same image simultaneously. Images are immutable; containers add a writable layer on top.

**Q: What is a multi-stage Docker build?**
Multi-stage builds use multiple FROM statements in one Dockerfile. Early stages compile and build; the final stage copies only the output artifacts into a minimal base image. This dramatically reduces image size (no build tools in production) and improves security by shrinking the attack surface.

**Q: What is the difference between CMD and ENTRYPOINT?**
ENTRYPOINT defines the process that runs when the container starts — not easily overridden by docker run arguments. CMD provides default arguments to ENTRYPOINT, or the default command if no ENTRYPOINT is set. Together: ENTRYPOINT sets the executable; CMD sets the default arguments.

**Q: What is a Docker volume and why is it used?**
Containers are ephemeral — their filesystem is lost on removal. Volumes mount host directories or Docker-managed storage into containers, persisting data across restarts and removals. Named volumes are managed by Docker and preferred over bind mounts for databases and other stateful services.

**Q: What is Docker Compose and when do you use it?**
Docker Compose defines and runs multi-container applications via a docker-compose.yml file. Services, networks, and volumes are declared declaratively. docker compose up starts the whole stack. Used in local development to run app + database + cache + message broker together — not typically used in production.


## 8.40 Kubernetes

### Interview Questions

**Q: What is Kubernetes and what problems does it solve?**
Kubernetes (K8s) is a container orchestration platform that automates deployment, scaling, and management of containerised applications. It solves: scheduling containers to nodes with available resources, self-healing (restarting failed containers), horizontal scaling, rolling updates with zero downtime, service discovery, and secrets management.

**Q: What is the difference between a Pod, Deployment, and Service?**
A Pod is the smallest deployable unit — one or more containers sharing network and storage. A Deployment manages a set of identical Pod replicas, handling rolling updates and rollbacks. A Service provides a stable network endpoint for a set of Pods (selected by labels) — abstracting over Pod IPs that change as Pods are replaced.

**Q: What is the difference between ClusterIP, NodePort, and LoadBalancer Service types?**
ClusterIP (default) is internal-only — accessible only within the cluster. NodePort exposes the Service on a static port on every node — accessible externally but not production-ready. LoadBalancer provisions a cloud load balancer to expose the Service externally — standard for production traffic in managed Kubernetes environments.

**Q: What are ConfigMaps and Secrets?**
ConfigMap stores non-sensitive configuration data (env vars, config files) decoupled from Pod specs. Secret stores sensitive data (passwords, tokens, keys) — base64-encoded in etcd (and encrypted at rest if configured). Both are injected into Pods as environment variables or volume mounts, keeping configuration out of container images.

**Q: What is the difference between a Kubernetes liveness and readiness probe?**
Liveness probe detects if a container is alive — if it fails, Kubernetes restarts the container. Readiness probe detects if a container is ready to serve traffic — if it fails, Kubernetes removes the Pod from Service endpoints without restarting. Both prevent traffic from reaching broken or still-starting Pods.


## 8.41 CI/CD Pipelines

### Interview Questions

**Q: What is the difference between CI and CD?**
CI (Continuous Integration) automates building and testing code on every push — ensuring the mainline is always in a working state. CD can mean Continuous Delivery (every passing build is deployable with a manual gate) or Continuous Deployment (every passing build deploys automatically to production). CI is the prerequisite for CD.

**Q: What are the typical stages of a CI/CD pipeline?**
Source trigger (push or PR), Build (compile, bundle), Test (unit, integration, e2e), Static analysis (linting, SAST, code coverage), Security scanning (dependency vulnerabilities, container scanning), Publish (push Docker image to registry), Deploy (to staging then production), Verification (smoke tests, health checks).

**Q: What is a blue-green deployment?**
Two identical production environments (blue and green) are maintained. The new version is deployed to the inactive environment. After verification, the load balancer switches traffic to it. Rollback is instant — switch back to the old environment. Trade-off: requires double the infrastructure cost.

**Q: What is a canary deployment?**
The new version is deployed to a small percentage of production traffic (e.g. 5%). Metrics and error rates are monitored. If healthy, traffic is gradually shifted until 100% runs the new version. If problems occur, only a small fraction of users is affected and rollback is fast.

**Q: What is a pipeline as code?**
Defining CI/CD pipelines in version-controlled files (Jenkinsfile, .github/workflows/deploy.yml, .gitlab-ci.yml) rather than clicking through a GUI. Benefits: pipelines are reviewed like code, changes are tracked in git history, and the pipeline definition lives alongside the code it builds.


## 8.42 Git

### Interview Questions

**Q: What is the difference between git merge and git rebase?**
git merge combines two branches by creating a merge commit, preserving the full branch history. git rebase moves commits from one branch onto another, rewriting their hashes — produces a linear history. Use merge for shared branches; use rebase to clean up local feature branches before merging. Never rebase commits already pushed to a shared branch.

**Q: What is a detached HEAD state?**
HEAD normally points to a branch name. Detached HEAD means HEAD points directly to a commit hash rather than a branch. This happens when you checkout a specific commit or tag. New commits won't belong to any branch and can be lost when switching away — create a branch with git checkout -b if you want to keep the work.

**Q: What is git stash?**
git stash temporarily saves uncommitted changes (both staged and unstaged) to a stack, restoring a clean working directory. Useful for switching branches without committing half-done work. git stash pop restores the latest stash. git stash list shows all stashes. git stash push -m "message" names the stash.

**Q: What is the difference between git reset, git revert, and git restore?**
git reset moves HEAD (and optionally the branch and working tree) — destructive, rewrites history, never use on public branches. git revert creates a new commit that undoes a previous commit — safe for shared history. git restore discards changes in the working tree or unstages staged changes — affects only working files, not history.

**Q: What is a git hook?**
Git hooks are scripts that run automatically at specific points in the git workflow: pre-commit (run linting before committing), commit-msg (validate commit message format), pre-push (run tests before pushing). Stored in .git/hooks/. Tools like Husky manage hooks across teams via package.json.


## 8.43 GitHub

### Interview Questions

**Q: What is the difference between a fork and a branch?**
A branch lives inside the same repository — used for feature development when you have write access. A fork is a copy of a repository to your own account — used for contributing to repos you don't have write access to. Pull requests can originate from either.

**Q: What is GitHub Actions and how does it work?**
GitHub Actions is a CI/CD platform integrated into GitHub. Workflows are defined in .github/workflows/*.yml files. Triggered by events (push, PR, schedule, webhook). Workflows contain jobs that run on runners (GitHub-hosted or self-hosted). Jobs contain steps (run shell commands or use Actions from the marketplace).

**Q: What is a CODEOWNERS file?**
A CODEOWNERS file (.github/CODEOWNERS) maps file paths to required reviewers. When a PR changes those files, the owners are automatically requested for review and their approval may be required via branch protection rules. This ensures subject-matter experts review changes to their areas of the codebase.

**Q: What are GitHub Environments and how do you use them for deployments?**
Environments (Settings → Environments) add protection rules to deployments: required reviewers, wait timers, and deployment branch restrictions. A job in Actions targeting a protected environment must wait for human approval. This prevents accidental deploys to production from feature branches.

**Q: What is the difference between a GitHub Issue, PR, and Discussion?**
Issues track bugs, feature requests, and tasks — structured work items with labels, assignees, and milestones. Pull Requests propose code changes and have reviews, checks, and merge capabilities. Discussions are open-ended conversations (Q&A, ideas, announcements) without the formality of an issue.


## 8.44 Bitbucket

### Interview Questions

**Q: What is Bitbucket and how does it differ from GitHub?**
Bitbucket is Atlassian's Git hosting platform, deeply integrated with Jira and Confluence. It supports Git repositories and offers Bitbucket Pipelines as its built-in CI/CD using bitbucket-pipelines.yml. Preferred in organisations already on the Atlassian ecosystem where Jira integration is essential.

**Q: What are Bitbucket Pipelines?**
Bitbucket Pipelines is a CI/CD system defined in bitbucket-pipelines.yml at the repo root. Pipelines are triggered by branch pushes or PRs and run steps in Docker containers. Steps can be run in parallel with the parallel: key. Deployment steps can target named environments and require manual triggers.

**Q: What is a Bitbucket workspace?**
A workspace is the organisational unit in Bitbucket (equivalent to a GitHub organisation). It contains repositories, teams, and access permissions. Projects group repositories within a workspace for easier management and bulk permission settings.

**Q: How does Bitbucket integrate with Jira?**
Branch names, commit messages, and PR titles that include a Jira issue key (PROJECT-123) are automatically linked in Jira. The Jira issue shows development activity (commits, branches, PRs) directly. Smart commits in messages can also update Jira issue status or log time automatically.


## 8.45 Maven

### Interview Questions

**Q: What is Maven and what problem does it solve?**
Maven is a Java build automation and dependency management tool. It defines a standard project structure and build lifecycle, downloads dependencies from repositories (Maven Central, Nexus), manages transitive dependencies, and provides plugins for compilation, testing, packaging, and deployment.

**Q: What is a POM (Project Object Model)?**
pom.xml is Maven's project descriptor. It declares: coordinates (groupId, artifactId, version), dependencies, plugins, build configuration, repositories, and inherited settings from a parent POM. Maven uses the POM to determine how to build and package the project.

**Q: What is the Maven build lifecycle and its main phases?**
The default lifecycle: validate → compile → test → package → verify → install → deploy. Each phase runs all previous phases. compile compiles source. test runs unit tests. package creates the JAR or WAR. install copies to local repository. deploy publishes to a remote repository.

**Q: What is dependency scope in Maven?**
Scope controls when a dependency is on the classpath. compile (default): all phases. provided: compile time only, provided at runtime by a container (e.g. servlet-api in Tomcat). runtime: only at runtime, not compile. test: only during testing. Correct scope prevents dependency pollution and reduces artifact size.

**Q: What is a Maven parent POM?**
A parent POM allows inheriting configuration across modules — dependency versions, plugin versions, and settings. Multi-module projects have a root POM with packaging=pom listing all <modules>. A BOM (Bill of Materials) is a special parent that manages only dependency versions, imported with scope=import and type=pom.


## 8.46 YAML

### Interview Questions

**Q: What is YAML and what are its main use cases?**
YAML (YAML Ain't Markup Language) is a human-readable data serialisation format. It's whitespace-significant — indentation defines structure. Used for configuration files (Docker Compose, Kubernetes manifests, GitHub Actions, Ansible, Helm charts) where readability is more important than verbosity.

**Q: What is the difference between a YAML scalar, sequence, and mapping?**
Scalar: a single value — string, number, boolean, or null (name: Alice, age: 30, active: true). Sequence (list): ordered collection using - prefix or inline [a, b, c]. Mapping (object): key-value pairs indented under a parent key or inline {key: value}.

**Q: What are YAML anchors and aliases?**
Anchors (&anchor-name) mark a value for reuse. Aliases (*anchor-name) reference it elsewhere. Useful for avoiding repetition in configs: define defaults with &defaults and inherit them in multiple services with <<: *defaults (the merge key). Docker Compose extension fields use this pattern extensively.

**Q: What are common YAML pitfalls?**
Indentation with tabs (YAML requires spaces only). Strings that look like other types — yes/no/true/false are parsed as booleans; 1.0 as a float; 2024-01-01 as a date. Quote strings when the content is ambiguous. Duplicate keys (last value wins, silently). Trailing spaces causing unexpected errors.


## 8.47 SQL — Querying & Optimization

### Interview Questions

**Q: What is the difference between WHERE and HAVING?**
WHERE filters rows before grouping — it operates on individual rows and cannot use aggregate functions. HAVING filters groups after GROUP BY — it can use aggregate functions (HAVING COUNT(*) > 5). If you need to filter on aggregate results, you must use HAVING.

**Q: What are window functions?**
Window functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, SUM OVER, AVG OVER) compute a value for each row relative to a window of related rows — without collapsing them like GROUP BY. PARTITION BY divides rows into groups; ORDER BY determines row ordering within the window. Essential for ranking, running totals, and moving averages.

**Q: What is a CTE (Common Table Expression)?**
A CTE is a named, temporary result set defined with the WITH keyword that can be referenced in the main query. CTEs improve readability and can be recursive (WITH RECURSIVE) for hierarchical data like trees and graphs. Non-recursive CTEs are typically equivalent to subqueries but far more readable.

**Q: What is the difference between clustered and non-clustered indexes?**
A clustered index determines the physical order of rows in the table — there can only be one (usually the primary key). A non-clustered index is a separate structure with pointers to the actual rows — a table can have many. In MySQL InnoDB, all secondary indexes store the primary key as the row pointer.

**Q: What is SQL injection and how do you prevent it?**
SQL injection occurs when user input is concatenated directly into SQL queries, allowing attackers to modify the query logic. Prevented by: parameterised queries and prepared statements (? or :name placeholders — input is never interpreted as SQL), ORMs that handle escaping automatically, and input validation at API boundaries.


## 8.48 MySQL

### Interview Questions

**Q: What is the difference between MyISAM and InnoDB?**
InnoDB is the default MySQL storage engine — it supports transactions (ACID), foreign key constraints, row-level locking, and crash recovery. MyISAM lacks transactions and foreign keys, uses table-level locking, but can be faster for read-heavy workloads without concurrent writes. Always use InnoDB for new projects.

**Q: What is an index and how does it improve query performance?**
An index is a data structure (typically a B-tree) allowing MySQL to find rows without scanning the full table. Without an index on a WHERE column, MySQL performs a full table scan — O(n). With an index, the lookup is O(log n). Indexes speed up reads but slow down writes since the index must be updated on INSERT/UPDATE/DELETE.

**Q: What is the difference between INNER JOIN, LEFT JOIN, and RIGHT JOIN?**
INNER JOIN returns only rows with matching values in both tables. LEFT JOIN returns all rows from the left table and matched rows from the right (NULLs for non-matches). RIGHT JOIN is the mirror image. FULL OUTER JOIN (not natively in MySQL — use UNION) returns all rows from both tables.

**Q: What is normalisation and what are the first three normal forms?**
Normalisation organises data to reduce redundancy. 1NF: each column holds atomic values, no repeating groups. 2NF: 1NF plus no partial dependencies (non-key columns depend on the full primary key). 3NF: 2NF plus no transitive dependencies (non-key columns don't depend on other non-key columns).

**Q: What is a transaction and what does ACID mean?**
A transaction is a unit of work that either fully completes or fully rolls back. ACID: Atomicity (all or nothing), Consistency (database remains valid before and after), Isolation (concurrent transactions appear sequential), Durability (committed data survives crashes).


## 8.49 PostgreSQL

### Interview Questions

**Q: What makes PostgreSQL different from MySQL?**
PostgreSQL is more standards-compliant and feature-rich: native JSON/JSONB support with GIN indexing, full-text search, array types, CTEs with MATERIALIZED, window functions, LISTEN/NOTIFY for async notifications, table inheritance, and extensibility (PostGIS for geospatial). MySQL is traditionally faster for simple read-heavy workloads but the gap has narrowed.

**Q: What is JSONB in PostgreSQL?**
JSONB stores JSON data in a binary decomposed format — parsed on input, stored efficiently, and supports GIN indexing. Unlike the json type (stores raw text), JSONB supports efficient operators (@>, ?, #>>) for querying nested paths and can be indexed on specific fields. Used to handle semi-structured data without a separate document database.

**Q: What are PostgreSQL sequences and SERIAL?**
A sequence is an auto-incrementing counter. SERIAL (or BIGSERIAL) is shorthand for creating an integer column with a default drawn from a sequence — equivalent to MySQL AUTO_INCREMENT. In PostgreSQL 10+, GENERATED ALWAYS AS IDENTITY is the SQL-standard alternative and is preferred.

**Q: What is VACUUM in PostgreSQL?**
PostgreSQL uses MVCC (Multi-Version Concurrency Control) — old row versions are kept after UPDATE/DELETE for concurrent transactions. VACUUM reclaims storage occupied by dead tuples. AUTOVACUUM runs automatically in the background. VACUUM ANALYZE also updates the statistics used by the query planner.

**Q: What are PostgreSQL advisory locks?**
Advisory locks are application-level locks that PostgreSQL manages but doesn't enforce on specific tables — your application code decides when to acquire and release them (pg_try_advisory_lock, pg_advisory_unlock). Useful for distributed mutex patterns such as ensuring only one instance of a cron job runs across horizontally scaled servers.


## 8.50 NoSQL


**Q: What is NoSQL and when would you choose it over SQL?**
NoSQL is a category of databases that store data in formats other than relational tables — documents, key-value pairs, column families, or graphs. Choose NoSQL when: the schema is flexible or evolving, you need horizontal scaling across many nodes, you are storing large volumes of unstructured/semi-structured data, or you need very high read/write throughput where SQL JOIN overhead is unacceptable.

**Q: What are the four main types of NoSQL databases? Give an example of each.**
- **Document** — stores JSON-like documents; schema per document. Example: MongoDB, Firestore.
- **Key-Value** — maps a key to a value blob; extremely fast lookups. Example: Redis, DynamoDB.
- **Column-Family** — stores data in column groups, optimised for sparse wide rows. Example: Apache Cassandra, HBase.
- **Graph** — stores nodes and edges to model relationships. Example: Neo4j, Amazon Neptune.

**Q: What is the difference between ACID and BASE?**
ACID (SQL default): Atomicity (all-or-nothing), Consistency (data always valid), Isolation (transactions don't interfere), Durability (committed data persists). BASE (NoSQL default): Basically Available (always responds), Soft state (data may change even without input), Eventually Consistent (will converge to consistency, not immediately). BASE trades strict correctness for availability and performance.

**Q: What is the CAP theorem?**
The CAP theorem states that a distributed data store can guarantee at most two of three properties: Consistency (all nodes see the same data simultaneously), Availability (every request gets a response), Partition tolerance (the system works despite network failures). Since network partitions are inevitable in practice, systems must trade off between CP (consistent but may refuse requests) and AP (always responds but may return stale data).

**Q: What is eventual consistency and when is it acceptable?**
Eventual consistency means that if no new updates are made to an item, all replicas will eventually converge to the same value — but reads in the meantime may return stale data. It is acceptable for use cases where slight staleness is tolerable: social media feeds, product catalogue views, analytics dashboards. It is not acceptable for financial balances, inventory levels during checkout, or any data that must reflect the latest write.

**Q: When would you embed data vs reference it in a document database like MongoDB?**
Embed when the data is always accessed together (post + author name), is owned by the parent document, and the nested array has a small bounded size. Reference when the data is shared across many documents (a user referenced by thousands of orders), changes independently, or could grow unboundedly as an array (all comments ever made).

**Q: What are some advantages of Redis (key-value) over a traditional database?**
Redis stores data in-memory, delivering sub-millisecond read/write latency. It supports rich data structures (strings, hashes, lists, sets, sorted sets), built-in TTL-based expiry (perfect for sessions and cache), pub/sub messaging, and Lua scripting. Use Redis as a cache layer in front of a slower database, for session storage, rate limiting, leaderboards, or job queues — not as a primary durable store for critical data unless persistence is explicitly configured.

## 8.51 MongoDB

### Interview Questions

**Q: What is MongoDB and how does it differ from relational databases?**
MongoDB is a document-oriented NoSQL database. Data is stored as BSON documents (JSON-like) in collections with no fixed schema. Unlike SQL tables (rigid schema, normalised rows, JOINs), MongoDB documents embed related data — no JOINs needed but data may be duplicated. It scales horizontally via sharding.

**Q: What is the difference between embedding and referencing in MongoDB?**
Embedding: store related data inside the parent document — good for data always queried together (one query, atomic updates). Referencing: store only the _id of related documents (like a foreign key) — good for large related data, many-to-many relationships, or data that changes independently. Lookups use $lookup in the aggregation pipeline.

**Q: What is a MongoDB index and what types exist?**
Indexes speed up queries. Types: Single field, Compound (multiple fields), Text (full-text search on strings), Geospatial (2dsphere for location queries), Sparse (only indexes documents that have the field), and TTL (auto-deletes documents after a time period — ideal for sessions or logs).

**Q: What is the aggregation pipeline?**
The aggregation pipeline processes documents through sequential stages that transform data. Common stages: $match (filter), $group (group and aggregate — sum, count, avg), $sort, $project (reshape documents), $lookup (left outer join to another collection), $unwind (flatten arrays).

**Q: What is MongoDB Atlas?**
Atlas is MongoDB's managed cloud database service (available on AWS, GCP, Azure). It handles provisioning, backups, monitoring, scaling, and security. Features include Atlas Search (full-text with Lucene), App Services (serverless functions and triggers), and Atlas Vector Search.


## 8.52 Data Modelling

### Interview Questions

**Q: What is an Entity-Relationship (ER) diagram?**
An ER diagram visually represents entities (tables), their attributes (columns), and relationships between them (one-to-one, one-to-many, many-to-many). Used in the conceptual design phase to agree on the data model before implementation. Crow's foot notation shows cardinality (0..* means zero or more).

**Q: What is the difference between a primary key, foreign key, and unique key?**
Primary key: uniquely identifies each row — not null, unique, one per table. Foreign key: a column referencing another table's primary key — enforces referential integrity. Unique key: enforces uniqueness like a PK but can be null and a table can have multiple unique keys.

**Q: What is denormalisation and when would you use it?**
Denormalisation intentionally introduces redundancy to improve read performance — by duplicating data or pre-joining tables, you avoid expensive JOINs at query time. Used in read-heavy analytical workloads (data warehouses) and NoSQL document stores. Trade-off: faster reads but harder writes since multiple copies must stay in sync.

**Q: What is the difference between OLTP and OLAP database design?**
OLTP (Online Transaction Processing) optimises for fast, frequent, small read/write transactions — highly normalised, row-oriented. OLAP (Online Analytical Processing) optimises for large analytical queries over historical data — denormalised (star or snowflake schema), column-oriented storage.

**Q: What is a star schema?**
A star schema is a denormalised dimensional model with a central fact table (containing measurable events — sales, orders) surrounded by dimension tables (describing who, what, when, where). Denormalisation makes analytical queries fast and simple. Used in data warehouses (Redshift, BigQuery, Snowflake).


## 8.53 JUnit 5

### Interview Questions

**Q: What are the main annotations in JUnit 5?**
@Test marks a test method. @BeforeEach / @AfterEach run before/after each test method. @BeforeAll / @AfterAll run once per class (must be static by default). @Disabled skips a test. @ParameterizedTest with @ValueSource / @CsvSource / @MethodSource runs a test with multiple inputs. @ExtendWith integrates extensions (Spring, Mockito).

**Q: What is the difference between JUnit 4 and JUnit 5?**
JUnit 5 = JUnit Platform (launcher) + JUnit Jupiter (new API) + JUnit Vintage (runs JUnit 4 tests). Key changes: @RunWith → @ExtendWith, @Rule → extensions, @Before/@After → @BeforeEach/@AfterEach, parameterised tests are first-class, assertions support lambdas, and @Nested enables hierarchically organised test classes.

**Q: What is @ParameterizedTest?**
Parameterised tests run the same test method with different inputs. Sources: @ValueSource (literal values), @CsvSource (CSV rows), @MethodSource (static factory method returning a Stream), @EnumSource (all enum values). Eliminates duplicated test methods for testing multiple input/output combinations.

**Q: What is the difference between Assumptions and Assertions in JUnit 5?**
Assertions (assertThat, assertEquals, assertThrows) fail the test with an error if the condition is not met. Assumptions (assumeTrue, assumingThat) abort the test and mark it as skipped rather than failing — used for preconditions that aren't always applicable (e.g. run only on a specific OS).

**Q: How do you test that an exception is thrown?**
assertThrows(ExpectedException.class, () -> methodUnderTest()) asserts that the lambda throws exactly that exception type and returns the exception instance for further assertions on the message or cause. assertThrowsExactly requires exact type match, not accepting subclasses.


## 8.54 Mockito

### Interview Questions

**Q: What is Mockito and what problem does it solve?**
Mockito is a Java mocking framework that creates mock objects — fake implementations of dependencies — so you can test a class in isolation without real databases, HTTP clients, or external services. You define what the mock returns when called and verify interactions afterward.

**Q: What is the difference between @Mock and @Spy?**
@Mock creates a complete fake of the class — all methods return null, 0, or false by default; no real code runs. @Spy wraps a real instance — unstubbed methods call the real implementation; stubbed methods return defined values. Use Spy when you want to test a partial mock of a real class.

**Q: What is the difference between when().thenReturn() and doReturn().when()?**
Both stub methods but differ in safety. when(mock.method()).thenReturn(value) invokes the method during stubbing — can cause issues for methods with side effects. doReturn(value).when(mock).method() stubs without invoking the method. doReturn is preferred for Spy objects and void methods.

**Q: How do you verify that a method was called with specific arguments?**
verify(mock).method(args) asserts the method was called exactly once with those args. verify(mock, times(2)).method() for exact call count. verify(mock, never()).method() for no calls. Use ArgumentCaptor to capture the actual argument passed and assert on its properties separately.

**Q: What is @InjectMocks?**
@InjectMocks creates an instance of the class under test and automatically injects @Mock and @Spy fields via constructor, setter, or field injection. Used with @ExtendWith(MockitoExtension.class) to initialise all annotations automatically without calling MockitoAnnotations.openMocks(this) manually.


## 8.55 SonarQube

### Interview Questions

**Q: What is SonarQube and what does it analyse?**
SonarQube is a static code analysis platform that continuously inspects code quality. It detects: bugs (potential runtime errors), vulnerabilities (security issues like SQL injection, XSS), code smells (maintainability issues), duplications, test coverage, and complexity. It tracks trends over time and enforces a Quality Gate.

**Q: What is a Quality Gate?**
A Quality Gate is a set of conditions that code must meet to pass. Example: no new critical bugs, test coverage on new code above 80%, no new security vulnerabilities. When integrated with CI, a failing Quality Gate can block a PR from merging. The default Sonar Way gate is a good starting point.

**Q: What are the severity levels in SonarQube?**
Blocker (must fix — severe bugs or security issues), Critical (likely bugs or security issues), Major (quality flaws impacting productivity), Minor (style issues with small impact), Info (informational only). Security findings additionally map to OWASP, CWE, and SANS categories.

**Q: What is SonarLint?**
SonarLint is an IDE plugin that provides SonarQube analysis inline as you code — catching issues in real time before committing. It uses the same rules as the SonarQube server. In connected mode, it syncs the project's custom rule profiles and suppressions from your SonarQube instance.

**Q: How does SonarQube address the OWASP Top 10?**
SonarQube maps its rules to OWASP Top 10 categories (injection, broken auth, XSS, insecure deserialization, etc.), allowing filtering and reporting by security standard. It can detect many Top 10 vulnerabilities statically — injection patterns, hardcoded credentials, weak cryptography, and insecure random number generation.


## 8.56 Types of Software Testing

### Interview Questions

**Q: What is the testing pyramid and what types of tests does it describe?**
The testing pyramid visualises the ideal test distribution: a wide base of unit tests (many, fast, cheap), a middle layer of integration tests (fewer, slower), and a narrow top of E2E tests (few, slowest, most brittle). The higher you go, the fewer tests you should have because they are more expensive and harder to maintain. The goal is fast feedback with good coverage at low cost.

**Q: What is a unit test and what are its key characteristics?**
A unit test verifies a single method or class in complete isolation — all external dependencies (databases, APIs, services) are replaced with mocks or stubs. Key characteristics: very fast (milliseconds), runs in isolation, easy to debug, and should make up the majority of your test suite. Typical tools: JUnit, Mockito, AssertJ.

**Q: What is an integration test and what does it verify?**
An integration test verifies that multiple components work together correctly, using real infrastructure instead of mocks. Examples: Service ↔ Repository, Repository ↔ Database, REST Controller ↔ Service. In Spring Boot you can use `@SpringBootTest` with `MockMvc` to test the full controller-service-repository stack, or `@DataJpaTest` to test a repository against a real in-memory database.

**Q: What is an E2E (End-to-End) test?**
An E2E test verifies the complete application from the user's perspective, exercising the entire stack: Browser → Frontend → Backend → Database. A typical test simulates a real user flow — open website, log in, add a product to cart, checkout, verify confirmation. Tools: Selenium, Cypress, Playwright. E2E tests are slow, expensive to maintain, and should only cover critical user journeys.

**Q: What is acceptance testing and what is BDD?**
Acceptance testing verifies that the software satisfies the business requirements — not "does this method work?" but "does the system solve the user's problem?". BDD (Behavior-Driven Development) is a technique where tests are written as human-readable scenarios (Given/When/Then) that stakeholders can understand. Common tools: Cucumber, SpecFlow.

**Q: What is smoke testing?**
A smoke test is a quick check that verifies the most critical functionality works after a deployment — for example: application starts, database connection works, login endpoint responds, home page loads. If smoke tests fail, further testing is stopped. The term comes from hardware testing where you power on a device and check it doesn't smoke.

**Q: What is regression testing?**
Regression testing ensures that new code has not broken existing functionality. After every bug fix or new feature, the existing test suite is re-run to confirm nothing regressed. It is usually automated and runs as part of the CI/CD pipeline, giving confidence that changes in one area have not introduced unexpected failures elsewhere.

**Q: What is performance testing and what are its subtypes?**
Performance testing measures how well an application behaves under load: response time, throughput, resource usage, scalability. Subtypes: load testing (expected traffic volume), stress testing (beyond capacity to find breaking point), spike testing (sudden traffic surge), endurance/soak testing (sustained load over time to find memory leaks). Common tools: JMeter, Gatling, k6.

**Q: What is security testing and what vulnerabilities does it look for?**
Security testing identifies vulnerabilities in the application before attackers do. Common targets: SQL Injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), broken authentication, and authorisation flaws. Common tools: OWASP ZAP (automated scanner) and Burp Suite (manual and automated web vulnerability scanner).


## 8.57 Debugging

### Interview Questions

**Q: What is the difference between a breakpoint, a conditional breakpoint, and a logpoint?**
Breakpoint: pauses execution at a specific line. Conditional breakpoint: pauses only when an expression is true (e.g. userId == 42) — essential for debugging inside loops. Logpoint: prints a message without pausing execution — like a temporary log statement added without changing code. All modern IDEs support all three.

**Q: What is the difference between step over, step into, and step out?**
Step over: execute the current line and move to the next without entering called methods. Step into: enter the called method on the current line. Step out: continue execution until the current method returns, pausing back in the caller. These controls let you navigate the call stack precisely.

**Q: What is remote debugging?**
Attaching a debugger to a process running on a different machine or in a container. In Java, start the JVM with -agentlib:jdwp=transport=dt_socket,server=y,address=5005 and connect the IDE to that port. Useful for debugging issues in staging environments or Docker containers without modifying the running application.

**Q: What is heap dump analysis and when would you use it?**
A heap dump is a snapshot of JVM memory — all live objects, their sizes, and references. Analysed with tools like Eclipse MAT or VisualVM to find memory leaks (objects not collected because they're unexpectedly still reachable). Take a heap dump when you observe steadily growing heap usage or an OutOfMemoryError.

**Q: What is rubber duck debugging?**
Explaining a problem out loud — to a rubber duck, a colleague, or an AI — often reveals the solution. Articulating the problem forces you to structure your thinking, notice your own assumptions, and spot logical errors you overlooked while staring at the code. It's genuinely effective.


## 8.58 Code Reviews

### Interview Questions

**Q: What is the purpose of a code review?**
Code reviews catch bugs before production, spread knowledge across the team, enforce standards, improve code quality, and reduce bus factor by ensuring multiple people understand each part of the codebase. They also help onboard junior developers by exposing them to established patterns.

**Q: What should you look for as a reviewer?**
Correctness (does it do what it should? edge cases handled?), readability (is it understandable at a glance?), security (SQL injection, input validation, secrets in code), performance (unnecessary queries, missing indexes), test coverage, adherence to architecture patterns, and consistency with the rest of the codebase.

**Q: How should you write review comments?**
Be specific and not personal. Say "this will throw a NullPointerException when X is null" not "this is wrong." Use prefix conventions: "nit:" for nitpicks that don't block, "blocker:" for must-fix issues. Offer solutions alongside criticisms. Use questions to seek understanding before assuming an error.

**Q: What is pair programming and how does it relate to code review?**
Pair programming is real-time collaboration where two developers share one workstation — one types (driver), one reviews and suggests (navigator). Unlike async reviews, pairs catch issues immediately, share knowledge continuously, and produce code that's already been reviewed. Trade-off: higher immediate time cost vs reduced review cycles.

**Q: What should a good pull request description contain?**
A good PR description explains what changed and why (not just what — the diff shows that), any important context or alternatives considered, how to test it, and any risks or known limitations. It helps reviewers understand intent quickly and helps future developers understand why code exists.


## 8.59 Agile / Scrum

### Interview Questions

**Q: What is the difference between Scrum and Kanban?**
Scrum uses fixed-length Sprints (1-4 weeks), defined ceremonies (Sprint Planning, Daily Standup, Sprint Review, Retrospective), and fixed team capacity. Kanban is a flow-based system with no fixed iterations — work flows continuously through columns limited by WIP (Work In Progress) limits. Scrum is structured; Kanban is continuous and flexible.

**Q: What are the Scrum roles?**
Product Owner: owns the backlog, prioritises, and represents stakeholder needs. Scrum Master: facilitates the Scrum process, removes impediments, coaches the team — not a project manager or line manager. Development Team: cross-functional, self-organising, responsible for delivering the Sprint increment. No hierarchy within the team.

**Q: What is the Definition of Done (DoD)?**
The DoD is a shared checklist of criteria every story must meet to be considered complete (e.g. code reviewed, unit tests passing, deployed to staging, acceptance criteria met, documentation updated). It prevents "done" from meaning different things to different people and ensures consistent quality.

**Q: What is a user story and what is the INVEST acronym?**
A user story captures a feature from the user's perspective: "As a [user], I want [feature] so that [benefit]." INVEST: Independent (deliverable standalone), Negotiable (details can evolve), Valuable (delivers user value), Estimable (team can size it), Small (fits in a Sprint), Testable (clear acceptance criteria).

**Q: What is velocity and how is it used?**
Velocity is the sum of story points completed in a Sprint. Tracked over multiple Sprints, it gives an average used to forecast how much work the team can take on per Sprint. Useful for release planning. Velocity is a planning tool — not a performance metric to compare between teams.


## 8.60 SDLC

### Interview Questions

**Q: What are the main phases of the SDLC?**
Requirements (what to build), Design (architecture, UX, data model), Implementation (coding), Testing (QA, UAT), Deployment (release to production), Maintenance (monitoring, bug fixes, enhancements). Waterfall goes through these once sequentially; Agile iterates through them in short cycles.

**Q: What is the difference between Waterfall and Agile SDLC?**
Waterfall is sequential — each phase must complete before the next begins. Requirements are frozen upfront; the product is delivered at the end. High risk of building the wrong thing. Agile is iterative — short cycles deliver working software continuously. Requirements evolve with feedback. Lower risk, but requires ongoing stakeholder engagement.

**Q: What is technical debt?**
Technical debt is the accumulated cost of shortcuts taken to deliver faster — poor design, missing tests, duplicated code, outdated dependencies. Like financial debt, it accrues interest: every new feature takes longer to build on a poor foundation. It must be intentionally managed and paid down through refactoring.

**Q: What is the difference between a release and a deployment?**
A deployment is making code available in an environment (pushing to production). A release is making a feature visible to users. With feature flags, you can deploy code without releasing the feature. Continuous Deployment means every passing commit deploys automatically; releasing is a separate concern controlled by flags.

**Q: What is a Software Requirements Specification (SRS)?**
An SRS is a comprehensive document describing the intended behaviour of a software system — functional requirements (what it does), non-functional requirements (performance, security, scalability), constraints, and user needs. In Agile, requirements are typically captured as user stories and epics in a backlog rather than a monolithic SRS.


## 8.61 Software Architecture

### Interview Questions

**Q: What is the difference between monolithic, SOA, and microservices architecture?**
Monolith: single deployable unit, simple to develop and deploy, becomes harder to scale and modify at size. SOA (Service-Oriented Architecture): services communicate via an enterprise service bus (ESB), typically SOAP/XML, more granular than a monolith. Microservices: fine-grained services with bounded contexts, independently deployed, communicate via REST or events.

**Q: What is SOLID?**
Single Responsibility (one reason to change), Open/Closed (open for extension, closed for modification), Liskov Substitution (subclasses must be substitutable for their base class), Interface Segregation (clients shouldn't depend on methods they don't use), Dependency Inversion (depend on abstractions, not concretions). SOLID principles guide maintainable OOP design.

**Q: What is the difference between horizontal and vertical scaling?**
Vertical scaling (scale up): adding more resources to a single machine (more CPU, RAM). Has a hard ceiling and is expensive. Horizontal scaling (scale out): adding more instances of the application. Requires stateless design (sessions in Redis, not in-process). Cloud environments are built for horizontal scaling.

**Q: What is eventual consistency?**
In distributed systems, it's often impossible to guarantee that all nodes see the same data at the same instant (the CAP theorem). Eventual consistency means updates will propagate and all nodes will converge to the same state — used in DNS, NoSQL databases, and event-driven microservices.

**Q: What is the CAP theorem?**
A distributed system can only guarantee two of three properties: Consistency (every read reflects the latest write), Availability (every request gets a response), Partition Tolerance (system works despite network partitions). Since partitions are unavoidable in practice, the real choice is between CP (consistent but may be unavailable during partitions) and AP (always available but may serve stale data).


## 8.62 Secure Development

### Interview Questions

**Q: What is the OWASP Top 10?**
The ten most critical web security risks: Broken Access Control, Cryptographic Failures, Injection (SQL, command, XSS), Insecure Design, Security Misconfiguration, Vulnerable and Outdated Components, Identification and Authentication Failures, Software and Data Integrity Failures, Security Logging Failures, and SSRF. Every developer should know these.

**Q: What is SQL injection and how do you prevent it?**
SQL injection embeds malicious SQL into user input: ' OR '1'='1 can bypass authentication. Prevention: parameterised queries and prepared statements (never concatenate user input into SQL), ORM frameworks (Hibernate/JPA handle escaping automatically), input validation, and least-privilege database accounts.

**Q: What is XSS (Cross-Site Scripting) and how do you prevent it?**
XSS injects malicious scripts into pages viewed by other users. Stored XSS: injected content is saved in the database. Reflected XSS: input is echoed in the response. DOM XSS: client-side JavaScript processes untrusted data unsafely. Prevention: encode output (HTML-escape user data before rendering), use Content Security Policy (CSP), avoid innerHTML with user-controlled data.

**Q: What is CSRF (Cross-Site Request Forgery) and how do you prevent it?**
CSRF tricks authenticated users into submitting requests they didn't intend to make — by embedding a malicious form on another site. Prevention: CSRF tokens (server-issued random token included in forms, validated on submit), SameSite cookie attribute (Strict or Lax), and checking Origin/Referer headers.

**Q: What is the principle of defence in depth?**
Security should be layered — multiple independent controls so that if one fails, others still protect the system. Application-level (input validation, auth checks), network-level (firewalls, TLS), infrastructure-level (least-privilege IAM, encrypted storage), and monitoring/alerting all work together. No single control should be the only line of defence.


## 8.63 Performance Optimization

### Interview Questions

**Q: What is the difference between latency and throughput?**
Latency: the time for a single operation to complete (milliseconds per request). Throughput: the number of operations completed per unit of time (requests per second). They can be in tension — batching increases throughput but adds latency to individual operations. Optimise for what matters most for the specific use case.

**Q: What is caching and what are the common cache invalidation strategies?**
Caching stores frequently accessed data in fast storage (Redis, in-memory) to avoid expensive recomputation or database calls. Invalidation strategies: TTL (expire after time), cache-aside (application manages reads and invalidates on writes), write-through (cache updated on every write), and event-based invalidation (clear cache on specific domain events).

**Q: What is the N+1 query problem?**
Loading a list of N records and then making an additional query for each — 1 + N total queries. Extremely common with ORMs used naively. Solution: eager loading (JOIN or IN query), DataLoader pattern (GraphQL), or denormalisation. The N+1 problem often only becomes visible at scale when N is large.

**Q: What is database query optimisation?**
Add indexes on columns used in WHERE, JOIN, and ORDER BY clauses. Use EXPLAIN/EXPLAIN ANALYZE to understand the query execution plan. Avoid SELECT * — only fetch needed columns. Use pagination (LIMIT/OFFSET or cursor-based). Avoid functions on indexed columns in WHERE clauses (prevents index use). Optimise joins and eliminate unnecessary subqueries.

**Q: What is a CDN and how does it improve performance?**
A Content Delivery Network is a globally distributed network of servers that caches static assets (images, CSS, JS, fonts) at edge locations close to users. Instead of serving from a single origin server, files are served from the nearest edge node — reducing latency from 200ms+ to under 20ms for geographically distant users.


## 8.64 Production Support

### Interview Questions

**Q: What is SLA, SLO, and SLI?**
SLI (Service Level Indicator): a metric measuring service performance (e.g. 99.5% of requests succeed in under 200ms). SLO (Service Level Objective): the target for that SLI (e.g. 99.9% availability per month). SLA (Service Level Agreement): the contractual commitment to the customer with penalties if breached. SLOs are internal targets; SLAs are external contracts.

**Q: What is an incident runbook?**
A runbook is a document with step-by-step procedures for handling a specific incident type — what to check, what commands to run, who to escalate to, and how to mitigate. Runbooks reduce cognitive load in high-stress situations and allow anyone on call to handle known failure modes quickly.

**Q: What is the difference between monitoring and observability?**
Monitoring tells you if something is wrong (dashboards and alerts on known metrics). Observability lets you understand why — by combining metrics (what is happening), logs (what happened in detail), and distributed traces (how a request flowed through services). Observability handles the unknown unknowns that monitoring can't anticipate.

**Q: What is a post-mortem (incident review)?**
A blameless post-mortem analyses a production incident after resolution. It documents: timeline of events, root cause, impact, detection method, resolution steps, and action items to prevent recurrence. Blameless means the focus is on systemic failures and process improvements — not on assigning blame to individuals.

**Q: What is on-call and what are best practices for it?**
On-call means being available to respond to production incidents outside business hours. Best practices: runbooks for known incidents, alerting on symptoms (latency, error rate) not just causes, meaningful alert thresholds to avoid fatigue, rotating schedules, shadow on-call for learning, post-mortems for every significant incident, and fixing toil that causes repeated pages.


### End of Guide