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
- 2.04 Microservices
- 2.05 Authentication & Authorization
- 2.06 API Integration
- 2.07 WebSockets
- 2.08 SOAP
- 2.09 JSON
- 2.10 XML
- 2.11 Network protocols


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
- 4.01 Microsoft Azure
- 4.02 Google Cloud Platform (GCP)
- 4.03 Firebase
- 4.04 Docker
- 4.05 Kubernetes
- 4.06 CI/CD Pipelines
- 4.07 Git
- 4.08 GitHub
- 4.09 Bitbucket
- 4.10 Maven
- 4.11 YAML


**Part 5 — Databases**
- 5.01 MySQL
- 5.02 MongoDB
- 5.03 SQL — Querying & Optimization
- 5.04 Data Modelling
- 5.05 PostgreSQL
- 5.06 GraphQL


**Part 6 — Testing & Quality**
- 6.01 JUnit
- 6.02 Mockito
- 6.03 SonarQube
- 6.04 Unit & Integration Testing
- 6.05 Debugging
- 6.06 Code Reviews


**Part 7 — Engineering Practices**
- 7.01 Agile / Scrum
- 7.02 SDLC
- 7.03 Software Architecture
- 7.04 Secure Development
- 7.05 Performance Optimization
- 7.06 Production Support


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

#### Critical: box-sizing

```css
/* Default: width applies to content only */
box-sizing: content-box;   /* width=200 + 20 padding + 2 border = 222px total */

/* More intuitive: width includes padding and border */
box-sizing: border-box;    /* width=200 always, padding and border are inside */

Best practice: set * { box-sizing: border-box; } globally.
```


### Specificity


When multiple CSS rules match the same element, specificity determines which one
wins. Calculated as a score (A, B, C):

```text
A — inline styles: style="..."          weight: 1000
B — IDs: #header                         weight: 0100
C — classes, attributes, pseudo-classes  weight: 0010
D — elements, pseudo-elements            weight: 0001
```

```css
p { color: blue; }                /* 0,0,0,1 */
.intro { color: green; }          /* 0,0,1,0 — wins over p */
#hero { color: red; }             /* 0,1,0,0 — wins over .intro */
style="color: orange"             /* 1,0,0,0 — wins over #hero */

!important overrides everything — a last resort, signals a design problem.
The cascade also considers source order: when specificity is equal, the later rule wins.
```

### Flexbox


Flexbox is a one-dimensional layout model (one axis at a time: row or column).
Perfect for aligning items within a container.


```css
.container {
    display: flex;
    flex-direction: row;           /* main axis: left→right (default) */
    justify-content: space-between; /* distribute along main axis */
    align-items: center;           /* align along cross axis */
    gap: 16px;                     /* space between items */
    flex-wrap: wrap;               /* allow items to wrap to next line */
}

.item {
    flex: 1;                       /* shorthand: flex-grow flex-shrink flex-basis */
    /* flex: 1 means: grow to fill available space equally */
    flex: 0 0 200px;               /* fixed 200px, don't grow or shrink */
}
```


### CSS Grid


Grid is two-dimensional — you define both rows AND columns simultaneously.
Use Grid for page-level layouts; use Flexbox for component-level alignment.


```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);   /* 3 equal columns */
    grid-template-columns: 200px 1fr 1fr;    /* fixed + 2 flexible */
    grid-template-rows: auto 1fr auto;       /* header, content, footer */
    gap: 24px;
}

/* Place an item explicitly */
.header { grid-column: 1 / -1; }      /* span all columns */
.sidebar { grid-row: 2 / 4; }         /* span rows 2-3 */
```


### CSS Custom Properties (css Variables)



```css
:root {
    /* Global CSS variables available throughout the application */
    --color-primary: #3b82f6;
    --spacing-md: 16px;
    --border-radius: 8px;
}

.button {
    /* Uses the CSS variables defined in :root */
    background: var(--color-primary);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
}

/* Overrides variable values when an element has data-theme="dark" */
[data-theme="dark"] {
    --color-primary: #60a5fa;
}
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


## 2.04 Microservices



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



## 2.05 Authentication & Authorization



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


## 2.06 API Integration



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



## 2.07 WebSockets



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


## 2.08 SOAP



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


## 2.09 JSON

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


## 2.10 XML

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


## 2.11 Network Protocols

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

React is a JavaScript library for building user interfaces, created by
Facebook/Meta. It is declarative — you describe how the UI SHOULD look based on
state, and React ensures the DOM stays in sync. It uses a Virtual DOM to
minimise actual DOM changes (which are slow). React is only the view layer —
you complement it with React Router (routing), Zustand/Redux (state), and
React Query/SWR (data fetching).


### Virtual DOM and Reconciliation


The Virtual DOM is an in-memory representation of the real DOM. When state
changes, React creates a new Virtual DOM tree, diffs it against the previous
one (reconciliation), and applies only the minimal set of real DOM changes
needed. This batching and diffing is what makes React fast.

React 18 introduced Concurrent Mode — React can now pause, interrupt, and
resume rendering. Long renders don't block the UI. 

**Key APIs:**

**useTransition** — mark a state update as non-urgent (show stale UI while transitioning, update in background)

**useDeferredValue** — defer re-rendering of a slow component

### Hooks


Hooks let you use React state and lifecycle features in function components.

**useState** — local component state

```tsx
const [count, setCount] = useState(0);
// Always use the setter: setCount(prev => prev + 1) for updates based on
// previous value (safe with concurrent rendering)
```

**useEffect** — synchronise with an external system (API, DOM, timers)

```tsx
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

Every time a component re-renders, all functions and calculations inside it
are recreated. useMemo and useCallback avoid this for expensive or
reference-sensitive values.


### Keys


Keys help React identify which list items have changed, been added, or removed.
They must be stable, unique among siblings, and not array indices (index keys
cause subtle bugs when items are reordered or deleted).


```tsx
// Bad — array index as key
{items.map((item, i) => <Item key={i} {...item} />)}

// Good — stable, unique ID
{items.map(item => <Item key={item.id} {...item} />)}
```


### Performance Patterns



```html
React.memo  — prevents re-render if props have not changed (shallow comparison)
  const MyComponent = React.memo(({ name }) => <div>{name}</div>);

Code splitting with React.lazy and Suspense:
  const HeavyChart = React.lazy(() => import("./HeavyChart"));
  <Suspense fallback={<Spinner />}>
      <HeavyChart />
  </Suspense>

State lifting: when two components need to share state, lift it to their
nearest common ancestor and pass it down as props.
```



## 3.02 Angular



### Overview

Angular is a complete framework — not just a library. It includes routing,
forms, HTTP client, testing utilities, and an opinionated architecture, all
out of the box. Built with TypeScript by Google. Angular uses a component-based
architecture and relies heavily on RxJS for reactive programming.


### Components, Templates, and Change Detection



```html
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

Change Detection: by default (Default strategy), Angular checks every component
on every browser event. OnPush strategy only checks when:
  - A component's @Input reference changes
  - An event originates from the component
  - An async pipe emits a new value
  - You manually call markForCheck()

OnPush dramatically improves performance in large apps.


### Services and Dependency Injection



```java
@Injectable({ providedIn: "root" })   // singleton for the entire app
export class UserService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>("/api/users");
    }
}
```

providedIn: "root" registers the service as a singleton without needing to
add it to any module's providers array.


### Rxjs Operators (critical for Angular Interviews)


**switchMap** — cancels the previous inner Observable when a new outer value arrives.

```javascript
Use for: autocomplete search (cancel old search when user types again)

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

```html
Use for: login button (ignore extra clicks while request is in-flight)

// async pipe in template — subscribes and auto-unsubscribes
<ul>
  <li *ngFor="let user of users$ | async">{{ user.name }}</li>
</ul>
```



## 3.03 Three.js



### Overview

Three.js is a JavaScript library that wraps WebGL, making 3D rendering
accessible without writing low-level shader code. WebGL is a JavaScript API
for GPU-accelerated graphics in the browser — powerful but complex. Three.js
abstracts it into scenes, cameras, meshes, lights, and materials.


### Core Concepts


Every Three.js application has three essential components:

**Scene**   — the 3D world container; you add objects to it

**Camera**  — defines your viewpoint (PerspectiveCamera for 3D realism;

```javascript
           OrthographicCamera for 2D/isometric)
RENDERER — draws the scene from the camera's perspective onto a canvas

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


**Performance**: 3D rendering is GPU-intensive. Key practices:
  - Reuse geometries and materials across Mesh instances
  - Use LOD (Level of Detail) — simpler meshes for distant objects
  - Dispose geometry/material/texture when removing from scene
  - Use BufferGeometry (not Geometry) — already the default in Three.js r125+


## 3.04 Next.js



### Overview

Next.js is the most popular React framework, developed by Vercel. It solves
React's biggest limitations: React alone is a client-side library, meaning the
browser downloads JavaScript, executes it, and then renders the page. This gives
poor SEO (search engines may not wait for JavaScript) and slow initial load.
Next.js adds server-side rendering, static generation, file-based routing,
API routes, image optimisation, and more — on top of React.


### The Four Rendering Modes


**CSR (Client-Side Rendering)** : browser downloads JavaScript and renders entirely
in the browser. Standard React. Fast interactions after load but slow first paint
and poor SEO.

**SSR (Server-Side Rendering)** : HTML is generated on the server per request, sent
to the browser, then hydrated (React takes over). Fresh data on every request,
good SEO, but slower than static (server work on every request).

**SSG (Static Site Generation)** : HTML is generated at BUILD time and cached as a
static file. Served instantly from CDN, perfect SEO, zero server computation per
request. But data can be stale until the next build.

**ISR (Incremental Static Regeneration)** : like SSG, but pages are regenerated in
the background after a specified time. You get static performance with
reasonably fresh data. The best of SSG and SSR for most cases.

### APP ROUTER FILE CONVENTIONS (NEXT.JS 13+)

Next.js 13 introduced the App Router — a significant change. The file structure
IS the routing structure. Inside the `app/` directory:

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

This is the central innovation of the App Router. By default, ALL components in
the app/ directory are React Server Components — they run ONLY on the server
and send HTML to the browser. No JavaScript for them is shipped to the client.


```sql
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

Client Components are needed when you require browser APIs or interactivity:


```html
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

```text
Server Component (default) — data fetching, accessing backends/databases, 
                              large dependencies (keep them off the client bundle)
Client Component — onClick/onChange, useState, useEffect, browser-only APIs,
                   real-time updates, complex animations
```


### Route Handlers (api Routes)


In Next.js 13+ (App Router), API endpoints are route.ts files:


```tsx
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



```python
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



```tsx
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

React Native lets you build native iOS and Android apps using React and
JavaScript. Unlike a web view wrapper (Cordova), React Native renders actual
native UI components — a <View> becomes a UIView on iOS, a View on Android.
The JavaScript runs on a separate thread; it communicates with the native side
through a bridge (or directly with JSI in the new architecture).


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

```tsx
ScrollView renders ALL children at once — fine for short lists but causes
performance issues with hundreds of items (all rendered even if off-screen).

FlatList renders only visible items plus a small buffer (virtualised).
Always use FlatList for dynamic lists of unknown or large length.

<FlatList
    data={users}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <UserCard user={item} />}
    onEndReached={loadMore}         // infinite scroll
    onEndReachedThreshold={0.5}    // trigger when 50% from end
/>
```

### BRIDGE vs JSI (NEW ARCHITECTURE)

**Old architecture**: JavaScript communicates with native code via an asynchronous bridge — serialises data to JSON, sends across, deserialises. This is a
performance bottleneck for frequent calls.

**New architecture (JSI — JavaScript Interface)**: JavaScript can call native
functions synchronously, holding references to native objects directly. No
serialisation. Enables React Native's Fabric renderer and Turbo Modules.


## 3.06 Flutter



### Overview

Flutter is Google's UI toolkit for building natively compiled applications for
mobile, web, and desktop from a single codebase. Written in Dart. Unlike React
Native, Flutter does NOT use native UI components — it draws every pixel itself
using its own Skia/Impeller rendering engine. This gives pixel-perfect
consistency across platforms.


### Widgets — EVERYTHING IS A WIDGET

In Flutter, the entire UI is built from widgets — from layout containers to
buttons to padding to the app itself. There are two kinds:

```text
StatelessWidget — immutable; build() always produces the same output for the
```
same inputs. No mutable state.


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

**StatefulWidget** — has mutable state that can change over time. Flutter creates a
separate State object that persists between rebuilds. When you call setState(),
Flutter schedules a rebuild of the widget.


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


**Buildcontext** — THE KEY TO THE WIDGET TREE

BuildContext is a handle to the widget's location in the widget tree. It is how
widgets access inherited data (Theme, MediaQuery, Navigator, Provider) without
passing it explicitly through every layer.


```dart
@override
Widget build(BuildContext context) {
    final theme = Theme.of(context);      // access app theme
    final size = MediaQuery.of(context).size;  // screen dimensions
    return Text("Hello", style: theme.textTheme.headline6);
}
```



## 3.07 Kotlin



### Overview

Kotlin is a statically typed language developed by JetBrains, running on the JVM
(and compilable to native/JS). Google made it the preferred language for Android
development. Kotlin is fully interoperable with Java — you can call Java code
from Kotlin and vice versa. Kotlin's design goal is to be more concise, safer,
and more expressive than Java.


### NULL Safety


Kotlin distinguishes nullable and non-nullable types at the type-system level,
eliminating NullPointerExceptions at compile time:

var name: String = "Beatriz"    // non-nullable — cannot be null
var nickname: String? = null    // nullable — explicitly marked with ?

val length = nickname?.length   // safe call — null if nickname is null
val len = nickname?.length ?: 0 // elvis operator — default value if null
val upper = nickname!!.uppercase()  // non-null assertion — throws if null

### Data Classes



```kotlin
data class User(val id: Long, val name: String, val email: String)
```

The data class keyword auto-generates: equals(), hashCode(), toString(), copy(),
and componentN() functions for destructuring. One line replaces 50+ lines of
Java boilerplate.


```text
val user = User(1, "Beatriz", "b@example.com")
val updated = user.copy(email = "new@example.com")   // copy with one field changed
val (id, name) = user    // destructuring
```


### Coroutines


Coroutines are Kotlin's solution for asynchronous programming. They are
lightweight "suspendable computations" — a coroutine can suspend at a suspension
point without blocking its underlying thread, and resume later (possibly on a
different thread). You can have thousands of coroutines on a handful of threads.


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

```text
Dispatchers.Main   — Android UI thread (for UI updates)
Dispatchers.IO     — for network/disk I/O (large pool of threads)
Dispatchers.Default — CPU-intensive work (bounded pool, one per CPU core)
```


## 3.08 Swift



### Overview

Swift is Apple's programming language for iOS, macOS, watchOS, and tvOS
development. Released in 2014, it replaced Objective-C with a safer, more
modern syntax. Swift is statically typed, compiled, and designed for both
safety (optionals, immutability) and performance.


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


### Swiftui


SwiftUI is Apple's declarative UI framework (2019+). Like React, you describe
what the UI should look like, and SwiftUI renders it. Views are structs
(value types), making them lightweight.


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

```text
@State          — local state for a view
@StateObject    — owns an ObservableObject (create it)
@ObservedObject — observes an ObservableObject (passed in)
@EnvironmentObject — injected from ancestor view
@Binding        — two-way connection to parent's @State
```

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

Vite is a modern frontend build tool created by Evan You (Vue.js creator). It
was designed to solve the pain points of webpack-based tools: slow cold starts
and slow Hot Module Replacement (HMR) in large projects. Vite achieves this by
leveraging native ES modules in the browser during development — no bundling
needed at dev time.


### How Vite Works


DEVELOPMENT (no bundling):
Vite starts instantly because it does not bundle anything upfront. When the
browser requests a file, Vite transforms it on demand (TypeScript → JS,
CSS → injected styles) using esbuild (written in Go — extremely fast).
The browser uses native ES module imports, loading files lazily.
PRODUCTION (bundled with Rollup):

```python
For production, Vite uses Rollup to bundle and optimise everything — tree
shaking, code splitting, asset fingerprinting. The browser gets efficient
bundles, not individual module files (which would be too many HTTP requests).

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

Tailwind CSS is a utility-first CSS framework. Instead of writing custom CSS
classes, you compose pre-defined utility classes directly in HTML/JSX. Every
class does exactly one thing: text-blue-500 sets the text colour, p-4 sets
16px padding on all sides, flex makes the element a flex container.


### How It Works


At build time, Tailwind scans your HTML/JSX/Vue files for class names and
generates a CSS file containing only the utilities actually used (tree-shaking).
This keeps the production CSS file tiny even though Tailwind has thousands of
utilities.


```c
<!-- Without Tailwind — write CSS in separate file -->
<button class="btn btn-primary">Save</button>

<!-- With Tailwind — describe appearance inline -->
<button class="bg-blue-500 hover:bg-blue-600 text-white font-medium
               px-4 py-2 rounded-lg shadow transition-colors">
    Save
</button>
```

#### Breakpoints with responsive prefixes

```text
sm:   — applies at ≥ 640px
md:   — applies at ≥ 768px
lg:   — applies at ≥ 1024px
xl:   — applies at ≥ 1280px
```

```text
<div class="flex-col sm:flex-row">   <!-- stack on mobile, row on tablet+ -->
State variants:
hover:bg-blue-600   — on hover
focus:ring-2        — on focus
active:scale-95     — on click
dark:bg-gray-800    — in dark mode
The @layer and @apply directives let you extract repeated patterns into reusable
classes without losing the utility-first approach.
```

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

Rule of thumb: use CSS custom properties for theme tokens and values that need
to change at runtime; use SCSS variables for build-time constants like breakpoints
or to feed into SCSS functions and loops.


### Nesting


SCSS lets you nest selectors inside each other, mirroring the HTML structure.
This eliminates repetition and keeps related styles together. The & symbol
refers to the parent selector and is used for pseudo-classes, modifiers, and
BEM naming.


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

Avoid nesting more than 3 levels deep — it generates overly specific selectors
that are hard to override and slow for the browser to match.


### Mixins** — REUSABLE STYLE BLOCKS WITH PARAMETERS

A mixin is a named block of CSS declarations that can be included anywhere with
@include. Mixins can accept parameters, making them far more powerful than
copy-pasting CSS. They are the SCSS equivalent of a function that outputs CSS.


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


@extend lets one selector inherit all the styles of another. Useful for shared
base styles (e.g. all buttons share a base, then each variant extends it).
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


Partials are SCSS files prefixed with _ (e.g. _variables.scss). They are not
compiled to CSS on their own — they must be imported into another file. This
lets you split your styles into logical modules.


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

```text
@import — global scope, everything pollutes the same namespace, deprecated
@use    — namespaced (v.$primary), no global leaks, loads each file only once
```

### Built-in Functions and Loops


SCSS ships with colour functions and control flow that let you generate CSS
programmatically — impossible in plain CSS.


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
  - You need runtime theming — CSS custom properties change dynamically, SCSS
variables cannot
• Working in a CSS-in-JS context (Styled Components, Emotion) where JavaScript
already provides variables and logic
Key interview facts:
  - SCSS compiles to CSS — browsers never see SCSS, zero runtime overhead
  - & is the parent selector reference: .card { &:hover {} } → .card:hover {}
  - %placeholder selectors are invisible until extended — they prevent dead CSS
  - @use replaced @import (deprecated in Dart Sass 1.23) — it's namespaced
  - darken() and lighten() are deprecated in new Sass; use color.adjust() instead
  - SCSS is a strict superset of CSS — any valid CSS file can be renamed .scss


#### Appendix — Quick Interview Reference

**Languages**

```text
Java:       OOP (4 pillars), HashMap internals, Optional, Streams API, @Transactional
TypeScript: interface vs type, generics, utility types (Partial/Pick/Omit), narrowing
JavaScript: event loop, microtasks vs macrotasks, closures, this, async/await
Dart:       null safety, final vs const, Future vs Stream, isolates
C:          pointers, malloc/free, stack vs heap, buffer overflow
```

**Web & APIs**

```text
HTML:         semantic elements, DOM, defer vs async, aria accessibility
CSS:          box model, specificity, flexbox vs grid, custom properties
Spring Boot:  IoC/DI, bean scopes, @Transactional, N+1 problem, Spring Data JPA
Node.js:      event loop phases, process.nextTick, streams, middleware pattern
REST APIs:    HTTP methods + idempotency, status codes (401 vs 403), naming
Microservices: circuit breaker (3 states), saga pattern, CAP theorem
AuthN/AuthZ:  JWT structure, OAuth2 flows, RBAC vs ABAC, bcrypt, httpOnly cookies
WebSockets:   upgrade handshake, SSE vs WS, scaling with Redis pub/sub
```

**Frameworks & Mobile**

```text
React:        virtual DOM, hooks (all), keys, reconciliation, memo/callback
Angular:      RxJS operators (switchMap vs mergeMap!), OnPush CD, async pipe
React Native: FlatList vs ScrollView, bridge vs JSI, StyleSheet.create
Flutter:      StatefulWidget + setState, BuildContext, ListView.builder
Kotlin:       null safety, coroutines, Dispatchers, data classes
Swift:        optionals (if let, guard let), @State/@StateObject, async/await
```

**Cloud & DevOps**

```text
Azure:       IaaS vs PaaS vs FaaS, App Service slots, Functions triggers, Key Vault, Managed Identity
GCP:         Cloud Run, BigQuery (analytics, not OLTP), Pub/Sub at-least-once delivery
Firebase:    Firestore data model, security rules, onSnapshot cleanup
Docker:      image vs container, layer caching, multi-stage build, CMD vs ENTRYPOINT
Kubernetes:  Pod/Deployment/Service/Ingress, requests vs limits, liveness vs readiness
CI/CD:       pipeline stages, blue-green vs canary, feature flags
Maven:       POM, GAV coordinates, dependency scopes, build lifecycle, BOM
```

**Databases**

```text
MySQL:      ACID, InnoDB, B-tree index, composite index order, EXPLAIN, utf8mb4
MongoDB:    embed vs reference, aggregation pipeline, $lookup, TTL index
SQL:        JOINs, window functions (RANK/LAG/ROW_NUMBER), CTEs, offset vs keyset
Data Model: normalization (3NF), soft delete, audit columns, price snapshot
```

**Quality & Process**

```text
JUnit 5:     AAA pattern, @Nested, @ParameterizedTest, @WebMvcTest, @DataJpaTest
Mockito:     mock vs spy, when/thenReturn, verify, ArgumentCaptor
SonarQube:   bug vs vulnerability vs hotspot vs smell, quality gate, coverage
Testing:     testing pyramid, unit vs integration, Testcontainers
Debugging:   read full stack trace, breakpoints (conditional), structured logging
Code Review: blocking vs nit, feedback on code not on the person
Agile/Scrum: PO + SM + Team, backlog + sprint backlog + increment, velocity ≠ productivity
```

**Architecture & Production**

```text
SDLC:         7 phases, functional vs non-functional requirements
Architecture: SOLID (all 5), design patterns, CAP theorem, system design framework
Security:     OWASP Top 10, SQL injection fix, JWT storage, CSP header
Performance:  measure first, cache strategies, Core Web Vitals (LCP/INP/CLS)
Production:   3 pillars of observability, SLI/SLO/SLA/error budget, blameless post-mortem
```


## 3.12 SPA (Single-Page Applications)



### Overview

A Single-Page Application loads one HTML page and dynamically updates content
as the user navigates, instead of requesting a new HTML page from the server
on every navigation. React, Angular, and Vue are SPA frameworks.


### How Routing Works in an SPA


Client-side routing intercepts navigation and updates the URL and rendered
component WITHOUT a server request:


```text
History API: window.history.pushState() changes the URL bar silently.
The browser does NOT send a request to the server.
React Router or Angular Router listen for these URL changes and render
the matching component.

Server configuration: the server must return the SPA's index.html for ALL
routes (not just /). If a user refreshes /users/123, the server must serve
index.html — the SPA's JavaScript then reads the URL and renders the right
component. Without this config, a refresh on any non-root URL gives a 404.
```


### SPA Tradeoffs


#### Advantages

```text
• Smooth, app-like UX — no full page reloads
• Rich interactivity — can update parts of the page independently
• Reduced server load after initial load
```

#### Disadvantages

```text
• Initial load is heavy — must download JS bundle before anything renders
• SEO is harder — crawlers may not execute JavaScript (SSR/SSG mitigate this)
• Browser history management requires care
• Accessibility: focus management on route changes must be handled manually
```


## 3.13 Responsive UI



### Overview

Responsive UI means the interface adapts its layout to the screen size and
device capabilities — desktop, tablet, or phone — using the same HTML/CSS
codebase.


### Core Techniques



#### Viewport Meta Tag
required for mobile rendering to work correctly
<meta name="viewport" content="width=device-width, initial-scale=1">
Without this, mobile browsers render at 980px and shrink down (tiny text).

#### Media Queries
apply styles conditionally based on screen characteristics

```css
@media (max-width: 768px) {       /* mobile */
    .sidebar { display: none; }
}
@media (min-width: 769px) and (max-width: 1199px) { /* tablet */ }
@media (min-width: 1200px) { /* desktop */ }

/* Prefer min-width (mobile-first) over max-width (desktop-first) */
```

#### RELATIVE UNITS
%    — relative to parent element
em   — relative to the element's own font-size
rem  — relative to the root (html) font-size — more predictable than em
vw/vh — relative to viewport width/height
**clamp** (min, preferred, max) — fluid sizing: font-size: clamp(16px, 2vw, 24px)
#### FLEXIBLE IMAGES

```css
img { max-width: 100%; height: auto; }   /* images never overflow container */
<img srcset="img-400.jpg 400w, img-800.jpg 800w" sizes="(max-width: 600px) 400px, 800px">
```

CORE WEB VITALS (what Google measures):

```text
LCP (Largest Contentful Paint) — time until largest visible element renders
                                 Target: < 2.5 seconds
INP (Interaction to Next Paint) — delay between user input and next paint
                                  Target: < 200ms
CLS (Cumulative Layout Shift) — how much content unexpectedly shifts around
                                 Target: < 0.1
```



## 3.14 Cross-Platform Development



### Overview

Cross-platform development means writing one codebase that runs on multiple
platforms: iOS, Android, web, or desktop. The main approaches differ in their
output and performance tradeoffs.


### Approaches



**Native** — separate codebases per platform (Swift/ObjC for iOS, Kotlin/Java for
Android). Maximum performance and access to all platform APIs, but doubles the
work. Used by: large companies with dedicated iOS and Android teams.


**React Native** — JavaScript + React. Renders actual native components. Good
performance for most apps; some limits for animation-heavy or graphics-intensive
apps. Large ecosystem (Expo), code sharing with web is possible.


**Flutter** — Dart. Renders everything itself with its own engine (no native UI
components). Pixel-perfect consistency across platforms; excellent animation
performance. Faster to develop than native but larger app size.


**Progressive Web Apps (pwa)** — web apps that can be installed on devices, run
offline (Service Worker), and access some native features (notifications, camera).
Works on all platforms with a browser; limited access to native APIs.

Tradeoffs:
┌──────────────┬──────────┬──────────────┬──────────────┐
│              │ Native   │ React Native │ Flutter      │
├──────────────┼──────────┼──────────────┼──────────────┤
│ Performance  │ Best     │ Good         │ Very Good    │
│ Code sharing │ 0%       │ ~70-80%      │ ~90%+        │
│ Native feel  │ Perfect  │ Good         │ Custom       │
│ Time to ship │ Slowest  │ Medium       │ Fast         │
│ Team needed  │ 2 teams  │ 1 team       │ 1 team       │
└──────────────┴──────────┴──────────────┴──────────────┘

---

# Part 4 — Cloud & Devops



## 4.01 Microsoft Azure



### Overview

Azure is Microsoft's cloud platform. It covers IaaS (raw VMs, disks, networks),
PaaS (managed services like databases, app hosting), and FaaS (Functions,
serverless). Azure is the dominant cloud in enterprises and organisations
already using Microsoft tools (Active Directory, Office 365, .NET).


### Key Services



**App Service** — fully managed platform to deploy web apps (Java, .NET, Node.js,
Python, Docker). You bring the code; Azure manages the OS, runtime, scaling.
Key features:
  - Deployment slots — deploy to staging, test, then swap to production

```text
  with zero downtime (traffic is redirected atomically)
• Scale up (bigger VM) or scale out (more instances) via settings
• Built-in CI/CD integration with GitHub Actions
```


**Azure Functions** — serverless compute. Write a function that responds to a
trigger; Azure handles the infrastructure and scales to zero when idle.
**Triggers**: HTTP, Timer (cron), Blob Storage, Service Bus, Cosmos DB change feed.


```tsx
// HTTP-triggered function (C#)
[FunctionName("GetUser")]
public async Task<IActionResult> Run(
    [HttpTrigger(AuthorizationLevel.Function, "get", Route = "users/{id}")] HttpRequest req,
    string id,
    ILogger log)
{
    var user = await _repo.FindByIdAsync(id);
    return user != null ? new OkObjectResult(user) : new NotFoundResult();
}
```


**Azure Key Vault** — store and retrieve secrets, connection strings, certificates,
and API keys without embedding them in code or environment variables. Apps
retrieve secrets at runtime using Managed Identity (no credentials needed).


**Managed Identity** — lets an Azure resource (App Service, VM, Function) identify
itself to other Azure services (Key Vault, Azure SQL, Blob Storage) WITHOUT
any stored credentials. The platform handles the token exchange invisibly.


```java
// Spring Boot: get secret from Key Vault (no password in code)
@Value("${my-database-password}")  // read from Key Vault via Spring Cloud Azure
private String dbPassword;
```

**AZURE ACTIVE DIRECTORY (AAD / Entra ID)** — identity provider for authentication
and SSO (Single Sign-On) in enterprise environments. Supports OAuth2/OIDC,
SAML, and multi-factor authentication.


**Azure Service Bus** — enterprise message broker (queues and topics with
subscriptions). Use for reliable async communication between services.


## 4.02 Google Cloud Platform (GCP)



### Overview

GCP is Google's cloud platform. It excels in data analytics, machine learning,
and container-based workloads (it invented Kubernetes). Cloud Run and BigQuery
are among the most loved services in the developer community.


### Key Services



**Cloud Run** — fully managed serverless platform for containerised applications.
You give it a Docker image; Cloud Run runs it and scales from zero to thousands
of instances automatically. Pay per request (no cost when idle).

gcloud run deploy my-service \
--image gcr.io/my-project/my-app:v1 \
--region europe-west1 \
--allow-unauthenticated \
--port 8080

**Cloud Functions** — event-driven serverless functions. Similar to Azure Functions;
triggers include HTTP, Pub/Sub, Cloud Storage events.


**Bigquery** — serverless data warehouse for analytics. Querying petabytes of data
in seconds using standard SQL. NOT for OLTP (transactional) workloads — it is
optimised for analytical queries over large datasets, not individual row updates.


```sql
-- BigQuery SQL example
SELECT DATE_TRUNC(created_at, MONTH) AS month, COUNT(*) AS orders
FROM `project.dataset.orders`
WHERE created_at >= '2024-01-01'
GROUP BY month
ORDER BY month;
```


**Cloud Pub/Sub** — managed message bus for event-driven architectures.
Delivery guarantee: at-least-once (messages may be delivered more than once;
your consumer must be idempotent). FIFO ordering not guaranteed by default
(use message ordering with ordering keys if needed).

**GKE** (Google Kubernetes Engine) — managed Kubernetes service. Google invented
Kubernetes and runs the control plane for you.


## 4.03 Firebase



### Overview

Firebase is Google's backend-as-a-service platform aimed at mobile and web apps.
It provides a real-time database, authentication, hosting, functions, and more —
letting frontend developers build full-stack apps without managing servers.


### Firestore Data Model


Firestore is a NoSQL document database organised into Collections and Documents:

```tsx
Collection — like a folder or a table; holds Documents
Document   — like a row; holds fields (key-value pairs) and can have
             sub-collections

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
They run on Google's servers — even if your client-side code is bypassed,
the rules protect your data.


```css
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



## 4.04 Docker



### Overview

Docker packages an application and all its dependencies into a container — a
lightweight, portable, isolated unit that runs consistently on any machine with
Docker installed. "Works on my machine" problems disappear because the container
carries its own runtime environment.

Key distinction: Image vs Container

**Image** — a read-only blueprint (like a class). Contains the filesystem,
environment variables, and startup command.

**Container** - a running instance of an image (like an object). Has its own
isolated process, network, and filesystem layer on top of the image.

### Dockerfile and Layer Caching


A Dockerfile is a script of instructions for building an image. Each instruction
creates a LAYER. Docker caches layers — if an instruction has not changed
since the last build, Docker reuses the cached layer and skips re-running it.


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

**Entrypoint** — the main process of the container; cannot be overridden with

```dockerfile
             docker run args (only --entrypoint flag overrides it)
CMD        — default arguments to ENTRYPOINT; can be overridden with docker run args
```


### Multi-stage Builds


Multi-stage builds solve the problem of build tooling (JDK, Maven, node_modules)
ending up in the final image, making it huge. Build in one stage; copy only the
compiled artifact into a minimal runtime image.

Result: a Spring Boot app built with a JDK image produces a ~600MB image.
With multi-stage (JDK build → JRE runtime), the final image is ~150MB.


## 4.05 Kubernetes (K8s)



### Overview

Kubernetes is an open-source system for automating deployment, scaling, and
management of containerised applications. It was created by Google. Kubernetes
runs on a cluster of nodes; you describe the desired state and Kubernetes
continuously works to maintain it.


### Core Objects


#### POD
the smallest deployable unit. Wraps one or more containers that share the
same network namespace and storage. Pods are ephemeral — they can be killed and
replaced at any time.


**Deployment** — declares the desired state for a set of Pods (which image, how many
replicas). The Deployment controller ensures that state is maintained. Handles
rolling updates and rollbacks.


**Service** — a stable network endpoint for a set of Pods. Pods die and are replaced
with new IPs; the Service provides a stable IP and DNS name that routes to
healthy Pods.

#### Types

```text
ClusterIP   — internal only (default); accessible within the cluster
NodePort    — exposes on a port of every node; for testing
LoadBalancer — creates an external cloud load balancer; for production
```

**Ingress** — HTTP(S) routing rules at the cluster edge. Routes external traffic to
internal Services based on hostname or URL path. Requires an Ingress Controller
(Nginx, Traefik, AWS ALB controller).


**Configmap** — non-sensitive configuration as key-value pairs, injected as env vars
or mounted as files.


**Secret** — like ConfigMap but for sensitive data (base64-encoded in etcd, or
encrypted with envelope encryption). Always use Secrets for passwords, tokens,
and keys — never put them in ConfigMaps or image layers.

### REQUESTS vs LIMITS


```python
resources:
  requests:
    memory: "256Mi"   # what the container is guaranteed to get
    cpu: "250m"       # used for scheduling (where to place the Pod)
  limits:
    memory: "512Mi"   # max it can use — exceed this → OOMKilled
    cpu: "500m"       # exceed this → throttled (not killed)
```

### LIVENESS vs READINESS PROBES

Liveness probe: is the container ALIVE? If it fails, Kubernetes restarts the
container. Use for: detecting deadlocks or infinite loops.

Readiness probe: is the container READY to serve traffic? If it fails,
Kubernetes removes the Pod from the Service's endpoints (no traffic is sent).
Use for: startup time, database connections, dependency warm-up.


## 4.06 CI/CD Pipelines



### Overview

**CI (Continuous Integration)** : developers merge code changes frequently (multiple
times per day), and each merge triggers an automated pipeline that compiles,
tests, and validates the code.

**CD (Continuous Delivery)** : every passing build can be deployed to production
with a single click (or fully automatically, which is Continuous Deployment).


### Typical Pipeline Stages



```kotlin
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
```


### Deployment Strategies



**Blue-green** — run two identical production environments (blue = current, green =
new version). Switch traffic from blue to green atomically. Rollback: switch back
instantly. Requires double the infrastructure.


**Canary** — gradually route a small percentage of traffic (5-10%) to the new version
while most users still use the old one. Monitor error rates and latency before
increasing the traffic percentage. Rollback: route 0% to canary.


**Rolling Update** — replace old Pods with new ones gradually. Default Kubernetes
Deployment strategy. No extra infrastructure needed, but for a brief period
both old and new versions serve traffic.


**Feature Flags** — deploy code but control which users see new features via
configuration, without a new deployment. Enables A/B testing, gradual rollouts
to specific user segments, and instant "kill switch" if a feature causes problems.


## 4.07 Git



### Overview

Git is a distributed version control system — every developer has a complete
copy of the repository. Created by Linus Torvalds for the Linux kernel.


### How Git Stores Data — THE FOUNDATION OF EVERYTHING

Git does NOT store diffs — it stores SNAPSHOTS. Each commit is a snapshot of
all tracked files at that moment. For efficiency, Git does not copy unchanged
files — it stores a pointer to the previous version.

Each Git object is identified by a SHA-1 hash of its content. If two files
have identical content, they share one hash and one storage object.

#### Object types

```text
blob     — stores file content
tree     — stores directory listing (mapping filenames to blobs or other trees)
commit   — stores a tree pointer + parent commit pointer + author + message
tag      — named pointer to a commit
```
A BRANCH is just a file containing one SHA-1 hash — the tip commit.
HEAD is a pointer to the current branch (or a specific commit in detached HEAD
state). Moving between branches is just updating these pointers.


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

### MERGE vs REBASE


**Merge** — creates a new "merge commit" that joins two branch histories. Preserves
the true history of when and how features were developed. History can be noisy.


**Rebase** — moves or replays your commits on top of another branch. Creates a linear
history (cleaner log). Changes commit hashes — never rebase commits that have
been pushed to a shared branch.

Convention: rebase local feature branches onto main for a clean history before
merging; never rebase public/shared branches.


## 4.08 GitHub



### Overview

GitHub is the world's largest code hosting platform. Beyond hosting Git
repositories, it provides collaboration tools: Pull Requests, Issues, Actions
(CI/CD), Projects (kanban), Packages (artifact registry), and Codespaces
(cloud dev environment).


### Pull Requests


A Pull Request (PR) is a request to merge code from one branch into another.
It is the unit of code review in most teams.

PR best practices:
  - Keep PRs small and focused — one concern per PR. Large PRs are hard to review.
  - Write a clear description: WHAT changed, WHY, and HOW to test.
  - Link to the issue or ticket it resolves (Closes #123 auto-closes the issue).
  - Check CI passes before requesting review.
  - Address all reviewer comments; don't dismiss without resolution.

Branch protection rules: require PR reviews, passing CI checks, and branch
up-to-date with base before merging. Prevents direct pushes to main.


### Github Actions


GitHub Actions is GitHub's built-in CI/CD system. Workflows are defined in
.github/workflows/*.yml and triggered by GitHub events (push, PR, schedule,
manual dispatch).

See YAML section (4.11) for a full GitHub Actions workflow example
Marketplace has thousands of pre-built actions (setup-java, setup-node,
docker/login-action, aws-actions, etc.) that you reuse with the uses: directive.


## 4.09 Bitbucket



### Overview

Bitbucket is Atlassian's Git code hosting platform. It integrates natively with
Jira (Atlassian's issue tracker) and Confluence (wikis). Popular in organisations
already using the Atlassian ecosystem.


### Bitbucket Pipelines


Bitbucket Pipelines is the built-in CI/CD system, configured with
bitbucket-pipelines.yml at the repo root.

image: maven:3.9-eclipse-temurin-17   # Docker image to run pipeline steps

pipelines:

```text
default:                            # runs on any branch without a specific rule
```
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

```text
AWS_ACCESS_KEY_ID: $AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY: $AWS_SECRET_ACCESS_KEY
APPLICATION_NAME: "my-app"
ENVIRONMENT_NAME: "my-app-prod"
```
Bitbucket-specific features:
  - Pull Request pipelines — run on the merged result of a PR before merging
  - Deployment environments — track which version is deployed where (staging, prod)
  - Branch permissions — similar to GitHub branch protection rules
  - Smart Mirroring — sync repositories across multiple regions for global teams


## 4.10 Maven


Maven is a build automation and project management tool for Java projects,
maintained by the Apache Software Foundation. It answers the question: how do
you compile, test, package, and deploy a Java application in a repeatable,
standardised way? Before build tools like Maven existed, developers had to
manually manage where JAR files lived, remember the exact javac commands,
and share zip archives of dependencies. Maven replaced all of that with a
declarative model: you describe WHAT your project is and WHAT it depends on,
and Maven figures out HOW to build it.

### THE POM FILE — Project Object Model

Every Maven project is defined by a pom.xml file at its root. POM stands for
Project Object Model. It is an XML file that acts as the single source of
truth for your project's identity, dependencies, plugins, and build behaviour.

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

The three coordinates — groupId, artifactId, version — are called GAV
coordinates (or simply "coordinates"). They uniquely identify any artifact
in the Maven ecosystem. When you declare a dependency, Maven uses these to
look up the artifact in a repository.

### DEPENDENCY SCOPES

Scope controls when a dependency is available on the classpath:

• compile  — (default) available in main code, tests, and bundled in the
             final artifact. Use for everything your app needs at runtime.

• test     — only available when compiling and running tests. JUnit, Mockito,
             AssertJ all belong here. They are NOT included in the JAR/WAR
             you ship to production.

• provided — available at compile time but NOT bundled, because the runtime
             environment provides it. Lombok (annotation processor), Servlet
             API (provided by Tomcat), and Jakarta EE APIs are common examples.

• runtime  — NOT needed at compile time, but needed at runtime. JDBC drivers
             are the classic example: you compile against java.sql.* (standard
             interfaces), but at runtime you need the specific driver JAR.

• import   — only valid in <dependencyManagement>; used to import a BOM
             (Bill of Materials) to align dependency versions without
             declaring a parent POM.

### HOW MAVEN RESOLVES DEPENDENCIES — THE LOCAL REPOSITORY

When you run a Maven build for the first time, Maven checks your local
repository (by default ~/.m2/repository/) for each dependency. If the JAR is
not there, Maven downloads it from a remote repository (by default Maven
Central at search.maven.org) and caches it locally. Every subsequent build
uses the local cache, so you only download once.

The directory structure in the local repo mirrors the GAV coordinates:
  ~/.m2/repository/org/springframework/boot/spring-boot-starter-web/3.2.0/
    spring-boot-starter-web-3.2.0.jar
    spring-boot-starter-web-3.2.0.pom   ← Maven reads this to get transitive deps

This is how transitive dependencies work: Maven reads the POM of every
dependency, finds THEIR dependencies, and downloads those too. If spring-
boot-starter-web depends on jackson-databind, you don't need to declare
jackson-databind yourself — Maven resolves the whole tree.

### THE BUILD LIFECYCLE

Maven's default build lifecycle is a fixed, ordered sequence of phases. When
you invoke a phase, all preceding phases run first:

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

A child POM can inherit from a parent POM. The most common parent is the
Spring Boot parent, which pre-configures dozens of plugin versions, default
properties, and dependency versions so you don't have to manage them yourself.

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

A Bill of Materials (BOM) is a special POM that declares the versions of a
set of related dependencies, without actually pulling them in. You import a
BOM to get consistent, tested version combinations.

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

Large projects split into modules: separate Maven projects each with their
own pom.xml, coordinated by a root "aggregator" POM. This is the standard
layout for microservice mono-repos or layered architectures.

```
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

Maven uses XML (pom.xml) and a strict, opinionated lifecycle. Gradle uses
Groovy or Kotlin DSL (build.gradle / build.gradle.kts) and is more flexible
and faster (incremental builds, build cache). Spring Boot projects work with
both. In interviews, knowing Maven is expected for Java/Spring roles; Gradle
is more common in Android (where it is mandatory) and newer Spring projects.

Key Maven conventions to memorise:

```text
• src/main/java/   → production source code
• src/main/resources/ → properties, YAML, static files
• src/test/java/   → test source code
• target/          → all build output (always in .gitignore)
• ~/.m2/repository/ → local dependency cache
```


## 4.11 YAML


YAML (YAML Ain't Markup Language — a recursive acronym) is a human-readable
data serialisation format. It is not a programming language and has no
executable logic. Its only job is to represent structured data (strings,
numbers, booleans, lists, maps) in a format that humans can read and write
comfortably. YAML is the dominant configuration format in modern software:
Kubernetes manifests, Docker Compose files, CI/CD pipelines (GitHub Actions,
GitLab CI), Spring Boot's application.yml, and Ansible playbooks are all YAML.

### YAML vs JSON vs XML

All three formats represent the same kinds of data. The differences are:

JSON — machine-friendly, no comments, strict quoting rules, verbose brackets.
       Best for APIs and data exchange between programs.

XML  — very verbose, supports attributes and namespaces, required for SOAP and
       many enterprise standards.

YAML — human-friendly, uses indentation instead of brackets, supports comments
       (#), optional quotes. Best for configuration files that humans edit.

The same data in all three:

JSON:
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

YAML:
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

XML:
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

YAML is clearly the most readable for humans. This is why it won in the
configuration space.

### CORE SYNTAX RULES

1. INDENTATION IS STRUCTURE. YAML uses spaces (NEVER tabs) to define nesting.
   Two-space indentation is the universal convention.

2. KEY-VALUE PAIRS (mappings):
   key: value
   Colons must be followed by a space. "key:value" is NOT valid.

3. LISTS (sequences):
   items:
     - first
     - second
     - third

4. SCALARS (values):
   - Strings: can be unquoted if they don't contain special chars
   - Numbers: 42, 3.14 (no quotes)
   - Booleans: true / false (also yes/no, on/off — avoid these ambiguous forms)
   - Null: null or ~
   - Dates: 2024-01-15 (ISO 8601)

5. COMMENTS: # everything after this is ignored

6. MULTILINE STRINGS:
   Two operators:
   • | (literal block) — preserves newlines exactly
   • > (folded block)  — folds newlines into spaces (good for long sentences)

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

### SPRING BOOT — application.yml

Spring Boot supports both application.properties and application.yml. YAML
is preferred when there is nesting, because it avoids repetitive prefixes.

Properties format (repetitive):
```
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

Kubernetes uses YAML for every resource: Deployments, Services, ConfigMaps,
Secrets, Ingresses. Each manifest has four required top-level fields:

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

1. TABS vs SPACES: YAML strictly forbids tab characters for indentation.
   Editors set to use tabs will produce a ParseException. Always configure
   your editor to use spaces for .yml/.yaml files.

2. INCONSISTENT INDENTATION: Every level must be indented by the same number
   of spaces (2 is standard). Mixing 2-space and 4-space breaks parsing.

3. UNQUOTED SPECIAL VALUES:
   • "yes", "no", "true", "false", "null", "~" are reserved. If a value
     looks like one of these but should be a string, quote it: "yes"
   • Colons in values must be quoted: message: "Error: file not found"
   • Values starting with { or [ look like JSON and may confuse parsers.
     Quote them: tag: "[feature]"

4. THE NORWAY PROBLEM: Country codes "NO" and "SE" were historically parsed
   as booleans (no=false, se is fine). Modern YAML 1.2 fixed this, but some
   parsers still use YAML 1.1 rules. Quote country codes as strings: "NO"

5. ANCHORS AND ALIASES (advanced but useful):
   YAML allows you to define a block once and reuse it:
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
• YAML is a superset of JSON — all valid JSON is valid YAML
• Indentation = structure (spaces only, never tabs)
• --- separates multiple documents in one file (used in Kubernetes and
  Spring profiles to combine configs)
• Environment variable substitution ($VAR or ${VAR}) is NOT part of YAML
  itself — it is handled by the consuming tool (Spring Boot, Docker, etc.)


---

# Part 5 — Databases



## 5.01 MySQL



### Overview

MySQL is the world's most widely deployed open-source relational database.
It uses structured tables with rows and columns, enforces relationships through
foreign keys, and guarantees data integrity through ACID transactions. MySQL's
storage engine InnoDB (default since MySQL 5.5) is what makes this possible.


### ACID Properties



**Atomicity** — a transaction is all-or-nothing. If you transfer €100 between
accounts, both the debit and the credit happen together, or neither does.
No partial updates.


**Consistency** — a transaction brings the database from one valid state to another.
All constraints (NOT NULL, FOREIGN KEY, UNIQUE, CHECK) are enforced. A
transaction that would violate a constraint is rolled back entirely.


**Isolation** — concurrent transactions do not interfere with each other. Each
transaction sees a snapshot of the database, as if it were running alone.
Isolation levels trade off between data accuracy and concurrency:

**Read Uncommitted** — can read another transaction's uncommitted changes (dirty read)

**Read Committed**   — only reads committed data (most databases' default)

**Repeatable Read**  — same row always returns same value within a transaction (MySQL default)

**Serializable**     — fully isolated, as if transactions ran one at a time (slowest)


**Durability** — once a transaction commits, it is permanent. Even if the server
crashes, the data survives. InnoDB achieves this with a Write-Ahead Log (WAL):
changes are written to the log before the data files, so they can be replayed
on recovery.


### Indexes and How They Work


An index is a separate data structure (InnoDB uses a B-tree) that maps column
values to row locations, so the database can find rows without scanning the
entire table (full table scan).

Think of it like a book index: without it, you read every page to find a topic.
With it, you jump directly to the right page.

B-tree indexes (default):
  - Efficient for: equality (=), range (<, >, BETWEEN), ORDER BY, and prefix

```sql
  matches on strings (LIKE 'prefix%')
• NOT efficient for: LIKE '%suffix' (leading wildcard), functions on columns

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

Covering index: an index that contains ALL the columns a query needs means MySQL
never has to read the actual table row — the index itself is the answer.


```sql
CREATE INDEX idx_cover ON orders(user_id, status, created_at);
SELECT status, created_at FROM orders WHERE user_id = 5;
-- Only reads the index, never touches the orders table
```


**Character Set** — utf8mb4

Always use utf8mb4 (not utf8) in MySQL. MySQL's "utf8" is a broken 3-byte
variant that cannot store 4-byte Unicode characters (emoji, some East Asian
characters). utf8mb4 is the real UTF-8 standard.


```sql
CREATE TABLE users (
    name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
);

-- Set at connection level in application.yml
spring.datasource.url=jdbc:mysql://localhost:3306/mydb?characterEncoding=utf8mb4
```



## 5.02 MongoDB



### Overview

MongoDB is a document-oriented NoSQL database. Instead of rows in tables, data
is stored as JSON-like BSON documents within collections. Documents in the same
collection can have different fields (schema-flexible). This flexibility is
powerful for rapidly evolving data models but requires discipline — without
schema validation, inconsistent documents accumulate.

### EMBED vs REFERENCE

The most important design decision in MongoDB: should related data be embedded
inside a document, or stored separately and referenced by ID?

EMBED when:
  - The data is always accessed together (a blog post and its author's name)
  - The nested data is owned by the parent and has no independent existence
  - The embedded array has a bounded, small size


```json
// Post document with embedded author info
{
    "_id": ObjectId("..."),
    "title": "My First Post",
    "content": "...",
    "author": { "id": "u1", "name": "Beatriz" },  // embedded
    "tags": ["tech", "java"]                        // embedded array
}
```

REFERENCE when:
  - Data is shared by multiple documents (a user referenced by many posts)
  - The referenced data changes frequently (keeping it in sync when embedded is costly)
  - The array could grow unboundedly


```json
// Post document with reference to user
{
    "_id": ObjectId("..."),
    "title": "My First Post",
    "authorId": ObjectId("u1")   // reference — join with $lookup
}
```


### Aggregation Pipeline


The aggregation pipeline processes documents through a series of stages, each
transforming the result for the next stage. It is MongoDB's answer to SQL's
SELECT + JOIN + GROUP BY + HAVING.


```sql
db.orders.aggregate([
    { $match: { status: "completed" } },             // WHERE
    { $group: {
        _id: "$customerId",                           // GROUP BY customerId
        totalSpent: { $sum: "$amount" },             // SUM(amount)
        orderCount: { $count: {} }
    }},
    { $sort: { totalSpent: -1 } },                   // ORDER BY totalSpent DESC
    { $limit: 10 },                                  // LIMIT 10
    { $lookup: {                                     // JOIN with customers collection
        from: "customers",
        localField: "_id",
        foreignField: "_id",
        as: "customer"
    }},
    { $unwind: "$customer" },                        // flatten the joined array
    { $project: { "customer.name": 1, totalSpent: 1, orderCount: 1 } }
]);
```


### Indexes in Mongodb



```css
db.users.createIndex({ email: 1 });                  // single field
db.users.createIndex({ email: 1 }, { unique: true }); // unique
db.orders.createIndex({ userId: 1, createdAt: -1 }); // compound (1=asc, -1=desc)

// TTL index — automatically deletes documents after a time period
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
// Sessions expire 1 hour after createdAt — great for session management

// Text index — full-text search
db.posts.createIndex({ title: "text", content: "text" });
db.posts.find({ $text: { $search: "java spring" } });
```



## 5.03 SQL — Querying & Optimization



### Overview

SQL (Structured Query Language) is the standard language for relational
databases. The same SQL concepts — JOINs, subqueries, aggregations, window
functions — work across MySQL, PostgreSQL, SQL Server, and Oracle.


### Joins


A JOIN combines rows from two tables based on a condition.


**Inner Join**  — only rows with a match in BOTH tables

**Left Join**   — all rows from the left table + matched rows from the right (NULL if no match)

**Right Join**  — all rows from the right table + matched rows from the left

**Full Outer**  — all rows from both tables (MySQL doesn't support directly; use UNION)

**Cross Join**  — cartesian product — every combination of rows (use with caution)


```sql
-- Orders with customer info (INNER JOIN)
SELECT o.id, o.amount, c.name AS customer
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
WHERE o.status = 'completed';

-- All customers, including those with no orders (LEFT JOIN)
SELECT c.name, COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name;
```


### Window Functions


Window functions compute a value over a set of rows ("window") related to the
current row, WITHOUT collapsing the result like GROUP BY. Each row keeps its
identity while also seeing the aggregated result.


#### Select


```sql
    employee_id,
    name,
    department,
    salary,
    -- Rank within each department by salary (ties get the same rank)
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank,
    -- Running total of salary within each department
    SUM(salary) OVER (PARTITION BY department ORDER BY salary) AS running_total,
    -- Previous row's salary within the department
    LAG(salary, 1) OVER (PARTITION BY department ORDER BY salary) AS prev_salary,
    -- Row number (no ties — each row gets a unique number)
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS global_row_num
FROM employees;
```

### RANK vs DENSE_RANK vs ROW_NUMBER:

**Rank()**       — gaps in ranking (1, 2, 2, 4 — gap after tie)

**Dense_rank()** — no gaps (1, 2, 2, 3)

**Row_number()** — always unique (1, 2, 3, 4 — arbitrary tiebreaker)

### CTEs (COMMON TABLE EXPRESSIONS)

A CTE is a named, reusable temporary result set defined with WITH. It improves
readability by breaking complex queries into named steps.


```sql
WITH active_customers AS (
    SELECT id, name, email
    FROM customers
    WHERE last_order_date > CURRENT_DATE - INTERVAL '90 days'
),
big_orders AS (
    SELECT customer_id, SUM(amount) AS total
    FROM orders
    WHERE created_at > CURRENT_DATE - INTERVAL '90 days'
    GROUP BY customer_id
)
SELECT ac.name, ac.email, bo.total
FROM active_customers ac
JOIN big_orders bo ON ac.id = bo.customer_id
WHERE bo.total > 1000
ORDER BY bo.total DESC;
```

Recursive CTEs allow you to query hierarchical data (org charts, category trees):


```sql
WITH RECURSIVE org_chart AS (
    -- Base case: the CEO (no manager)
    SELECT id, name, manager_id, 0 AS level
    FROM employees WHERE manager_id IS NULL

    UNION ALL

    -- Recursive case: employees whose manager is in the previous result
    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    INNER JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT level, name FROM org_chart ORDER BY level;
```


### Pagination — OFFSET vs KEYSET

OFFSET pagination:
SELECT * FROM posts ORDER BY created_at DESC LIMIT 20 OFFSET 200;
Problem: the database must scan and discard the first 200 rows every time.
On page 10,000 this means scanning 200,000 rows just to skip them.
KEYSET (cursor) pagination — much more efficient:

```sql
SELECT * FROM posts
WHERE created_at < '2024-03-15T10:30:00'    -- last seen value
ORDER BY created_at DESC
LIMIT 20;
-- The index on created_at lets the database jump directly to the right position.
-- O(log n) instead of O(n). The trade-off: no random page jumps.
```



## 5.04 Data Modelling



### Overview

Data modelling is the process of designing how data is structured, stored, and
related in a database. Good data models prevent anomalies, support queries
efficiently, and remain maintainable as the system evolves.


### Normalisation


Normalisation eliminates redundancy and prevents update anomalies. Each normal
form builds on the previous.

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
  - Example violation: orders table with city, zip_code, and country — city depends on
zip_code (not on order_id). Fix: separate address table.
In practice, design to 3NF, then selectively denormalise for performance where
needed (and document why).


### Common Patterns



**Soft Delete** — mark records as deleted instead of removing them. Enables recovery,
audit trails, and referential integrity:


```sql
ALTER TABLE users ADD COLUMN deleted_at TIMESTAMP NULL;
-- "Delete" a user
UPDATE users SET deleted_at = NOW() WHERE id = 123;
-- Query only active users
SELECT * FROM users WHERE deleted_at IS NULL;
```


#### Audit Columns
standard fields every table should have


```text
created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
created_by  BIGINT REFERENCES users(id)    -- who created it
updated_by  BIGINT REFERENCES users(id)    -- who last modified it
```


**Price Snapshot Pattern** — when an order is placed, the price of the product might change later. Store the price AT THE TIME OF PURCHASE in the order line, not
just a reference to the current product price:


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


#### Many-to-many
always use a junction table


```sql
CREATE TABLE student_courses (
    student_id BIGINT REFERENCES students(id),
    course_id  BIGINT REFERENCES courses(id),
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (student_id, course_id)
);
```


## 5.05 PostgreSQL



### Overview

PostgreSQL is the most advanced open-source relational database management system.
Frequently described as "the most feature-rich open-source database", it supports
advanced data types (arrays, JSONB, hstore, geometric types), full-text search,
window functions, CTEs, foreign data wrappers, and a powerful extension ecosystem
(PostGIS for geospatial, pgvector for AI embeddings, pg_trgm for fuzzy search).

### JSONB vs JSON

PostgreSQL has two JSON types — almost always prefer JSONB:


```sql
json:  stores JSON as text, preserving exact whitespace and key order.
       Re-parses on every access. Not indexable. Rarely useful.

jsonb: stores JSON in optimised binary format — indexable, much faster to
       query and filter. Key order is not preserved (deduplicates keys).
       Always use this.

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


PostgreSQL supports native arrays — useful when data is simple and does not
need its own table (tags, roles, phone numbers):


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


#### Returning Clause
get the inserted/updated row back without a second query


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

B-TREE (default): balanced tree. Good for equality and range queries on
comparable types (numbers, dates, text).
**GIN** (Generalised Inverted Index) : for composite values — arrays, JSONB,
full-text search. Stores each element of the collection separately, so
"does this array contain 'x'?" is fast. Slow to build, fast to query.
**GiST** (Generalised Search Tree) : extensible index for geometric types, ranges,
full-text search, and other non-scalar data. Used by PostGIS for spatial queries.
**BRIN** (Block Range INdex) : only stores min/max per block of pages — tiny index.

```text
Extremely fast to build and very small. Best for large, naturally ordered tables
(time-series data where rows are inserted in time order). Not good for random access.

-- Partial index — only index rows matching a condition
CREATE INDEX idx_active_users ON users(email) WHERE active = true;
-- Smaller index, queries for active users use it, inactive users are ignored

-- Functional index — index on an expression
CREATE INDEX idx_email_lower ON users(lower(email));
-- Enables case-insensitive searches: WHERE lower(email) = lower($1)
```


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

EXPLAIN ANALYZE shows you exactly how PostgreSQL executes a query, with actual
timings. Use it to diagnose slow queries.


**Explain Analyze**


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

```text
Seq Scan       — full table scan. May be fine on small tables, problematic on large ones.
Index Scan     — uses B-tree index for point lookups
Bitmap Heap Scan — uses index to get row IDs, then reads pages in bulk (for many rows)
Hash Join      — builds a hash table from one side, probes with the other

actual time    — REAL milliseconds (vs estimated cost); this is what matters
rows=N         — actual vs estimated row count (large discrepancy = stale statistics)

-- Update statistics if estimates are very wrong
ANALYZE users;          -- update statistics for one table
VACUUM ANALYZE users;   -- reclaim dead rows AND update statistics
```

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


LATERAL lets a subquery reference columns from the left-hand side — like a
correlated subquery but usable as a table:


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

## 5.06 GraphQL



### Overview

GraphQL is a query language for APIs developed by Facebook in 2012, open-sourced
in 2015. It is not a database query language — it is an API communication
protocol. Where REST has many endpoints (one URL per resource), GraphQL has a
single endpoint. Clients specify exactly what data they need, and the server
returns precisely that — no more, no less.


### The Problems Graphql Solves



**Over-fetching (rest)**: GET /api/users/42 returns 20 fields — the mobile client
only needs name and avatar. You download 20x more data than necessary.


**Under-fetching (rest)**: A single endpoint doesn't have enough data, and the
client must make multiple requests to assemble a view:
GET /api/users/42
GET /api/users/42/posts
GET /api/users/42/followers
— three round trips, each with latency.
GraphQL solution — one request for exactly what you need:

```text
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

Every GraphQL API is defined by a schema written in SDL (Schema Definition
Language). The schema declares all available types, queries, mutations, and
subscriptions — it is the contract between client and server.


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


```text
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



```python
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


### Resolvers** — HOW GRAPHQL ACTUALLY FETCHES DATA

For each field in the schema, there is a RESOLVER — a function that knows how
to fetch that field's value. Resolvers receive four arguments:

```javascript
parent  — the resolved value of the parent type
args    — the arguments passed to this field in the query
context — shared object (database connection, auth info, services)
info    — information about the query (fields requested, etc.)

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

The most critical GraphQL performance issue. When loading 100 posts, each with
an author, the User.author resolver is called 100 times — 100 database queries!

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


```python
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
```



---

# Part 6 — Testing & Quality



## 6.01 JUnit 5



### Overview

JUnit is the standard testing framework for Java. JUnit 5 (also called Jupiter)
is modular — split into Jupiter (the API for writing tests), Platform (the launcher), and Vintage (compatibility with JUnit 4).


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

```text
@Test              — marks a method as a test
@BeforeEach        — runs before each test method (setup)
@AfterEach         — runs after each test method (teardown)
@BeforeAll         — runs once before all tests in the class (static method)
@AfterAll          — runs once after all tests (static method)
@Disabled          — skips a test with an optional reason message
@DisplayName       — human-readable name for the test in reports
@Nested            — groups related tests in an inner class (great for readability)
@Tag               — categorise tests for selective execution
```

```java
@Test
@DisplayName("Should throw exception when user is not found")
void should_throw_when_user_not_found() {
    assertThrows(UserNotFoundException.class,
        () -> userService.findById(-1L));
}
```

### Parameterised Tests


Instead of duplicating a test with different inputs, parameterise it:


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



```java
@SpringBootTest — loads the FULL application context. Use for true integration
                   tests. Slow but comprehensive.

@WebMvcTest(UserController.class) — loads only the web layer (Controller,
                   Filter, Interceptor). Beans like services must be mocked.
                   Fast for testing HTTP endpoints.

@DataJpaTest — loads only the JPA layer. Uses an in-memory database by default.
                Use for testing repository queries.

@ExtendWith(MockitoExtension.class) — pure unit test, no Spring context.
                Fastest. Use for testing service logic in isolation.

@TestContainers — run tests against real databases in Docker containers.

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

Mockito is the most popular Java mocking framework. It lets you replace real
dependencies with controlled fakes during unit testing, so you can test a class
in isolation without needing a real database, HTTP client, or email server.

### MOCK vs SPY


**Mock** — a completely fake object. All methods return default values (null, 0, false, empty list) unless you stub them. No real code runs.

**SPY** - wraps a real object. Real methods run by default, but you can stub specific ones. Use when you want most real behaviour but need to intercept certain calls.


```c
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock
    UserRepository userRepository;    // fake — no real DB

    @InjectMocks
    UserService userService;          // the class under test, with mocks injected

    @Captor
    ArgumentCaptor<User> userCaptor;

    @Test
    void should_save_user_with_hashed_password() {
        // Arrange — stub a specific call
        User input = new User("Beatriz", "password123");
        when(userRepository.save(any(User.class)))
            .thenAnswer(inv -> inv.getArgument(0));  // return the saved object

        // Act
        userService.register(input);

        // Assert — verify what was actually saved
        verify(userRepository).save(userCaptor.capture());
        User saved = userCaptor.getValue();
        assertThat(saved.getPassword()).doesNotContain("password123");
        assertThat(saved.getPassword()).startsWith("$2a$");  // bcrypt prefix
    }

    @Test
    void should_throw_when_email_already_exists() {
        when(userRepository.existsByEmail("b@example.com")).thenReturn(true);

        assertThatThrownBy(() -> userService.register(new User("Beatriz", "b@example.com")))
            .isInstanceOf(DuplicateEmailException.class);

        verify(userRepository, never()).save(any());   // save was NEVER called
    }
}
```


### Common Mockito Patterns



```c
// Stubbing
when(repo.findById(1L)).thenReturn(Optional.of(user));
when(repo.findById(99L)).thenReturn(Optional.empty());
when(repo.save(any())).thenThrow(new DataIntegrityViolationException("Duplicate"));

// BDD style (preferred in BDDMockito)
given(repo.findById(1L)).willReturn(Optional.of(user));
then(repo).should().save(user);

// Verifying
verify(emailService).sendWelcomeEmail(user);
verify(emailService, times(2)).sendReminder(any());
verify(emailService, never()).sendUnsubscribeEmail(any());
verify(repo).save(argThat(u -> u.getEmail().contains("@")));

// ArgumentCaptor — inspect what arguments were passed
ArgumentCaptor<Email> captor = ArgumentCaptor.forClass(Email.class);
verify(emailService).send(captor.capture());
assertThat(captor.getValue().getSubject()).isEqualTo("Welcome!");
```



## 6.03 SonarQube



### Overview

SonarQube is a static code analysis platform that continuously inspects code for
bugs, security vulnerabilities, code smells, and test coverage. It integrates
into CI/CD pipelines so every pull request gets an automatic code quality report.


### Issue Types


#### BUG
code that is demonstrably wrong: will produce incorrect behaviour or crash.
Example: using == to compare strings instead of .equals().


**Vulnerability** — code that could be exploited by an attacker: SQL injection,
XSS, storing passwords in plain text, using insecure algorithms (MD5, DES).


**Security Hotspot** — potentially sensitive code that needs manual human review
but isn't necessarily a vulnerability. 

- Example: disabling CSRF protection — might be intentional (API endpoint) or a mistake (web form). SonarQube marks it for human review without automatically flagging it as a vulnerability.


**Code Smell** — code that is not wrong but is hard to maintain: overly long methods, deeply nested code, duplicate code, dead code, too many parameters. Left alone, code smells accumulate into technical debt that slows down the team.


### Quality Gate


A Quality Gate is a set of conditions that code must meet to be considered
production-ready. The default SonarWay quality gate checks the NEW code in a
PR against these conditions:
  - Coverage on new code: ≥ 80%
  - Duplicated lines on new code: < 3%
  - Maintainability rating: A (no blocker or critical code smells)
  - Reliability rating: A (no bugs)
  - Security rating: A (no vulnerabilities)

If any condition fails, the quality gate status is FAILED and the CI pipeline
should block the merge.


## 6.04 Unit & Integration Testing



### Overview

The testing pyramid describes the ideal distribution of test types: many unit
tests at the base (fast, cheap), fewer integration tests in the middle, and even
fewer end-to-end tests at the top (slow, expensive).


### The Testing Pyramid


/\
/E2E\          ← few: browser automation, full system
/------\
/  Integ \       ← moderate: API tests, DB tests, service tests
/----------\
/ Unit Tests  \    ← many: test individual functions/classes in isolation
/--------------\
#### UNIT TESTS
  - Test a single class or function in isolation (dependencies are mocked)
  - Fast: milliseconds per test, thousands per second
  - Independent: no file system, no database, no network
  - Tell you WHERE the bug is (exact class and method)

#### INTEGRATION TESTS
  - Test multiple components working together
  - Verify that your code works with real databases, real HTTP calls, real queues
  - Slower than unit tests, but catch contract mismatches and config errors
  - Testcontainers: spin up real databases in Docker for tests


```java
@SpringBootTest
@Testcontainers
class UserRepositoryIT {
    @Container
    static MySQLContainer<?> mysql = new MySQLContainer<>("mysql:8.0")
        .withDatabaseName("testdb");

    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry reg) {
        reg.add("spring.datasource.url", mysql::getJdbcUrl);
        reg.add("spring.datasource.username", mysql::getUsername);
        reg.add("spring.datasource.password", mysql::getPassword);
    }

    @Autowired UserRepository repo;

    @Test
    void should_persist_and_retrieve_user() {
        User saved = repo.save(new User("Beatriz", "b@example.com"));
        Optional<User> found = repo.findByEmail("b@example.com");
        assertThat(found).isPresent();
        assertThat(found.get().getId()).isEqualTo(saved.getId());
    }
}
```

**E2E TESTS**:
  - Simulate a real user in a real browser (Selenium, Playwright, Cypress)
  - Slowest (seconds each), most brittle (UI changes break tests)
  - Cover the critical user journey: sign up, log in, make a purchase


## 6.05 Debugging



### Overview

Debugging is the systematic process of finding and fixing the root cause of
unexpected behaviour. Good debugging is about forming and testing hypotheses
efficiently, not guessing.


### Reading Stack Traces


A stack trace shows the call stack at the moment an exception was thrown.
Read it from the TOP (the exact exception and immediate cause) downward
(the call chain that led to it).


```text
java.lang.NullPointerException: Cannot invoke "String.length()" because "name" is null
    at com.example.UserService.formatName(UserService.java:42)   ← your code — look here first
    at com.example.UserController.getUser(UserController.java:18)
    at ...Spring framework frames (skip these)...
```

Focus on lines from YOUR package first. Spring/framework lines are usually not
the bug — they correctly call your code, and your code failed.

For "Caused by:" chains, the LAST "Caused by:" is the original root cause

```text
IOException: Failed to read config
```
Caused by: FileNotFoundException: /etc/app/config.yml (No such file or directory)
← This is the real problem — the file does not exist

### Debugger Techniques

**Breakpoints** — pause execution at a specific line to inspect variables.


#### Conditional Breakpoints
only pause when a condition is true
(i == 500) or (user.getId() == 123)
Invaluable for finding bugs that only occur with specific data in loops.

**Step Over** — execute the current line and pause on the next (stays in current method)

**Step Into** — enter the method being called (explore deeper)

**Step Out**  — complete the current method and pause in the caller


**Evaluate Expression** — execute any expression in the current scope while paused.
Call methods, inspect objects, try different values.


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

**Log levels**:

**Error** — something failed; requires immediate attention

**Warn**  — something unexpected happened but the system continues

**Info**  — normal operational events (startup, user registered, job ran)

**Debug** — detailed diagnostic information for development

**Trace** — very fine-grained — every method call, every SQL query


## 6.06 Code Reviews



### Overview

Code review is the practice of having peers examine code before it is merged.
Reviews catch bugs, enforce consistency, share knowledge, and mentor developers.
A good review culture is one of the highest-leverage engineering practices a
team can adopt.


### Writing Review Comments



**Blocking Comments** — must be addressed before merging. Use for: bugs, security
issues, violating team standards, logic errors, missing tests.

**Non-Blocking Comments (nits)** — suggestions or preferences. Mark clearly:
"Nit: could extract this to a method for readability"
"Nit: prefer Optional.orElseThrow() over .get() here"
These do not need to be resolved to merge, but the author should acknowledge them.

#### Feedback on Code, Not the Person
**Bad**: "You should know better than to use raw types"
**Good**: "Raw types lose type safety — using List<String> here would catch issues at compile time"

#### Explain the Why, Not Just the What
**Bad**: "Don't do this"
**Good**: "Using Thread.sleep() in tests makes them slow and flaky — consider awaitility or a mock clock"

**SUGGEST, DON'T DICTATE (when it's a preference)**: "What do you think about extracting this to a helper?" vs "Extract this to a helper"

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

Agile is a philosophy for iterative, incremental software development. Instead
of planning everything upfront and delivering at the end (Waterfall), you
deliver value in short cycles, adapting as you learn. Scrum is the most popular
Agile framework, with well-defined roles, artefacts, and ceremonies.


### The 4 Values of the Agile Manifesto


Individuals and interactions  OVER  processes and tools
Working software              OVER  comprehensive documentation
Customer collaboration        OVER  contract negotiation
Responding to change          OVER  following a plan
The right-hand side items still have value — the manifesto values the left-hand
side MORE. The key insight: agility comes from people collaborating and adapting,
not from following a rigid process.


### Scrum Roles



**Product Owner (po)** — represents the business and customers. Owns and prioritises the Product Backlog. Decides WHAT gets built and WHY. The single point of decision authority for product scope. Does NOT decide HOW or WHEN (that is the
team's responsibility).


**Scrum Master (sm)** — a servant leader and process facilitator. Removes impediments, coaches the team on Scrum, protects the team from external interruptions. Does NOT manage the team — that is not the SM's job.


**Development Team** - the people who build the product. 
- **Self-organising**: they decide how to do the work. 
- **Cross-functional**: collectively they have all the skills needed (design, backend, frontend, testing, DevOps).


### Artefacts



**Product Backlog** — the ordered list of everything that might be needed in the
product. Owned by the PO. The top items are refined, estimated, and ready for
the next Sprint. Items lower down are less defined.


**Sprint Backlog** — the subset of Product Backlog items selected for the current
Sprint, plus the plan to achieve the Sprint Goal. Owned by the Development Team.


**Increment** — the sum of all Product Backlog items completed during a Sprint, plus
the value of all previous Sprints. Must be in a potentially shippable state.
Each Sprint adds to the previous Increment — the product grows Sprint by Sprint.


### Ceremonies



**Sprint Planning** — at the start of the Sprint. Team selects items from the Product
Backlog, creates a Sprint Goal, and breaks items into tasks. Output: Sprint Backlog.


**Daily Scrum (stand-up)**
15-minute daily sync. Each person answers
  - What did I do yesterday that helped the team reach the Sprint Goal?
  - What will I do today toward the Sprint Goal?
  - Are there any impediments blocking my progress?


**Sprint Review** — at the end of the Sprint. Team demonstrates the Increment to
stakeholders. Stakeholders give feedback. The PO updates the backlog based on
learnings. This is the feedback loop with the real world.


**Sprint Retrospective** — team reflects on PROCESS (not product): What went well?
What could be improved? What will we commit to trying next Sprint? The engine
of continuous improvement.


**Key Metric**: Velocity = how many story points the team completes per Sprint.
Velocity is a planning tool — it predicts capacity for future Sprints. It is NOT
a productivity metric and should not be used to compare teams.


## 7.02 SDLC



### Overview

The Software Development Life Cycle (SDLC) is a structured process for planning,
creating, testing, and deploying software. Different organisations use different
models (Waterfall, Agile, DevOps) but all cover the same fundamental phases.


### The 7 Phases


1. **PLANNING** — define the project scope, feasibility, timeline, budget, and team.
What are we building? Is it worth building? How long will it take?
2. **REQUIREMENTS ANALYSIS** — gather and document what the system must do.
FUNCTIONAL requirements: what the system does (user can log in, search products)
NON-FUNCTIONAL requirements: how the system performs (response < 200ms,
availability 99.9%, GDPR compliance, supports 10,000 concurrent users)
3. **SYSTEM DESIGN** — translate requirements into architecture. Decide on: tech stack,
database schema, API contracts, cloud infrastructure, security model, data flows.
4. **IMPLEMENTATION (CODING)** — developers write the code following the design.
In Agile, phases 1-4 repeat every Sprint, at progressively finer granularity.
5. **TESTING** — verify the system meets requirements and contains no critical bugs.
Unit → integration → system testing → user acceptance testing (UAT).
6. **DEPLOYMENT** — release the software to production. May involve staged rollouts,
feature flags, blue-green deployments.
7. **MAINTENANCE** — fix bugs, apply security patches, monitor performance, add
enhancements based on user feedback. Often the longest phase.


## 7.03 Software Architecture



### Overview

Software architecture defines the high-level structure of a system: the
components it consists of, how they interact, and the principles guiding those
decisions. Good architecture enables change; bad architecture resists it.


### SOLID Principles


**S — Single Responsibility Principle**

```text
A class should have only ONE reason to change. If a class handles HTTP
parsing, business logic, AND database access, changing any of those concerns
forces changes to the class. Split into Controller, Service, Repository.
```

**O — Open/Closed Principle**

```typescript
Classes should be open for extension, closed for modification. Add new
behaviour by adding new code, not by changing existing code (which could
break what already works). Achieved with interfaces and polymorphism.

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
Subtypes must be substitutable for their base types without breaking the
program. If code works with Animal, replacing Animal with Dog (a subclass)
should not break anything. Violated when a subclass throws an exception or
returns a different type than the parent promised.

**I — Interface Segregation Principle**

```text
Clients should not be forced to depend on interfaces they don't use. Split
large interfaces into smaller, focused ones. A ReadOnlyRepository interface
(findById, findAll) and a WriteRepository interface (save, delete) are better
than one large Repository interface when some consumers only read.
```

**D — Dependency Inversion Principle**
High-level modules should not depend on low-level modules. Both should depend
on abstractions. Your UserService should depend on the UserRepository INTERFACE,
not on the concrete MySQLUserRepository. This allows swapping implementations
(for testing, or when migrating databases) without changing the service.

### Design Patterns



**Singleton** — ensures only one instance of a class exists. Used for: database
connection pools, configuration objects, logging. In Spring, all beans are
Singletons by default.


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


**Factory** — a method or class that creates objects without exposing the creation
logic. The caller gets the object it needs without knowing which concrete class
was instantiated.


```text
PaymentGateway gateway = PaymentGatewayFactory.create("STRIPE");
```


**Builder** — construct complex objects step by step. Avoids constructors with many
parameters (where you easily confuse the order of arguments).


```text
User user = User.builder()
    .name("Beatriz")
    .email("b@example.com")
    .role(Role.ADMIN)
    .build();
```


**Observer** — an object (Subject) maintains a list of observers and notifies them
when its state changes. Foundation of event-driven systems, RxJS, and Spring's
ApplicationEvent.


```java
// Spring ApplicationEvent
applicationEventPublisher.publishEvent(new UserRegisteredEvent(user));

@EventListener
public void onUserRegistered(UserRegisteredEvent event) {
    emailService.sendWelcomeEmail(event.getUser());
}
```


**Decorator** — add behaviour to an object dynamically, by wrapping it in another
object with the same interface. Java's InputStream/BufferedInputStream is the
classic example:


```java
InputStream raw    = new FileInputStream("file.txt");     // raw bytes
InputStream buffered = new BufferedInputStream(raw);       // adds buffering
InputStream zipped   = new GZIPInputStream(buffered);      // adds decompression
// Each decorates the previous, adding one behaviour
```


**Strategy** — define a family of algorithms, encapsulate each one, and make them
interchangeable. The client can switch algorithms without changing the code that
uses them.


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

```text
Functional: what features? (post tweet, follow, timeline, search?)
Non-functional: scale? (1M users vs 500M users changes everything)
Constraints: read-heavy vs write-heavy? Latency requirements?
```

#### 2. ESTIMATE SCALE
DAU (daily active users), requests per second, storage per year
1M users * 10 actions/day = 10M requests/day = ~116 req/sec

#### 3. HIGH-LEVEL DESIGN
Draw the major components: clients → load balancer → API servers →
databases, caches, queues. Identify the core data entities and their
relationships.

#### 4. DEEP DIVE INTO CRITICAL COMPONENTS
Which components are most challenging? Where are the bottlenecks?
Database choice (SQL vs NoSQL), caching strategy (what to cache, eviction),
how to handle hot spots.
#### 5. IDENTIFY AND ADDRESS BOTTLENECKS
Single points of failure? How do you scale each component?
What happens at 10x current load?


## 7.04 Secure Development



### Overview

Security is not a feature added at the end — it is a property built in from the
start. Every developer on the team is responsible for security, not just a
separate security team.


**Owasp Top 10** — THE MOST CRITICAL WEB VULNERABILITIES

1. BROKEN ACCESS CONTROL — users can access resources or actions they should not.
Fix: always authorise on the server, never trust the client. Deny by default.
2. CRYPTOGRAPHIC FAILURES — sensitive data in plaintext; weak algorithms (MD5,
SHA-1, DES); unencrypted HTTP. Fix: HTTPS everywhere, bcrypt for passwords,
encrypt sensitive data at rest.
3. INJECTION (SQL, NoSQL, LDAP, OS command) — attacker-controlled data is

```sql
executed as code. Fix: parameterised queries (NEVER concatenate user input
into SQL strings); input validation; parameterised OS commands.

// Vulnerable
String sql = "SELECT * FROM users WHERE id = " + userId;  // userId = "1 OR 1=1"

// Safe — parameterised query
PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE id = ?");
stmt.setLong(1, userId);   // userId is always treated as a value, never as SQL
```

4. INSECURE DESIGN — architectural flaws that enable attacks. Fix: threat modelling

```text
during design; security design review; rate limiting; account lockout.
```

5. SECURITY MISCONFIGURATION — default credentials, open S3 buckets, stack traces
exposed in HTTP responses, unnecessary features enabled. Fix: secure defaults,
disable what you don't use, secrets management.
6. VULNERABLE AND OUTDATED COMPONENTS — using libraries with known CVEs.
Fix: dependency scanning (OWASP Dependency-Check, Snyk, GitHub Dependabot),
regular updates.
7. IDENTIFICATION AND AUTHENTICATION FAILURES — weak passwords, missing MFA,

```css
poor session management. Fix: use an established auth library; enforce MFA
for sensitive actions; set short session timeouts.
```

8. SOFTWARE AND DATA INTEGRITY FAILURES — including unsigned code, insecure CI/CD,
deserialization of untrusted data. Fix: verify signatures, use SLSA framework.
9. SECURITY LOGGING AND MONITORING FAILURES — not logging failed logins, not
alerting on anomalies. Fix: log security events, set up alerts, incident response.
10. SERVER-SIDE REQUEST FORGERY (SSRF) — server makes HTTP requests to attacker-

```css
controlled URLs, potentially hitting internal services. Fix: validate and
allowlist URLs; block requests to private IP ranges.
```


### Content Security Policy


CSP is an HTTP header that tells the browser which sources of scripts, styles,
and other resources are trusted. It mitigates XSS attacks:


```python
Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://cdn.trusted.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  frame-ancestors 'none';   ← prevents clickjacking
```



## 7.05 Performance Optimization



### Overview

"Premature optimisation is the root of all evil." — Donald Knuth.
Always measure first — you cannot optimise what you do not measure. Then fix
the measured bottleneck, not what you assume is slow.


### Measure First


#### Tools

```text
JProfiler / VisualVM — CPU and memory profiling for Java
Chrome DevTools Performance tab — JavaScript profiling in the browser
EXPLAIN ANALYZE (SQL) — actual query execution plan with real timings
APM tools (Datadog, New Relic, Dynatrace) — production performance monitoring
```
#### Metrics to watch

```text
Latency — p50, p95, p99 (percentiles matter; averages hide tail latency)
Throughput — requests per second
Error rate — percentage of failed requests
Resource utilisation — CPU, memory, disk I/O, network
```

### Caching Strategies


Cache types and where to apply them:


#### Browser Cache
HTTP cache headers prevent repeated downloads of static assets

```css
Cache-Control: public, max-age=31536000  (1 year for content-hashed assets)
Cache-Control: no-cache                  (always revalidate)
ETag: "abc123"                           (conditional request; 304 if unchanged)
```

**CDN (Content Delivery Network)** — serve static assets and cacheable responses from
edge servers geographically close to users. Reduces latency and origin load.

**APPLICATION CACHE** (Redis, Memcached) — cache expensive database queries or
API results in memory:


```text
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

```text
LRU (Least Recently Used)  — evict the item not accessed for the longest time
LFU (Least Frequently Used) — evict the item accessed the fewest times
TTL (Time To Live)          — evict after a fixed duration regardless of access
```

### Backend Performance Patterns


N+1 QUERY — the most common database performance bug (described in Spring Boot section).
Fix: eager loading with JOIN FETCH or DataLoader (for GraphQL).


**Database Connection Pooling** — creating a new database connection for every request
is expensive (TCP handshake, auth, protocol negotiation = ~20-50ms). HikariCP
(Spring Boot default) maintains a pool of ready connections:

spring.datasource.hikari.maximum-pool-size=20
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.connection-timeout=30000

**Pagination** — never return unbounded result sets. Always apply LIMIT.
Use keyset pagination for large datasets.


**Async Processing** — for slow operations (sending email, generating reports, calling
slow APIs), don't make the user wait. Put the work on a message queue and return
immediately; process asynchronously.


## 7.06 Production Support



### Overview

Production support means keeping running systems healthy: monitoring for problems,
responding to incidents, and learning from failures. The three pillars of
observability — logs, metrics, and traces — are what make this possible.


### The Three Pillars of Observability



**Logs** — structured, timestamped records of discrete events. They answer "what
happened?". Each log entry should have: timestamp, level (INFO/WARN/ERROR),
message, correlation ID (to link a request across services), and relevant context
(userId, orderId, endpoint). Use structured JSON logs in production for easy
ingestion into Elasticsearch/Loki.


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

**Types**

```text
Counter    — monotonically increasing number (total requests, total errors)
Gauge      — current value (active connections, queue size, memory usage)
Histogram  — distribution of values (request latency distribution)
Summary    — pre-calculated percentiles
```
KEY METRICS to monitor:
Error rate, request latency (p50/p95/p99), throughput (req/sec), CPU, memory,
GC time, DB connection pool saturation, queue depth.

**Traces** — records of a request's journey across multiple services. They answer
"where did the time go?". Each trace has multiple spans — one per service called.
A span records: service name, operation, duration, parent span, tags.
**Tools**: Jaeger, Zipkin, OpenTelemetry (the standard).


### Sli / SLO / SLA / Error Budget


**SLI (Service Level Indicator)** — a measured metric: "our p99 response time is
120ms", "our error rate is 0.05%".

**SLO (Service Level Objective)** — a target for an SLI: "p99 latency < 200ms",
"error rate < 0.1%". Agreed internally by the engineering team. If you miss your
SLO, you need to prioritise reliability work over new features.

**SLA (Service Level Agreement)** — a legal contract with consequences (refunds,
credits) if the SLO is not met. SLAs should be more lenient than SLOs — you
need a buffer to catch violations before they become SLA breaches.


**Error Budget** — the allowed amount of unreliability within a time window.
If your SLO is 99.9% availability per month, your error budget is 43.8 minutes
of downtime. If the budget is exhausted, you stop shipping new features and
focus only on reliability until the budget resets.


### Blameless Post-mortems


After a significant incident, a post-mortem (or incident review) documents:
  - Timeline of events: what happened and when
  - Root cause: the fundamental technical or process failure
  - Impact: users affected, duration, revenue impact
  - Detection: how was it discovered? Should an alert have caught it sooner?
  - Resolution: what fixed it?
  - Action items: what changes prevent recurrence?

BLAMELESS means the goal is systemic improvement, not assigning blame to
individuals. People make mistakes — the system should be designed to prevent
those mistakes from causing incidents, or to detect and recover from them quickly.





### End of Guide