# Technical Study Guide — Interview Preparation

*Beatriz Santos | Full-Stack / Software Engineer*


This document is a complete study guide. Each section explains concepts in
depth so you can learn and understand them, not just list topics.
Code examples are part of the learning — read them as explanatory text.


## Table of Contents



**Part 1 — Programming Languages**
- 1.01 Java
- 1.02 JavaScript
- 1.03 TypeScript
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

**Part 9 — Data Structures & Algorithms**
- 9.01 Data Structures
- 9.02 Algorithms


---

# Part 1 — Programming Languages



## 1.01 Java



### Overview

Java is a compiled-to-bytecode language, which means your source file (.java) is transformed into an intermediate format (.class) that is then executed by the JVM (Java Virtual Machine). This extra layer is what makes Java "write once, run anywhere" — the same bytecode runs on any operating system that has a JVM. Java is strongly typed (you must declare the type of every variable) and object-oriented, meaning code is organized into classes and objects.


### How the JVM Works (JDK, JRE, JVM)

Three acronyms that are often confused, but nest inside one another:

**JVM (Java Virtual Machine)**: the engine that actually executes bytecode — an abstract computer that translates `.class` files into instructions the real operating system/CPU can run. It's what makes Java portable: the JVM is platform-specific (a different JVM build for Windows/Mac/Linux), but the bytecode it runs is not.

**JRE (Java Runtime Environment)**: the JVM PLUS the standard class libraries (`java.lang`, `java.util`, etc.) needed to actually run a compiled Java application. If you only need to RUN Java programs (not develop them), the JRE is all you need.

**JDK (Java Development Kit)**: the JRE PLUS development tools — the compiler (`javac`), debugger, and other tooling needed to WRITE and build Java programs.

```text
JDK
 ├── Development tools (javac, jdb, javadoc, ...)
 └── JRE
      ├── Class libraries (java.lang, java.util, java.io, ...)
      └── JVM (executes bytecode)
```

**Rule of thumb**: developers install the JDK (it contains everything, including the JRE); a production server that only runs a pre-built `.jar` technically only needs a JRE, though in practice most environments just install the JDK for simplicity.


### Bytecode

Bytecode is the intermediate, platform-independent instruction format Java source code compiles down to — it's not machine code (which the CPU executes directly) and not source code (which humans write); it sits in between.

```text
Main.java  →  javac (compiler)  →  Main.class (bytecode)  →  JVM  →  machine code (via interpretation/JIT)
```

```java
// Main.java
public class Main {
    public static void main(String[] args) {
        int x = 1 + 2;
    }
}
```

Compiling this with `javac Main.java` produces `Main.class`, a binary file containing bytecode instructions — you can inspect them with `javap -c Main`:

```text
0: iconst_1        // push the constant 1 onto the stack
1: iconst_2        // push the constant 2 onto the stack
2: iadd            // pop both, add them, push the result
3: istore_1        // pop the result, store it in local variable slot 1 (x)
```

Because every JVM (Windows, Mac, Linux, embedded devices) understands the exact same bytecode format, the SAME `.class` file runs unmodified anywhere a JVM is installed — this is literally what "write once, run anywhere" means in practice.


### Compilation vs Execution

Java's execution model has two distinct steps, unlike a purely interpreted language (no separate compile step) or a purely compiled one (compiles directly to native machine code):

**1. Compilation (`javac`)**: happens once, ahead of time. Translates `.java` source files into `.class` bytecode files. This step catches syntax errors and type errors — the reason Java is "compile-time type-safe."

**2. Execution (JVM)**: happens every time you run the program. The JVM loads the `.class` bytecode and runs it using a hybrid approach for performance:
   - **Interpretation**: the JVM initially interprets bytecode instruction-by-instruction — slower, but starts running immediately with no extra delay.
   - **JIT (Just-In-Time) compilation**: the JVM's HotSpot compiler monitors which methods are called frequently ("hot" methods) and compiles THOSE specific methods down to native machine code at runtime, caching the result — so hot code paths eventually run close to the speed of a natively-compiled language, while still keeping Java's "compile once, run anywhere" bytecode portability.

```text
.java  --[javac, ahead-of-time]-->  .class (bytecode)  --[JVM, at runtime]-->  interpreted, then JIT-compiled for hot paths
```


### Garbage Collector

Java manages heap memory automatically — you never manually free an object (unlike C's `malloc`/`free`). The **Garbage Collector (GC)** periodically scans the heap, identifies objects that are no longer reachable from any live reference (local variables, static fields, active threads), and reclaims their memory.

```java
void createUser() {
    User user = new User("Ana");   // allocated on the heap
}   // once createUser() returns, "user" goes out of scope —
    // the User object becomes UNREACHABLE and is eligible for garbage collection
    // (though the GC may not run immediately — reclaiming happens on its own schedule)
```

**Generational hypothesis**: most objects die young (a loop variable, a temporary DTO), while a small number live a long time (caches, singletons). The JVM heap is split accordingly:

- **Young Generation** (Eden + two Survivor spaces): where new objects are allocated. Collected frequently with a fast "Minor GC" — objects that survive several collections are promoted to the Old Generation.
- **Old Generation**: holds long-lived objects. Collected less often, with a more expensive "Major/Full GC" — this is usually the pause developers care about tuning away.

Modern collectors (G1 — the default since Java 9, or ZGC/Shenandoah for very large heaps with near-zero pause times) aim to minimize "stop-the-world" pauses, where all application threads freeze while the GC runs.

**What can prevent garbage collection** (Java's version of a memory leak): static fields holding references to objects no longer needed, unclosed resources, listeners/caches that are never cleared, or objects held by long-lived collections — the object is technically still "reachable," so the GC correctly leaves it alone, even though the program logically no longer needs it.


### Classes and Objects

A **class** is a blueprint — it defines what fields (state) and methods (behavior) its instances will have, but does not itself hold any data. An **object** is an actual instance of a class, created with `new`, living on the heap (see Stack vs Heap below), with its own copy of the instance fields defined by the class.

```java
class Car {                              // the blueprint
    String model;                         // instance field — each Car has its own copy
    int speed;

    void accelerate() {                   // instance method — behavior shared by all Cars
        speed += 10;
    }
}

Car car1 = new Car();                     // an object — a specific instance of Car
car1.model = "Tesla";
Car car2 = new Car();                     // a completely separate object
car2.model = "Toyota";

car1.accelerate();
System.out.println(car1.speed);           // 10
System.out.println(car2.speed);           // 0 — car2's state is entirely independent of car1's
```

A class can also have **static** members — fields/methods that belong to the CLASS itself rather than any individual instance, shared by every object (see the `static` keyword below).


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


### Stack vs Heap

The JVM splits memory into two main areas, and where a value lives affects its performance and lifecycle:

**Stack**: stores method call frames — local variables, method parameters, and primitive values. It's organized as LIFO (last-in, first-out): every time a method is called, a new frame is pushed; when the method returns, its frame is popped and everything in it is instantly reclaimed. Each thread has its own stack. Access is very fast, but size is limited — deep recursion causes a `StackOverflowError`.

**Heap**: stores all objects (anything created with `new`) and arrays. It's shared across all threads and managed by the Garbage Collector, which reclaims memory only when an object is no longer reachable. Access is slower than the stack because of this extra bookkeeping, and running out of space causes an `OutOfMemoryError`.

```java
void method() {
    int x = 42;                       // primitive → lives on the stack
    Person p = new Person("Ana");     // reference "p" lives on the stack,
                                       // the actual Person object lives on the heap
}
// when method() returns, x and the reference p are popped from the stack;
// the Person object on the heap is only removed later by the Garbage Collector,
// once nothing references it anymore
```

**Rule of thumb**: the stack holds primitives and references (fast, short-lived, automatically cleaned up on return); the heap holds the actual objects those references point to (slower, long-lived, cleaned up by the GC).


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

Collections like List<Integer> cannot store primitives directly — they can only work with Object types. This is because Java Generics are implemented via type erasure, and internally every collection is backed by an array of Object references (e.g. Object[]). A primitive isn't an object and has no reference to store, so it cannot be placed in that array — this is why List<int> doesn't compile, and List<Integer> is used instead (with autoboxing converting each int to an Integer behind the scenes so it can be stored on the heap and referenced).

Also, comparing object types with == compares references (addresses), not values — always use .equals() for objects.


```java
Integer a = 127;  Integer b = 127;
System.out.println(a == b);       // true (JVM caches -128 to 127)
Integer x = 1000; Integer y = 1000;
System.out.println(x == y);       // false! Different objects in heap
System.out.println(x.equals(y));  // true — compares values
```


### == vs .equals()

**==**: compares values for primitives, but compares references (memory addresses) for objects — it checks whether two variables point to the exact same object in the heap, not whether their contents are equal.

**.equals()**: a method (inherited from Object) meant to compare the actual content/state of two objects. By default, Object.equals() just falls back to == (reference comparison), but classes like String, Integer, and other wrapper types override it to compare values instead. Your own classes must override it too if you want meaningful value comparison.

```java
// == on primitives compares values directly
int a = 5, b = 5;
System.out.println(a == b);              // true

// == on objects compares references
String s1 = new String("hello");
String s2 = new String("hello");
System.out.println(s1 == s2);             // false — different objects in heap
System.out.println(s1.equals(s2));        // true — String overrides equals() to compare content

// String literals are interned (reused from a pool), so this can be misleading:
String s3 = "hello";
String s4 = "hello";
System.out.println(s3 == s4);             // true — both point to the same pooled literal
```

Custom classes must override equals() (and hashCode(), to keep the contract consistent) to get meaningful comparisons:

```java
class Point {
    int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point)) return false;
        Point p = (Point) o;
        return x == p.x && y == p.y;
    }

    @Override
    public int hashCode() { return Objects.hash(x, y); }
}

Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
System.out.println(p1 == p2);        // false — different objects
System.out.println(p1.equals(p2));   // true — same x and y, thanks to the override
```

**Rule of thumb**: use == to check if two references point to the same object (or to compare primitives); use .equals() to check if two objects represent the same value.


### hashCode()

`hashCode()` returns an `int` that represents an object as a number — it's what hash-based collections (`HashMap`, `HashSet`, `HashTable`) use to decide which "bucket" an object goes into, so they can locate it in roughly O(1) instead of scanning every element (see Hashmap Internals below for the full bucket mechanism).

**The equals()/hashCode() contract** — this is one of the most common Java interview questions: if two objects are equal according to `.equals()`, they MUST return the same `hashCode()`. The reverse is not required — two unequal objects CAN share a hash code (a "collision"), which hash-based collections handle internally, but two EQUAL objects with DIFFERENT hash codes breaks the contract and causes real bugs.

```java
class Point {
    int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point)) return false;
        Point p = (Point) o;
        return x == p.x && y == p.y;
    }

    @Override
    public int hashCode() { return Objects.hash(x, y); }   // combines x and y into one hash
}
```

**What breaks if you only override `equals()` and forget `hashCode()`**: the default `hashCode()` (inherited from `Object`) is based on memory address, so two objects that ARE equal by your `equals()` can land in completely different HashMap buckets — meaning `map.get(key)` can fail to find a value you just put in with an "equal" key, because the map never even looks in the right bucket.

```java
Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);   // p1.equals(p2) is true

Map<Point, String> map = new HashMap<>();
map.put(p1, "first point");
System.out.println(map.get(p2));   // if hashCode() isn't overridden: null! (p2 hashes to a different bucket)
                                     // with hashCode() properly overridden: "first point"
```

**Rule of thumb**: always override `equals()` and `hashCode()` together (most IDEs generate both at once), never just one.


### hashCode() vs equals() — Two Different Jobs

It's easy to think of `hashCode()` and `equals()` as "basically the same thing" since they're always overridden together, but they answer two DIFFERENT questions and are used by DIFFERENT code paths:

| | `equals()` | `hashCode()` |
|---|---|---|
| Answers | "Are these two objects logically the same value?" | "Which bucket/slot should this object go in?" |
| Return type | `boolean` | `int` |
| Used by | `.equals()` calls, `List.contains()`, `List.indexOf()`, `==` is NEVER this — see == vs .equals() above | `HashMap`, `HashSet`, `Hashtable` — anything hash-based, to locate the right bucket BEFORE it even calls `equals()` |
| Comparing two objects | compares actual field VALUES | compares two `int`s — much cheaper than comparing every field |

**How a `HashMap` actually uses both, together, in sequence**: when you call `map.get(key)`, Java does NOT scan every entry calling `.equals()` on each one — that would be O(n), defeating the entire purpose of a hash map. Instead:

```java
// map.get(key) internally does roughly this:
int bucketIndex = key.hashCode() % numberOfBuckets;   // 1. hashCode() narrows it down to ONE bucket — O(1)
for (Entry e : buckets[bucketIndex]) {                 // 2. only within that bucket (usually 0-1 entries)...
    if (e.key.equals(key)) return e.value;               // 3. ...does it fall back to equals() to confirm the exact match
}
```

This is exactly why the equals()/hashCode() contract (above) matters so much: `hashCode()` is a cheap, coarse FILTER that narrows the search down to a small bucket; `equals()` is the precise, more expensive CONFIRMATION within that bucket. If `hashCode()` is wrong (e.g. not overridden), step 1 sends the search to the WRONG bucket entirely, and `equals()` in step 3 never even gets a chance to run — this is why a broken `hashCode()` causes `map.get()` to return `null` for a key that IS logically present, even though `equals()` itself is perfectly correct.

**Rule of thumb**: `equals()` is about correctness (are these the same value?); `hashCode()` is about performance (which bucket can I skip straight to?) — a hash-based collection needs BOTH, used together, to be both correct AND fast.


### Pass by Value

Java is ALWAYS pass-by-value — there is no pass-by-reference in Java, which surprises many developers coming from other languages. The nuance is in WHAT value gets passed for objects.

**For primitives**: a copy of the actual value is passed. Modifying the parameter inside the method never affects the caller's variable.

```java
void doubleIt(int n) { n = n * 2; }
int x = 5;
doubleIt(x);
System.out.println(x);   // 5 — unchanged
```

**For objects**: the variable itself is a REFERENCE (a pointer to the object on the heap) — and Java passes a COPY of that reference by value. This means the method receives its own pointer to the SAME heap object, so it CAN mutate the object's fields (the mutation is visible to the caller), but reassigning the parameter to point at a different object does NOT affect the caller's original reference.

```java
void addAge(Point p) { p.x = 999; }              // mutates the object the reference points to
Point original = new Point(1, 2);
addAge(original);
System.out.println(original.x);                  // 999 — the mutation IS visible

void reassign(Point p) { p = new Point(100, 100); }  // reassigns the LOCAL copy of the reference only
Point original2 = new Point(1, 2);
reassign(original2);
System.out.println(original2.x);                 // 1 — unaffected; only the local parameter changed
```

**Rule of thumb**: this is exactly the same behavior as JavaScript's "pass by reference value" (see the JavaScript chapter) — Java just makes the vocabulary stricter by insisting it's ALL pass-by-value, with object references simply being one of the types of value that gets copied.


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


### final

`final` means "cannot be changed again" — but what exactly that means depends on what it's applied to:

```java
final int MAX_USERS = 100;
// MAX_USERS = 200;             // COMPILE ERROR — a final variable can only be assigned once

final class Utils { }
// class MyUtils extends Utils { }   // COMPILE ERROR — a final class cannot be extended (e.g. String, Integer)

class Vehicle {
    final void start() { }        // a final method cannot be overridden by a subclass
}

final List<String> names = new ArrayList<>();
names.add("Ana");                 // fine — final only locks the REFERENCE, not the object's contents
// names = new ArrayList<>();     // COMPILE ERROR — cannot reassign names to point elsewhere
```

**Rule of thumb**: `final` on a variable = cannot be reassigned; `final` on a method = cannot be overridden; `final` on a class = cannot be subclassed. This is exactly the same "locks the binding, not necessarily the contents" behavior as JavaScript's `const` (see the JavaScript chapter).


### static

`static` means a member belongs to the CLASS itself, not to any individual instance — there is exactly ONE copy, shared by every object of that class (and accessible even with no instance at all).

```java
class Counter {
    static int totalCount = 0;      // shared by ALL instances — one copy total
    int id;                          // one copy PER instance

    Counter() {
        totalCount++;                 // every new Counter increments the SAME shared field
        id = totalCount;
    }

    static void printTotal() {         // static method — can be called without an instance,
        System.out.println(totalCount); // and can only access static members directly
    }
}

new Counter(); new Counter(); new Counter();
Counter.printTotal();               // 3 — called on the CLASS, not an instance
```

**Common uses**: utility methods that don't need instance state (`Math.max()`, `Collections.sort()`), constants (`static final`), and the `main` method itself (`public static void main`, called by the JVM before any object of the class exists). A `static` method cannot use `this` or access non-static (instance) members directly, since there is no specific instance to refer to.


### String vs StringBuilder vs StringBuffer

**String**: immutable — every operation that "modifies" a String actually creates a brand new String object, leaving the original unchanged. Great for safety and sharing (see Immutability below), but wasteful if you're building/concatenating a string in a loop, since each `+=` allocates a new object.

```java
String s = "Hello";
s = s + " World";     // does NOT modify the original "Hello" — creates a NEW String object,
                        // and reassigns "s" to point to it; the old "Hello" object becomes garbage

// Wasteful in a loop — creates N intermediate String objects, most immediately discarded:
String result = "";
for (int i = 0; i < 1000; i++) {
    result += i;    // creates a new String every single iteration — O(n²) overall
}
```

**StringBuilder**: mutable — an internal, resizable character buffer that can be appended to in place, without creating a new object each time. Not thread-safe, but fast — the standard choice for building strings in a loop.

```java
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);       // mutates the SAME buffer in place — O(n) overall
}
String result = sb.toString();   // convert to an immutable String only once, at the end
```

**StringBuffer**: functionally identical to StringBuilder (same API), but every method is `synchronized` — safe to share across threads, at the cost of extra locking overhead on every call. Predates StringBuilder (added in Java 5) and is rarely the right choice today, since most string-building isn't actually shared across threads.

**Rule of thumb**: use `String` for values that don't change; use `StringBuilder` for building/concatenating strings (especially in loops); reach for `StringBuffer` only in the rare case where the SAME builder instance is genuinely mutated by multiple threads concurrently.


### Immutability

An immutable object's state can never change after construction — every field is set once, in the constructor, and never modified again. `String` is Java's most famous immutable class, but you can (and often should) write your own.

```java
final class Money {                          // final — cannot be subclassed to add mutability
    private final double amount;               // final — cannot be reassigned after construction
    private final String currency;

    Money(double amount, String currency) {
        this.amount = amount;
        this.currency = currency;
    }

    // No setters! "Changing" the amount returns a NEW Money instead of mutating this one:
    Money add(double delta) {
        return new Money(this.amount + delta, this.currency);
    }

    double getAmount() { return amount; }
    String getCurrency() { return currency; }
}

Money price = new Money(100, "EUR");
Money newPrice = price.add(50);      // price itself is UNCHANGED — newPrice is a separate object
```

**Why immutability matters**: immutable objects are inherently thread-safe (no thread can ever see a partially-updated or torn state, since there's no mutation at all — this is why `String` can be freely shared across threads with zero synchronization), easier to reason about (a reference to an immutable object is guaranteed to always represent the same value), and safe to use as `HashMap` keys (their `hashCode()` can never change after insertion — a mutable key that changes its hash code after being added to a map causes it to become permanently unfindable, since it's now in the wrong bucket).

**Rule of thumb**: default to immutable classes for value-like objects (Money, Point, Coordinates, DTOs) — declare the class `final`, make every field `private final`, set them only in the constructor, and provide no setters, only methods that return a new instance instead of mutating `this`. Records (below) give you this pattern almost for free.


### Collections Framework


Java has a hierarchy of interfaces and implementations for collecting data. `Collection` is the root interface (implemented by `List`, `Set`, `Queue`); `Map` is separate, since it stores key-value pairs rather than single elements.


#### List
ordered sequence, allows duplicates, access by index

- **ArrayList**: backed by a dynamic array — O(1) read by index, O(n) insertion/removal in the middle (has to shift every following element), O(1) amortised add at the end. The default choice for most lists.
- **LinkedList**: a doubly-linked list — O(1) insertion/removal at the ends (or once you already have a reference to the node), but O(n) access by index (has to walk the list from the start).

```java
List<String> arrayList = new ArrayList<>();
arrayList.add("a"); arrayList.get(0);   // fast — direct array index

List<String> linkedList = new LinkedList<>();
linkedList.addFirst("a"); linkedList.addLast("b");   // fast — just relinks pointers, no shifting
```


#### SET
no duplicates, no guaranteed order (depends on implementation)

- **HashSet**: backed internally by a `HashMap` (elements become keys) — O(1) average add/contains/remove, no guaranteed iteration order.
- **LinkedHashSet**: like HashSet, but also maintains a linked list through entries, so iteration order matches INSERTION order.
- **TreeSet**: backed by a red-black tree — keeps elements in SORTED order (natural ordering or a custom `Comparator`, see below) — O(log n) for add/contains/remove.

```java
Set<Integer> hashSet = new HashSet<>(List.of(3, 1, 2));      // iteration order is unspecified
Set<Integer> linkedSet = new LinkedHashSet<>(List.of(3, 1, 2)); // iterates 3, 1, 2 — insertion order
Set<Integer> treeSet = new TreeSet<>(List.of(3, 1, 2));        // iterates 1, 2, 3 — sorted order
```


#### MAP
key-value pairs, keys are unique

- **HashMap**: O(1) amortised get/put, not thread-safe, allows one null key and multiple null values, no guaranteed iteration order.
- **LinkedHashMap**: like HashMap, but preserves INSERTION order (or, configured differently, access order — useful for building an LRU cache).
- **TreeMap**: sorted by key (natural ordering or a `Comparator`) — O(log n) get/put, useful when you need `firstKey()`/`lastKey()`/range queries.
- **ConcurrentHashMap**: thread-safe for concurrent reads/writes without locking the entire map (see the Concurrency section) — the correct choice instead of `synchronized`-wrapping a HashMap.

```java
Map<String, Integer> hashMap = new HashMap<>();
Map<String, Integer> linkedMap = new LinkedHashMap<>();   // iterates in insertion order
Map<String, Integer> treeMap = new TreeMap<>();            // iterates sorted by key
```


#### Queue and Deque
FIFO (First In, First Out) by default; `Deque` ("double-ended queue") extends `Queue` to allow adding/removing from BOTH ends, which is why it can also serve as a Stack (LIFO).

- **ArrayDeque**: backed by a resizable array — the preferred implementation for both a Queue AND a Stack today; faster than `LinkedList` and `Stack` for almost every use case.
- **PriorityQueue**: not FIFO — always removes the element with the highest priority next (smallest by natural ordering, or by a `Comparator`), backed by a binary heap — O(log n) insertion/removal.
- **LinkedList**: also implements `Deque`, but `ArrayDeque` is generally preferred (better cache locality, no per-node object overhead).

```java
Deque<Integer> queue = new ArrayDeque<>();
queue.offer(1); queue.offer(2);
queue.poll();                          // 1 — FIFO: removes from the front

Deque<Integer> stack = new ArrayDeque<>();
stack.push(1); stack.push(2);
stack.pop();                           // 2 — LIFO: removes from the front (the "top")

PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.offer(5); pq.offer(1); pq.offer(3);
pq.poll();                             // 1 — always the smallest first
```


#### Stack
LIFO (Last In, First Out)

- **ArrayDeque**: preferred modern implementation — used via `push()`/`pop()`/`peek()`, faster than the legacy `Stack` class.
- **Stack**: a legacy class (extends `Vector`, so every method is `synchronized`, adding unnecessary overhead for single-threaded use) — avoid in new code, kept in the JDK for historical/backwards-compatibility reasons.


**How to choose**:
  - Need fast random access? → **ArrayList**
  - Insert/remove at ends often? → **ArrayDeque** or **LinkedList**
  - Need unique elements? → **HashSet** (unordered, fastest) or **TreeSet** (sorted) or **LinkedHashSet** (insertion order)
  - Need key-value lookup? → **HashMap** (fastest), **TreeMap** (sorted), or **LinkedHashMap** (insertion/access order)
  - Concurrent access? → **ConcurrentHashMap**
  - Need LIFO behaviour? → **ArrayDeque** (as a stack)
  - Need "always process the highest/lowest priority item next"? → **PriorityQueue**


### Comparable vs Comparator

Both define an ordering for objects, used by `Collections.sort()`, `TreeSet`, `TreeMap`, and `Arrays.sort()` — the difference is WHERE the ordering logic lives.

**Comparable**: implemented BY the class itself — defines the object's single, natural/default ordering via `compareTo()`.

```java
class Employee implements Comparable<Employee> {
    String name;
    int salary;

    @Override
    public int compareTo(Employee other) {
        return Integer.compare(this.salary, other.salary);   // natural order: by salary, ascending
    }
}

List<Employee> employees = new ArrayList<>(List.of(emp1, emp2, emp3));
Collections.sort(employees);          // uses compareTo() — sorts by salary
```

**Comparator**: defined SEPARATELY from the class — lets you define one or more ALTERNATIVE orderings, without modifying the class itself (essential for classes you don't own, like `String` or `Integer`, or when you need multiple different sort orders for the same type).

```java
Comparator<Employee> byName = (e1, e2) -> e1.name.compareTo(e2.name);
Comparator<Employee> byNameThenSalary = Comparator
    .comparing((Employee e) -> e.name)
    .thenComparing(e -> e.salary);

employees.sort(byName);                              // sort by name instead of the natural order
employees.sort(byNameThenSalary.reversed());          // chain and reverse, fluently

employees.sort(Comparator.comparingInt((Employee e) -> e.salary).reversed());  // highest salary first
```

**Rule of thumb**: implement `Comparable` when a class has one obvious, intrinsic natural order (e.g. numbers sort numerically, dates sort chronologically); use a `Comparator` for any additional or alternative ordering, or when you can't modify the class at all.


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


**Compile time vs runtime**: a Java program's life has two distinct phases (see Compilation vs Execution above), and problems can occur in either one.

- **Compile time**: happens when `javac` translates your `.java` source into bytecode. Compile-time problems are caught BEFORE the program ever runs — a typo, a missing semicolon, calling a method that doesn't exist, or (as we'll see below) failing to handle a checked exception. The program simply refuses to compile until fixed, so this class of bug can never reach a user in production.
- **Runtime**: happens while the compiled bytecode is actually EXECUTING on the JVM. A runtime problem compiles perfectly fine — the code is syntactically and structurally valid — but something goes wrong while it's running: dividing by zero, accessing a `null` reference, an array index out of bounds, a file that turns out not to exist on disk.

This distinction is exactly what separates Java's two big categories of "something went wrong": **checked exceptions** are Java's mechanism for forcing you to acknowledge certain RUNTIME risks at COMPILE time (the compiler won't let you ignore them); **unchecked exceptions** and **errors** are only ever discovered at runtime, with no compile-time safety net.

In Java, exceptions are objects that represent errors or exceptional conditions.

```
Throwable
│
├── Error
│     ├── OutOfMemoryError
│     └── StackOverflowError
│
└── Exception
      │
      ├── IOException        (checked)
      ├── SQLException       (checked)
      │
      └── RuntimeException
            ├── NullPointerException
            ├── ArithmeticException
            ├── IllegalArgumentException
            └── IndexOutOfBoundsException
```

**What is an Error?** An `Error` represents a SERIOUS problem that a normal application should not try to catch or recover from — it signals that something has gone wrong at a level below your own code's logic, typically in the JVM itself or the environment it's running in. `OutOfMemoryError` means the JVM has run out of heap space to allocate new objects (see Garbage Collector above); `StackOverflowError` means the call stack has exceeded its size limit, almost always from unbounded/infinite recursion (see Recursion in the Data Structures & Algorithms chapter). Both indicate the application is in a state it likely cannot safely continue from — you can technically `catch (Error e)`, but doing so rarely helps, since the underlying resource problem (no memory, no stack space) is still there.

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


### Errors vs Exceptions

Both extend `Throwable` (see the diagram above), and both CAN be thrown/caught with the same `try`/`catch` syntax — but they represent fundamentally different kinds of problem, and Java's convention treats them very differently in practice:

| | Error | Exception |
|---|---|---|
| Represents | a serious problem in the JVM/environment, outside the application's control | a problem the APPLICATION itself can reasonably anticipate or cause |
| Examples | `OutOfMemoryError`, `StackOverflowError` | `NullPointerException`, `IOException`, `SQLException` |
| Should you catch it? | Generally no — the program usually cannot safely recover | Yes — this is exactly what exceptions are for |
| Checked or unchecked? | Unchecked (never forced by the compiler) | Can be either (see Checked vs Unchecked above) |
| Typical cause | resource exhaustion, JVM-level failure | invalid input, a bug in your code, an external system failing |

**Rule of thumb**: write `catch` blocks for `Exception`s (and its subtypes) as part of normal, expected error handling — that's their entire purpose. Leave `Error`s alone in almost all cases; catching an `OutOfMemoryError` and trying to "handle" it rarely works, because the JVM itself is already in trouble, and the correct fix is almost always addressing the ROOT CAUSE (a memory leak — see Garbage Collector above — or genuinely needing more heap) rather than adding a catch block around the symptom.


### Interfaces vs Abstract Classes

Both let you define a contract that other classes must follow, but they differ in purpose and capability.

**Interface**: a pure contract — WHAT a class can do, with no state of its own. A class can implement multiple interfaces (Java has no multiple inheritance for classes, but it does for interfaces). Since Java 8, interfaces can have `default` and `static` methods with implementation, but still no instance fields.

```java
interface Flyable {
    void fly();                              // abstract — no body

    default void takeOff() {                 // default method — has body
        System.out.println("Taking off...");
    }
}

interface Swimmable {
    void swim();
}

// A class can implement several interfaces
class Duck implements Flyable, Swimmable {
    public void fly() { System.out.println("Duck flying"); }
    public void swim() { System.out.println("Duck swimming"); }
}
```

**Abstract class**: a partial implementation — a base class that shares state (fields) and common behavior between closely related subclasses. A class can only extend ONE abstract class (single inheritance).

```java
abstract class Animal {
    protected String name;                   // can have fields (state)

    Animal(String name) {                    // can have constructors
        this.name = name;
    }

    abstract void makeSound();                // abstract — subclasses must implement

    void sleep() {                            // concrete — shared by all subclasses
        System.out.println(name + " is sleeping");
    }
}

class Dog extends Animal {
    Dog(String name) { super(name); }

    void makeSound() { System.out.println(name + " says Woof"); }
}
```

**Key differences**:

| | Interface | Abstract Class |
|---|---|---|
| Fields | only `public static final` constants | any instance fields, any visibility |
| Constructors | none | yes |
| Multiple inheritance | a class can implement many | a class can extend only one |
| Method bodies | `default`/`static` methods (Java 8+) | any method can have a body |
| Use case | unrelated classes sharing a capability (e.g. `Comparable`, `Flyable`) | closely related classes sharing state/behavior (e.g. `Animal` → `Dog`, `Cat`) |

**Rule of thumb**: use an interface to define a capability/contract (a "can-do" relationship); use an abstract class to share code and state between closely related types (an "is-a" relationship with shared implementation).


### Records

A `record` (Java 16+) is a special, compact class declaration for immutable data carriers — it eliminates the boilerplate of writing a constructor, getters, `equals()`, `hashCode()`, and `toString()` by hand for a class that just holds a fixed set of values (exactly the Immutability pattern shown above).

```java
record Point(int x, int y) { }

// The line above is equivalent to hand-writing:
// final class Point {
//     private final int x;
//     private final int y;
//     Point(int x, int y) { this.x = x; this.y = y; }
//     public int x() { return x; }              // accessor — note: x(), not getX()
//     public int y() { return y; }
//     public boolean equals(Object o) { ... }     // generated, compares all fields
//     public int hashCode() { ... }               // generated, consistent with equals()
//     public String toString() { ... }            // generated: "Point[x=1, y=2]"
// }

Point p = new Point(1, 2);
System.out.println(p.x());        // 1 — accessor method, no "get" prefix
System.out.println(p);            // Point[x=1, y=2]
System.out.println(p.equals(new Point(1, 2)));   // true — generated equals() compares by value
```

Records can still have additional methods, static fields, and custom validation in a "compact constructor":

```java
record Range(int min, int max) {
    Range {                                  // compact constructor — validates before assignment
        if (min > max) throw new IllegalArgumentException("min must be <= max");
    }

    int length() { return max - min; }        // regular instance method, allowed
}
```

**Rule of thumb**: use a record for any class whose sole purpose is to carry an immutable bundle of values (DTOs, API responses, value objects) — it's strictly less code than a hand-written immutable class with no loss of correctness.


### Enums

An `enum` defines a fixed, named set of constants — used whenever a variable should only ever hold one of a known, closed list of values (day of week, order status, user role).

```java
enum OrderStatus {
    PENDING, CONFIRMED, SHIPPED, DELIVERED, CANCELLED
}

OrderStatus status = OrderStatus.PENDING;

switch (status) {
    case PENDING   -> System.out.println("Waiting for confirmation");
    case SHIPPED   -> System.out.println("On the way");
    default        -> System.out.println("Other status");
}
```

Unlike enums in many other languages, Java enums are full-fledged classes — they can have fields, constructors, and methods, and each constant can even override a method individually:

```java
enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    EARTH(5.976e+24, 6.37814e6);

    private final double mass;      // each constant carries its own field values
    private final double radius;

    Planet(double mass, double radius) {   // enum constructors are always private
        this.mass = mass;
        this.radius = radius;
    }

    double surfaceGravity() {
        return 6.67300E-11 * mass / (radius * radius);
    }
}

System.out.println(Planet.EARTH.surfaceGravity());

// Built-in methods on every enum:
OrderStatus.valueOf("SHIPPED");    // string → enum constant (throws if no match)
OrderStatus.values();              // array of all constants, in declaration order
status.name();                     // "PENDING" — the constant's exact declared name
status.ordinal();                  // 0 — position in the declaration (avoid relying on this — fragile if reordered)
```

**Rule of thumb**: prefer enums over a set of `int`/`String` constants for any fixed, closed set of values — you get compile-time type safety (an invalid value simply can't compile) plus the ability to attach behavior directly to each constant.


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

#### What is a Stream?

A `Stream` is NOT a data structure — unlike a `List` or `Map`, it doesn't store any elements itself, and it holds no place in memory for "all the data at once." Instead, a Stream is a PIPELINE that describes a sequence of computations to run over a SOURCE of data (a collection, an array, a range of numbers, even a file's lines) — conceptually closer to a recipe than to a container.

```java
List<String> names = List.of("Ana", "Beatriz", "Carlos");

Stream<String> stream = names.stream();          // from a Collection — the most common source
Stream<Integer> stream2 = Stream.of(1, 2, 3);     // from individual values
IntStream range = IntStream.range(0, 10);         // from a numeric range (0 to 9)
Stream<String> arrStream = Arrays.stream(new String[]{"a", "b"});  // from an array
```

**A stream pipeline has three parts**: a SOURCE (where the data comes from), zero or more INTERMEDIATE operations (transformations, always lazy — see below), and exactly one TERMINAL operation (which actually triggers the whole pipeline to run — see below). Without a terminal operation at the end, nothing in the pipeline ever executes at all — the intermediate operations are just a description of work, not the work itself.

**A stream can only be consumed ONCE**: once a terminal operation runs, that stream is "closed" — calling another operation on the same stream instance throws `IllegalStateException`. If you need to process the same source twice, you must create a NEW stream from it (e.g. call `.stream()` on the collection again).

```java
Stream<String> s = names.stream();
s.forEach(System.out::println);   // terminal operation — consumes the stream
// s.count();                     // IllegalStateException: stream has already been operated upon or closed
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

A terminal operation is what actually PULLS data through the whole pipeline and produces a final result — a value, a collection, or a side effect — instead of another Stream. Because intermediate operations (above) are lazy, NOTHING in a stream pipeline runs at all until a terminal operation is called; this also means a stream, once a terminal operation has run, is considered consumed and cannot be reused (see above).

```java
List<String> names = List.of("Ana", "Beatriz", "Carlos");

collect(collector)   — collect into a list, set, map, or any custom container (e.g. Collectors.toList())
toList()             — shorthand for collect(Collectors.toList()) (Java 16+) — returns an immutable List
toArray()            — collect into an array instead of a List
forEach(consumer)    — execute a side effect for each element; returns nothing (void)
reduce(...)          — combine all elements into a single value (a sum, a concatenation, a running total)
count()              — count elements — a long
sum()/average()      — numeric aggregation, available on IntStream/LongStream/DoubleStream specifically
min()/max()          — the smallest/largest element, given a Comparator
findFirst()          — return the first element as an Optional (see the Optional section above)
findAny()            — return ANY matching element as an Optional — can be faster than findFirst() in a parallel stream
anyMatch/allMatch/noneMatch — boolean checks against a predicate
```

```java
// toList() (Java 16+) — the modern, concise way to end a stream pipeline
List<String> upper = names.stream()
    .map(String::toUpperCase)
    .toList();                       // equivalent to .collect(Collectors.toList()), but shorter

// reduce() — combining every element into one value
int totalLength = names.stream()
    .map(String::length)
    .reduce(0, Integer::sum);        // 0 is the starting value; Integer::sum combines two values at a time
```

**`toList()` vs `collect(Collectors.toList())`**: `toList()` is newer (Java 16+), more concise, and returns an UNMODIFIABLE list; `Collectors.toList()` makes no guarantee about mutability (in practice it's usually mutable) and is needed when targeting an older Java version, or when using a more specific collector like `Collectors.toSet()`, `Collectors.joining()`, or `Collectors.groupingBy()` — `toList()` only ever covers the plain "collect into a List" case.

**Rule of thumb**: every stream pipeline needs exactly one terminal operation to do anything at all — if you write a chain of `.filter()`/`.map()`/`.sorted()` and forget to end it with `.toList()`, `.forEach()`, `.collect()`, or similar, the code compiles fine but silently does nothing when run, since none of the lazy intermediate operations ever actually execute.


#### Functional Interfaces
interfaces with exactly one abstract method


Function<T,R>  — transforms T to R: R apply(T t)
Predicate<T>   — tests condition: boolean test(T t)
Consumer<T>    — consumes without returning: void accept(T t)
Supplier<T>    — provides without input: T get()
BiFunction<T,U,R> — function with two inputs


#### Method References

A method reference is shorthand for a lambda that does nothing but call an existing method — `ClassName::methodName` instead of writing out `x -> ClassName.methodName(x)`. They're purely syntactic sugar (compile to the same functional interface), used only to reduce noise when the lambda body is just a single method call.

```java
// Static method reference — equivalent to: x -> Integer.parseInt(x)
Function<String, Integer> parse = Integer::parseInt;

// Instance method on a PARTICULAR object — equivalent to: () -> System.out::println
Consumer<String> printer = System.out::println;

// Instance method on an ARBITRARY object of a type (very common in streams) —
// equivalent to: s -> s.toUpperCase()
Function<String, String> upper = String::toUpperCase;
names.stream().map(String::toUpperCase).forEach(System.out::println);

// Constructor reference — equivalent to: () -> new ArrayList<>()
Supplier<List<String>> listFactory = ArrayList::new;
```

**Rule of thumb**: use a method reference whenever a lambda's entire body is a single, direct call to an existing method with no extra logic — it's more concise and often clearer about intent than the equivalent lambda.


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


**What is a Thread?**

A thread is the smallest unit of execution that the CPU can schedule — a single sequential flow of instructions within a program. A running Java program always has at least one thread (the "main" thread), and can spawn more to run code concurrently.

Each thread has its own call stack (its own local variables and method frames — see the Stack vs Heap section above), but all threads within the same process share the same heap. This is exactly why concurrency is hard: two threads running at the same time can read and write the same object on the heap simultaneously, with no guaranteed order.

```java
Thread t = new Thread(() -> {
    System.out.println("Running in a new thread: " + Thread.currentThread().getName());
});
t.start();   // starts a new thread — runs concurrently with main
t.join();    // (optional) blocks the main thread until t finishes
```

In practice, you rarely create Thread objects directly — you use higher-level abstractions like ExecutorService or CompletableFuture (below), which manage a pool of threads for you.

Concurrency in Java is complex because multiple threads share memory.


**Race Condition**: two threads read and write the same variable simultaneously, producing unpredictable results because the interleaving is non-deterministic.


**Deadlock**: Thread A waits for the lock that Thread B holds, and Thread B waits for the lock that Thread A holds. Both block forever.




#### synchronized

Every object in Java has an intrinsic lock (also called a monitor). `synchronized` makes a thread acquire that lock before entering the block, and releases it automatically when the block exits (even if an exception is thrown). While one thread holds the lock, any other thread that tries to enter a block synchronized on the same object simply blocks and waits — this is what makes the block **mutually exclusive**, fixing both the visibility problem (like volatile) AND atomicity, since the whole block runs as one uninterruptible unit.

```java
class Counter {
    private int count = 0;
    public synchronized void increment() { count++; }  // atomic — whole method is one unit
    public synchronized int get() { return count; }
}
// Two threads calling increment() at the same time can no longer interleave —
// the second thread simply waits until the first one finishes and releases the lock
```

`synchronized` can be applied at different granularities:

```java
// 1) Instance method — locks on "this" (the current object)
public synchronized void increment() { count++; }

// 2) Static method — locks on the Class object itself (shared by ALL instances)
public static synchronized void staticMethod() { ... }

// 3) Block — locks on an explicit object, letting you protect only part of a method
// and choose exactly which lock to use
public void increment() {
    synchronized (this) {
        count++;
    }
    doSomethingUnrelatedThatDoesNotNeedTheLock();
}
```

**Trade-offs**: `synchronized` is simple and safe, but blocked threads wait indefinitely and cannot be interrupted, and overusing it (or locking more than necessary) hurts performance since it forces threads to run one at a time instead of in parallel. Locking on multiple objects in inconsistent order across different threads is also the classic cause of a **deadlock** (see above) — always acquire locks in the same order everywhere in your code to avoid it.

**Rule of thumb**: use `synchronized` when you need atomicity for compound operations or multi-step invariants across shared state; use `volatile` only for simple single-variable visibility (like a flag), since it's cheaper and never blocks.




#### volatile

For performance, each CPU core may keep its own cached copy of a variable (e.g. in a register or CPU cache) instead of always reading/writing straight to main memory. This means one thread can update a variable and another thread — running on a different core — may keep seeing a stale, cached value indefinitely, a problem called a **visibility** issue.

Marking a field `volatile` fixes this: every read goes straight to main memory, and every write is flushed straight to main memory, instead of using a thread-local cache. It also establishes a "happens-before" relationship, meaning the JVM/CPU cannot reorder instructions around the volatile access — so other changes visible to the writing thread before it wrote the volatile field become visible to any thread that reads it afterward.

```java
class Flag {
    private volatile boolean running = true;

    public void stop() { running = false; }         // written by thread A

    public void run() {
        while (running) {                            // read by thread B
            // do work
        }
        // without volatile, thread B might cache "running" once
        // and loop forever, never seeing thread A's update
    }
}
```

**What volatile does NOT do**: it only guarantees visibility, not atomicity. A compound operation like `count++` is actually three steps (read, increment, write), and volatile does nothing to stop two threads from interleaving those steps and losing an update.

```java
private volatile int count = 0;
public void increment() { count++; }   // STILL a race condition!
// Thread A reads count=5, Thread B reads count=5,
// both write back 6 — one increment is lost, even though count is volatile
```

**Rule of thumb**: use `volatile` for simple flags or single variables that are only ever written by one thread and read by others (like a shutdown flag). For compound operations (increment, check-then-act), you need `synchronized` or an atomic class like `AtomicInteger` instead.



#### Executor Service

Pool of reusable threads. You don't create threads manually:

```java
ExecutorService pool = Executors.newFixedThreadPool(4);
Future<Integer> future = pool.submit(() -> heavyComputation());
Integer result = future.get();    // blocks until result is ready
```


#### Completable Future (Java 8+)

Non-blocking async, with chaining:


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


### File I/O

Java's I/O APIs read/write files and streams. The modern `java.nio.file` package (Java 7+) is simpler than the older `java.io.File` for most common tasks:

```java
// Modern, simple API (java.nio.file) — preferred for whole-file operations
Path path = Path.of("data.txt");
List<String> lines = Files.readAllLines(path);              // read entire file into a List<String>
String content = Files.readString(path);                     // read entire file into a String (Java 11+)
Files.writeString(path, "Hello, World!");                    // write a String to a file

// try-with-resources — for streaming large files without loading everything into memory
try (BufferedReader reader = Files.newBufferedReader(path)) {
    String line;
    while ((line = reader.readLine()) != null) {
        process(line);                                        // process one line at a time
    }
}   // reader.close() is called automatically, even if an exception is thrown

try (BufferedWriter writer = Files.newBufferedWriter(Path.of("out.txt"))) {
    writer.write("some content");
}
```

**Buffered vs unbuffered**: reading/writing one byte or character at a time directly against the filesystem is slow (each call may be a system call); `Buffered*` classes wrap a stream/reader/writer and batch reads/writes internally, which is why they're used almost universally for real file work.


### Serialization

Serialization converts an object into a byte stream (to save to disk, send over a network, or cache), and deserialization reverses the process, reconstructing the object from those bytes.

```java
class User implements Serializable {     // must implement Serializable to opt in
    private static final long serialVersionUID = 1L;   // version identifier for compatibility checks
    String name;
    transient String password;            // "transient" fields are SKIPPED during serialization
}

// Serialize (write) an object to a file
try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("user.ser"))) {
    out.writeObject(new User());
}

// Deserialize (read) an object back from a file
try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("user.ser"))) {
    User user = (User) in.readObject();
}
```

**`serialVersionUID`**: an explicit version number for the class. If you deserialize an object with a different `serialVersionUID` than the class currently has, Java throws `InvalidClassException` — this protects against silently loading corrupted/incompatible data after the class definition has changed.

**In practice**: Java's built-in serialization is rarely used directly in modern applications — it's tied to Java specifically (not cross-language), historically had security vulnerabilities (deserializing untrusted data can execute arbitrary code), and is largely superseded by JSON (Jackson) or Protocol Buffers for APIs, and dedicated formats for caching (Redis, etc).


### Reflection

Reflection lets code inspect and manipulate classes, methods, and fields AT RUNTIME — including ones it doesn't know about at compile time. It's what makes frameworks like Spring and Jackson able to work generically with ANY class you give them.

```java
Class<?> clazz = User.class;                       // or: obj.getClass(), or Class.forName("com.app.User")

System.out.println(clazz.getName());                // "com.app.User"
Field[] fields = clazz.getDeclaredFields();          // every field, including private ones
Method[] methods = clazz.getDeclaredMethods();        // every method

// Reading a private field's value via reflection — bypasses normal access control
Field passwordField = clazz.getDeclaredField("password");
passwordField.setAccessible(true);                    // required to access a private field
String value = (String) passwordField.get(userInstance);

// Creating an instance dynamically, without knowing the concrete type at compile time
Object instance = clazz.getDeclaredConstructor().newInstance();

// Calling a method dynamically by name
Method method = clazz.getMethod("getName");
Object result = method.invoke(userInstance);
```

**Why this matters (even if you rarely write reflection code yourself)**: this is exactly how Spring reads `@Autowired`/`@Component` annotations to wire up dependency injection, how Jackson maps JSON fields onto your POJOs without you writing manual parsing code, and how JUnit discovers and calls your `@Test` methods — reflection is the mechanism underneath most Java "magic" annotations.

**Trade-offs**: reflection bypasses normal compile-time type checking (errors surface at runtime instead), is noticeably slower than direct method calls (no JIT optimization applies the same way), and can break encapsulation (`setAccessible(true)` deliberately overrides `private`). Frameworks pay this cost so application code doesn't have to.


### Design Patterns

Reusable, named solutions to recurring software design problems — a shared vocabulary for discussing architecture. The classic "Gang of Four" patterns are grouped into three categories: **Creational** (how objects are created — Singleton, Factory, Builder below), **Structural** (how objects are composed into larger structures — Decorator, Adapter, Facade below), and **Behavioral** (how objects communicate and share responsibility — Strategy, Observer below).

**Singleton** (creational) — ensures a class has exactly ONE instance, with a single global access point. Common for shared resources like configuration or a connection pool.

```java
class DatabaseConnection {
    private static final DatabaseConnection INSTANCE = new DatabaseConnection();
    private DatabaseConnection() { }              // private constructor — cannot be "new"'d externally
    static DatabaseConnection getInstance() { return INSTANCE; }
}
DatabaseConnection.getInstance();     // always returns the SAME instance
```

**Factory** (creational) — centralizes object creation logic behind a method, so the caller doesn't need to know which concrete class to instantiate.

```java
interface Payment { }
class CreditCardPayment implements Payment { }
class PayPalPayment implements Payment { }

class PaymentFactory {
    static Payment create(String type) {
        return switch (type) {
            case "credit_card" -> new CreditCardPayment();
            case "paypal"      -> new PayPalPayment();
            default            -> throw new IllegalArgumentException("Unknown type: " + type);
        };
    }
}
Payment payment = PaymentFactory.create("paypal");    // caller doesn't need to know the concrete class
```

**Builder** (creational) — constructs a complex object step by step, avoiding a constructor with many (often optional) parameters ("telescoping constructor" problem).

```java
class Pizza {
    private final String size;
    private final boolean cheese;
    private final boolean pepperoni;

    private Pizza(Builder b) { size = b.size; cheese = b.cheese; pepperoni = b.pepperoni; }

    static class Builder {
        private String size = "medium";
        private boolean cheese, pepperoni;

        Builder size(String s) { size = s; return this; }          // returns "this" for chaining
        Builder cheese(boolean c) { cheese = c; return this; }
        Builder pepperoni(boolean p) { pepperoni = p; return this; }
        Pizza build() { return new Pizza(this); }
    }
}
Pizza pizza = new Pizza.Builder().size("large").cheese(true).build();
```

**Strategy** (behavioral) — defines a family of interchangeable algorithms behind a common interface, letting the algorithm be swapped at runtime (this is exactly the shape of the PaymentGateway example in the Abstraction section above).

```java
interface DiscountStrategy { double apply(double price); }
class NoDiscount implements DiscountStrategy { public double apply(double price) { return price; } }
class TenPercentOff implements DiscountStrategy { public double apply(double price) { return price * 0.9; } }

class Order {
    private DiscountStrategy discount;
    Order(DiscountStrategy discount) { this.discount = discount; }
    double total(double price) { return discount.apply(price); }   // behavior swapped via the strategy passed in
}
new Order(new TenPercentOff()).total(100);   // 90.0
```

**Decorator** (structural) — wraps an object with another object implementing the SAME interface, adding new behavior BEFORE/AFTER delegating to the wrapped object — without touching the original class's code, and without the subclass-explosion that inheriting a new class for every combination of features would cause.

```java
interface Coffee { double cost(); String description(); }

class SimpleCoffee implements Coffee {
    public double cost() { return 2.0; }
    public String description() { return "Coffee"; }
}

abstract class CoffeeDecorator implements Coffee {           // implements the SAME interface it wraps
    protected final Coffee wrapped;
    CoffeeDecorator(Coffee wrapped) { this.wrapped = wrapped; }
}

class MilkDecorator extends CoffeeDecorator {
    MilkDecorator(Coffee wrapped) { super(wrapped); }
    public double cost() { return wrapped.cost() + 0.5; }               // adds behavior, then delegates
    public String description() { return wrapped.description() + " + Milk"; }
}

class SugarDecorator extends CoffeeDecorator {
    SugarDecorator(Coffee wrapped) { super(wrapped); }
    public double cost() { return wrapped.cost() + 0.2; }
    public String description() { return wrapped.description() + " + Sugar"; }
}

// Decorators can be stacked/combined freely at runtime, in any order —
// no need for a MilkAndSugarCoffee subclass, or one class per combination:
Coffee order = new SugarDecorator(new MilkDecorator(new SimpleCoffee()));
System.out.println(order.description() + " = $" + order.cost());   // "Coffee + Milk + Sugar = $2.7"
```

This is exactly the pattern Java I/O streams are built on (`new BufferedReader(new FileReader("file.txt"))` — each layer wraps the previous one, adding buffering, decoding, etc.), and it's also the conceptual model behind Spring's AOP-based features like `@Transactional` (see @TRANSACTIONAL below) — Spring generates a proxy that "decorates" your bean with transaction-management behavior around your actual method call.

**Observer** (behavioral) — defines a one-to-many dependency: when one object (the "subject") changes state, all its registered "observers" are notified automatically, without the subject needing to know any concrete detail about them beyond the shared interface.

```java
interface OrderObserver { void onOrderPlaced(String orderId); }

class EmailNotifier implements OrderObserver {
    public void onOrderPlaced(String orderId) { System.out.println("Email sent for " + orderId); }
}
class InventoryUpdater implements OrderObserver {
    public void onOrderPlaced(String orderId) { System.out.println("Inventory updated for " + orderId); }
}

class OrderService {
    private final List<OrderObserver> observers = new ArrayList<>();
    void subscribe(OrderObserver o) { observers.add(o); }

    void placeOrder(String orderId) {
        // ... save the order ...
        for (OrderObserver o : observers) o.onOrderPlaced(orderId);   // notify everyone, without knowing who they are
    }
}

OrderService service = new OrderService();
service.subscribe(new EmailNotifier());
service.subscribe(new InventoryUpdater());
service.placeOrder("order-123");   // both observers react, independently
```

This is the same underlying idea as GUI event listeners (`button.addEventListener` in the JavaScript chapter), Java's own `PropertyChangeListener`, and — at a larger architectural scale — the publish/subscribe messaging pattern used by message queues (see the Message Queues section in the system design guide).

**Adapter** (structural) — converts the interface of an existing class into another interface that client code expects, letting incompatible interfaces work together without modifying either side.

```java
// A third-party/legacy class with an interface you cannot change
class LegacyPrinter { void printOldFormat(String text) { System.out.println("[Legacy] " + text); } }

// The interface YOUR application actually expects
interface ModernPrinter { void print(String text); }

// Adapter bridges the two — translates calls from one interface to the other
class PrinterAdapter implements ModernPrinter {
    private final LegacyPrinter legacyPrinter;
    PrinterAdapter(LegacyPrinter legacyPrinter) { this.legacyPrinter = legacyPrinter; }
    public void print(String text) { legacyPrinter.printOldFormat(text); }   // translates the call
}

ModernPrinter printer = new PrinterAdapter(new LegacyPrinter());
printer.print("Hello");   // application code only ever talks to ModernPrinter
```

A very common real-world example: wrapping a third-party payment SDK (with its own vendor-specific method names) behind YOUR OWN `PaymentGateway` interface (see the Abstraction section above), so the rest of the application never depends directly on that vendor's specific API — swapping vendors later only means writing a new Adapter, not touching every caller.

**Facade** (structural) — provides a single, simplified interface in front of a complex subsystem made of many interacting classes, hiding that complexity from client code.

```java
// A complex subsystem with several classes that must be coordinated correctly
class InventoryService { boolean reserve(String sku, int qty) { return true; } }
class PaymentService { boolean charge(String cardToken, double amount) { return true; } }
class ShippingService { void scheduleDelivery(String orderId) { } }

// Facade — one simple method hides the coordination between three subsystems
class OrderFacade {
    private final InventoryService inventory = new InventoryService();
    private final PaymentService payment = new PaymentService();
    private final ShippingService shipping = new ShippingService();

    void placeOrder(String sku, int qty, String cardToken, double amount, String orderId) {
        if (!inventory.reserve(sku, qty)) throw new IllegalStateException("Out of stock");
        if (!payment.charge(cardToken, amount)) throw new IllegalStateException("Payment failed");
        shipping.scheduleDelivery(orderId);
    }
}

new OrderFacade().placeOrder("SKU-1", 1, "tok_123", 49.99, "order-123");
// Caller doesn't need to know inventory/payment/shipping exist, or in what order to call them
```

The Service layer in the Spring Boot chapter's layered architecture is effectively this pattern in practice — Controllers call a simple Service method, which internally coordinates multiple Repositories and other collaborators.

**Rule of thumb**: reach for Decorator when you need to add optional, stackable behavior to an object without subclassing for every combination; Observer when multiple parts of a system need to react to an event without being tightly coupled to whoever triggers it; Adapter when integrating a class whose interface doesn't match what your code expects; Facade when you want to hide a genuinely complex subsystem behind one simple entry point.


### SOLID Principles

Five design principles for writing maintainable, extensible object-oriented code:

**S — Single Responsibility Principle**: a class should have only ONE reason to change. A class that both validates data AND saves it to a database has two responsibilities — split it into a Validator and a Repository.

**O — Open/Closed Principle**: classes should be open for extension, but closed for modification. Instead of adding an `if/else` for every new payment type inside an existing method, add a new class implementing a shared interface (see Strategy above) — existing code doesn't need to change.

**L — Liskov Substitution Principle**: a subclass must be usable anywhere its parent class is expected, without breaking the program's correctness. The classic violation: a `Square extends Rectangle` that overrides `setWidth()` to also change height breaks any code that assumes setting a Rectangle's width leaves its height alone.

**I — Interface Segregation Principle**: prefer many small, specific interfaces over one large, general-purpose one — a class shouldn't be forced to implement methods it doesn't need.

```java
// Violates ISP — a ReadOnlyFile is forced to implement write(), which makes no sense for it
interface FileHandler { void read(); void write(); }

// Follows ISP — split into focused interfaces, implement only what's needed
interface Readable { void read(); }
interface Writable { void write(); }
class ReadOnlyFile implements Readable { public void read() { } }   // no write() forced on it
```

**D — Dependency Inversion Principle**: depend on abstractions (interfaces), not concrete implementations. This is exactly what Dependency Injection (see the Spring Boot chapter) is built on — a high-level `UserService` should depend on an `EmailService` interface, not a concrete `SmtpEmailService` class, so the implementation can be swapped (or mocked in tests) without changing `UserService`.


### Big O Analysis

Big O describes how an algorithm's running time (or memory use) grows as the input size (`n`) grows — it's about the GROWTH RATE, not the exact number of operations, which is why constants are dropped (`O(2n)` is just written `O(n)`).

**Common complexities, from fastest to slowest growth**:

```text
O(1)         — constant       — array index access, HashMap get/put (average case)
O(log n)     — logarithmic    — binary search, balanced tree operations (TreeMap/TreeSet)
O(n)         — linear         — a single loop through a list, linear search
O(n log n)   — linearithmic   — efficient sorting algorithms (Collections.sort, mergesort, quicksort average case)
O(n²)        — quadratic      — nested loops over the same collection (e.g. comparing every pair)
O(2^n)       — exponential    — naive recursive Fibonacci, brute-force subsets
```

```java
// O(1) — constant time, regardless of list size
int first = list.get(0);

// O(n) — one pass through the list
for (String item : list) { process(item); }

// O(n²) — nested loop over the same collection
for (String a : list) {
    for (String b : list) {
        compare(a, b);
    }
}

// O(log n) — binary search halves the search space each step
Collections.binarySearch(sortedList, target);
```

**Why it matters in interviews**: it's the standard vocabulary for reasoning about whether a solution will scale — an `O(n²)` solution that's fine for 100 elements can be unusably slow for 1,000,000. A very common pattern: trading O(n) extra space (a `HashSet`/`HashMap`) to bring an O(n²) nested-loop solution (e.g. "find duplicates," "two sum") down to O(n) time, since hash-based lookups are O(1) average.


## 1.02 JavaScript



### Overview

JavaScript is the only language that runs natively in browsers, making it the universal language of the web. It has evolved dramatically: from a simple scripting language (ES5) to a mature language with classes, modules, async/await, optional chaining, and more (ES2015+). Node.js brought JavaScript to the server.


### How JavaScript Works (Interpreted, JIT, the V8 Engine)

JavaScript is often called "interpreted", but modern engines like **V8** (used in Chrome and Node.js) are more sophisticated — they combine interpretation with **JIT (Just-In-Time) compilation** to get close to compiled-language speed while keeping JS's dynamic, run-immediately nature.

**V8's pipeline**:
1. **Parsing** — source code is tokenized and turned into an Abstract Syntax Tree (AST).
2. **Ignition (interpreter)** — converts the AST into bytecode and starts executing it immediately. This is why JS can start running almost instantly, unlike languages that require a full compile step before anything executes.
3. **TurboFan (JIT compiler)** — while Ignition runs the bytecode, V8 profiles the code in the background: which functions are called often ("hot"), and what types actually flow through them. Hot, type-stable functions get compiled into highly optimized machine code, replacing the slower bytecode for subsequent calls.
4. **Deoptimization** — if a function was optimized assuming, say, its argument is always a number, and it later receives a string, V8 throws away the optimized machine code and falls back to the interpreter ("deopt"). This is why keeping a function's argument types consistent (**monomorphic**) matters for performance.

```javascript
// Monomorphic — always called with the same argument shapes/types.
// TurboFan can specialize the compiled code aggressively.
function add(a, b) { return a + b; }
add(1, 2); add(3, 4); add(5, 6);

// Polymorphic/megamorphic — called with different types each time.
// Harder to optimize, and can trigger deoptimization if it was already compiled.
add(1, 2); add("a", "b"); add({}, []);
```

V8 also owns a **Garbage Collector** that manages the heap (see Stack vs Heap below) — a generational collector that scans short-lived "new space" objects frequently (Scavenger) and long-lived "old space" objects less often (Mark-Sweep-Compact).

**Engine vs runtime**: V8 by itself only parses, compiles, executes, and manages memory for JS — it has no concept of `setTimeout`, `fetch`, or the DOM. Those APIs are provided by the **runtime** wrapped around the engine (the browser or Node.js), along with the event loop's task queues that coordinate calling back into V8 (see The Event Loop below).


### var vs let (and const)

The three ways to declare a variable behave very differently — this trips up almost everyone coming from another language.

**var** (pre-ES6): function-scoped (not block-scoped) and hoisted with an initial value of `undefined`. Can be redeclared in the same scope without error. Its quirks are exactly why `let`/`const` were introduced in ES6.

```javascript
if (true) {
    var x = 1;
}
console.log(x);   // 1 — var "leaks" out of the if-block, it's only function-scoped

function loopVar() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 0);
    }
}
loopVar();   // 3, 3, 3 — all callbacks share the SAME i (function-scoped),
             // and by the time they run, the loop has already finished with i=3
```

**let**: block-scoped (`{ }`) — only exists within the nearest enclosing block. Hoisted, but sits in a "temporal dead zone" until its declaration line, so accessing it earlier throws a ReferenceError instead of silently returning `undefined`. Can be reassigned, but not redeclared in the same scope.

```javascript
if (true) {
    let y = 1;
}
// console.log(y);   // ERROR — y does not exist outside the block

function loopLet() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 0);
    }
}
loopLet();   // 0, 1, 2 — each iteration gets its OWN i (block-scoped),
             // so each closure captures a different value
```

**const**: same block scoping and temporal dead zone as `let`, but the binding cannot be reassigned after declaration. Note this only locks the variable binding, not the value itself — an object or array declared with `const` can still have its contents mutated.

```javascript
const arr = [1, 2, 3];
arr.push(4);        // fine — mutating the array's contents
// arr = [];         // ERROR — reassigning the binding itself
```

**Rule of thumb**: default to `const`; use `let` only when you know the variable needs reassignment (loop counters, accumulators); avoid `var` entirely in modern code.


### Primitive Types vs Objects

JavaScript values fall into two fundamentally different categories:

**Primitives**: string, number, boolean, null, undefined, symbol, bigint. Immutable — a primitive value itself can never be mutated, any "modifying" operation just produces a brand new value — and compared/copied by value.

**Objects**: everything else — plain objects, arrays, functions, dates, etc. Mutable, and compared/copied by reference.

```javascript
let a = "hello";
let b = a;
b = "world";
console.log(a);   // "hello" — primitives are copied by value; b is fully independent of a

let obj1 = { name: "Beatriz" };
let obj2 = obj1;
obj2.name = "Carlos";
console.log(obj1.name);   // "Carlos" — obj1 and obj2 point to the SAME object in memory

// Methods on strings that "look" mutating actually return a new value:
let str = "hello";
str.toUpperCase();        // returns "HELLO" but does not change str
console.log(str);         // still "hello" — strings are immutable
```

The classic `typeof` quirk:
```javascript
typeof "abc"          // "string"
typeof 42              // "number"
typeof true             // "boolean"
typeof undefined        // "undefined"
typeof Symbol()          // "symbol"
typeof 10n               // "bigint"
typeof null              // "object" — a decades-old bug baked into the language; null is NOT an object
typeof {}                // "object"
typeof []                // "object" — arrays are objects; use Array.isArray() to check specifically
typeof function(){}      // "function"
```


### Stack vs Heap

Like most language runtimes, the JS engine splits memory into two regions:

**Stack**: stores primitive values and references (pointers) to objects, scoped to the currently executing function calls. Fixed-size, very fast, LIFO (last-in, first-out).

**Heap**: stores the actual objects, arrays, and functions — a larger, less structured region managed by the Garbage Collector.

```javascript
function example() {
    let num = 42;             // the primitive value 42 lives on the stack
    let obj = { x: 1 };       // the REFERENCE to obj lives on the stack;
                               // the actual { x: 1 } object lives on the heap
}
```

This split is exactly why primitives are copied by value (the value itself sits on the stack and gets duplicated) while objects are copied by reference (only the pointer on the stack is duplicated — both variables still point to the same heap object). See Pass by Value vs Pass by Reference below for how this plays out with function arguments.


### Pass by Value vs Pass by Reference

Every argument passed to a JavaScript function is copied — but what gets copied depends on the type:

**Primitives — pass by value**: the function receives a copy of the value itself. Changes inside the function never affect the original variable.

```javascript
function double(n) { n = n * 2; }
let x = 5;
double(x);
console.log(x);   // 5 — unchanged; double() only modified its own local copy
```

**Objects — "pass by reference value"**: the function receives a copy of the REFERENCE (the pointer into the heap), not a copy of the object itself. This means the function CAN mutate the object's contents (both the original and the parameter still point at the same heap object), but reassigning the parameter itself does not affect the caller's variable.

```javascript
function addProp(obj) { obj.newProp = true; }        // mutates the shared object
let original = { a: 1 };
addProp(original);
console.log(original);   // { a: 1, newProp: true } — the mutation IS visible outside

function reassign(obj) { obj = { a: 999 }; }          // reassigns only the LOCAL copy of the reference
let original2 = { a: 1 };
reassign(original2);
console.log(original2);  // { a: 1 } — unaffected; only the local "obj" pointer changed
```

**Rule of thumb**: mutating an object passed into a function is visible to the caller; reassigning the parameter itself never is — for both primitives and objects.


### Scope

Scope determines where in the code a variable is visible. JavaScript uses **lexical (static) scoping** — scope is determined by WHERE code is physically written, not by how a function happens to be called (contrast this with `this`, which is dynamic — see below).

**Global scope**: declared outside any function/block — visible everywhere.
**Function scope**: `var` declared inside a function — visible anywhere in that function.
**Block scope**: `let`/`const` declared inside `{ }` — visible only within that block.

```javascript
let globalVar = "I'm global";

function outer() {
    let outerVar = "I'm in outer";

    function inner() {
        let innerVar = "I'm in inner";
        console.log(globalVar);   // accessible — inner can see all enclosing scopes
        console.log(outerVar);    // accessible — inner can see all enclosing scopes
    }
    inner();
    // console.log(innerVar);     // ERROR — outer cannot see into inner's scope
}
```

**Scope chain**: when a variable is referenced, the engine looks it up in the current scope; if not found, it walks UP through each enclosing scope until it reaches global scope; if it's still not found, a ReferenceError is thrown. This upward-only lookup is exactly the mechanism that makes closures possible (see Closures below).


### Hoisting

Before executing any code in a scope, the JS engine does a pass over that scope and "hoists" variable and function declarations — conceptually moves them to the top. What actually gets hoisted, and how it's initialized, differs by declaration type:

**var** — hoisted AND initialized to `undefined`. Referencing it before its declaration line is legal, it just evaluates to `undefined`.
```javascript
console.log(x);    // undefined — not an error; "var x" was hoisted
var x = 5;
```

**function declarations** — hoisted WITH their entire body. They can be called before the line where they're written.
```javascript
sayHi();                                // works — logs "Hi"
function sayHi() { console.log("Hi"); }
```

**let/const** — hoisted, but left UNINITIALIZED. They sit in a "temporal dead zone" (TDZ) from the top of the block until their declaration line; accessing them there throws a ReferenceError instead of returning `undefined`.
```javascript
console.log(y);    // ReferenceError: Cannot access 'y' before initialization
let y = 5;
```

**function expressions / arrow functions assigned to a variable** — only the variable declaration is hoisted, following that variable's own rules (var/let/const); the function body is not.
```javascript
sayBye();                                        // TypeError: sayBye is not a function
var sayBye = function() { console.log("Bye"); }; // (var was hoisted as undefined, not the function)
```

**Rule of thumb**: hoisting is just a side effect of how the engine prepares each scope before running it — write code as though nothing were hoisted (declare everything before using it) rather than relying on this behavior.


### == vs ===

**===** (strict equality): compares both value AND type — no conversion happens. If the types differ, it's simply `false`.

**==** (loose equality): compares values after performing type coercion — JavaScript tries to convert both operands to a common type before comparing, following a fairly complex set of rules.

```javascript
console.log(1 === 1);        // true — same type, same value
console.log(1 === "1");      // false — different types, no coercion
console.log(1 == "1");       // true — "1" is coerced to 1 before comparing

console.log(0 == false);     // true  — false is coerced to 0
console.log(0 === false);    // false — different types

console.log(null == undefined);   // true  — special case, loose equality treats them as equal
console.log(null === undefined);  // false — different types

console.log("" == 0);        // true  — "" coerces to 0
console.log([] == false);    // true  — [] coerces to "" then to 0

console.log(NaN == NaN);     // false — NaN is never equal to anything, even itself
console.log(NaN === NaN);    // false — same reason
Number.isNaN(NaN);           // true — the only reliable way to check for NaN
```

The coercion rules behind `==` are inconsistent and easy to get wrong (`[] == false` surprises almost everyone), which is why virtually every style guide and linter (ESLint's `eqeqeq` rule) requires `===`/`!==` everywhere. The only common exception is `x == null`, which is sometimes used deliberately as a concise way to check for both `null` and `undefined` at once.

**Rule of thumb**: always use `===` and `!==`. Never use `==`/`!=` unless you have a specific, deliberate reason (like the `x == null` check above).


### The Event Loop — HOW JAVASCRIPT HANDLES CONCURRENCY

JavaScript is single-threaded — there is only one call stack, so only one piece of code runs at any instant. Yet it handles asynchronous operations (network requests, timers, file I/O) without blocking. This works because of four cooperating pieces:

1. **Call Stack** — where synchronous code actually executes, one frame at a time (LIFO). While anything is on the stack, nothing else can run.
2. **Web APIs / Node APIs** — provided by the runtime, NOT by JS itself: `setTimeout`, `fetch`, DOM events, `fs` operations. These run in the background, outside the call stack, so they don't block it.
3. **Callback/Task Queues** — when a background API finishes (a timer fires, a fetch resolves), its callback is placed into a queue, waiting for its turn.
4. **Event Loop** — a simple, constant loop that asks: "Is the call stack empty? If so, take the next callback from a queue and push it onto the stack."

**Breaking down `setTimeout(() => {...}, 0)`**: `setTimeout` takes two arguments — a callback function to run later, and a delay in milliseconds. `() => {...}` is that callback, written as an arrow function (see Regular Functions vs Arrow Functions above) — it's the code that will actually execute once the timer fires. The `0` is the delay: "run this after (at least) 0ms." Despite the 0ms delay, this callback does NOT run immediately or synchronously — `setTimeout` always hands the callback off to a Web API first (see point 2 above), and that Web API only places it in the macrotask queue once the delay has elapsed. Even with a delay of 0, the callback must still wait for the ENTIRE current synchronous code to finish AND the entire microtask queue to drain before the event loop is allowed to pick it up (see the explanation and diagram below). This is exactly why `setTimeout(fn, 0)` is a common trick to intentionally defer a piece of code to run "as soon as possible, but only after everything else currently queued" — it can never run before the synchronous code that follows it.

```javascript
console.log("1");           // synchronous → executes immediately, on the call stack
setTimeout(() => {
    console.log("3");       // macrotask → handled by a Web API, then queued
}, 0);
Promise.resolve()
    .then(() => console.log("2"));  // microtask → queued as soon as the Promise resolves
console.log("4");           // synchronous → executes immediately, on the call stack
// Output: 1, 4, 2, 3
```

Why "2" before "3", even though setTimeout has a 0ms delay? Because there are actually TWO separate queues, with different priority — see below.

So the order is always: run all synchronous code → drain the ENTIRE microtask queue → run exactly ONE macrotask → drain the microtask queue again → run the next macrotask → ...


### Microtasks vs Macrotasks

Not all queued callbacks are equal — the event loop always fully drains the microtask queue before it's allowed to touch the macrotask queue, even if that means new microtasks keep pushing macrotasks back.

**Macrotasks** (the "task queue"): `setTimeout`, `setInterval`, `setImmediate` (Node), I/O callbacks, UI rendering, DOM events. The event loop processes exactly ONE macrotask per iteration.

**Microtasks** (a separate, higher-priority queue): Promise callbacks (`.then`/`.catch`/`.finally`), `queueMicrotask()`, async/await continuations, `MutationObserver`. ALL pending microtasks run before the next macrotask — including any NEW microtasks queued while the queue is being drained.

```javascript
console.log("start");                                        // 1 — sync

setTimeout(() => console.log("macrotask 1"), 0);              // macrotask

Promise.resolve().then(() => {
    console.log("microtask 1");                                // 3 — microtask
    Promise.resolve().then(() => console.log("microtask 2"));  // queued DURING the drain —
});                                                              // still runs before any macrotask

setTimeout(() => console.log("macrotask 2"), 0);              // macrotask

console.log("end");                                            // 2 — sync

// Output: start, end, microtask 1, microtask 2, macrotask 1, macrotask 2
// All sync code first, then EVERY microtask (even ones queued mid-drain),
// THEN one macrotask, then the microtask queue is checked again, then the next macrotask...
```

**Rule of thumb**: if something needs to run as soon as possible but after the current synchronous code finishes, use a microtask (a Promise or `queueMicrotask`) — it is guaranteed to run before any timer, even `setTimeout(fn, 0)`.


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

In JavaScript, `this` is determined by HOW a function is called, not where it is defined — this is called **dynamic scoping** for `this`. Arrow functions are the one exception: they have no `this` of their own at all.

**Regular functions**: `this` is set fresh every time the function is invoked, based on the "call-site" — what's to the left of the dot when it's called:

```javascript
const obj = {
    name: "Beatriz",
    greet: function() {
        console.log(this.name);     // "Beatriz" — called as obj.greet(), so this = obj
    }
};

const fn = obj.greet;
fn();          // undefined — called with no receiver, this = global object (or undefined in strict mode)
obj.greet();   // "Beatriz" — same function, but called as a method of obj this time

// The exact same function object behaves differently depending on HOW it's called:
const other = { name: "Carlos", greet: obj.greet };
other.greet(); // "Carlos" — this = other, because that's the object left of the dot
```

**Arrow functions**: do NOT have their own `this`. Instead, they capture (close over) `this` from the enclosing lexical scope at the moment they are DEFINED — exactly like a regular variable in a closure. Calling an arrow function differently, or with `.call()`/`.apply()`/`.bind()`, can never change what `this` refers to inside it.

```javascript
const obj = {
    name: "Beatriz",
    greetArrow: () => {
        console.log(this.name);     // undefined — this is NOT obj here;
                                      // it's whatever "this" was outside the object literal
                                      // (the module/global scope, since arrow functions
                                      // don't create their own "this")
    }
};

// Where arrow functions shine: preserving the outer "this" inside a callback
class Timer {
    constructor() { this.seconds = 0; }

    start() {
        // Regular function would lose "this" here — setTimeout calls the
        // callback with no receiver, so this.seconds would throw/be undefined
        setTimeout(function() {
            // this.seconds++;   // BROKEN — "this" is not the Timer instance
        }, 1000);

        // Arrow function inherits "this" from start()'s scope, i.e. the Timer instance
        setTimeout(() => {
            this.seconds++;      // WORKS — "this" is still the Timer instance
        }, 1000);
    }
}
```

**bind/call/apply**: explicitly control what `this` is for a regular function (they have no effect on arrow functions, since arrow functions ignore the call-site entirely):

```javascript
fn.call(obj);          // invoke fn immediately with this = obj
fn.apply(obj, [args]); // same as call, but arguments passed as an array
const bound = fn.bind(obj);  // returns a NEW function permanently bound to this = obj
bound();                // "Beatriz" — this can never be changed again, even with obj2.bound = bound
```

**Rule of thumb**: use a regular function when you need `this` to be dynamic — i.e. determined by the caller (object methods, event handlers where `this` should be the element, class methods called directly). Use an arrow function when you want `this` to be lexical — i.e. inherited from the surrounding code (callbacks passed to `setTimeout`/array methods/promises inside a class or method, where you want `this` to keep meaning "the enclosing instance"). A useful test: if you'd otherwise need `.bind(this)` or `const self = this;` to make it work, that's exactly the case an arrow function solves.


### Regular Functions vs Arrow Functions — Beyond `this`

`this` binding (above) is the most important difference, but there are several other distinctions worth knowing:

**arguments object**: regular functions have access to an array-like `arguments` object holding every passed argument; arrow functions do not have their own — they inherit `arguments` from the enclosing scope, exactly like they inherit `this`.

```javascript
function regular() { console.log(arguments); }
regular(1, 2, 3);          // Arguments(3) [1, 2, 3]

const arrow = (...args) => { console.log(args); };  // use rest parameters instead
arrow(1, 2, 3);             // [1, 2, 3]
```

**Cannot be used as constructors**: regular functions can be called with `new` to construct objects; arrow functions cannot — they have no internal `[[Construct]]` behavior and no `prototype` property.

```javascript
function Person(name) { this.name = name; }
new Person("Ana");                        // works

const PersonArrow = (name) => { this.name = name; };
// new PersonArrow("Ana");                // TypeError: PersonArrow is not a constructor
```

**No own `prototype` property**: `function.prototype` exists on regular functions (used to build the prototype chain — see below), but is `undefined` on arrow functions.

**Implicit return / concise syntax**: an arrow function with a single expression body implicitly returns that expression, with no `return` keyword or `{ }` needed.

```javascript
const square = x => x * x;                // implicit return
const square2 = x => { return x * x; };   // equivalent, explicit form
```

**Cannot be generator functions**: `function*` exists; there is no arrow-function equivalent.

**Rule of thumb**: use arrow functions for short callbacks and anywhere you want to inherit the outer `this`; use regular `function` declarations for object methods, constructors, and anywhere you need your own `this`, `arguments`, or generator behavior.


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


### Classes

ES6 classes are syntactic sugar over the prototype-based inheritance shown above — a class's methods still live on `ClassName.prototype` under the hood.

```javascript
class Animal {
    #secret = "shh";              // private field (ES2022) — only accessible inside the class

    static count = 0;             // static property — shared by the class itself, not instances

    constructor(name) {
        this.name = name;
        Animal.count++;
    }

    speak() {                     // instance method — lives on Animal.prototype
        console.log(`${this.name} makes a sound`);
    }

    get displayName() {           // getter — accessed like a property, not called like a method
        return `Animal: ${this.name}`;
    }

    set displayName(value) {      // setter
        this.name = value;
    }

    static create(name) {         // static method — called on the class itself, not an instance
        return new Animal(name);
    }
}

class Dog extends Animal {        // inheritance
    speak() {
        super.speak();            // call the parent's method
        console.log(`${this.name} barks`);
    }
}

const rex = new Dog("Rex");
rex.speak();                          // "Rex makes a sound" then "Rex barks"
console.log(rex instanceof Animal);   // true
console.log(rex.displayName);         // "Animal: Rex" — called like a property, not rex.displayName()
```

**Key points**: unlike function declarations, classes are NOT hoisted the usable way — they sit in a temporal dead zone just like `let`/`const` (see Hoisting above). All code inside a class body runs in strict mode automatically. Private fields (`#field`) are truly private — inaccessible even via bracket notation from outside the class, unlike the older convention of just prefixing a property with `_`.


### Objects

Objects are collections of key-value pairs (properties), where keys are strings or Symbols and values can be anything — including functions (methods).

```javascript
const user = {
    name: "Beatriz",
    age: 25,
    greet() { console.log(`Hi, I'm ${this.name}`); },   // method shorthand
};

// Computed property names
const key = "email";
const user2 = { [key]: "b@example.com" };   // { email: "b@example.com" }

// Shorthand property names
const name = "Ana", age = 30;
const user3 = { name, age };   // { name: "Ana", age: 30 }
```

**Common `Object` static methods**:

```javascript
Object.keys(user);          // ["name", "age", "greet"] — array of keys
Object.values(user);        // ["Beatriz", 25, function] — array of values
Object.entries(user);       // [["name","Beatriz"], ["age",25], ...] — array of [key, value] pairs
Object.assign({}, user, { age: 26 });   // shallow merge into a new object
Object.freeze(user);        // makes the object immutable (shallow) — further writes silently fail (or throw in strict mode)
Object.isFrozen(user);      // true

// Iterating
for (const k in user) { console.log(k); }                    // ALL enumerable keys, including inherited ones
for (const [k, v] of Object.entries(user)) { console.log(k, v); }  // only own properties, gives key AND value
```

**Shallow vs deep copy** — a very common interview gotcha:

```javascript
const shallow = { ...user };               // spread — copies only top-level properties
const shallow2 = Object.assign({}, user);  // equivalent to the spread above
// Nested objects/arrays are still SHARED references in a shallow copy!

const deep = structuredClone(user);            // true deep copy (modern browsers / Node 17+)
const deepOld = JSON.parse(JSON.stringify(user)); // older deep-copy trick — loses functions, undefined, and turns Dates into strings
```


### Arrays — Important Methods

Arrays are ordered, index-based objects with a large built-in method library, split into two categories:

**Mutating methods** (change the original array in place):

```javascript
const arr = [1, 2, 3];
arr.push(4);           // add to end → [1,2,3,4], returns the new length
arr.pop();              // remove from end → [1,2,3], returns the removed item
arr.shift();            // remove from start → [2,3], returns the removed item
arr.unshift(0);         // add to start → [0,2,3], returns the new length
arr.splice(1, 1, "x");  // remove/insert at an index → removes 1 item at index 1, inserts "x"
arr.sort();              // sorts IN PLACE, and defaults to STRING comparison! [10,2,1].sort() → [1,10,2]
arr.sort((a, b) => a - b);  // correct numeric ascending sort — always pass a comparator for numbers
arr.reverse();            // reverses in place
```

**Non-mutating methods** (return a new array/value, leave the original untouched — preferred in modern/functional code):

```javascript
const nums = [1, 2, 3, 4, 5];

nums.map(n => n * 2);                  // [2,4,6,8,10] — transform every element
nums.filter(n => n % 2 === 0);         // [2,4] — keep elements matching a condition
nums.reduce((acc, n) => acc + n, 0);   // 15 — accumulate into a single value
nums.find(n => n > 3);                 // 4 — first matching element, or undefined
nums.findIndex(n => n > 3);            // 3 — index of the first match, or -1
nums.some(n => n > 4);                 // true — does AT LEAST ONE element match?
nums.every(n => n > 0);                // true — do ALL elements match?
nums.includes(3);                       // true — does the array contain this value?
nums.indexOf(3);                        // 2 — index of a value, or -1
nums.slice(1, 3);                       // [2,3] — extract a portion; does NOT mutate (contrast with splice)
nums.concat([6, 7]);                    // [1,2,3,4,5,6,7] — merge arrays into a new one
nums.join(", ");                        // "1, 2, 3, 4, 5" — join into a string
nums.flat();                             // flattens one level of nested arrays
nums.flatMap(n => [n, n * 2]);          // map + flat combined in a single pass
Array.from({ length: 3 }, (_, i) => i); // [0,1,2] — build an array from an array-like/iterable
Array.isArray(nums);                    // true — the reliable array check (see the typeof [] quirk above)
```

**Chaining** — a very common interview pattern:

```javascript
const total = [1, 2, 3, 4, 5, 6]
    .filter(n => n % 2 === 0)     // [2, 4, 6]
    .map(n => n * n)               // [4, 16, 36]
    .reduce((sum, n) => sum + n, 0); // 56
```

**Common pitfall**: `map`/`filter`/`reduce`/`find` all invoke their callback with `(element, index, array)`. `forEach` looks similar but just iterates for side effects and always returns `undefined` — use it only when you don't need a new array back.


### Destructuring

Destructuring pulls values out of arrays/objects into individual variables in a single step.

```javascript
// Object destructuring
const user = { name: "Beatriz", age: 25, address: { city: "Lisbon" } };
const { name, age } = user;
const { name: userName } = user;              // rename while destructuring
const { role = "guest" } = user;              // default value if the property is missing
const { address: { city } } = user;           // nested destructuring

// Array destructuring — position-based, not key-based
const [first, second] = [1, 2, 3];
const [, , third] = [1, 2, 3];                 // skip elements with empty slots
const [a, b, ...rest] = [1, 2, 3, 4];          // rest captures the remaining elements

// Swapping variables without a temp variable
let x = 1, y = 2;
[x, y] = [y, x];

// Very common in function parameters — self-documenting, avoids positional args
function createUser({ name, age, role = "user" }) {
    console.log(name, age, role);
}
createUser({ name: "Ana", age: 30 });
```


### Spread and Rest

These share the same `...` syntax but do opposite things depending on where they appear — a common interview gotcha.

**Spread**: EXPANDS an iterable/object into individual elements — used when you're PROVIDING a value (inside a literal, or a function call).

```javascript
const arr = [1, 2, 3];
const copy = [...arr];             // shallow copy of an array
const merged = [...arr, 4, 5];     // [1,2,3,4,5]

const obj = { a: 1, b: 2 };
const objCopy = { ...obj, c: 3 };  // shallow copy + add a property

function sum(a, b, c) { return a + b + c; }
sum(...[1, 2, 3]);                 // spreads the array into 3 separate arguments
```

**Rest**: COLLECTS multiple elements/arguments INTO a single array/object — used when you're RECEIVING a value (a destructuring pattern, or a parameter list). It must always be the LAST element.

```javascript
function sum(...numbers) {          // rest parameter — gathers all args into a real array
    return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4);                    // numbers = [1, 2, 3, 4]

const [first, ...others] = [1, 2, 3, 4];               // others = [2, 3, 4]
const { id, ...otherFields } = { id: 1, name: "Ana", age: 30 };  // otherFields = { name, age }
```

**Rule of thumb**: `...` on the left/receiving side (destructuring, parameter lists) = rest; `...` on the right/providing side (literals, function calls) = spread.


### Promises

A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It has exactly three states, and can only transition once, in one direction: pending → fulfilled, OR pending → rejected. Once settled, a Promise's outcome never changes again.

```javascript
const promise = new Promise((resolve, reject) => {
    // the "executor" — runs synchronously and immediately
    setTimeout(() => {
        const success = true;
        if (success) resolve("Data loaded");    // pending → fulfilled
        else reject(new Error("Failed"));        // pending → rejected
    }, 1000);
});

promise
    .then(value => console.log(value))     // runs if fulfilled
    .catch(error => console.error(error))  // runs if rejected (or if a .then() throws)
    .finally(() => console.log("Done"));   // always runs, regardless of outcome
```

**Chaining**: each `.then()` returns a NEW promise, which is why calls can be chained — if a `.then()` returns a plain value, the next `.then()` receives it directly; if it returns a Promise, the chain automatically waits for it to settle before continuing.

```javascript
fetch("/api/user/1")
    .then(response => response.json())    // returns a Promise — the next .then() awaits it
    .then(user => user.name)               // returns a plain value
    .then(name => console.log(name));      // receives the plain value directly
```

**Promise combinators** — running multiple promises together:

```javascript
Promise.all([p1, p2, p3]);
// Waits for ALL to fulfill. Rejects immediately if ANY ONE rejects ("fail fast").
// Result: array of values, in the same order as the input.

Promise.allSettled([p1, p2, p3]);
// Waits for ALL to settle (fulfilled OR rejected) — never itself rejects.
// Result: array of { status: "fulfilled", value } or { status: "rejected", reason }.

Promise.race([p1, p2, p3]);
// Settles as soon as the FIRST promise settles (fulfilled or rejected) — whichever is fastest.

Promise.any([p1, p2, p3]);
// Settles as soon as the FIRST promise FULFILLS. Only rejects if ALL of them reject.
```

**Rule of thumb**: use `Promise.all` when every result is required and any single failure should abort everything; use `allSettled` when you want every result regardless of individual failures; use `race`/`any` for timeouts or "fastest wins" scenarios.


### Async/Await

`async`/`await` is syntactic sugar over Promises — it lets asynchronous code read like synchronous code, while still being non-blocking under the hood (an `async` function always returns a Promise, and `await` pauses the function, NOT the whole thread, until that Promise settles).

```javascript
// Promise chain
fetch("/api/user/1")
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(error => console.error(error));

// The same logic with async/await
async function getUser(id) {
    try {
        const response = await fetch(`/api/user/${id}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error;    // errors from a rejected awaited Promise are thrown, catchable with try/catch
    }
}

// Combine with Promise.all to run requests concurrently instead of sequentially
const [user, posts] = await Promise.all([
    fetch("/api/user/1").then(r => r.json()),
    fetch("/api/posts").then(r => r.json()),
]);
// Awaiting them one at a time (await fetch(...); await fetch(...);) would run them
// sequentially instead, wasting time — Promise.all lets both requests fly in parallel.
```


### Fetch API

`fetch()` is the built-in, Promise-based way to make HTTP requests in JavaScript — the modern replacement for the older, callback-based `XMLHttpRequest`. It's a Web API (see The Event Loop above), provided by the browser/Node.js runtime, not by the JS language itself.

```javascript
// GET request — the simplest case
const response = await fetch("/api/users");
const users = await response.json();     // parse the body as JSON (also returns a Promise)

// POST request with a JSON body — method/headers/body must be specified explicitly
const response = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Ana", email: "ana@example.com" }),
});
```

**The most common `fetch` gotcha**: the returned Promise only rejects on a NETWORK failure (DNS failure, no connectivity) — it does NOT reject for HTTP error status codes like 404 or 500. You must check `response.ok` (or `response.status`) yourself:

```javascript
const response = await fetch("/api/users/999");
// response.ok is false for a 404, but fetch() did NOT throw — this line still runs normally!

if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);   // you must throw manually if you want this to be an error
}
```

**Reading the response body**: the body can only be read ONCE — `response.json()`, `response.text()`, `response.blob()` all consume the body stream, so calling more than one on the same response throws.

```javascript
response.json();    // parses the body as JSON
response.text();    // reads the body as plain text
response.blob();    // reads the body as binary data (e.g. downloading an image/file)
```

**Aborting a request**: `fetch` supports cancellation via an `AbortController` — useful for cancelling a stale request (e.g. a search-as-you-type request superseded by a newer keystroke):

```javascript
const controller = new AbortController();
fetch("/api/search?q=abc", { signal: controller.signal })
    .catch(err => { if (err.name === "AbortError") console.log("Request was cancelled"); });

controller.abort();   // cancels the in-flight request
```

**Rule of thumb**: `fetch` is fine for simple cases, but production apps typically wrap it (or use a library like Axios, or a data-fetching layer like React Query/SWR — see the React chapter) to handle the `response.ok` check, retries, and request cancellation consistently, instead of repeating that boilerplate at every call site.


### Modules

JavaScript has two module systems in common use today:

**CommonJS (CJS)** — Node.js's original module system. Synchronous, uses `require`/`module.exports`:

```javascript
// math.js
module.exports = { add: (a, b) => a + b };
// or: exports.add = (a, b) => a + b;

// app.js
const { add } = require("./math");
```

**ES Modules (ESM)** — the language standard, native to browsers and modern Node.js, using `import`/`export`. Its imports/exports must be static, top-level declarations, which is exactly what lets bundlers perform tree-shaking (removing unused exports from the final bundle):

```javascript
// math.js
export const add = (a, b) => a + b;                        // named export — a file can have many
export default function multiply(a, b) { return a * b; }   // default export — only one per file

// app.js
import multiply, { add } from "./math.js";   // default + named import together
import * as math from "./math.js";            // import everything as a namespace object

// Dynamic import — loads a module asynchronously, returns a Promise (enables code splitting)
const mathModule = await import("./math.js");
```

**Key difference**: CJS is resolved synchronously and can be `require`d conditionally, anywhere in the code; ESM is resolved statically (ahead of time) and imports must be top-level. Node.js supports both today — `.cjs`/`.mjs` extensions, or `"type": "module"` in package.json to make `.js` files ESM by default.


### Memory Leaks

A memory leak happens when memory that's no longer needed is never released, because something still holds a reference to it, preventing the Garbage Collector from reclaiming it. Common causes in JavaScript:

**1. Accidental global variables**: forgetting `let`/`const`/`var` creates an implicit global, which lives for the entire lifetime of the program.

```javascript
function leak() {
    leakedVar = "I'm global now";   // no declaration keyword — silently attaches to the global object
}
```

**2. Forgotten timers/intervals**: a `setInterval` that's never cleared keeps its callback — and everything the callback closes over — alive forever.

```javascript
const data = fetchLargeData();
setInterval(() => console.log(data.length), 1000);   // never cleared — "data" can never be garbage collected
// Fix: clearInterval(id) once it's no longer needed
```

**3. Detached DOM nodes**: keeping a JS reference to a DOM element after removing it from the document — the element can't be freed because the JS variable still points to it.

```javascript
let detachedNode = document.getElementById("item");
detachedNode.remove();      // removed from the DOM...
// ...but "detachedNode" still references it — it leaks until detachedNode is reassigned/cleared
```

**4. Closures holding onto large data unintentionally**: a closure captures its ENTIRE enclosing scope, so a long-lived function that closes over a large object it no longer needs prevents that object from ever being freed.

**5. Event listeners that are never removed**: attaching a listener to a long-lived object (like `window`) from a short-lived component, without ever calling `removeEventListener`.

```javascript
window.addEventListener("resize", handleResize);
// If the component using this is destroyed but the listener is never removed,
// "handleResize" (and anything it closes over) stays alive as long as "window" does.
```

**How to detect**: Chrome DevTools → Memory tab → take heap snapshots before/after an action that should free memory, and compare them — a steadily growing heap or increasing detached DOM node count across repeated actions is the classic sign.

**Rule of thumb**: always pair "subscribe" with "unsubscribe" — clear every timer, remove every event listener, and drop long-lived references once they're no longer needed (this is exactly what React's `useEffect` cleanup function exists for).


### ES2015+ FEATURES


```javascript
// Optional chaining — stops at the first null/undefined
const city = user?.address?.city;                  // undefined, not TypeError
const method = obj?.method?.();

// Nullish coalescing — only falls back on null/undefined (not 0 or "")
const displayName = user.name ?? "Anonymous";
// vs logical OR — falls back on any falsy value (0, "", false, null, undefined)
const displayName2 = user.name || "Anonymous";

// Template literals
const msg = `Hello ${name}, you are ${age} years old`;
```



## 1.03 TypeScript



### Overview

TypeScript is a superset of JavaScript developed by Microsoft. This means that any valid JavaScript is also valid TypeScript — you can adopt TypeScript gradually. The compiler (tsc) transforms TypeScript into plain JavaScript, so it runs in any environment that runs JavaScript: browser, Node.js, Deno. The big advantage is static type checking at compile time — you find errors before running the code, and your editor gives you much more precise autocomplete.


### Why TypeScript Exists

JavaScript is dynamically typed — a variable's type is only checked when the code actually runs, so an entire category of bugs (calling a method that doesn't exist, passing a string where a number was expected, forgetting a required object property) only surfaces in production, or worse, silently produces wrong results instead of crashing.

```javascript
// Plain JavaScript — no error until this line actually executes
function getTotal(order) {
    return order.price * order.qty;
}
getTotal({ price: 10 });   // NaN at runtime — "qty" was misspelled/forgotten, nothing caught it
```

TypeScript adds a type system ON TOP of JavaScript that catches this class of mistake at compile time, before the code ever runs:

```typescript
function getTotal(order: { price: number; qty: number }): number {
    return order.price * order.qty;
}
// getTotal({ price: 10 });   // COMPILE ERROR: Property 'qty' is missing
```

Beyond catching bugs early, types act as always-accurate, always-up-to-date documentation — your editor can autocomplete object properties, function parameters, and catch typos as you type, instead of needing to read the implementation or hope a comment is still correct. Because TypeScript is a strict superset, you can also adopt it incrementally on an existing JS codebase, file by file, rather than needing a full rewrite.


### How TypeScript Compilation Works

TypeScript code is never executed directly — the TypeScript compiler (`tsc`) transpiles `.ts`/`.tsx` files into plain `.js` files, and it's that generated JavaScript that actually runs in the browser or Node.js.

```text
your-file.ts  →  tsc (type-checks AND strips types)  →  your-file.js  →  runs in Node/browser
```

**Type erasure**: all type annotations, interfaces, and generic parameters exist ONLY at compile time — `tsc` deletes them entirely when generating the output JS. This means you can never inspect a TypeScript type at runtime (there is no `typeof` for a `type` or `interface`), and it's why generics can't do things that require runtime type information (like `new T()` with an unconstrained `T`).

```typescript
interface User { id: number; name: string; }
function greet(user: User) { console.log(`Hi ${user.name}`); }

// compiles to plain JS — the interface and the type annotation are both gone:
// function greet(user) { console.log(`Hi ${user.name}`); }
```

**tsconfig.json** controls how compilation behaves — the most important options:

```jsonc
{
  "compilerOptions": {
    "target": "ES2020",        // which JS version to output (affects syntax like async/await)
    "module": "ESNext",        // which module system to emit (CommonJS vs ES Modules)
    "strict": true,             // enables all strict type-checking flags (always turn this on)
    "noImplicitAny": true,      // error when a type can't be inferred and silently becomes "any"
    "esModuleInterop": true,    // smooths over CJS/ESM interop when importing
    "outDir": "./dist"          // where compiled .js files are written
  }
}
```

**In practice**: most projects don't call `tsc` directly for building — bundlers like esbuild, SWC, or Vite strip types (much faster than `tsc`, but WITHOUT type-checking) while `tsc --noEmit` (or the editor's language server) runs separately just for type-checking. Tools like `ts-node` or `tsx` compile and run TypeScript on the fly for local development, without a separate build step.


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

Both describe the shape of an object, and for plain object shapes they're often interchangeable — but they come from different mental models and diverge in capability.

**interface**: describes only the shape of an object (or a function/class contract) — you cannot use it to name a union, a primitive, or a tuple type directly. Its defining feature is that it's **open** — the same interface name can be declared more than once, and TypeScript automatically merges all declarations into one.

```typescript
interface User {
    id: number;
    name: string;
    email?: string;    // optional property
}

// extends — interfaces can build on other interfaces (like class inheritance)
interface AdminUser extends User {
    role: "admin";
    permissions: string[];
}

// Declaration merging — THIS IS UNIQUE TO INTERFACES.
// Declaring "User" again does not error — it adds to the existing shape.
interface User {
    createdAt: Date;
}
// The final User type now has id, name, email?, AND createdAt — merged automatically.

// This is exactly how libraries let you extend global/ambient types:
interface Window { myCustomProperty: string; }   // adds a property to the global Window type
```

**type** (type alias): just gives a name to ANY type — not only object shapes. This makes it strictly more expressive than interface: unions, intersections, tuples, primitives, mapped types, and conditional types can only be expressed with `type`.

```typescript
type ID = string | number;                   // union — interface CANNOT do this
type Point = { x: number; y: number };        // object shape — same as an interface here
type AdminUser = User & { role: "admin" };    // intersection — merges shapes together

// Mapped type — only possible with type
type Optional<T> = { [K in keyof T]?: T[K] };

// A type alias declared twice with the same name is a COMPILE ERROR —
// unlike interface, there is no merging:
// type ID = boolean;   // ERROR: Duplicate identifier 'ID'
```

**Key differences at a glance**:

| | interface | type |
|---|---|---|
| Object shapes | yes | yes |
| Unions / primitives / tuples | no | yes |
| Declaration merging (redeclaring adds fields) | yes | no (compile error) |
| Extending another shape | `extends` | `&` (intersection) |
| Implemented by a class | yes (`implements`) | yes, but less idiomatic |
| Error messages | generally cleaner, shows the interface name | can show the fully expanded shape, sometimes harder to read |

**Rule of thumb**: use `interface` for object/class shapes, especially public API contracts (like a library's props or a class's public interface) where declaration merging is a feature, not a bug. Use `type` for anything that isn't a plain object shape — unions, intersections, tuples, or mapped/conditional types. In practice, teams often standardize on one for consistency (many style guides now prefer `type` everywhere except when declaration merging is specifically needed), but understanding both is what interviewers are checking for.


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


### Type Guards

A type guard is any expression that TypeScript recognizes well enough to narrow a type from it — Type Narrowing (above) is the general concept; type guards are the specific checks that trigger it.

**typeof guard** — for primitives (string, number, boolean, symbol, bigint, undefined, function):

```typescript
function format(value: string | number) {
    if (typeof value === "string") return value.toUpperCase();
    return value.toFixed(2);
}
```

**instanceof guard** — for class instances:

```typescript
class ApiError extends Error { statusCode = 500; }

function handle(error: Error) {
    if (error instanceof ApiError) {
        console.log(error.statusCode);   // narrowed to ApiError here
    }
}
```

**in guard** — checks whether a property exists on an object, useful for narrowing between object shapes that don't share a common discriminant field:

```typescript
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function makeSound(animal: Cat | Dog) {
    if ("meow" in animal) animal.meow();   // narrowed to Cat
    else animal.bark();                     // narrowed to Dog
}
```

**Custom type guards (user-defined type predicates)** — a function whose return type is `arg is Type`, telling TypeScript to narrow the argument's type in every branch where the function returns true:

```typescript
interface User { email: string; }
interface Admin { permissions: string[]; }

function isUser(obj: User | Admin): obj is User {
    return "email" in obj;
}

function process(entity: User | Admin) {
    if (isUser(entity)) {
        console.log(entity.email);   // narrowed to User
    }
}
```

**Assertion functions** — similar to type guards, but instead of narrowing in an if-branch, they THROW if the condition is false, and narrow everything AFTER the call for the rest of the function:

```typescript
function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== "string") throw new Error("Not a string");
}

function process2(value: unknown) {
    assertIsString(value);
    console.log(value.toUpperCase());   // narrowed to string from here on, no if-block needed
}
```

**Rule of thumb**: reach for `typeof`/`instanceof`/`in` for quick, built-in checks; write a custom type predicate (`arg is Type`) when the check involves your own logic across an object shape; use an assertion function when you want to fail fast and avoid wrapping the rest of the function in an if-block.


### Enums

An enum defines a named set of constant values — useful when a variable should only ever hold one of a fixed, known list of options.

```typescript
enum Role {
    Admin,       // 0
    Editor,      // 1
    Viewer,      // 2
}
let role: Role = Role.Admin;

// String enums — more readable at runtime (e.g. in logs/network payloads) than numeric ones
enum Status {
    Pending = "PENDING",
    Active = "ACTIVE",
    Closed = "CLOSED",
}
function updateStatus(status: Status) { ... }
updateStatus(Status.Active);
```

Numeric enums are, by default, **bidirectional** — you can go from name to value and value to name, which generates extra JS at runtime:

```typescript
console.log(Role.Admin);     // 0
console.log(Role[0]);        // "Admin" — reverse mapping, generated automatically
```

**const enum** — inlines the values at compile time and generates NO runtime object at all, avoiding the extra JS code enums otherwise produce (but cannot be used across module boundaries with certain bundler settings, e.g. isolatedModules):

```typescript
const enum Direction { Up, Down }
let d = Direction.Up;   // compiles directly to: let d = 0;  — no Direction object exists at runtime
```

**Modern alternative — union of string literals**: many teams prefer this over enums entirely, since it requires no extra runtime code and integrates more naturally with the rest of the structural type system:

```typescript
type Status2 = "PENDING" | "ACTIVE" | "CLOSED";
function updateStatus2(status: Status2) { ... }
updateStatus2("ACTIVE");   // just a plain string, fully type-checked
```

**Rule of thumb**: prefer a string literal union for simple fixed sets of values (no runtime cost, works well with discriminated unions); reach for `enum` when you specifically want a namespaced, referenceable set of named constants (`Role.Admin` reads more intentionally than the raw string `"ADMIN"` in some codebases).


### Advanced Types

**Conditional types** — a type-level `if`, using `extends ? :`, that picks between two types based on whether one is assignable to another:

```typescript
type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<"hello">;   // "yes"
type B = IsString<42>;        // "no"
```

**infer** — used inside a conditional type to extract and name a nested type, instead of just checking it:

```typescript
type ElementType<T> = T extends (infer U)[] ? U : T;
type Item = ElementType<string[]>;   // string — "infer" pulled the array's element type out

// This is exactly how the built-in ReturnType<T> utility type works internally:
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

**Mapped types with modifiers** — transform every property of an existing type, and can ADD or REMOVE modifiers with `+`/`-`:

```typescript
type Partial2<T> = { [K in keyof T]?: T[K] };          // adds "?" to every property
type Required2<T> = { [K in keyof T]-?: T[K] };         // removes "?" from every property
type Readonly2<T> = { readonly [K in keyof T]: T[K] };  // adds "readonly" to every property
type Mutable<T> = { -readonly [K in keyof T]: T[K] };   // removes "readonly" from every property
```

**Template literal types** — build new string literal types by combining other types, just like a JS template literal, but at the type level:

```typescript
type EventName = "click" | "hover";
type HandlerName = `on${Capitalize<EventName>}`;   // "onClick" | "onHover"

type Route = `/users/${number}`;    // matches "/users/1", "/users/42", but not "/users/abc"
```

**satisfies operator** (TS 4.9+) — validates that a value matches a type WITHOUT widening the value's own inferred type the way a type annotation would, so you keep the most specific type possible while still getting type-checking:

```typescript
type Colors = Record<string, [number, number, number]>;

// With a type annotation — value is widened to Colors, losing the specific keys
const palette: Colors = { red: [255, 0, 0] };
// palette.red is (number,number,number) — but so would palette.blue be, if it existed... TS can't tell it's missing

// With satisfies — TS checks it against Colors, but keeps the literal/specific inferred type
const palette2 = { red: [255, 0, 0] } satisfies Colors;
palette2.red;    // TypeScript knows exactly this key exists, with its precise tuple type
```


### Declaration Files

A declaration file (`.d.ts`) contains ONLY type information — no actual runtime code (no function bodies, no implementation) — describing the shape of JavaScript code for the TypeScript compiler. This is what lets you get full type-checking and autocomplete when using a library that was written in plain JavaScript, without that library needing to be rewritten in TypeScript itself.

```typescript
// math.d.ts — describes the shape of a plain JavaScript library, e.g. "math.js"
declare function add(a: number, b: number): number;
declare const PI: number;

export { add, PI };
```

```javascript
// math.js — the actual plain JavaScript implementation, with no type annotations at all
function add(a, b) { return a + b; }
const PI = 3.14159;
module.exports = { add, PI };
```

When both files sit alongside each other, importing from `"./math"` in a `.ts` file gives full autocomplete and type-checking on `add`/`PI`, even though `math.js` itself has zero TypeScript in it — the compiler reads `math.d.ts` purely for type information and trusts that the actual JS behaves as described.

**Where declaration files come from in practice**:
1. **Auto-generated** — running `tsc` with `"declaration": true` in `tsconfig.json` generates a `.d.ts` file alongside each compiled `.js` output, automatically, for YOUR OWN TypeScript code — this is how a TypeScript library you publish gives its consumers types for free.
2. **Bundled with the library** — many npm packages ship their own `.d.ts` files directly (check for a `"types"` field in their `package.json`).
3. **DefinitelyTyped (`@types/...`)** — a massive community-maintained repository of declaration files for popular JavaScript-only libraries that don't ship their own types:

```bash
npm install --save-dev @types/lodash    # adds type definitions for the plain-JS "lodash" library
```

```typescript
import _ from "lodash";
_.chunk([1, 2, 3, 4], 2);   // fully typed and autocompleted, even though lodash itself is plain JS
```

**Rule of thumb**: you'll rarely hand-write a `.d.ts` file yourself unless publishing a library or integrating a small JS module with no existing types — most of the time, declaration files are either generated automatically from your own TypeScript, or installed as an `@types/*` package for a JS dependency.


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


### What is Spring? — The Spring Project Family

"Spring" is not one single product — it's a large ECOSYSTEM of related projects, all built around one shared foundation: the Spring Framework's IoC container (see Inversion of Control and Dependency Injection below). Spring Boot, the focus of most of this chapter, is just ONE of these projects — specifically, the one that makes using all the others practical without hundreds of lines of manual configuration.

**Why Spring exists**: it emerged in the early 2000s as a reaction to J2EE/EJB — the standard enterprise Java approach of the time, which required heavyweight application servers and verbose boilerplate just to get basic dependency injection and transaction management. Spring's core idea was radical for its time: plain Java objects (POJOs), wired together by a lightweight container, with no requirement to extend framework base classes or implement framework interfaces just to participate in the container. That core idea — a container that creates and wires your objects for you (IoC/DI) — is still exactly what every project below builds on.

```text
                     ┌─────────────────────────┐
                     │   Spring Framework        │   ← the foundation: IoC container, DI, AOP
                     │   (Spring Core)            │      (see below)
                     └────────────┬─────────────┘
                                  │
        ┌──────────────┬─────────┼─────────┬──────────────┬───────────────┐
        ▼              ▼         ▼         ▼              ▼               ▼
   Spring MVC     Spring Data  Spring    Spring Boot   Spring Cloud   Spring Batch
   (web layer)    (persistence) Security (auto-config,  (microservices  (offline/batch
                                          embedded server) tooling)       jobs)
```

**Spring Core (the Spring Framework itself)**: the foundational module every other project depends on. It provides the **IoC container** (creates and manages your objects — "beans" — instead of you calling `new` everywhere) and **AOP (Aspect-Oriented Programming)** — the mechanism that lets Spring transparently wrap your methods with cross-cutting behavior like `@Transactional` (see @TRANSACTIONAL below) or logging, without you writing that plumbing by hand. Everything else in this diagram is, at its core, "Spring Core plus a specific set of opinionated tools for one concern (web, data, security, etc.)."

**Spring Boot**: does NOT replace Spring Core, Spring MVC, Spring Data, or Spring Security — it sits ON TOP of them and removes the manual setup they used to require. Before Spring Boot, building a web app meant manually wiring an `ApplicationContext`, configuring a servlet container (deploying a WAR to an external Tomcat), and hand-writing dozens of bean definitions in XML. Spring Boot replaces all of that with **auto-configuration** (see below), an **embedded server** (Tomcat/Jetty/Undertow bundled directly into your runnable JAR — no separate server installation needed), and **starter dependencies** (`spring-boot-starter-web`, `spring-boot-starter-data-jpa`, etc. — a single dependency that pulls in a curated, version-compatible set of libraries for a given concern). This is why virtually all new Spring projects today start with Spring Boot rather than plain Spring Framework.

**Spring MVC**: the web module within the Spring Framework — provides the `DispatcherServlet` (the front controller that routes incoming HTTP requests), and the `@Controller`/`@RestController`/`@GetMapping` annotations used throughout the Controller (API Layer) section below (see also the REST APIs chapter for HTTP-specific concepts). "MVC" stands for Model-View-Controller — in a traditional Spring MVC app the Controller returns a View name to be rendered server-side (e.g. with Thymeleaf); a `@RestController` (what this guide focuses on) skips the View entirely and returns data (JSON) directly, which is the standard approach for building APIs consumed by a separate frontend (React, mobile apps, etc).

**Spring Data**: an abstraction over data access — you write a repository INTERFACE (like `UserRepository extends JpaRepository<User, Long>`), and Spring Data generates the implementation at runtime, inferring queries from method names. Covered in depth in the Spring Data JPA and the N+1 Problem, Entity Relationships, and JPQL sections below. The same programming model extends to other stores too — **Spring Data MongoDB**, **Spring Data Redis**, **Spring Data Elasticsearch** — swapping the underlying database while keeping the same repository pattern.

**Spring Security**: the standard framework for authentication and authorization in a Spring app — filter chains, password encoding, JWT/OAuth2 integration, method-level `@PreAuthorize` checks. Covered in depth in the Spring Security section below (see also the Authentication & Authorization chapter for the underlying concepts independent of Spring).

**Spring Cloud**: a collection of tools specifically for building DISTRIBUTED systems/microservices on top of Spring Boot — service discovery (Eureka), centralized configuration across many services (Config Server), client-side load balancing, and circuit breakers (Resilience4j) for handling failing downstream services gracefully. See the Microservices chapter for the architectural concepts this tooling supports.

**Spring Batch**: a framework for processing large volumes of data OFFLINE, in scheduled jobs, rather than in response to a live HTTP request — reading, processing, and writing data in chunks (e.g. "read a million rows from a CSV, transform each one, write them to a database, tracking progress so a failed job can resume instead of restarting from zero"). Distinct from `@Scheduled` (see Scheduling below), which is for simple periodic tasks — Spring Batch is for structured, resumable, large-scale data processing pipelines specifically.

**Spring WebFlux**: a REACTIVE alternative to Spring MVC, built on Project Reactor, for non-blocking I/O — instead of one thread per request (Spring MVC's traditional model), WebFlux uses a small pool of threads that never block waiting on I/O (database calls, downstream HTTP requests), which can handle far more concurrent connections with the same hardware. The trade-off is a different, less intuitive reactive programming style (`Mono`/`Flux` instead of returning plain objects) that touches your entire stack (reactive repositories, reactive HTTP clients) — most applications don't need this and do fine on traditional Spring MVC; WebFlux is reserved for genuinely high-concurrency, I/O-bound workloads (e.g. an API gateway proxying many slow downstream calls simultaneously).

**Spring Test**: Spring's testing support, layered on top of JUnit 5 (see the JUnit 5 chapter) — `@SpringBootTest` boots a real (or partial) Spring application context for integration tests, and `MockMvc` lets you send simulated HTTP requests directly to your controllers without starting a real server, asserting on the response status/body/headers.

**Rule of thumb**: when someone says "I use Spring," they almost always mean "Spring Boot, with Spring MVC for the web layer and Spring Data JPA for persistence" — that combination is the overwhelming default for a Java backend today. The rest of this chapter focuses on exactly that combination, since it's what the vast majority of Spring interview questions and real-world Spring codebases are actually built on; Spring Cloud, Batch, and WebFlux are called out here mainly so you can recognize them by name and know when reaching for something beyond the default combination is warranted.


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


### Component Scan

Component scanning is how Spring DISCOVERS which classes should become beans, without you registering each one manually. `@SpringBootApplication` implicitly includes `@ComponentScan`, which tells Spring: "scan this package and every sub-package for classes annotated with `@Component` (and its specializations `@Service`, `@Repository`, `@Controller`) and register them in the Application Context."

```java
@SpringBootApplication   // implies @ComponentScan(basePackages = "com.example.app") — the package it's in
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}
```

**This is why package structure matters in Spring Boot**: by convention, the class annotated with `@SpringBootApplication` should sit in the ROOT package of your application, so component scanning naturally covers every sub-package. A `@Service` class placed OUTSIDE that root package (a sibling package, not a child) is silently never picked up — a very common source of "why isn't my bean being injected?" bugs. You can override the scanned packages explicitly with `@ComponentScan(basePackages = "...")` if needed.


### Configuration Classes

`@Configuration` marks a class as a source of bean definitions written in plain Java code, as an alternative to component-scanning a class directly — useful for beans you don't own the source of (a third-party class) or that need custom construction logic.

```java
@Configuration
public class AppConfig {

    @Bean                                       // registers the RETURN VALUE as a bean
    public RestTemplate restTemplate() {
        return new RestTemplate();                // you can't add @Component to RestTemplate — it's a library class
    }

    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());   // custom construction logic
        return mapper;
    }
}

// Elsewhere, inject it exactly like any other bean:
@Service
public class ApiClient {
    private final RestTemplate restTemplate;
    public ApiClient(RestTemplate restTemplate) { this.restTemplate = restTemplate; }
}
```

**Rule of thumb**: use `@Component`/`@Service`/`@Repository` (component scanning) for classes you write yourself; use `@Configuration` + `@Bean` for third-party classes, or when bean creation needs custom logic that an annotation alone can't express.


### Auto-configuration


Spring Boot reads your classpath and application.yml/properties and automatically configures beans. If it sees spring-boot-starter-data-jpa on the classpath plus a datasource URL in properties, it auto-configures a DataSource, EntityManager, and transaction manager. You don't write any of that code.

You can always override auto-configuration by providing your own bean of the same type — Spring Boot backs off when it detects yours.


### application.properties vs application.yml

Both configure the same things (datasource URL, server port, logging levels, custom values read via `@Value`) — the difference is purely syntax. Only one is needed; using both for overlapping keys is confusing and best avoided.

```properties
# application.properties — flat key=value pairs, dots represent nesting
server.port=8080
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=admin
spring.jpa.hibernate.ddl-auto=update
logging.level.com.example=DEBUG
```

```yaml
# application.yml — hierarchical, indentation represents nesting (equivalent to the above)
server:
  port: 8080
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: admin
  jpa:
    hibernate:
      ddl-auto: update
logging:
  level:
    com.example: DEBUG
```

**YAML is generally preferred** for larger configs — the nesting is visually clear and avoids repeating the common prefix (`spring.datasource.` three times) on every line. **Properties files are sometimes preferred** for very small configs or when a tool/team is already standardized on them; YAML is also whitespace-sensitive, which can cause subtle bugs (mixing tabs and spaces) that a flat `.properties` file can't have.


### Profiles

A Profile is a named group of configuration that's only active in specific environments (dev, test, production) — this lets you use a local database in development and a production one in production, without touching code.

```yaml
# application.yml — shared/default config
spring:
  application:
    name: my-app

---
# application-dev.yml — only loaded when the "dev" profile is active
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/dev_db

---
# application-prod.yml — only loaded when the "prod" profile is active
spring:
  datasource:
    url: jdbc:postgresql://prod-host:5432/prod_db
logging:
  level:
    root: WARN
```

**Activating a profile**:
```bash
java -jar app.jar --spring.profiles.active=prod
# or as an environment variable: SPRING_PROFILES_ACTIVE=prod
```

**Profile-specific beans** — only create a bean when a given profile is active:

```java
@Service
@Profile("dev")
public class MockEmailService implements EmailService {
    public void send(String to, String body) { System.out.println("DEV: pretending to send email"); }
}

@Service
@Profile("prod")
public class SmtpEmailService implements EmailService {
    public void send(String to, String body) { /* actually sends via SMTP */ }
}
```

**Rule of thumb**: keep secrets (passwords, API keys) OUT of profile files committed to Git — use environment variables or a secrets manager instead, and reference them with `${ENV_VAR_NAME}` placeholders in the YAML/properties file.


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


### DTOs

A DTO (Data Transfer Object) is a plain object used to shape the data that crosses the API boundary — separate from the `@Entity` used internally to represent a database table. Returning entities directly from a Controller is a common anti-pattern.

```java
// Entity — internal representation, tied to the database schema
@Entity
public class User {
    @Id private Long id;
    private String name;
    private String email;
    private String passwordHash;      // must NEVER be exposed in an API response
    @OneToMany private List<Order> orders;   // could trigger lazy-loading issues if serialized directly
}

// DTO — exactly what the API exposes, nothing more
public record UserResponse(Long id, String name, String email) { }

// Mapping between them, typically in the Service layer
UserResponse toResponse(User user) {
    return new UserResponse(user.getId(), user.getName(), user.getEmail());
}
```

**Why bother with a separate DTO?** It prevents leaking sensitive/internal fields (password hashes, internal flags), decouples your API contract from your database schema (you can change the Entity without breaking API consumers, and vice versa), and avoids serializing lazy-loaded JPA relationships that can trigger extra queries or `LazyInitializationException` outside a transaction. Libraries like MapStruct auto-generate the mapping code shown above for larger projects.


### Validation

Spring integrates with Bean Validation (JSR 380 — implemented by Hibernate Validator) to declaratively validate incoming data using annotations, instead of hand-writing `if` checks.

```java
public record CreateUserRequest(
    @NotBlank(message = "Name is required") String name,
    @Email(message = "Invalid email format") String email,
    @Min(18) @Max(120) int age
) { }

@RestController
@RequestMapping("/users")
public class UserController {

    @PostMapping
    public ResponseEntity<User> create(@Valid @RequestBody CreateUserRequest request) {
        // @Valid triggers validation BEFORE this method body runs —
        // if validation fails, Spring throws MethodArgumentNotValidException automatically,
        // and this line is never reached
        return ResponseEntity.status(201).body(userService.create(request));
    }
}
```

Common validation annotations: `@NotNull`, `@NotBlank` (String, also rejects whitespace-only), `@NotEmpty` (collections/strings, rejects empty but allows whitespace), `@Size(min=, max=)`, `@Email`, `@Min`/`@Max`, `@Pattern(regexp=...)`, `@Positive`/`@Negative`.


### ResponseEntity

`ResponseEntity<T>` wraps a response body together with the HTTP status code and headers — giving full control over the response, instead of Spring inferring a status code (200) automatically from a plain return value.

```java
@GetMapping("/{id}")
public ResponseEntity<User> getUser(@PathVariable Long id) {
    return userService.findById(id)
        .map(user -> ResponseEntity.ok(user))                    // 200 OK with the user in the body
        .orElse(ResponseEntity.notFound().build());               // 404 Not Found, no body

}

@PostMapping
public ResponseEntity<User> create(@RequestBody User user) {
    User saved = userService.save(user);
    return ResponseEntity
        .status(HttpStatus.CREATED)                                // 201 Created
        .header("Location", "/users/" + saved.getId())
        .body(saved);
}
```

**Rule of thumb**: return the plain object directly when a successful response always looks the same (always 200); use `ResponseEntity` whenever the status code, headers, or "no body at all" needs to vary based on the outcome.


### Exception Handling and the Global Exception Handler

Rather than wrapping every controller method in `try/catch`, Spring lets you centralize error handling with `@ControllerAdvice` (or `@RestControllerAdvice`, which also adds `@ResponseBody`) — a class that intercepts exceptions thrown from ANY controller and converts them into a consistent error response.

```java
class UserNotFoundException extends RuntimeException {
    UserNotFoundException(Long id) { super("User not found: " + id); }
}

record ErrorResponse(String message, int status, LocalDateTime timestamp) { }

@RestControllerAdvice   // applies globally, across every @RestController in the app
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(UserNotFoundException ex) {
        var error = new ErrorResponse(ex.getMessage(), 404, LocalDateTime.now());
        return ResponseEntity.status(404).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)   // thrown by @Valid failures
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
        String message = ex.getBindingResult().getFieldErrors().get(0).getDefaultMessage();
        return ResponseEntity.status(400).body(new ErrorResponse(message, 400, LocalDateTime.now()));
    }

    @ExceptionHandler(Exception.class)                          // catch-all fallback
    public ResponseEntity<ErrorResponse> handleGeneric(Exception ex) {
        var error = new ErrorResponse("Internal server error", 500, LocalDateTime.now());
        return ResponseEntity.status(500).body(error);          // never leak ex.getMessage() here — may expose internals
    }
}

// Now controllers stay clean — just throw, and the handler above formats the response:
@GetMapping("/{id}")
public User getUser(@PathVariable Long id) {
    return userService.findById(id).orElseThrow(() -> new UserNotFoundException(id));
}
```

**Rule of thumb**: one `@RestControllerAdvice` class per application (or per module in a large app) keeps error response formatting consistent everywhere, instead of every controller reinventing its own error JSON shape.


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


### Entity Relationships

JPA maps foreign-key relationships between tables onto object references between entities, using annotations that mirror the database relationship.

**@OneToOne** — each row relates to exactly one row in another table (e.g. a User has one Profile):

```java
@Entity
public class User {
    @Id private Long id;
    @OneToOne(mappedBy = "user")   // "mappedBy" means Profile owns the foreign key
    private Profile profile;
}

@Entity
public class Profile {
    @Id private Long id;
    @OneToOne
    @JoinColumn(name = "user_id")   // this side owns the foreign key column
    private User user;
}
```

**@ManyToOne / @OneToMany** — the most common relationship (e.g. many Orders belong to one User). Always declare `@ManyToOne` on the "many" side — it's the side that actually holds the foreign key column in the database:

```java
@Entity
public class Order {
    @Id private Long id;
    @ManyToOne                       // the OWNING side — Order table has a user_id column
    @JoinColumn(name = "user_id")
    private User user;
}

@Entity
public class User {
    @Id private Long id;
    @OneToMany(mappedBy = "user")    // the INVERSE side — no extra column, just a Java-side view
    private List<Order> orders;
}
```

**@ManyToMany** — requires a JOIN TABLE, since neither table can hold a simple foreign key for a many-to-many relationship (e.g. Students and Courses):

```java
@Entity
public class Student {
    @Id private Long id;
    @ManyToMany
    @JoinTable(
        name = "student_course",                          // the join table
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<Course> courses;
}
```

**Rule of thumb**: the side with `mappedBy` is the INVERSE side (read-only from JPA's perspective — it doesn't own the foreign key); the side WITHOUT `mappedBy` (using `@JoinColumn`) is the OWNING side, and changes to the relationship must be made through it for JPA to actually persist them.


### Fetch Types and Cascade Types

**Fetch types** control WHEN a related entity is loaded from the database:

- **LAZY**: the related entity is only loaded the FIRST TIME it's actually accessed (e.g. `order.getUser()`), via a proxy — this is what causes the N+1 problem (see above) if not handled carefully, and can throw `LazyInitializationException` if accessed outside an active transaction/session.
- **EAGER**: the related entity is loaded IMMEDIATELY, in the same query (or an automatic extra query) as the owning entity — simpler, but can silently pull in far more data than needed.

```java
@ManyToOne(fetch = FetchType.LAZY)     // default for @ManyToOne/@OneToMany in modern JPA
private User user;

@OneToMany(fetch = FetchType.EAGER)    // rarely a good idea — loads ALL orders every time a User loads
private List<Order> orders;
```

**Cascade types** control what happens to related entities when an operation is performed on the owning entity:

```java
@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
private List<Order> orders;
// CascadeType.ALL: saving/deleting a User also saves/deletes its Orders automatically
// orphanRemoval = true: removing an Order from this list also deletes it from the database
```

Common cascade types: `PERSIST` (saving the parent also saves new children), `MERGE`, `REMOVE` (deleting the parent also deletes children), `ALL` (all of the above) — use cascades carefully, since `CascadeType.ALL` on the wrong relationship can unintentionally delete data that other entities still reference.

**Rule of thumb**: default to `LAZY` for every relationship (explicit `JOIN FETCH`/`@EntityGraph` when you actually need the related data, as shown in the N+1 section above) — this keeps queries predictable and avoids accidentally loading huge object graphs.


### Pagination and Sorting

`JpaRepository` supports pagination and sorting out of the box via `Pageable`, avoiding manual `LIMIT`/`OFFSET` SQL.

```java
public interface UserRepository extends JpaRepository<User, Long> {
    Page<User> findByActive(boolean active, Pageable pageable);
}

// In the Service/Controller:
Pageable pageable = PageRequest.of(0, 20, Sort.by("createdAt").descending());  // page 0, 20 per page
Page<User> page = userRepository.findByActive(true, pageable);

page.getContent();          // the actual List<User> for this page
page.getTotalElements();    // total matching rows across ALL pages
page.getTotalPages();
page.hasNext();
```

```java
// Exposed directly as a REST endpoint — Spring parses ?page=&size=&sort= from the URL automatically
@GetMapping
public Page<User> getUsers(@PageableDefault(size = 20) Pageable pageable) {
    return userRepository.findAll(pageable);
}
// GET /users?page=1&size=10&sort=name,asc
```


### JPQL, Native Queries, and Specifications

**JPQL (Java Persistence Query Language)**: an object-oriented query language — queries reference ENTITY names and FIELD names (not table/column names), and JPA translates it to SQL for the underlying database, keeping queries portable across database vendors.

```java
@Query("SELECT u FROM User u WHERE u.active = true AND u.createdAt > :date")
List<User> findRecentActiveUsers(@Param("date") LocalDateTime date);
// "User" and "u.active" are the ENTITY CLASS and FIELD, not necessarily the table/column names
```

**Native queries**: plain SQL, used when JPQL can't express something you need (a database-specific function, complex window functions, a heavily hand-tuned query):

```java
@Query(value = "SELECT * FROM users WHERE active = true ORDER BY created_at DESC LIMIT 10", nativeQuery = true)
List<User> findTop10Active();
```

**Specifications**: build queries programmatically and compose them conditionally, instead of writing many near-duplicate `@Query` methods for every combination of optional filters:

```java
public class UserSpecifications {
    public static Specification<User> hasRole(String role) {
        return (root, query, cb) -> cb.equal(root.get("role"), role);
    }
    public static Specification<User> isActive() {
        return (root, query, cb) -> cb.isTrue(root.get("active"));
    }
}

// Compose specifications dynamically, based on which filters were actually provided:
Specification<User> spec = Specification.where(UserSpecifications.isActive())
    .and(UserSpecifications.hasRole("admin"));
List<User> admins = userRepository.findAll(spec);   // repository must extend JpaSpecificationExecutor<User>
```

**Rule of thumb**: use derived query methods (`findByEmail`) for simple lookups, JPQL for most custom queries, native SQL only when JPQL genuinely can't express what's needed, and Specifications when the number of optional filter combinations would otherwise require writing many separate query methods.


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


### Spring Security

Spring Security is the standard way to add authentication and authorization to a Spring Boot app (see the Authentication & Authorization chapter for the underlying JWT/OAuth2/RBAC concepts — this section shows how they're WIRED UP in Spring specifically).

**Basic configuration** — a `SecurityFilterChain` bean defines which endpoints require authentication:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())                              // typically disabled for stateless JWT APIs
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()             // public endpoints
                .requestMatchers("/api/admin/**").hasRole("ADMIN")       // role-restricted
                .anyRequest().authenticated()                            // everything else needs authentication
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))  // no server-side session — JWT-based
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();     // see Password Security in the Authentication chapter
    }
}
```

**JWT filter** — a custom filter that runs before every request, extracts the token from the `Authorization` header, and populates Spring Security's context if it's valid:

```java
public class JwtAuthFilter extends OncePerRequestFilter {
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) {
        String token = extractToken(request);                    // read "Authorization: Bearer <token>"
        if (token != null && jwtService.isValid(token)) {
            String username = jwtService.extractUsername(token);
            var auth = new UsernamePasswordAuthenticationToken(username, null, List.of());
            SecurityContextHolder.getContext().setAuthentication(auth);   // mark the request as authenticated
        }
        chain.doFilter(request, response);
    }
}
```

**Method-level security** — restrict individual methods instead of (or in addition to) whole URL patterns:

```java
@PreAuthorize("hasRole('ADMIN')")
public void deleteUser(Long id) { ... }
```


### Actuator

Spring Boot Actuator exposes production-ready monitoring endpoints out of the box — health checks, metrics, and environment info — without writing any of that code yourself.

```yaml
# application.yml
management:
  endpoints:
    web:
      exposure:
        include: health, info, metrics    # only expose what's needed — Actuator can leak internals if wide open
```

```bash
GET /actuator/health      # { "status": "UP" }  — used by load balancers/Kubernetes liveness probes
GET /actuator/metrics     # JVM memory, HTTP request counts, custom metrics
GET /actuator/info        # arbitrary build/app info you configure
GET /actuator/env         # environment variables and properties (sensitive — restrict access!)
```

Custom health indicators can report on your OWN dependencies (a database, a downstream API):

```java
@Component
public class DatabaseHealthIndicator implements HealthIndicator {
    public Health health() {
        return isDatabaseReachable() ? Health.up().build() : Health.down().build();
    }
}
```

**Rule of thumb**: `/actuator/health` is what Kubernetes liveness/readiness probes typically call (see the Kubernetes chapter) — always expose it, but lock down `/actuator/env` and other sensitive endpoints behind authentication in production.


### Logging

Spring Boot uses SLF4J as a logging facade (with Logback as the default implementation) — you code against the SLF4J interface, and the actual logging backend can be swapped without changing application code.

```java
@Service
public class UserService {
    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    public User createUser(String name) {
        log.info("Creating user: {}", name);            // {} is a placeholder — avoids string concatenation cost
        try {
            return userRepository.save(new User(name));
        } catch (Exception e) {
            log.error("Failed to create user: {}", name, e);   // pass the exception as the last argument for the stack trace
            throw e;
        }
    }
}
```

**Log levels** (from most to least verbose): `TRACE` < `DEBUG` < `INFO` < `WARN` < `ERROR` — setting a level shows that level and everything above it. Configured per-package in `application.yml`:

```yaml
logging:
  level:
    root: INFO
    com.example.myapp: DEBUG      # more verbose for your own code
    org.hibernate.SQL: DEBUG      # log every SQL statement Hibernate generates — invaluable for debugging N+1s
```

**Rule of thumb**: `INFO` for normal business events, `DEBUG` for detailed diagnostic info (usually off in production), `WARN` for recoverable problems, `ERROR` for failures that need attention — never log sensitive data (passwords, tokens, full card numbers) at any level.


### Caching

Spring's caching abstraction adds a cache in front of expensive method calls, transparently, using annotations — the actual cache store (in-memory, Redis, etc.) is pluggable.

```java
@Configuration
@EnableCaching
public class CacheConfig { }

@Service
public class ProductService {

    @Cacheable("products")                 // caches the return value, keyed by the method argument
    public Product getProduct(Long id) {
        return productRepository.findById(id).orElseThrow();  // only actually runs on a cache MISS
    }

    @CachePut("products")                  // always runs the method, but also updates the cache with the result
    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    @CacheEvict("products")                // removes the entry from the cache (e.g. after a delete)
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
```

By default Spring Boot uses a simple in-memory `ConcurrentHashMap`-based cache — for a real production/distributed setup, a Redis-backed cache (`spring-boot-starter-data-redis`) is used instead, so multiple app instances share the same cache.


### Scheduling

`@Scheduled` runs a method automatically on a fixed interval or cron expression, without a separate job scheduler process.

```java
@Configuration
@EnableScheduling
public class SchedulingConfig { }

@Component
public class ReportJob {

    @Scheduled(fixedRate = 60000)              // every 60 seconds, measured from the START of each run
    public void refreshCache() { ... }

    @Scheduled(fixedDelay = 60000)             // every 60 seconds, measured from the END of the previous run
    public void syncData() { ... }

    @Scheduled(cron = "0 0 2 * * *")           // cron expression — every day at 2:00 AM
    public void nightlyCleanup() { ... }
}
```

**fixedRate vs fixedDelay**: `fixedRate` can overlap if a run takes longer than the interval (a new run starts on schedule regardless); `fixedDelay` guarantees a gap AFTER each run finishes, so overlapping runs are impossible. **Limitation**: `@Scheduled` runs on a single instance's JVM — if the app is scaled to multiple instances, EVERY instance runs the job independently unless you add distributed locking (e.g. ShedLock) to ensure it only runs once across the cluster.



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


### What React Really Is

At its core, React is just a function that maps state to UI: `UI = f(state)`. You never manually create, update, or remove a DOM element — you write a function (a component) that describes what the UI should look like FOR A GIVEN state, and whenever that state changes, you call the same function again (React re-renders) and it decides what, if anything, needs to change in the real DOM.

This is the key shift from **imperative** to **declarative** UI programming:

```javascript
// Imperative (vanilla JS) — YOU describe every step to mutate the DOM
const button = document.createElement("button");
button.textContent = "0";
button.addEventListener("click", () => {
    const count = parseInt(button.textContent) + 1;
    button.textContent = count;
});
document.body.appendChild(button);

// Declarative (React) — you describe WHAT the UI looks like for a given state;
// React figures out HOW to update the real DOM to match
function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

Importantly, React itself is ONLY this reconciliation/component model — it has no built-in opinion on routing, global state management, or data fetching. That's why real-world React apps pull in React Router, Zustand/Redux, and React Query/SWR alongside it.


### Rendering

"Rendering" in React means calling your component function to figure out what the UI SHOULD look like — it does NOT necessarily mean anything changes on screen. Rendering happens in two phases:

**1. Render phase**: React calls your component function(s), builds a new Virtual DOM tree, and diffs it against the previous one (reconciliation, see below). This phase is "pure" — it must not have side effects, since React may pause, throw away, or restart it (especially under Concurrent Rendering, see below).

**2. Commit phase**: React takes the minimal set of differences found during the render phase and applies them to the real DOM — this is the only phase that actually touches the page the user sees. `useEffect` callbacks run after the commit phase.

**What triggers a re-render**: a component re-renders when its own state changes (`useState`/`useReducer` setter called), when its parent re-renders (by default, ALL children re-render too, even if their own props didn't change — this is what `React.memo` optimizes, see Performance Patterns below), or when a consumed Context value changes.

```javascript
function Parent() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <Child />   {/* re-renders every time Parent re-renders, even though it takes no props */}
        </div>
    );
}
```


### Virtual DOM and Reconciliation


The Virtual DOM is an in-memory, lightweight JS representation of the real DOM — a tree of plain objects describing what elements should exist, with what props. When state changes, React creates a NEW Virtual DOM tree during the render phase, and **reconciliation** is the algorithm that diffs it against the previous tree to compute the minimal set of real DOM operations needed.

React's diffing algorithm relies on two heuristics to stay fast (real tree-diffing is O(n³), React's is O(n)):
1. **Different element types produce different trees** — if a `<div>` becomes a `<span>` at the same position, React tears down the old subtree and builds a new one from scratch, rather than trying to diff their children.
2. **Keys tell React which list items are "the same" across renders** — without a key, React just compares list items by position, which causes it to update the wrong DOM nodes when items are reordered (see Lists and Keys below).

Since React 16, this diffing work is coordinated by an internal engine called **Fiber** — a rewrite of the reconciliation algorithm that represents each component as a "fiber" node in a linked-list-like tree, letting React pause, resume, prioritize, or abandon rendering work instead of blocking the main thread with one large synchronous pass. This is what makes React 18's Concurrent Rendering possible (see below).

React 18 introduced Concurrent Rendering — React can now pause, interrupt, and resume rendering work. Long renders don't block the UI.


### JSX

JSX is a syntax extension that lets you write HTML-like markup directly inside JavaScript. It is not understood by browsers — a compiler (Babel, SWC, or the TypeScript compiler) transforms it into plain `React.createElement()` calls before it ever runs.

```jsx
const element = <h1 className="title">Hello, {name}</h1>;

// compiles to (roughly):
const element = React.createElement(
    "h1",
    { className: "title" },
    "Hello, ", name
);
// React.createElement returns a plain JS object describing the element —
// this object is what makes up the Virtual DOM tree from the section above
```

Because JSX compiles to regular function calls, it can embed any JavaScript expression inside `{ }` — but only expressions, not statements (no `if`/`for` directly; use ternaries, `&&`, or `.map()` instead):

```jsx
function Greeting({ user, isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? <span>Welcome, {user.name}</span> : <span>Please log in</span>}
            {isLoggedIn && <button>Log out</button>}
            <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>
        </div>
    );
}
```

Newer versions of React (17+) use an "automatic" JSX transform, so `import React from "react"` is no longer required in every file just to use JSX — the compiler auto-imports the specific `jsx()` helper it needs.


### Components

A component is just a JavaScript function that returns JSX (describing what should be rendered) — modern React almost exclusively uses **function components** (class components still exist for legacy code, but hooks replaced most of their use cases).

```jsx
function Greeting({ name }) {           // a component — PascalCase name is required,
    return <h1>Hello, {name}!</h1>;      // lowercase tags are treated as native DOM elements
}

<Greeting name="Beatriz" />              // usage — looks like an HTML tag
```

**Composition**: complex UIs are built by combining small components, including via the special `children` prop, which lets a component wrap arbitrary content passed between its opening and closing tags:

```jsx
function Card({ title, children }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            {children}
        </div>
    );
}

<Card title="Profile">
    <p>This content becomes Card's "children" prop.</p>
</Card>
```

React favors composition over inheritance — instead of extending a base component class to share behavior, you nest/combine components (or use custom hooks, see below).


### Props

Props ("properties") are how a parent passes data DOWN to a child component. They are read-only from the child's perspective — a component must never modify its own props directly.

```jsx
function UserCard({ name, age, onSelect }) {   // props are just the function's parameters,
                                                  // conventionally destructured
    // name = "new value";   // WRONG — mutating props is a React anti-pattern
    return <div onClick={() => onSelect(name)}>{name}, {age}</div>;
}

<UserCard name="Ana" age={30} onSelect={handleSelect} />
```

Data flows one way — **top-down (unidirectional data flow)**: parents pass data to children via props, and children communicate back UP by calling a function passed down to them as a prop (like `onSelect` above), never by reaching up into the parent directly. This one-directional flow is what makes React apps predictable to reason about, at the cost of "prop drilling" when data needs to pass through many intermediate layers (a problem Context API, below, is designed to solve).

```jsx
// Spreading props — pass many props at once
<UserCard {...userData} />

// Default props
function Button({ variant = "primary", children }) { ... }
```


### State

State is data that belongs to a component and can change over time — unlike props, it is owned and controlled by the component itself (not passed in from outside), and updating it is what triggers a re-render.

```jsx
function Counter() {
    const [count, setCount] = useState(0);   // state — local, private, triggers re-render on change
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

**State vs props**: props are how a component receives data from its parent (read-only, controlled externally); state is data a component manages internally (mutable via its setter, controlled internally). A component re-renders when either changes.

**State updates are asynchronous and batched**: calling a setter does not update the variable immediately — React schedules a re-render and applies the update before the next render, batching multiple state updates from the same event into a single re-render for performance.

```jsx
function handleClick() {
    setCount(count + 1);
    console.log(count);   // still the OLD value — the update hasn't been applied yet
}

// Multiple setState calls in the same event are batched into ONE re-render, not three:
function handleClick2() {
    setCount(c => c + 1);
    setName("Ana");
    setActive(true);
    // React re-renders once with all three updates applied, not three separate times
}
```

**State must be treated as immutable**: never mutate a state object/array directly — always create a new one, since React compares state by reference to decide whether to re-render.

```jsx
// WRONG — mutates the existing array; React may not detect the change
items.push(newItem);
setItems(items);

// RIGHT — creates a new array reference
setItems([...items, newItem]);
```


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


### Custom Hooks

A custom hook is just a regular JavaScript function whose name starts with `use` and that calls other hooks inside it — this is how React lets you extract and reuse STATEFUL logic between components, something that was impossible with plain functions before hooks existed (previously this required patterns like Higher-Order Components or render props).

```javascript
// Custom hook — encapsulates fetching + loading/error state, reusable across components
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(json => { if (!cancelled) setData(json); })
            .catch(err => { if (!cancelled) setError(err); })
            .finally(() => { if (!cancelled) setLoading(false); });
        return () => { cancelled = true; };   // avoid setting state after unmount
    }, [url]);

    return { data, loading, error };
}

// Usage — looks just like a built-in hook, but is 100% custom
function UserProfile({ userId }) {
    const { data: user, loading, error } = useFetch(`/api/users/${userId}`);
    if (loading) return <Spinner />;
    if (error) return <ErrorMessage error={error} />;
    return <div>{user.name}</div>;
}
```

**Rules of Hooks apply to custom hooks too**: only call hooks at the top level (never inside loops/conditions/nested functions) and only from React function components or other custom hooks — this is what lets React reliably associate each hook call with the same piece of state across re-renders (internally, React tracks hooks by CALL ORDER, not by name).


### Context API

Context lets you share a value across a whole subtree of components WITHOUT manually passing it down through every intermediate component's props ("prop drilling").

```jsx
const ThemeContext = createContext("light");   // default value, used if no Provider is above

function App() {
    const [theme, setTheme] = useState("dark");
    return (
        <ThemeContext.Provider value={theme}>
            <Toolbar />   {/* theme doesn't need to be passed as a prop through here... */}
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return <ThemedButton />;   {/* ...or here... */}
}

function ThemedButton() {
    const theme = useContext(ThemeContext);   // ...consumed directly, however deep it is
    return <button className={theme}>Click me</button>;
}
```

**Performance caveat**: when a Context's value changes, EVERY component that consumes it via `useContext` re-renders — even if that specific component only cares about part of the value, and even if the new value is deeply equal to the old one (Context compares by reference). This is why Context is best suited for low-frequency-changing, broadly-needed data (theme, authenticated user, locale) rather than high-frequency state (like form input values), where a dedicated state library (Zustand, Redux) that supports selective/partial subscriptions performs better.


### Controlled vs Uncontrolled Components

This distinction is about who "owns" the current value of a form input — React state, or the DOM itself.

**Controlled component**: the input's value is driven entirely by React state — every keystroke calls `onChange`, which updates state, which re-renders the input with the new value. React is the single source of truth.

```jsx
function ControlledInput() {
    const [value, setValue] = useState("");
    return <input value={value} onChange={e => setValue(e.target.value)} />;
    // the DOM input's value is ALWAYS exactly whatever "value" state says it is
}
```

**Uncontrolled component**: the input manages its own value internally, in the DOM, the way plain HTML always has — React just reads the value when needed (typically via a ref), instead of tracking every keystroke in state.

```jsx
function UncontrolledInput() {
    const inputRef = useRef(null);
    const handleSubmit = () => {
        console.log(inputRef.current.value);   // read the value only when needed
    };
    return <input ref={inputRef} defaultValue="initial" />;   // defaultValue, not value
}
```

**Rule of thumb**: use controlled components by default — they enable instant validation, conditionally disabling submit buttons, and formatting as the user types, since React always knows the current value. Use uncontrolled components for simple forms (or integrating non-React widgets) where you only need the value on submit and want to avoid the extra re-render on every keystroke.


### Forms

Handling forms in React usually means combining controlled inputs (above) with state for each field, and preventing the browser's default full-page-reload form submission behavior.

```jsx
function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();   // stop the browser's native form submission (full page reload)
        const newErrors = {};
        if (!email.includes("@")) newErrors.email = "Invalid email";
        if (password.length < 8) newErrors.password = "Too short";
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // submit to the API
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={e => setEmail(e.target.value)} />
            {errors.email && <span>{errors.email}</span>}
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            {errors.password && <span>{errors.password}</span>}
            <button type="submit">Log in</button>
        </form>
    );
}
```

For forms with many fields or complex validation, libraries like **React Hook Form** (uncontrolled-by-default, minimizes re-renders) or **Formik** combined with a schema validator like **Zod** or **Yup** are standard in production, rather than hand-rolling state for every field.


### Lists and Keys

Rendering a list in JSX is just calling `.map()` to turn an array of data into an array of elements — there is no special "list" syntax in React.

```jsx
{items.map(item => <Item key={item.id} {...item} />)}
```

Keys help React identify which list items have changed, been added, or removed between renders (this is exactly the second heuristic mentioned in Virtual DOM and Reconciliation above). They must be stable, unique among siblings, and — critically — not array indices, since index keys cause subtle bugs when items are reordered, inserted, or deleted (React ends up matching the wrong old item to the wrong new position, which can misapply state or input values to the wrong row).

```javascript
// Bad — array index as key
{items.map((item, i) => <Item key={i} {...item} />)}

// Good — stable, unique ID that doesn't change even if the list is reordered
{items.map(item => <Item key={item.id} {...item} />)}
```


### Lifecycle

Every component goes through three phases: **mounting** (created and inserted into the DOM for the first time), **updating** (re-rendered because props/state/context changed), and **unmounting** (removed from the DOM). In function components, `useEffect` (and its dependency array) is how you hook into these phases — it replaces the separate lifecycle methods class components used to require.

```jsx
useEffect(() => {
    console.log("mounted, or a dependency changed");
    return () => {
        console.log("cleanup — runs before the NEXT effect, and on unmount");
    };
}, [dep]);
```

**Mapping from the old class-component lifecycle methods**, useful for reading legacy code:

| Class lifecycle method | Function component equivalent |
|---|---|
| `componentDidMount` | `useEffect(() => { ... }, [])` |
| `componentDidUpdate` | `useEffect(() => { ... }, [dep1, dep2])` |
| `componentWillUnmount` | the cleanup function returned from `useEffect` |
| `render()` | the function component's body/return itself |

Function components + hooks are now the default in modern React — class components still work, but are considered legacy for new code.


### Performance Patterns

**React.memo** — prevents a component from re-rendering if its props haven't changed (shallow comparison), which matters because by default EVERY child re-renders whenever its parent does (see Rendering above), regardless of whether that child's own props changed.

```javascript
const MyComponent = React.memo(({ name }) => <div>{name}</div>);
// Only re-renders if "name" is a different value/reference than last render
```

**Code splitting** with `React.lazy` and `Suspense` — load a component's code on demand instead of in the initial bundle, showing a fallback while it loads:

```javascript
const HeavyChart = React.lazy(() => import("./HeavyChart"));
<Suspense fallback={<Spinner />}>
    <HeavyChart />
</Suspense>
```

**State lifting**: when two components need to share state, lift it to their nearest common ancestor and pass it down as props, rather than trying to sync two separate copies of the same state.

**A common pitfall that defeats `React.memo`**: passing a new inline function or object as a prop on every render defeats the shallow comparison, since a new function/object is a new reference every time — this is exactly why `useMemo`/`useCallback` (see Hooks above) exist, to keep those references stable across renders.


### Error Boundaries

An Error Boundary is a component that catches JavaScript errors thrown anywhere in its child component tree DURING RENDERING, logs them, and displays a fallback UI instead of letting the error crash the entire app. Without one, an error in any single component unmounts the whole React tree.

Error boundaries must currently be class components — there is no hook equivalent, because they rely on two lifecycle methods with no function-component counterpart:

```jsx
class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };   // update state so the next render shows the fallback
    }

    componentDidCatch(error, info) {
        logErrorToService(error, info);   // side effect — report to Sentry/logging service
    }

    render() {
        if (this.state.hasError) return <h1>Something went wrong.</h1>;
        return this.props.children;
    }
}

<ErrorBoundary>
    <UserProfile />
</ErrorBoundary>
```

**What it does NOT catch**: errors in event handlers (use a regular try/catch there), errors in asynchronous code (setTimeout, fetch callbacks), errors during server-side rendering, or errors thrown in the Error Boundary itself. Typically you wrap major sections of an app (routes, widgets) individually, so one broken widget doesn't take down the entire page.


### Concurrent Rendering

Before React 18, rendering was always synchronous and all-or-nothing — once React started rendering an update, it couldn't stop until the entire component tree was processed, which could block the main thread (and freeze user input) for large updates.

**Concurrent Rendering** (enabled by the Fiber architecture — see Virtual DOM and Reconciliation above) lets React work on a render WITHOUT committing it, meaning it can pause a render, work on something more urgent (like responding to a keystroke), and then either resume or discard the paused work entirely. This makes it possible for React to keep the UI responsive even while preparing a large or slow update in the background.

**useTransition** — marks a state update as low-priority ("non-urgent"). React keeps showing the OLD UI (rather than a loading state) while it renders the new one in the background, only swapping over once ready:

```jsx
function SearchResults() {
    const [isPending, startTransition] = useTransition();
    const [results, setResults] = useState([]);

    function handleChange(query) {
        startTransition(() => {
            setResults(computeExpensiveResults(query));   // low priority — can be interrupted
        });
    }

    return <div style={{ opacity: isPending ? 0.6 : 1 }}>{/* results */}</div>;
}
```

**useDeferredValue** — similar idea, but for a VALUE instead of a state update: it returns a version of the value that "lags behind" during urgent updates, letting an expensive re-render based on it happen at lower priority.

```jsx
function SearchPage({ query }) {
    const deferredQuery = useDeferredValue(query);
    // the input itself stays responsive; ResultsList re-renders at lower priority
    return <ResultsList query={deferredQuery} />;
}
```

**Rule of thumb**: reach for these only when a specific state update is known to trigger an expensive re-render (large lists, heavy computation) that would otherwise make typing/clicking feel laggy — most components never need them.


### React Router

React itself has no built-in routing (see What React Really Is above) — **React Router** is the standard library that adds client-side routing to a plain React SPA (see the SPA chapter): mapping URL paths to components, WITHOUT a full page reload on navigation.

```jsx
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/users/:id" element={<UserDetail />} />   {/* dynamic segment */}
                <Route path="*" element={<NotFound />} />                {/* catch-all, 404 */}
            </Routes>
        </BrowserRouter>
    );
}

function UserDetail() {
    const { id } = useParams();           // reads the ":id" segment from the current URL
    const navigate = useNavigate();        // programmatic navigation, e.g. after an action
    return <button onClick={() => navigate("/users")}>Back to list ({id})</button>;
}
```

**How it works under the hood**: `<Link>` intercepts clicks and uses the browser's History API (`pushState`) to change the URL WITHOUT triggering a real page request; React Router listens for URL changes and re-renders whichever `<Route>` matches the new path — this is the client-side routing mechanism referenced in the SPA chapter. (Next.js, see that chapter, ships its own file-based router instead of React Router, since it also controls server-side rendering.)


### Fetching Data

Plain React has no built-in data-fetching mechanism — the most basic approach combines `useEffect` (see Hooks above) with the Fetch API (see the JavaScript chapter):

```jsx
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        fetch(`/api/users/${userId}`)
            .then(res => res.json())
            .then(data => { if (!cancelled) setUser(data); })
            .finally(() => { if (!cancelled) setLoading(false); });
        return () => { cancelled = true; };   // avoid setting state after unmount (see Memory Leaks in the JS chapter)
    }, [userId]);

    if (loading) return <Spinner />;
    return <div>{user.name}</div>;
}
```

**Why this manual approach falls short at scale**: no caching (navigating away and back re-fetches from scratch), no automatic re-fetching when the data might be stale, no request de-duplication (two components fetching the same data both hit the network), and boilerplate (loading/error state) repeated in every component that fetches anything.

**Data-fetching libraries** — **React Query (TanStack Query)** and **SWR** solve exactly this, by wrapping fetching in a hook that handles caching, re-fetching, and loading/error state automatically:

```jsx
import { useQuery } from "@tanstack/react-query";

function UserProfile({ userId }) {
    const { data: user, isLoading, error } = useQuery({
        queryKey: ["user", userId],                        // cache key — same key = shared cache entry
        queryFn: () => fetch(`/api/users/${userId}`).then(r => r.json()),
    });

    if (isLoading) return <Spinner />;
    if (error) return <ErrorMessage error={error} />;
    return <div>{user.name}</div>;
}
// Navigating away and back reuses the cached data instantly, then silently
// re-fetches in the background to check for updates — no manual useEffect needed
```

**Rule of thumb**: `useEffect` + `fetch` is fine to understand the fundamentals or for a single simple case; any real application with more than a couple of data-fetching components benefits from React Query/SWR, since the caching/de-duplication/re-fetching behavior is hard to replicate correctly by hand.


### State Management (Redux, Zustand)

React's built-in state (`useState`, `useContext` — see State and Context API above) works well for state that's local to a component or a small subtree. **Global state management libraries** exist for state that's needed widely across the app (the logged-in user, a shopping cart, UI theme) where prop drilling or Context's re-render-everything behavior (see the Context API performance caveat above) becomes a real problem.

**Redux** — the original, most established solution: ALL application state lives in a single, centralized store; state can only change via a "reducer" function processing a dispatched "action," making every state change explicit, traceable, and easy to debug (Redux DevTools can show every action and replay state history).

```jsx
// A slice of the Redux store (using Redux Toolkit, the modern standard way to write Redux)
const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { state.value += 1; },   // looks mutating, but Redux Toolkit handles immutability internally
    },
});

// In a component:
const count = useSelector(state => state.counter.value);   // read from the store
const dispatch = useDispatch();
dispatch(counterSlice.actions.increment());                 // the ONLY way to change state
```

**Zustand** — a much lighter-weight alternative: a plain hook-based store, no boilerplate actions/reducers/providers required, and (crucially) components only re-render when the SPECIFIC piece of state they read from the store actually changes — unlike Context, which re-renders every consumer on ANY change to the shared value (see the Context API section above).

```jsx
import { create } from "zustand";

const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
}));

// In a component — only re-renders when "count" specifically changes, not on unrelated store updates
function Counter() {
    const count = useCounterStore((state) => state.count);
    const increment = useCounterStore((state) => state.increment);
    return <button onClick={increment}>{count}</button>;
}
```

**Rule of thumb**: start with `useState`/Context for local/simple shared state; reach for Zustand when you need genuinely global state with good performance and minimal boilerplate (the common modern default for new projects); reach for Redux when a team specifically wants its stricter conventions, time-travel debugging, and extensive middleware ecosystem — often on larger, more established codebases that already use it.


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


### Routing

Beyond the basic file-to-URL mapping above, the App Router has a few more folder conventions for less common routing patterns:

```text
app/
  blog/
    [slug]/page.tsx           — dynamic segment: "/blog/hello-world" → params.slug = "hello-world"
    [...tags]/page.tsx        — catch-all: "/blog/a/b/c" → params.tags = ["a","b","c"], requires ≥1 segment
    [[...tags]]/page.tsx      — optional catch-all: also matches "/blog" itself (tags = undefined)

  (marketing)/                — route group: organizes files WITHOUT adding "/marketing" to the URL
    about/page.tsx            — still just "/about"
    layout.tsx                — a layout that applies only to routes inside this group

  @modal/                     — parallel route (slot): renders alongside the main page.tsx,
                                 e.g. a modal that can be shown/dismissed independently
```

**Navigating between pages** — use `<Link>` for user-triggered navigation (it prefetches the linked page's code in the background and avoids a full page reload) and the `useRouter` hook for programmatic navigation (e.g. after a form submits):

```jsx
import Link from "next/link";
import { useRouter } from "next/navigation";   // note: "next/navigation", not "next/router" (Pages Router)

function Nav() {
    return <Link href="/dashboard">Dashboard</Link>;   // client-side navigation, no full reload
}

function LoginForm() {
    const router = useRouter();
    async function handleSubmit() {
        await login();
        router.push("/dashboard");   // programmatic navigation after an action completes
    }
}
```

**Reading route params and search params** in a Server Component (passed automatically as props to `page.tsx`):

```tsx
// app/dashboard/users/[id]/page.tsx
export default async function UserPage({
    params,
    searchParams,
}: {
    params: { id: string };
    searchParams: { [key: string]: string | undefined };
}) {
    const user = await db.findUserById(params.id);   // "/dashboard/users/42" → params.id = "42"
    const tab = searchParams.tab ?? "profile";        // "?tab=settings" → searchParams.tab = "settings"
    return <div>{user.name} — {tab}</div>;
}
```

**Rule of thumb**: `[slug]` for a single required dynamic segment, `[...slug]` when a route should accept a variable-depth path, `(group)` purely to organize files/apply a shared layout without affecting the URL, and `@slot` only for advanced UI like modals that need to render independently of the main page content.


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


### Server Actions

Server Actions are async functions that run ONLY on the server, but can be called directly from a component (Server or Client) as if they were a normal function — no manually writing a Route Handler and calling `fetch()` against it. They're marked with the `"use server"` directive.

```tsx
// app/actions.ts
"use server";

export async function createUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    await db.createUser({ name, email });
    revalidatePath("/users");   // refresh cached data for this path after the mutation
}
```

**Used directly as a form's `action`** — this works even with JavaScript disabled/before hydration, since the browser can submit the form natively while Next.js progressively enhances it once JS loads:

```tsx
// app/users/new/page.tsx — Server Component
import { createUser } from "../actions";

export default function NewUserPage() {
    return (
        <form action={createUser}>
            <input name="name" />
            <input name="email" />
            <button type="submit">Create</button>
        </form>
    );
}
```

**Called imperatively from a Client Component**, e.g. in response to a button click rather than a form submit:

```tsx
"use client";
import { createUser } from "../actions";
import { useTransition } from "react";

export function CreateUserButton({ formData }: { formData: FormData }) {
    const [isPending, startTransition] = useTransition();
    return (
        <button
            disabled={isPending}
            onClick={() => startTransition(() => createUser(formData))}
        >
            {isPending ? "Creating..." : "Create User"}
        </button>
    );
}
```

**Why this matters**: Server Actions collapse what used to require two separate pieces (a Route Handler for the API endpoint, plus client-side `fetch` code to call it) into a single function, while keeping mutation logic (database writes, validation, secrets) entirely on the server. Under the hood, Next.js still makes an HTTP POST request to the server when a Server Action is invoked — it's syntactic/architectural sugar over that, not a way to literally call server code from the browser.

**Rule of thumb**: use a Server Action for form submissions and mutations triggered from within your own app's components; use a Route Handler when you need a stable, versioned API endpoint that other clients (mobile apps, third parties, webhooks) also need to call.


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


### Pages Router

Before the App Router (Next.js 13+, see above), Next.js used the `pages/` directory — still fully supported today, and still what many existing production codebases use, so it's worth recognizing even when writing new code with the App Router.

```text
pages/
  index.tsx              — the "/" route
  about.tsx              — "/about"
  users/
    [id].tsx              — "/users/:id" — dynamic route (bracket syntax is shared with the App Router)
  api/
    users.ts               — "/api/users" — API route (equivalent to a Route Handler in the App Router)
  _app.tsx                  — wraps every page (roughly equivalent to app/layout.tsx)
  _document.tsx              — customizes the base HTML document
```

**Key difference from the App Router**: every component in `pages/` is a **Client Component by default** (no React Server Components) — data fetching happens via special EXPORTED FUNCTIONS in the page file, rather than simply using `async`/`await` directly in the component body:

```tsx
// pages/users/[id].tsx
export async function getServerSideProps({ params }) {   // SSR — re-runs on every request
    const user = await db.findUserById(params.id);
    return { props: { user } };                            // becomes the page component's props
}

export async function getStaticProps() {                   // SSG — runs at build time only
    const posts = await db.getAllPosts();
    return { props: { posts }, revalidate: 60 };             // "revalidate" enables ISR (see above)
}

export default function UserPage({ user }) {                // receives props from getServerSideProps/getStaticProps
    return <div>{user.name}</div>;
}
```

**Rule of thumb**: the App Router is the recommended default for new projects (Server Components, layouts, streaming, and the features covered above) — the Pages Router remains supported for existing codebases and some libraries/patterns that haven't fully migrated, but Next.js's own docs steer new work toward the App Router.


### Middleware

Middleware runs BEFORE a request completes, at the edge (close to the user, before it reaches your actual page/API logic) — defined once, in a single `middleware.ts` file at the project root, and applied to every matching route automatically.

```typescript
// middleware.ts — runs before matching requests reach any page/route
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("session")?.value;

    if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/login", request.url));   // block unauthenticated access
    }

    const response = NextResponse.next();                                // continue to the requested page
    response.headers.set("X-Custom-Header", "value");                     // add a header to every response
    return response;
}

export const config = {
    matcher: ["/dashboard/:path*"],   // only run this middleware for paths matching this pattern
};
```

**Common uses**: authentication/authorization checks before a protected page even starts rendering (as above), A/B testing (redirect a percentage of users to a variant), geolocation-based redirects/rewrites, and adding security headers globally. Because it runs at the edge, before any page-specific code, it's the right place for cross-cutting concerns that should apply broadly — but it should stay lightweight (no heavy computation or slow database calls), since it adds latency to EVERY matching request.


### Authentication

Next.js has no built-in authentication system — it's commonly paired with **NextAuth.js (Auth.js)**, a library purpose-built for Next.js that handles OAuth providers, session management, and credential-based login (see the Authentication & Authorization chapter for the underlying JWT/OAuth2/session concepts).

```typescript
// auth.ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [Google],
});

// app/api/auth/[...nextauth]/route.ts — handles the OAuth flow automatically
export { GET, POST } from "@/auth";
```

```tsx
// Reading the session in a Server Component
import { auth } from "@/auth";

export default async function DashboardPage() {
    const session = await auth();
    if (!session) redirect("/login");
    return <div>Welcome, {session.user.name}</div>;
}
```

Protecting routes is commonly combined with Middleware (above) — redirecting unauthenticated users before a protected page even starts rendering, rather than rendering the page and THEN checking.


### Deployment (Vercel)

**Vercel** is the company that created Next.js, and its hosting platform is purpose-built around it — deploying there requires close to zero configuration, since Vercel's infrastructure directly understands Next.js's rendering modes (SSR, SSG, ISR — see above), Server Actions, Middleware (edge functions), and Image Optimization out of the box.

```bash
npm install -g vercel
vercel                  # deploy the current directory — detects Next.js automatically
vercel --prod            # deploy to production
```

**What happens automatically on Vercel**: every Git push gets its own PREVIEW deployment (a unique URL, great for reviewing a PR's changes live before merging — pairs naturally with the Pull Request workflow in the Git chapter), static pages (SSG) are served from a global CDN, SSR pages run as serverless functions that scale automatically with traffic, Middleware runs on Vercel's edge network close to users, and ISR revalidation (see The Four Rendering Modes above) is handled natively without extra infrastructure.

**Alternatives**: Next.js can also be **self-hosted** (as a Node.js server, via `next start`, or containerized with Docker — see the Docker chapter) on any platform (AWS, a VPS, etc.), or deployed to other platforms with Next.js support (Netlify, AWS Amplify) — but some features (like ISR or Middleware) may need extra configuration or behave slightly differently outside Vercel, since Vercel is the reference implementation of the platform Next.js's more advanced features were designed around.


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


### Containers vs Virtual Machines

Both provide isolation for running applications, but at fundamentally different levels — this difference is exactly why containers are so much lighter weight.

```text
Virtual Machines                          Containers
┌─────────┐ ┌─────────┐                  ┌─────────┐ ┌─────────┐
│  App A  │ │  App B  │                  │  App A  │ │  App B  │
├─────────┤ ├─────────┤                  ├─────────┤ ├─────────┤
│ Guest OS│ │ Guest OS│  ← full OS each!  │  (just the app's    │
├─────────┴─┴─────────┤                  │   dependencies)      │
│      Hypervisor       │                 ├───────────┴─────────┤
├───────────────────────┤                 │   Docker Engine       │
│      Host OS           │                ├───────────────────────┤
│      Hardware           │               │      Host OS (shared kernel) │
└─────────────────────────┘               │      Hardware                 │
                                            └───────────────────────────────┘
```

**Virtual Machines**: virtualize the HARDWARE — each VM runs its own complete guest operating system (its own kernel), managed by a hypervisor. Strong isolation (a VM is essentially a separate computer), but heavyweight: each VM consumes GBs of disk/RAM just for its OS, and takes minutes to boot.

**Containers**: virtualize the OPERATING SYSTEM — all containers on a machine share the HOST's kernel, and Docker uses OS-level isolation features (Linux namespaces for process/network/filesystem isolation, cgroups for resource limits) to make each container believe it has the machine to itself. Much lighter weight: a container image only needs to package the APPLICATION and its dependencies (not a whole OS), starts in milliseconds/seconds, and many containers can run on the same host with far less overhead than the equivalent number of VMs.

**Trade-off**: containers have weaker isolation than VMs (a kernel-level vulnerability can theoretically be exploited across containers sharing that kernel, whereas a VM's guest kernel is fully separate) — this is why highly sensitive multi-tenant workloads sometimes still use VMs, or a hybrid (e.g. AWS Firecracker, "micro-VMs") for stronger isolation with container-like speed. For most application deployment, containers' speed and density benefits far outweigh this trade-off.


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


### Ports

A container's network is isolated by default — a process listening on port 8080 INSIDE the container is not reachable from the host machine until that port is explicitly published/mapped.

```bash
docker run -p 8080:8080 my-app        # host_port:container_port — maps host 8080 → container 8080
docker run -p 3000:8080 my-app        # host 3000 → container 8080 (different numbers on each side is fine)
docker run -P my-app                  # publish ALL exposed ports to random available host ports
```

`EXPOSE 8080` in a Dockerfile is documentation only — it doesn't actually publish the port; `-p` at `docker run` time is what makes it reachable from outside the container.


### Environment Variables

Environment variables are the standard way to configure a containerized application (database URLs, feature flags, secrets) without baking values into the image itself — the same image can then run in dev, staging, and production with different configuration.

```bash
docker run -e SPRING_PROFILES_ACTIVE=prod -e DB_HOST=prod-db my-app

# Or from a file, instead of many -e flags:
docker run --env-file .env my-app
```

```dockerfile
ENV APP_ENV=production      # sets a default inside the image — can still be overridden at "docker run"
```

**Rule of thumb**: never bake secrets (passwords, API keys) directly into an image via `ENV` in the Dockerfile — anyone who can pull the image can extract them. Pass secrets at runtime instead (`-e`, `--env-file`, or a secrets manager/Kubernetes Secret — see the Kubernetes chapter).


### Volumes

By default, a container's filesystem is EPHEMERAL — any data written inside it is lost when the container is removed. Volumes solve this by mapping storage that persists independently of the container's lifecycle.

```bash
# Named volume — managed by Docker, persists across container restarts/removal
docker run -v pgdata:/var/lib/postgresql/data postgres

# Bind mount — maps a specific HOST directory into the container (great for local development,
# so code changes on the host are immediately visible inside the container)
docker run -v $(pwd)/src:/app/src my-app
```

**Named volumes** are the right choice for data that should persist and be managed by Docker (a database's data directory) — Docker controls where they're stored and they survive `docker rm` on the container. **Bind mounts** are ideal for development (live-reloading source code) since they point directly at a host path you control, but tie the container to that specific host's filesystem layout — not portable the way a named volume is.


### Networks

By default, Docker creates an isolated virtual network so containers can communicate with each other by NAME (not IP address, which can change) without exposing that communication to the host at all.

```bash
docker network create my-app-network
docker run --network my-app-network --name db postgres
docker run --network my-app-network --name app my-spring-app
# Inside "app"'s container, connecting to "db" (by container NAME) reaches the database container —
# Docker's embedded DNS resolves container names within the same network automatically
```

This is exactly the mechanism Docker Compose (below) uses automatically — every service in a `docker-compose.yml` file is put on the same network and can reach each other by service name, with zero manual network setup.


### Docker Hub

Docker Hub is the default public registry for Docker images — a "package registry" for containers, similar in spirit to npm for JavaScript packages or Maven Central for Java. `FROM postgres`, `FROM node`, `FROM eclipse-temurin` all pull from Docker Hub by default.

```bash
docker pull postgres:16              # download an image from Docker Hub
docker build -t myusername/my-app:1.0 .    # build and tag your own image
docker push myusername/my-app:1.0     # publish it to your Docker Hub account (requires docker login)
```

**Official images** (like `postgres`, `node`, `nginx`, with no username prefix) are curated and maintained by Docker/the project itself — generally the safest, best-documented starting point. Private registries (AWS ECR, GitHub Container Registry, a self-hosted registry) are commonly used instead of Docker Hub for proprietary application images in production.


### Docker Compose

Docker Compose defines and runs MULTIPLE containers together as one application, described declaratively in a single YAML file — instead of manually running several `docker run` commands with matching network/volume/environment flags every time.

```yaml
# docker-compose.yml — a Spring Boot app + PostgreSQL database, wired together
version: "3.8"
services:
  app:
    build: .                          # build from the Dockerfile in the current directory
    ports:
      - "8080:8080"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/mydb   # "db" — the OTHER service's name,
      SPRING_DATASOURCE_USERNAME: postgres                      # resolved automatically (see Networks above)
      SPRING_DATASOURCE_PASSWORD: secret
    depends_on:
      - db                              # start "db" before "app" (does not wait for Postgres to be READY, just started)

  db:
    image: postgres:16
    environment:
      POSTGRES_DB: mydb
      POSTGRES_PASSWORD: secret
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data   # persists database data across "docker compose down"

volumes:
  pgdata:
```

```bash
docker compose up              # build (if needed) and start every service
docker compose up -d           # same, but detached (runs in the background)
docker compose down            # stop and remove containers (add -v to also remove volumes)
docker compose logs -f app     # follow logs for a specific service
```

**Why this matters**: without Compose, running this same two-container setup manually means creating a network, running Postgres with the right volume/env vars, then running the app with matching env vars pointing at the database container — Compose captures all of that in one file, checked into version control, so any teammate can spin up an identical local environment with a single command. This is the standard way to run "Spring Boot + PostgreSQL" (or any multi-service app) locally in development.


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


### Scaling

**Manual scaling**: simply change the replica count on a Deployment (see Core Objects above) — Kubernetes creates or removes Pods to match.

```bash
kubectl scale deployment my-app --replicas=5
```

**Horizontal Pod Autoscaler (HPA)**: automatically adjusts the NUMBER of Pod replicas based on observed metrics (typically CPU or memory usage, or custom metrics like requests-per-second), scaling out under load and back in when it subsides — this is what "Horizontal" in "Horizontal Pod Autoscaler" refers to, exactly the horizontal scaling concept from the NoSQL chapter, applied to compute instead of data.

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70    # add more Pods once average CPU exceeds 70% of the requested amount
```

This is why setting accurate `requests` (see Requests vs Limits above) matters — the HPA calculates "70% utilization" relative to the Pod's requested CPU, so an inaccurate request value makes the autoscaler's decisions inaccurate too.

**Vertical Pod Autoscaler (VPA)**: instead of adding more Pods, automatically adjusts a Pod's resource `requests`/`limits` based on observed usage — the "vertical" counterpart to the HPA, less commonly used since it typically requires restarting the Pod to apply new resource values.

**Cluster Autoscaler**: operates one level up — adds or removes actual NODES (servers) in the cluster when Pods can't be scheduled due to insufficient cluster capacity, or when nodes are underutilized. Works together with the HPA: HPA decides how many Pods are needed; Cluster Autoscaler ensures there's enough underlying node capacity to actually run them.


### Rolling Updates

A rolling update replaces Pods running the OLD version of an application with the NEW version gradually, a few at a time, rather than stopping everything at once — this is what makes zero-downtime deployments possible, and is the default update strategy for a Kubernetes Deployment.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 6
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1    # at most 1 Pod can be down/updating at a time
      maxSurge: 1          # at most 1 EXTRA Pod (beyond the desired replica count) during the rollout
  template:
    spec:
      containers:
        - name: my-app
          image: my-app:2.0    # updating this field triggers a rolling update
```

**How it works**: Kubernetes creates new Pods running the new image, waits for each one to pass its Readiness Probe (see above — this is exactly why readiness probes matter for safe deployments) before routing traffic to it, then terminates a corresponding old Pod, and repeats until every Pod is on the new version. At every point during the rollout, enough Pods are available and ready to keep serving traffic without a gap.

```bash
kubectl rollout status deployment/my-app     # watch the progress of an ongoing rollout
kubectl rollout undo deployment/my-app        # roll back to the previous version, using the same
                                                # gradual, zero-downtime rolling mechanism in reverse
kubectl rollout history deployment/my-app      # see previous revisions available to roll back to
```

**Rule of thumb**: rolling updates depend entirely on an accurate readiness probe — if a Pod reports "ready" before it's actually able to serve traffic correctly, Kubernetes will happily route real user requests to a broken Pod during the rollout.



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


### What is Version Control?

Version control (VCS) is a system that records changes to a set of files over time, so you can recall specific versions later, see who changed what and when, and let multiple people work on the same files without overwriting each other's work. Without it, teams resort to manually renaming files (`report_final_v2_ACTUALLY_FINAL.docx`) or emailing changes back and forth — both error-prone and impossible to scale past one person.

Two broad models existed before Git's approach:

**Centralized VCS** (e.g. Subversion/SVN, CVS) — one central server holds the full history; developers check out a working copy of the CURRENT version only. Requires a network connection for almost every operation (committing, viewing history), and the central server is a single point of failure.

**Distributed VCS** (Git, Mercurial) — every developer clones the ENTIRE repository, including its full history. Commits, branching, and browsing history all happen locally and instantly; a network connection is only needed to synchronize with others (push/pull/fetch — see below).


### Git vs GitHub vs GitLab vs Bitbucket

This is a very common point of confusion: **Git** is the version control TOOL itself (runs locally, no server required — see above). **GitHub**, **GitLab**, and **Bitbucket** are separate, competing HOSTING PLATFORMS/services built around Git — they store remote copies of Git repositories in the cloud and add collaboration features on top (Pull Requests, issue tracking, CI/CD pipelines, code review tools, access control).

```text
Git         → the version control system (the engine)
GitHub      → a hosting platform for Git repos, owned by Microsoft; adds PRs, Actions (CI/CD), Issues
GitLab      → a hosting platform for Git repos; strong built-in CI/CD, can be self-hosted
Bitbucket   → a hosting platform for Git repos, owned by Atlassian; integrates tightly with Jira/Trello
```

You could use Git without ever touching GitHub/GitLab/Bitbucket (e.g. hosting your own bare repository on a private server) — but in practice, teams almost always pair local Git with one of these platforms as the shared "source of truth" remote.


### GitHub Desktop vs Git CLI

**Git CLI (command line)**: the `git` command run in a terminal — every Git operation, exposed directly, with full control over flags and edge cases. Steeper learning curve, but what most professional developers use day to day, since it's scriptable and works identically across every platform/editor.

**GitHub Desktop / GUI clients**: a visual interface (from GitHub, or built into editors like VS Code/JetBrains IDEs) for the most common operations — staging, committing, branching, viewing diffs — without memorizing commands. Easier for beginners and great for reviewing changes visually, but less powerful for advanced operations (interactive rebase, cherry-picking specific hunks) which usually still require the CLI.

**Rule of thumb**: GUI tools are a fine starting point and remain useful for visualizing diffs/history even for experienced developers, but learning the CLI is worthwhile since it's universal (works over SSH on any server, in any CI pipeline) and gives access to every Git feature.


### Initial Configuration

Before making any commits, Git needs to know who you are — this identity is attached to every commit you create:

```bash
git config --global user.name "Beatriz Santos"
git config --global user.email "beatriz@example.com"

git config --global init.defaultBranch main    # name new repos' default branch "main" instead of "master"
git config --global core.editor "code --wait"   # set VS Code as Git's default commit-message editor

git config --list                                # view all current configuration
```

`--global` applies the setting to every repository on your machine (stored in `~/.gitconfig`); omitting it applies only to the current repository (stored in `.git/config`) — useful if you need a different email for work vs personal projects.


### The Three Trees: Working Directory, Staging Area, and Repository

Git tracks a file's state across three distinct areas — understanding this model is the key to understanding almost every Git command.

```text
Working Directory  →  git add  →  Staging Area  →  git commit  →  Repository (.git)
(your actual files)    (index)    (what WILL be    (permanent
                                   in the next        history)
                                   commit)
```

**Working Directory**: the actual files on disk, as you see and edit them in your editor/file explorer — this is where changes start.

**Staging Area** (also called "the index"): a preparation zone. `git add <file>` copies a file's CURRENT state from the working directory into the staging area — this lets you build up a commit piece by piece (stage only some files, or even only some LINES within a file with `git add -p`), rather than being forced to commit everything you've changed at once.

**Repository**: the permanent, committed history (`.git` folder) — `git commit` takes whatever is currently in the staging area and saves it as a new, permanent snapshot (see How Git Stores Data below).

```bash
# Editing a file changes only the Working Directory
echo "new line" >> file.txt

git status              # shows file.txt as "modified" (working directory), not yet staged
git add file.txt         # copies the CURRENT content of file.txt into the Staging Area
git status                # now shows file.txt as staged ("Changes to be committed")
git commit -m "message"   # takes what's in the Staging Area and creates a permanent commit
```

This is exactly why `git diff` (working directory vs staging area) and `git diff --staged` (staging area vs last commit) show different things — they're comparing different pairs of these three trees.


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


### Remote Repositories

A "remote" is just a named reference to another copy of the repository, usually hosted on GitHub/GitLab/Bitbucket (see above). `origin` is the conventional name for the primary remote a repository was cloned from — it's just a convention, not a special keyword.

```bash
git remote -v                                    # list configured remotes and their URLs
git remote add origin https://github.com/user/repo.git   # attach a remote named "origin"
git remote remove origin                          # detach a remote

git push -u origin main    # push AND set "origin main" as the default upstream for future plain "git push"
```

A repository can have multiple remotes — a common pattern when contributing to open source is `origin` (your own fork) plus `upstream` (the original project you forked from).


### Fetch vs Pull vs Push

These three commands are how local and remote history stay in sync — mixing them up is one of the most common sources of Git confusion for beginners.

**git fetch**: downloads new commits/branches from the remote into your LOCAL copy of the remote's branches (e.g. `origin/main`) — but does NOT touch your own working branch or working directory at all. Safe to run at any time, purely informational until you act on it.

```bash
git fetch origin
git log origin/main    # inspect what changed on the remote, without merging it into your branch yet
git diff main origin/main   # see exactly what's different before deciding to merge
```

**git pull**: `git fetch` immediately followed by `git merge` (or `git rebase`, with `git pull --rebase`) into your CURRENT branch — this is why `git pull` can create merge commits or conflicts, while `git fetch` never can.

```bash
git pull origin main         # fetch + merge, in one step
git pull --rebase origin main  # fetch + rebase instead of merge — keeps history linear
```

**git push**: uploads your LOCAL commits to the remote, updating the remote branch to match. Fails (safely) if the remote has commits you don't have locally yet — you must `pull`/`fetch` and reconcile first, which prevents accidentally overwriting a teammate's work.

```bash
git push origin main
git push --force-with-lease   # overwrite the remote branch anyway — DANGEROUS, only after a rebase on
                                # a branch you're SURE no one else is using; --force-with-lease is safer than
                                # --force since it fails if the remote changed since you last fetched
```

**Rule of thumb**: `fetch` = "check what's new remotely, don't touch my work"; `pull` = "check what's new AND merge it into what I'm doing now"; `push` = "upload my commits so others can see them."


### Tags

A tag is a permanent, named pointer to a specific commit — unlike a branch (which moves forward as new commits are added), a tag stays fixed forever, making it ideal for marking release points (`v1.0.0`, `v2.1.3`).

```bash
git tag v1.0.0                              # lightweight tag — just a name pointing at HEAD
git tag -a v1.0.0 -m "First stable release"  # annotated tag — stores author, date, and message (recommended)

git tag                                      # list all tags
git checkout v1.0.0                          # inspect the code exactly as it was at that release (detached HEAD)

git push origin v1.0.0                       # tags are NOT pushed automatically — must push explicitly
git push origin --tags                       # push all tags at once
```

**Rule of thumb**: use annotated tags (`-a`) for anything meant to represent a real release, since they carry metadata (who tagged it, when, why) that a lightweight tag doesn't.


### .gitignore

A `.gitignore` file tells Git which files/patterns to never track — build artifacts, dependencies, secrets, and OS/editor-specific files that shouldn't be part of the shared history.

```gitignore
# Dependencies
node_modules/
target/

# Build output
dist/
*.class

# Secrets — NEVER commit these
.env
*.pem

# OS/editor files
.DS_Store
.vscode/
```

**Important caveat**: `.gitignore` only prevents UNTRACKED files from being added — if a file is ALREADY tracked (previously committed), adding it to `.gitignore` does nothing until you explicitly untrack it:

```bash
git rm --cached .env    # stop tracking the file, but keep it on disk
# then commit this removal, and .env will be ignored from now on
```

If a secret was ever committed, adding it to `.gitignore` afterward does NOT remove it from history — it's still recoverable from old commits, and requires rewriting history (`git filter-repo` or the older `git filter-branch`) plus rotating the leaked credential.


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


### Merge Conflicts

A conflict happens when Git cannot automatically combine changes — most commonly, when two branches modify the SAME lines of the SAME file differently. Git pauses the merge/rebase and asks you to resolve it manually.

```bash
git merge feature/new
# Auto-merging file.txt
# CONFLICT (content): Merge conflict in file.txt
# Automatic merge failed; fix conflicts and then commit the result.
```

Git marks the conflicting section directly in the file with conflict markers:

```text
<<<<<<< HEAD
const greeting = "Hello";      # your current branch's version
=======
const greeting = "Hi there";   # the incoming branch's version
>>>>>>> feature/new
```

**Resolving it**: edit the file to keep the correct content (one side, the other, or a manual combination of both), remove the `<<<<<<<`/`=======`/`>>>>>>>` markers entirely, then stage and continue:

```bash
git add file.txt              # marks the conflict as resolved
git commit                    # completes the merge (pre-filled with a merge commit message)
# or, if this happened during a rebase:
git rebase --continue
git merge --abort              # bail out entirely and return to the state before the merge started
```

**Rule of thumb**: pulling/rebasing frequently (rather than letting a feature branch diverge from `main` for weeks) keeps conflicts small and infrequent — the longer two branches diverge, the more likely and larger conflicts become.


### Pull Requests and Code Reviews

A Pull Request (PR — called a "Merge Request" on GitLab) is a request to merge one branch into another, opened on the hosting platform (GitHub/GitLab/Bitbucket) rather than in Git itself — Git has no native concept of a PR; it's a feature the platform builds on top of branches.

A PR provides a dedicated space to: show a diff of all changes, let teammates leave inline comments (code review), run automated checks (CI — tests, linting, build), and require approval before the merge is allowed. See the Code Reviews chapter for what makes a good review; the workflow itself is: push a feature branch → open a PR against `main` → address review feedback with more commits → once approved and checks pass, merge (via a regular merge, squash, or rebase merge, depending on team convention).


### Git Flow, GitHub Flow, and Trunk-Based Development

These are three competing conventions for how a team organizes branches — none is enforced by Git itself, they're team agreements about workflow.

**Git Flow**: a heavyweight model with several long-lived branch types — `main` (production), `develop` (integration), `feature/*`, `release/*`, `hotfix/*`. Features branch from and merge back into `develop`; periodic `release` branches stabilize before merging into both `main` and `develop`. Well-suited to projects with scheduled releases and multiple versions to support simultaneously, but heavier process than most modern web teams need.

```text
main ─────────────────●──────────●──────  (production releases only)
                        \        /
develop ──●────●────●────●──●──●───────  (integration branch)
            \    \        /
feature/a ───●────●──────/
feature/b ────────●─────/
```

**GitHub Flow**: a much simpler model — one long-lived branch (`main`, always deployable), and every change is a short-lived feature branch that gets a PR and merges straight back into `main` once reviewed and tested. No `develop`, no `release` branches. Well-suited to teams that deploy continuously (every merge to `main` can go straight to production).

```text
main ──●───────●───────●───────●───────  (always deployable)
        \     /  \     /  \     /
         feature   feature   feature
```

**Trunk-Based Development**: similar spirit to GitHub Flow but pushed further — everyone commits directly (or via very short-lived branches, often merged within a day) to a single shared branch ("trunk"/`main`), avoiding long-lived feature branches almost entirely. Incomplete features are hidden behind feature flags rather than kept on a separate branch, which avoids large, painful merges later. Favored by teams practicing continuous integration/deployment at scale (this is how Google manages a single massive monorepo).

**Rule of thumb**: Git Flow suits products with formal, versioned releases (desktop software, libraries with multiple supported versions); GitHub Flow suits most modern web apps deploying continuously; Trunk-Based Development suits large teams optimizing for minimal merge pain and true continuous integration, at the cost of needing feature-flag discipline.


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


### Relational Databases: Tables, Rows, Columns, and Keys

A relational database organizes data into **tables** (also called relations) — a grid with a fixed set of **columns** (also called fields or attributes, each with a declared data type) and any number of **rows** (also called records or tuples, each one entry).

```text
employees table
┌────┬─────────┬──────────┬─────────────┐
│ id │ name    │ salary   │ department  │  ← columns (fixed structure)
├────┼─────────┼──────────┼─────────────┤
│ 1  │ Ana     │ 50000    │ Engineering │  ← row (one record)
│ 2  │ Beatriz │ 60000    │ Engineering │  ← row
└────┴─────────┴──────────┴─────────────┘
```

**Primary Key (PK)**: a column (or combination of columns) that uniquely identifies each row in a table — no two rows can share the same primary key value, and it can never be NULL. Usually an auto-incrementing `id`, though it can be any naturally unique value.

**Foreign Key (FK)**: a column in one table that references the Primary Key of another table — this is exactly what creates a RELATIONSHIP between tables, and the database enforces "referential integrity": you cannot insert a foreign key value that doesn't exist in the referenced table, and (depending on configuration) deleting a referenced row can be blocked, cascaded, or nulled out.

```sql
CREATE TABLE departments (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE employees (
    id            SERIAL PRIMARY KEY,
    name          VARCHAR(100),
    department_id INT REFERENCES departments(id)   -- foreign key: must match an existing departments.id
);
```

**Relationships** between tables come in three shapes: one-to-one (a User has exactly one Profile), one-to-many (a Department has many Employees — the FK lives on the "many" side, exactly like JPA's `@ManyToOne` in the Spring Boot chapter), and many-to-many (Students and Courses — requires a separate JOIN/junction table with two foreign keys, since neither table alone can hold a repeating reference).

**Normalization**: the process of organizing tables to minimize data duplication and avoid update anomalies, by splitting data into multiple related tables instead of one giant flat table.

```text
-- Un-normalized: department name repeated on every row — if "Engineering" is renamed,
-- EVERY employee row needs to be updated, and rows could disagree with each other
employees(id, name, department_name)

-- Normalized: department name stored ONCE, referenced by id
departments(id, name)
employees(id, name, department_id)
```

The most commonly cited normal forms: **1NF** (each column holds a single, atomic value — no comma-separated lists in one field), **2NF** (1NF + every non-key column depends on the WHOLE primary key, not just part of it), **3NF** (2NF + no non-key column depends on another non-key column — every column depends only on the key). In practice, most well-designed schemas aim for 3NF, then deliberately denormalize specific parts later for performance if profiling shows it's needed.


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


### UNION and UNION ALL

While JOINs combine tables SIDE BY SIDE (adding columns), `UNION` combines the results of two queries VERTICALLY (stacking rows) — both queries must return the same number of columns, with compatible types.

```sql
-- All cities where we have either customers or suppliers, with no duplicates
SELECT city FROM customers
UNION
SELECT city FROM suppliers;

-- Same, but keeps duplicates (faster — skips the de-duplication step)
SELECT city FROM customers
UNION ALL
SELECT city FROM suppliers;
```

**UNION** removes duplicate rows from the combined result (like an implicit `DISTINCT`) — this requires an extra sort/dedup step, making it slower. **UNION ALL** keeps every row, including duplicates, and is significantly faster since it skips that step.

**Rule of thumb**: use `UNION ALL` by default unless you specifically need duplicates removed — many queries don't actually produce duplicates in practice (e.g. combining results from date-partitioned tables that can't overlap), making the extra cost of `UNION` pure waste.


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


### Constraints

Constraints are rules enforced by the database itself on column values — they reject invalid data at the database level, as a last line of defense even if application-level validation (see the Spring Boot chapter) is bypassed or buggy.

```sql
CREATE TABLE employees (
    id       SERIAL PRIMARY KEY,              -- PRIMARY KEY: unique + not null, identifies each row
    email    VARCHAR(255) UNIQUE NOT NULL,     -- UNIQUE: no two rows can share this value
                                                 -- NOT NULL: this column can never be left empty
    age      INT CHECK (age >= 18),             -- CHECK: an arbitrary boolean condition must hold
    dept_id  INT REFERENCES departments(id),     -- FOREIGN KEY: must match an existing row elsewhere
    status   VARCHAR(20) DEFAULT 'active'         -- DEFAULT: value used automatically if none is provided
);
```

| Constraint | Purpose |
|---|---|
| `PRIMARY KEY` | uniquely identifies each row; implies `UNIQUE` + `NOT NULL` |
| `FOREIGN KEY` | value must exist in another table's referenced column |
| `UNIQUE` | no two rows may share this value (nulls are usually still allowed) |
| `NOT NULL` | column cannot be left empty |
| `CHECK` | custom condition every row must satisfy |
| `DEFAULT` | fallback value used when none is explicitly provided |

**Why enforce this in the database, not just the application?** Multiple applications/services might write to the same database, a bug could bypass application validation, and a database constraint is the single source of truth that's IMPOSSIBLE to accidentally skip — unlike application code, which must remember to validate on every code path.


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


### Views

A view is a saved, named SELECT query that behaves like a virtual, read-through table — it doesn't store data itself (unlike a Materialized View, see the PostgreSQL chapter), it just re-runs the underlying query every time it's queried.

```sql
CREATE VIEW active_customer_orders AS
SELECT o.id, c.name, o.total, o.created_at
FROM orders o
JOIN customers c ON o.customer_id = c.id
WHERE c.active = true;

-- Query the view exactly like a table — the JOIN above is re-run under the hood
SELECT * FROM active_customer_orders WHERE total > 100;
```

**Why use one**: hides complex JOIN/filter logic behind a simple name (so other queries/reports don't need to repeat it), and can restrict which columns/rows a group of users is allowed to see (e.g. a view that excludes a `salary` column, granted to users who shouldn't see raw employee data).


### Stored Procedures and Functions

Both let you save reusable logic INSIDE the database itself, rather than only in application code.

**Function**: returns a value and can be used INSIDE a query (in a `SELECT`, `WHERE`, etc.) — must not have side effects in most databases.

```sql
CREATE FUNCTION calculate_tax(amount NUMERIC) RETURNS NUMERIC AS $$
BEGIN
    RETURN amount * 0.20;
END;
$$ LANGUAGE plpgsql;

SELECT name, total, calculate_tax(total) AS tax FROM orders;   -- used directly inside a query
```

**Stored Procedure**: performs an action (can include multiple statements, transactions, side effects like INSERT/UPDATE) — called explicitly with `CALL`, not embedded inside another query.

```sql
CREATE PROCEDURE transfer_funds(from_id INT, to_id INT, amount NUMERIC)
LANGUAGE plpgsql AS $$
BEGIN
    UPDATE accounts SET balance = balance - amount WHERE id = from_id;
    UPDATE accounts SET balance = balance + amount WHERE id = to_id;
    -- both updates succeed or fail together, as one transaction (see ACID in the MySQL chapter)
END;
$$;

CALL transfer_funds(1, 2, 100);
```

**Trade-offs**: moving logic into the database can reduce network round-trips and keep business rules enforced centrally, but couples business logic to a specific database engine (procedures aren't portable across MySQL/PostgreSQL/Oracle the way application code is), and is harder to version-control, test, and debug than application code. Most modern teams keep the bulk of business logic in the application layer (e.g. the Spring Boot Service layer) and reserve stored procedures/functions for narrow, performance-critical, or data-integrity-critical cases.


### Triggers

A trigger is a piece of logic the database runs AUTOMATICALLY in response to an INSERT, UPDATE, or DELETE on a table — without the application needing to explicitly call anything.

```sql
CREATE TABLE audit_log (
    id INT PRIMARY KEY, table_name TEXT, action TEXT, changed_at TIMESTAMP
);

CREATE FUNCTION log_employee_change() RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO audit_log (table_name, action, changed_at)
    VALUES ('employees', TG_OP, NOW());   -- TG_OP is the operation: 'INSERT', 'UPDATE', or 'DELETE'
    RETURN NEW;                            -- NEW refers to the row after the change
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER employees_audit
AFTER INSERT OR UPDATE OR DELETE ON employees
FOR EACH ROW EXECUTE FUNCTION log_employee_change();
```

**Common uses**: audit logging (who changed what, and when — as above), automatically maintaining a `updated_at` timestamp, enforcing complex validation that `CHECK` constraints can't express, or keeping a denormalized summary column in sync. **Downside**: triggers execute invisibly from the application's point of view — a developer reading the application code might have no idea a database write also fires side effects, which can make behavior surprising and harder to debug. Use them sparingly, and document them well.


### Locks

A lock prevents multiple transactions from making conflicting changes to the same data at the same time (see ACID/Isolation Levels in the MySQL chapter for the broader concurrency picture).

```sql
-- Row-level lock: blocks other transactions from modifying (or in some databases, reading) this row
-- until the current transaction commits or rolls back
BEGIN;
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;   -- locks this specific row
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;   -- lock is released here
```

**Types**: a **shared lock** allows multiple transactions to read the same row concurrently, but blocks anyone from writing to it; an **exclusive lock** (like `FOR UPDATE` above) blocks both reads-for-update and writes from other transactions until released. Locks are usually acquired automatically by the database based on the isolation level and the statements you run — `FOR UPDATE` is one of the few cases where you request one explicitly, typically to prevent a classic race condition (e.g. two concurrent requests both reading a stock count of 1, and both deciding it's safe to sell).

**Deadlocks**: if Transaction A locks row 1 and waits for row 2, while Transaction B locks row 2 and waits for row 1, neither can proceed — the database detects this and forcibly rolls back one of the transactions (the application must be prepared to retry it).


### EXPLAIN and Query Optimization

`EXPLAIN` shows the database's EXECUTION PLAN for a query — which indexes it will use (if any), the order tables are joined in, and the estimated number of rows at each step — without actually running the query. Most databases also support `EXPLAIN ANALYZE`, which actually runs the query and reports real timings alongside the estimates (see the PostgreSQL chapter for a full walkthrough of reading the output).

```sql
EXPLAIN SELECT * FROM orders WHERE customer_id = 42;
-- Look for: is an index being used (Index Scan) or is it scanning the whole table (Seq Scan / full table scan)?
```

**General optimization principles**: index columns used in `WHERE`/`JOIN`/`ORDER BY` (see Indexes above), avoid `SELECT *` when only specific columns are needed (less data transferred, and can enable a covering index), watch for functions applied to indexed columns in `WHERE` (`WHERE LOWER(email) = ...` usually can't use a plain index on `email` — see the Functional Index note in the PostgreSQL chapter), and always measure with `EXPLAIN`/`EXPLAIN ANALYZE` rather than guessing — intuition about what's "obviously" slow is frequently wrong.


## 5.02 MySQL



### Overview

MySQL is the world's most widely deployed open-source relational database. It stores data in **structured tables (rows and columns)** and is queried using **SQL (Structured Query Language)**.

It enforces relationships between data using concepts like **primary keys and foreign keys**, ensuring consistency and integrity across tables.

MySQL supports **ACID transactions** (Atomicity, Consistency, Isolation, Durability), which guarantee that database operations are reliable even in case of failures.

Its default storage engine, **InnoDB**, provides support for transactions, foreign keys, and crash recovery.


### Architecture

MySQL follows a layered, client-server architecture:

```text
Client (application, mysql CLI)
    ↓
Connection Layer — authentication, thread handling per connection
    ↓
SQL Layer — parser, optimizer, query cache (removed in MySQL 8.0)
    ↓
Storage Engine Layer — pluggable! InnoDB, MyISAM, Memory, etc. (see below)
    ↓
Disk — data files, log files
```

The key architectural distinction from most other databases is the **pluggable storage engine layer**: the SQL syntax and query layer stay the same regardless of which engine you use, but the engine underneath determines how data is actually stored, indexed, locked, and whether transactions/foreign keys are even supported at all — you can even mix engines across different tables in the same database (though this is rarely done in practice).


### InnoDB vs MyISAM

MySQL's two main storage engines historically — InnoDB has been the default since MySQL 5.5 (2010), and MyISAM is now mostly legacy.

**InnoDB** (default today): supports transactions (ACID), foreign key constraints, row-level locking (multiple transactions can write to different rows of the same table concurrently), and crash recovery via a Write-Ahead Log. The right choice for virtually all modern applications.

**MyISAM** (legacy): no transactions, no foreign keys, table-level locking only (an entire table locks during a write, blocking other writes even to unrelated rows — a major concurrency bottleneck), but historically faster for read-heavy, write-rarely workloads and full-text search (before InnoDB gained full-text support in 5.6). Still occasionally seen in old codebases, but not recommended for new tables.

```sql
CREATE TABLE orders (
    id INT PRIMARY KEY,
    total DECIMAL(10,2)
) ENGINE=InnoDB;    -- explicit, though InnoDB is the default and rarely needs stating

SHOW TABLE STATUS WHERE Name = 'orders';   -- shows which engine a table actually uses
```

**Rule of thumb**: use InnoDB unless you have a specific, well-understood legacy reason not to — MyISAM's lack of transactions and foreign keys makes it a poor fit for almost any application that cares about data integrity.


### ACID Properties

ACID is a set of four guarantees a database makes about how transactions behave — the whole point is RELIABILITY: even when multiple transactions run at the same time, or the server crashes mid-write, or a power outage hits at the worst possible moment, the database must never be left in a broken, half-updated, or inconsistent state. Without these guarantees, applications would need to defend against data corruption themselves, in every single piece of code that touches the database — ACID means that defense is built into the database engine itself, once, correctly, instead of being re-implemented (and likely gotten wrong) by every application that uses it.

**Atomicity** — a transaction is all-or-nothing. If you transfer €100 between accounts, both the debit and the credit happen together, or neither does. No partial updates.


**Consistency** — a transaction can only take the database from one VALID state to another valid state; it can never leave the data in a state that breaks the rules the schema defines. "Valid" here means every constraint holds: `NOT NULL`, `FOREIGN KEY`, `UNIQUE`, `CHECK` (see Constraints in the SQL chapter), plus any triggers or cascading rules the schema defines. If even one statement inside a transaction would violate any of these rules, the ENTIRE transaction is rolled back — none of it is allowed to commit, not just the offending statement.

```sql
-- accounts.balance has a CHECK (balance >= 0) constraint
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;   -- say this makes balance = -20
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
-- The CHECK constraint fails on the first UPDATE, so Consistency guarantees
-- the WHOLE transaction is rejected — account 2 never gets credited either,
-- and the database is left exactly as it was before BEGIN, not in some
-- partially-updated state that happens to violate the balance >= 0 rule.
```

**Consistency vs Atomicity — a common point of confusion**: they sound similar but guarantee different things. Atomicity is about the TRANSACTION itself — did every statement in it run, or none of them? Consistency is about the DATA — after the transaction, does it still satisfy every rule the schema defines? A transaction can be perfectly atomic (all its statements ran, or none did) and still be rejected for breaking consistency (e.g. the example above: both UPDATEs technically "could" run atomically, but the database refuses to commit them because the result would violate a `CHECK` constraint). In practice the two work together: the database uses atomicity (all-or-nothing execution) as the MECHANISM to guarantee consistency (never committing an invalid end state).

**Don't confuse this with the "C" in the CAP theorem** (see CAP Theorem in the NoSQL chapter) — that's a completely different meaning of "consistency," despite the same word. ACID's Consistency is about data always satisfying schema-defined RULES/constraints. CAP's Consistency is about every read seeing the most recent WRITE, especially across multiple replicas/nodes in a distributed system. A database can satisfy one without the other — this naming collision is a well-known source of confusion in interviews, so it's worth being explicit about which "consistency" is meant.


**Isolation** — concurrent transactions do not interfere with each other. Each transaction sees a snapshot of the database, as if it were running alone. Isolation levels trade off between data accuracy and concurrency:


- **Read Uncommitted** — can read another transaction's uncommitted changes (dirty read)


- **Read Committed** — only reads committed data (most databases' default)


- **Repeatable Read** — same row always returns same value within a transaction (MySQL default)


- **Serializable** — fully isolated, as if transactions ran one at a time (slowest)


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


### JSON Support

MySQL (since 5.7) has a native **JSON** column type — it validates that inserted data is well-formed JSON and stores it in an optimised binary format internally (not as plain text), so it doesn't need a separate "JSONB-like" variant the way PostgreSQL does.

```sql
CREATE TABLE events (
    id      BIGINT AUTO_INCREMENT PRIMARY KEY,
    type    VARCHAR(50) NOT NULL,
    payload JSON NOT NULL
);

INSERT INTO events (type, payload) VALUES (
    'user_signup',
    '{"userId": 42, "email": "b@example.com", "source": "organic"}'
);

-- Query JSON fields
SELECT payload->>'$.email' AS email FROM events;
SELECT * FROM events WHERE payload->>'$.source' = 'organic';

-- Functional index on a JSON field (MySQL needs a generated column for this)
ALTER TABLE events ADD COLUMN source VARCHAR(50)
    GENERATED ALWAYS AS (payload->>'$.source') STORED;
CREATE INDEX idx_events_source ON events(source);
```

See the **JSONB vs JSON** section under PostgreSQL below for how MySQL's JSON type compares to Postgres' json/jsonb.


### Auto Increment

`AUTO_INCREMENT` generates a unique, incrementing integer automatically for a column (typically the primary key) — you never need to compute or specify the next ID yourself.

```sql
CREATE TABLE users (
    id   INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO users (name) VALUES ('Ana');       -- id is generated automatically: 1
INSERT INTO users (name) VALUES ('Beatriz');   -- id: 2

SELECT LAST_INSERT_ID();    -- retrieve the ID generated by the most recent INSERT on this connection
```

**Things to know**: AUTO_INCREMENT values are never reused, even after a row is deleted (deleting id=2 does not mean the next insert reuses 2 — it continues from the highest value ever issued), which prevents a deleted row's ID from being silently reassigned to different data. It can be reset with `ALTER TABLE users AUTO_INCREMENT = 1`, but this is rarely necessary and risky if old IDs might still be referenced elsewhere.


### Foreign Keys

MySQL enforces foreign key constraints only when using a storage engine that supports them (InnoDB — see above; MyISAM silently ignores them). A foreign key guarantees referential integrity, and lets you define what happens on deletion/update of the referenced row.

```sql
CREATE TABLE orders (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
        ON DELETE CASCADE      -- deleting a customer automatically deletes their orders
        ON UPDATE CASCADE      -- if a customer's id ever changes, orders.customer_id updates too
);

-- INSERT INTO orders (customer_id) VALUES (999);
-- ERROR: Cannot add or update a child row: a foreign key constraint fails
-- (999 doesn't exist in customers — MySQL rejects the insert)
```

**ON DELETE options**: `CASCADE` (delete dependent rows too), `SET NULL` (set the foreign key to NULL — column must be nullable), `RESTRICT`/`NO ACTION` (block the delete entirely if dependent rows exist — the default, and often the safest choice for data you don't want silently cascading away).


### Replication

Replication copies data from one MySQL server (the **primary**/source) to one or more other servers (**replicas**), which continuously apply the same changes — used for read scaling (send read queries to replicas, writes to the primary), high availability (promote a replica if the primary fails), and backups (backup from a replica without impacting production traffic).

```text
Primary (accepts writes)
    │  binary log (records every data-changing statement/row change)
    ▼
Replica 1 (read-only)     Replica 2 (read-only)
```

**How it works**: the primary records every change in a **binary log**; each replica maintains a connection to the primary, streams that log, and re-applies the changes locally — replicas typically lag the primary by a small amount ("replication lag"), which is why reading from a replica immediately after writing to the primary can return stale data (a common source of confusing bugs — "I just saved this, why isn't it showing up?").

**Modern setups** commonly use **semi-synchronous** or **group replication** to reduce the risk of data loss on failover, rather than plain asynchronous replication, though asynchronous remains the simplest and most common default.


### Backup and Restore

```bash
# Logical backup — exports SQL statements that recreate the schema and data
mysqldump -u root -p mydb > backup.sql

# Restore from a logical backup
mysql -u root -p mydb < backup.sql

# Physical backup (via a tool like Percona XtraBackup) — copies the actual InnoDB data files.
# Much faster to restore for large databases, since it skips re-running every INSERT statement.
```

**Logical backups** (`mysqldump`) are portable (plain SQL, can restore into a different MySQL version), human-readable, but slow for very large databases (both to create and restore, since it's replaying statements one at a time). **Physical backups** are fast to restore (just copy the files back) but tied to the same MySQL version/engine and not human-inspectable.

**Point-in-time recovery**: combine a full backup with the binary log (see Replication above) — restore the full backup, then replay the binary log up to a specific timestamp, to recover to the exact moment just before an accidental `DELETE` or `DROP TABLE`.


### Performance

Beyond indexing (see above), common levers for MySQL performance:

**Connection pooling**: opening a new database connection is expensive (TCP handshake, authentication) — applications keep a pool of already-open connections and reuse them (Spring Boot's default, HikariCP, does this automatically) instead of opening/closing a connection per query.

**`EXPLAIN`** (see above): always check the query plan for slow queries before guessing at fixes — `type=ALL` (full table scan) on a large table is the most common red flag.

**Buffer pool size** (`innodb_buffer_pool_size`): InnoDB caches data and indexes in memory here — on a dedicated database server, this is typically set to 60-80% of available RAM, since a cache hit avoids a disk read entirely.

**Avoid `SELECT *`**: fetches every column even when only a few are needed, increasing network transfer and preventing the use of a covering index (see the SQL chapter).

**Batch writes**: many single-row `INSERT`s each pay per-statement overhead; a single multi-row `INSERT INTO t VALUES (...), (...), (...)` (or a transaction wrapping many statements) is significantly faster for bulk loading.

**Slow query log**: MySQL can log every query that takes longer than a configured threshold (`slow_query_log = 1`, `long_query_time = 1`) — the standard first step when hunting for what's actually slow in production, rather than guessing.


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


### MVCC (Multi-Version Concurrency Control)

MVCC is PostgreSQL's mechanism for letting readers and writers work on the same data concurrently WITHOUT blocking each other — a reader never has to wait for a writer, and vice versa (in most cases).

**The core idea**: instead of updating a row in place, PostgreSQL creates a NEW VERSION of the row on every `UPDATE`, and marks the old version as no longer current — but keeps it around. Each transaction sees a consistent SNAPSHOT of the database as it existed when the transaction started, so it keeps reading the OLD version of a row until its own transaction ends, even while another transaction is concurrently writing a new version.

```text
Row (id=1) before UPDATE:  [xmin=100, xmax=∞,   name="Ana"]      ← visible to transactions started before 150
UPDATE sets name="Ana Silva" (by transaction 150):
Row (id=1) old version:    [xmin=100, xmax=150,  name="Ana"]      ← still visible to transactions started before 150
Row (id=1) new version:    [xmin=150, xmax=∞,    name="Ana Silva"] ← visible to transactions started at/after 150
```

Every row internally stores `xmin` (the ID of the transaction that created this version) and `xmax` (the ID of the transaction that deleted/superseded it, if any) — a transaction determines which version of a row is "visible" to it by comparing these against its own transaction ID and snapshot.

**Why this matters**:
- **`SELECT` never blocks, and is never blocked by, a concurrent write** — a long-running read just keeps seeing its own consistent snapshot, unaffected by writes happening after it started.
- **Old row versions accumulate as "dead tuples"** — since PostgreSQL doesn't overwrite data in place, every `UPDATE`/`DELETE` leaves behind a stale version that eventually needs to be reclaimed. This is exactly why `VACUUM` exists (see Performance below) — without it, tables and indexes grow indefinitely with dead, invisible-to-everyone row versions.
- **Contrast with MySQL/InnoDB**, which uses a similar MVCC approach internally via undo logs rather than storing full old row versions in the table itself — the end-user behavior (non-blocking reads) is similar, but the storage mechanism differs, which is why PostgreSQL specifically needs regular `VACUUM`ing while InnoDB's cleanup process works differently.


### JSONB vs JSON

PostgreSQL has two JSON types — almost always prefer JSONB:

**json**: stores JSON as plain text, preserving exact whitespace and key order (including duplicate keys). Every query has to re-parse the raw text from scratch. Not indexable with GIN. Rarely useful — mainly kept for cases where you need to preserve the document exactly as it was sent.

**jsonb** ("JSON binary"): stores JSON already parsed into an internal binary tree structure — no reparsing on read, and directly indexable. Key order is not preserved and duplicate keys are removed at insert time (last value wins). Always use this in practice.

**How this compares to MySQL's JSON type**: MySQL only has one JSON type, and it behaves closer to Postgres' jsonb than to its json — MySQL's JSON is also validated and stored in an optimised binary form, not as raw text. The real difference is in querying and indexing, where PostgreSQL goes much further:

- **Indexing**: PostgreSQL can index a JSONB column directly with a GIN index, making containment (`@>`), key-existence (`?`), and path queries fast out of the box. MySQL cannot index a JSON column directly — you must extract a value into a separate **generated column** (as shown in the MySQL JSON Support example above) and index that instead.
- **Query operators**: PostgreSQL has a richer operator set purpose-built for JSON — `@>` (contains), `?` (key exists), `@@` with `jsonpath` expressions — plus a full `jsonpath` query language (SQL/JSON standard). MySQL's JSON functions (`JSON_EXTRACT`, `->`, `->>`) cover extraction well but have a smaller set of containment/existence operators.
- **Ecosystem**: because JSONB is a first-class, indexable Postgres type, it's common to model semi-structured data directly in JSONB columns and query it almost like a NoSQL document store, side by side with normal relational tables. MySQL's JSON support is more commonly used for smaller, less frequently queried blobs of flexible data (settings, metadata) rather than as a primary way to query data at scale.

In short: MySQL JSON ≈ PostgreSQL jsonb in storage format, but PostgreSQL is significantly ahead on indexing and query capabilities for JSON data.


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

**Why not just use `LIKE '%word%'`?** A `LIKE` with a leading wildcard cannot use a normal B-tree index (see Indexes above), so it always does a full table scan. It's also purely literal — it doesn't know that "run", "running" and "ran" are the same word, has no concept of word boundaries, relevance, or ignoring irrelevant words like "the"/"a". PostgreSQL's full-text search solves all of this natively, without needing an external engine like Elasticsearch for many use cases.

**The core idea**: text is converted into a **tsvector** (a sorted list of normalised word forms, called *lexemes*, with their positions), and a search phrase is converted into a **tsquery** (the same normalisation applied to the search terms, combined with boolean operators). The `@@` operator then checks whether the tsquery matches the tsvector.

```sql
SELECT to_tsvector('english', 'Running dogs are running fast');
-- 'dog':2 'fast':5 'run':1,3
-- Notice: "Running"/"running" both stemmed to 'run', word order is dropped,
-- stop words like "are" are removed, and each lexeme keeps its position(s)

SELECT to_tsquery('english', 'run & dog');
-- 'run' & 'dog' — matches any tsvector containing both lexemes
```

**to_tsvector('english', text)**: normalises text in three steps —
1. **Parsing**: splits text into tokens (words, numbers, emails, etc).
2. **Stop word removal**: discards very common, low-signal words ("a", "the", "is", "and"...).
3. **Stemming**: reduces words to a common root (lexeme) using a language-specific dictionary, so "running", "runs", and "ran" all become 'run'. This is why searching "run" also matches documents containing "running".

Since normalisation is expensive to redo on every query, store the tsvector as a **generated column** (computed once, on write) instead of recalculating it on every search:

```sql
ALTER TABLE articles ADD COLUMN search_vector tsvector
    GENERATED ALWAYS AS (to_tsvector('english', title || ' ' || content)) STORED;

CREATE INDEX idx_articles_fts ON articles USING GIN (search_vector);
-- GIN indexes each lexeme separately, so @@ lookups don't scan the whole table
```

**Building the search query — three ways to parse user input**:

```sql
-- to_tsquery: requires explicit boolean syntax — you build/sanitise it yourself
to_tsquery('english', 'database & optimisation')     -- both words must appear
to_tsquery('english', 'database & !mysql')           -- "database" but NOT "mysql"
to_tsquery('english', 'database | postgres')         -- either word

-- plainto_tsquery: takes plain text, ANDs all the words together — good default
-- for "search box" style input where you don't want the user typing operators
plainto_tsquery('english', 'database optimisation')  -- same as 'database & optimisation'

-- websearch_to_tsquery (PG 11+): understands Google-style syntax from raw user input
-- quotes for phrases, "-" to exclude, "or" for alternatives — safest for untrusted input
websearch_to_tsquery('english', '"query planner" -mysql')
```

**Searching and ranking**:

```sql
SELECT title, ts_rank(search_vector, query) AS rank
FROM articles, websearch_to_tsquery('english', 'database optimisation') query
WHERE search_vector @@ query
ORDER BY rank DESC;

-- ts_rank: relevance score based on how often/where the matched lexemes appear
-- (higher = better match) — lets you sort results by relevance instead of just
-- returning an unordered set of matches like a plain WHERE clause would
```

**ts_headline**: generates a highlighted excerpt around the matched terms, useful for showing search-result snippets in a UI:

```sql
SELECT ts_headline('english', content, websearch_to_tsquery('english', 'database'))
FROM articles WHERE search_vector @@ websearch_to_tsquery('english', 'database');
-- "...tuning the <b>database</b> for read-heavy workloads..."
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


### Materialized Views

Unlike a regular View (see the SQL chapter — a saved query re-run every time it's queried), a **materialized view** physically STORES the query's result on disk, like a real table — reads are fast (no re-computation), but the data goes stale until explicitly refreshed.

```sql
CREATE MATERIALIZED VIEW monthly_sales AS
SELECT DATE_TRUNC('month', created_at) AS month, SUM(total) AS revenue
FROM orders
GROUP BY 1;

SELECT * FROM monthly_sales;   -- instant — reads pre-computed, stored data, no re-aggregation

-- Data is now stale (doesn't reflect new orders) until refreshed:
REFRESH MATERIALIZED VIEW monthly_sales;
REFRESH MATERIALIZED VIEW CONCURRENTLY monthly_sales;   -- refresh without blocking concurrent reads
                                                          -- (requires a unique index on the view)
```

**Rule of thumb**: use a materialized view for expensive aggregations/reports that don't need up-to-the-second freshness (dashboards, analytics) — refresh it on a schedule (e.g. via `pg_cron` or an external job) rather than on every read. Use a regular view when the underlying data must always be current, or the query is cheap enough that recomputing it each time isn't a problem.


### Replication

PostgreSQL replication copies data from a **primary** server to one or more **standby/replica** servers, for read scaling, high availability, and disaster recovery.

**Streaming replication** (the standard approach): the primary continuously streams its **Write-Ahead Log (WAL)** — see Durability in the MySQL chapter for the same underlying concept — to each standby, which replays those changes to stay in sync.

- **Asynchronous** (default): the primary commits a transaction and returns success WITHOUT waiting for any standby to confirm receipt — fastest, but a small window of data loss is possible if the primary crashes before a standby catches up.
- **Synchronous**: the primary waits for at least one standby to confirm it has received (and optionally applied) the WAL before considering the transaction committed — stronger durability guarantee, at the cost of added write latency.

```text
Primary (accepts writes)
    │  WAL streaming
    ├──▶ Standby 1 (can serve read-only queries — "hot standby")
    └──▶ Standby 2
```

**Failover**: if the primary fails, a standby can be promoted to become the new primary — tools like Patroni or cloud-managed Postgres (RDS, Cloud SQL) automate this detection-and-promotion process, since doing it manually and correctly under pressure is error-prone.


### Performance

Beyond indexing (see Advanced Index Types above) and `EXPLAIN ANALYZE` (see Full-text Search/Explain Analyze above), PostgreSQL-specific performance considerations:

**VACUUM** (see MVCC above for why this is necessary): reclaims space from dead row versions left behind by `UPDATE`/`DELETE`, and updates the query planner's statistics.

```sql
VACUUM users;                 -- reclaim dead tuples' space for reuse (does not shrink the file on disk)
VACUUM FULL users;             -- also physically shrinks the table file — but takes an exclusive lock,
                                 -- blocking all reads/writes for its duration; use sparingly, off-hours
VACUUM ANALYZE users;          -- reclaim space AND refresh the planner's row-count/distribution statistics
```

**Autovacuum**: runs automatically in the background by default — in most workloads you should tune ITS settings (`autovacuum_vacuum_scale_factor`, etc.) rather than disabling it and vacuuming manually, since forgetting to vacuum a high-write table leads to severe "table bloat" (a table using far more disk space than its actual data needs) and eventually degraded query performance.

**connection pooling**: PostgreSQL connections are relatively heavyweight (each is its own OS process) — high-concurrency applications typically sit a pooler like **PgBouncer** in front of PostgreSQL to multiplex many application connections onto fewer actual database connections, rather than opening one PostgreSQL connection per application thread/request directly.

**`work_mem`**: controls how much memory a single query operation (a sort, a hash join) can use before spilling to disk — too low causes slow disk-based sorts/joins on complex queries; too high (multiplied across many concurrent connections) can exhaust server memory.


## 5.04 NoSQL


### Overview

**NoSQL** (Not Only SQL) is a broad category of database systems that store and retrieve data using models other than the traditional relational table-row model.

NoSQL databases were built to address limitations of relational databases at scale:
- Horizontal scaling across many cheap servers
- Flexible or schema-less data models
- High write throughput for large volumes of data
- Support for unstructured or semi-structured data

NoSQL does not mean "no SQL at all" — it means SQL is not the primary interface, and the relational model is not enforced.


### Why NoSQL Emerged

Relational databases dominated for decades because most applications fit comfortably on a single, powerful server, and strict schemas/ACID transactions were exactly what businesses needed for reliable record-keeping (banking, inventory, orders).

The shift came in the mid-to-late 2000s, when companies like Google, Amazon, and Facebook hit real limits with this model at "web scale":

- **A single server can only get so powerful** — relational databases traditionally scale VERTICALLY (a bigger server — see Horizontal vs Vertical Scaling below), which has a hard ceiling and gets exponentially more expensive as you approach it. These companies needed to handle traffic and data volumes no single machine could serve.
- **Rigid schemas slowed iteration** — a relational schema requires a migration for every structural change; fast-moving products with rapidly evolving, often irregular data (a product catalog where every category has different attributes) found this friction costly.
- **JOINs don't distribute well** — relational JOINs assume all the data is reachable in one place; once data is spread across many machines (see sharding in the MongoDB chapter), JOINs become expensive or impossible to do efficiently.
- **Not every problem needs strict consistency** — a social media "like" count being off by a few for a moment is harmless, but the ACID guarantees needed for that don't come free; NoSQL databases let you deliberately trade some consistency for availability and horizontal scalability (see CAP Theorem below) where the use case allows it.

This led to purpose-built alternatives, each optimized for a specific access pattern rather than trying to be a general-purpose relational engine — this is why "NoSQL" isn't one thing, but an umbrella over several different data models (see Types below).


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


### Horizontal vs Vertical Scaling

Two fundamentally different strategies for handling more load (more data, more traffic):

**Vertical scaling ("scale up")**: add more resources — CPU, RAM, faster disks — to a SINGLE existing server. Simple (no architectural changes needed, the application doesn't even need to know) but has a hard ceiling (the biggest machine a cloud provider offers) and gets disproportionately expensive as you approach it. This has traditionally been how relational databases scaled, since a JOIN across tables generally needs all the data in one place.

**Horizontal scaling ("scale out")**: add MORE servers, and spread data/load across them. In principle has no hard ceiling (add another server when you need more capacity) and each individual server can be cheap/commodity hardware, but requires the application/database to be designed for distribution from the start — data needs to be partitioned across servers (sharding — see the MongoDB chapter), and operations that need data from multiple servers (like a JOIN) become significantly harder and slower.

```text
Vertical scaling:              Horizontal scaling:
┌──────────────┐               ┌──────┐ ┌──────┐ ┌──────┐
│   Bigger      │              │Server│ │Server│ │Server│
│   Server      │      vs      │  1   │ │  2   │ │  3   │
│ (more CPU/RAM)│               └──────┘ └──────┘ └──────┘
└──────────────┘               (each holds a portion of the data)
```

**Why NoSQL databases favor horizontal scaling**: their data models (document, key-value, wide-column — see Types above) were specifically designed so that a single record/document is usually self-contained and doesn't need to be JOINed with data on another server, making it practical to split data across many machines by key (sharding) without most queries needing to reach across servers.

**Rule of thumb**: vertical scaling is simpler and sufficient for most applications, up to a point; horizontal scaling is necessary once a single machine genuinely can't keep up (data volume or throughput exceeds what any single server can handle), but it's a real architectural commitment, not just a configuration change.


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


### Eventual Consistency

Eventual consistency means that after a write, the system does NOT guarantee every subsequent read sees it immediately — but GUARANTEES that if no new writes happen, all replicas will eventually converge to the same value.

```text
Write "name = Ana Silva" to Node A
    │
    ├──▶ Node A: "Ana Silva"   (updated immediately)
    ├──▶ Node B: "Ana"          (not yet replicated — still stale)
    └──▶ Node C: "Ana"          (not yet replicated — still stale)

... a few milliseconds/seconds later, replication catches up ...

    ├──▶ Node A: "Ana Silva"
    ├──▶ Node B: "Ana Silva"    (now converged)
    └──▶ Node C: "Ana Silva"    (now converged)
```

**Why accept this trade-off?** In a distributed system, requiring every node to confirm a write before it's considered successful (strong consistency) means every write is only as fast as the slowest node, and the whole system can't accept writes at all if any node is unreachable (see CAP Theorem below). Eventual consistency lets each node accept writes/serve reads independently and resync in the background — trading a temporary window of staleness for much higher availability and write throughput.

**Where this is fine**: a social media like/follower count, a product view counter, a search index (briefly missing an update is harmless). **Where this is dangerous without extra care**: a bank balance, an inventory count you're about to sell against, anything where reading stale data leads to an incorrect real-world decision — these need either a strongly-consistent database, or extra application-level handling (idempotency, reconciliation jobs, conflict resolution).

**Rule of thumb**: eventual consistency is a deliberate trade — it isn't "worse," it's the right choice specifically when availability and write throughput matter more than every single read being perfectly up to the millisecond.


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


### Advantages and Disadvantages

**Advantages**:
- **Horizontal scalability**: designed from the ground up to spread data across many cheap servers (see Horizontal vs Vertical Scaling above), rather than needing an ever-bigger single machine.
- **Flexible schema**: fields can vary per record and evolve without a formal migration — well-suited to fast-moving products or genuinely irregular data.
- **High write throughput**: many NoSQL databases are optimized specifically for very high volumes of writes (IoT sensors, event logs, activity feeds).
- **Natural fit for certain data shapes**: a document database maps naturally onto nested JSON-like application objects; a graph database makes relationship-heavy queries (recommendations, fraud detection) both simpler to write and faster to run than the equivalent SQL JOINs.

**Disadvantages**:
- **Weaker consistency guarantees by default**: many NoSQL databases trade strong consistency for availability (BASE/eventual consistency — see above), which requires extra care in the application for use cases that can't tolerate staleness.
- **No standardized query language**: unlike SQL (portable across MySQL/PostgreSQL/Oracle with minor differences), each NoSQL database has its own query API — switching databases later means rewriting queries, not just connection strings.
- **Joins are manual or avoided entirely**: relational, multi-entity queries that are trivial in SQL (a JOIN across 4 tables) require either denormalizing data upfront (duplication) or multiple round-trip queries/application-side joining.
- **Less mature tooling for ad-hoc analysis**: SQL's decades of tooling (BI tools, ORMs, analysts who already know SQL) doesn't transfer automatically — many teams end up replicating NoSQL data into a SQL-queryable warehouse for analytics anyway.

**Rule of thumb**: NoSQL isn't a strict upgrade over SQL — it's a different set of trade-offs, and many production systems use BOTH: a relational database for the transactional core (orders, payments, inventory) and a NoSQL database for the specific use cases it's better suited to (session storage in Redis, product search in Elasticsearch, activity feeds in Cassandra).


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


### Schema Design

MongoDB doesn't enforce a schema, but that doesn't mean "no design" — it means the schema decisions move from the database (rigid, migration-driven) to the APPLICATION (flexible, but requiring discipline). The central design decision is Embedding vs Referencing (see the NoSQL chapter), driven by how the data is actually accessed.

**Design around your queries, not your entities** — this is the single biggest mental shift coming from relational modeling (which normalizes based on the DATA'S structure, independent of how it's queried). In MongoDB, ask "what does my application read together most often?" first.

```javascript
// A blog post with comments, EMBEDDED — read together as one document, one query
{
  _id: "post_1",
  title: "Understanding MongoDB",
  content: "...",
  comments: [
    { author: "Ana", text: "Great post!", createdAt: ISODate("...") },
    { author: "João", text: "Very helpful", createdAt: ISODate("...") }
  ]
}
// One query (db.posts.findOne()) returns the post AND its comments — no $lookup needed.
// Good here because comments are always displayed together with the post, and rarely
// queried independently.
```

```javascript
// A user's ORDERS, REFERENCED instead — orders grow unbounded and are queried independently
{ _id: "user_1", name: "Ana" }
{ _id: "order_1", userId: "user_1", total: 99.90, items: [...] }
// Embedding orders directly inside the user document would make it grow indefinitely
// (MongoDB has a 16MB per-document limit) and orders are frequently queried on their own
// ("show me today's orders" has nothing to do with loading a specific user).
```

**Rule of thumb**: embed data that's always accessed TOGETHER and bounded in size (an address, a small list of tags); reference data that's large, unbounded, or frequently accessed INDEPENDENTLY of its "parent." Unlike a relational schema, it's normal and expected to duplicate some data across documents (e.g. storing a `userName` directly on an order, alongside `userId`) specifically to avoid extra queries — this is a deliberate trade-off, not a design mistake.


### Replica Sets

A replica set is a group of MongoDB servers that maintain the SAME data set, providing high availability and read scaling — MongoDB's equivalent of the replication covered in the MySQL/PostgreSQL chapters.

```text
Primary (accepts all writes)
    │  replicates via the oplog (operation log)
    ├──▶ Secondary 1 (read-only copy)
    └──▶ Secondary 2 (read-only copy)
```

**How it works**: one member is elected **Primary** and accepts all writes; **Secondaries** continuously replicate the Primary's operations from its **oplog** (a capped collection recording every write) and apply them locally. If the Primary becomes unreachable, the remaining members automatically hold an election and promote a Secondary to be the new Primary — no manual intervention needed for common failure scenarios.

```javascript
// Reading from secondaries (accepting some staleness) to spread out read load
db.collection.find().readPref("secondaryPreferred")

// Write concern — how many members must acknowledge a write before it's considered successful
db.collection.insertOne({ name: "Ana" }, { writeConcern: { w: "majority" } })
// w: "majority" waits for most replica set members to confirm — safer, slightly slower
// w: 1 (default) only waits for the Primary — faster, but a Primary crash right after
// could lose that write before it replicates
```

**Rule of thumb**: a replica set (minimum 3 members, so an election can always get a majority) is the standard production baseline for MongoDB — even a single-server deployment is normally still configured as a 1-node "replica set" so it can be trivially expanded later.


### Sharding

Sharding is MongoDB's mechanism for horizontal scaling (see the NoSQL chapter) — splitting a single logical collection's data across MULTIPLE servers (shards), so no single server needs to hold or serve the entire data set.

```text
                    mongos (query router)
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
    Shard 1           Shard 2           Shard 3
  (each shard is its own replica set, holding a portion of the data)
```

**Shard key**: the field(s) MongoDB uses to decide which shard a document belongs to — choosing a good shard key is the most consequential sharding decision, since it determines whether writes/reads spread evenly across shards or pile up on one ("hot shard").

```javascript
sh.shardCollection("mydb.orders", { userId: "hashed" })
// hashed shard key: distributes documents evenly and randomly across shards —
// great for write distribution, but range queries (e.g. "orders from last week")
// can't target a single shard and must fan out to all of them

sh.shardCollection("mydb.events", { region: 1, createdAt: 1 })
// ranged shard key: keeps related data (same region) together on the same shard —
// better for range queries, but risks a "hot shard" if data isn't evenly distributed
// across region values
```

A query that includes the shard key can be routed directly to the relevant shard(s) by `mongos`; a query that doesn't must be broadcast to EVERY shard ("scatter-gather"), which is significantly slower — this is why shard key choice needs to match the application's actual query patterns.


### Transactions

Since MongoDB 4.0, multi-document ACID transactions are supported, letting you group multiple operations (potentially across multiple collections) into one atomic unit — something earlier MongoDB versions couldn't do (only single-document operations were atomic).

```javascript
const session = client.startSession();
try {
    session.startTransaction();
    await accounts.updateOne({ _id: "acc_1" }, { $inc: { balance: -100 } }, { session });
    await accounts.updateOne({ _id: "acc_2" }, { $inc: { balance: 100 } }, { session });
    await session.commitTransaction();      // both updates succeed together
} catch (error) {
    await session.abortTransaction();       // both updates are rolled back together
} finally {
    session.endSession();
}
```

**Important trade-off**: multi-document transactions in MongoDB carry a real performance cost (extra coordination overhead compared to normal writes) and go somewhat against the grain of the document model's design philosophy (where a well-designed schema, embedding related data into one document, keeps most operations naturally atomic already — see Schema Design above). **Rule of thumb**: prefer designing documents so single-document atomicity (which MongoDB always guarantees, with no special setup) covers your needs; reach for multi-document transactions only when an operation genuinely must span multiple documents/collections atomically (e.g. a funds transfer between two separate account documents, as above).


### MongoDB Atlas

Atlas is MongoDB's official fully-managed, cloud-hosted database service (available on AWS, Azure, and GCP) — it handles provisioning, replica set/sharding setup, backups, patching, and monitoring, so teams don't need to run and operate MongoDB servers themselves.

**What it provides beyond self-hosted MongoDB**: automated backups with point-in-time recovery, built-in monitoring/alerting dashboards, automatic scaling (both storage and, on some tiers, compute), a free tier (M0) for learning/small projects, global cluster deployment (placing data closer to users across regions), and integrated full-text/vector search (Atlas Search) without needing a separate Elasticsearch deployment.

```javascript
// Connecting to an Atlas cluster looks the same as any MongoDB connection —
// Atlas is still just MongoDB underneath, accessed via a connection string:
mongodb+srv://user:password@cluster0.abcde.mongodb.net/mydb
```

**Rule of thumb**: for production workloads, a managed service like Atlas (or an equivalent from a cloud provider) removes a significant amount of the same undifferentiated operational burden that led teams to prefer managed relational databases (RDS, Cloud SQL) over self-hosting MySQL/PostgreSQL — most teams today don't run their own MongoDB servers for exactly this reason.


### Performance

Beyond indexing (see above), key MongoDB performance considerations:

**`explain()`** — MongoDB's equivalent of SQL's `EXPLAIN` (see the SQL chapter) — shows whether a query used an index (`IXSCAN`) or scanned the whole collection (`COLLSCAN`, the MongoDB red flag equivalent to a SQL full table scan):

```javascript
db.orders.find({ userId: "u1" }).explain("executionStats")
// executionStats.executionStages.stage: "IXSCAN" (good) or "COLLSCAN" (bad — add an index)
// executionStats.totalDocsExamined vs nReturned — a large gap means the index isn't selective enough
```

**Projection**: fetch only the fields actually needed, reducing network transfer and memory use — especially important for large documents:

```javascript
db.users.find({ active: true }, { name: 1, email: 1 })   // only returns name, email, and _id
```

**Avoid unbounded document growth**: a document that keeps growing (e.g. appending to an embedded array indefinitely) causes MongoDB to relocate it on disk repeatedly as it outgrows its allocated space — this is exactly why unbounded, frequently-growing data (comments, logs, an ever-increasing order history) is usually a signal to reference instead of embed (see Schema Design above).

**Connection pooling**: like any database, opening a new connection per request is expensive — drivers maintain a connection pool automatically, but its size (`maxPoolSize`) should be tuned to match expected concurrency.

**Covered queries**: like the covering index concept in the SQL chapter, a query where the index alone contains every requested field (via projection) never has to touch the actual documents, making it especially fast.


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


# Part 9 — Data Structures & Algorithms

## 9.01 Data Structures


### Overview

Data structures are ways of organizing data in memory — the choice of data structure determines how efficiently a program can access, search, insert, and delete data. This chapter covers the core structures interviews expect you to know, from basic arrays up to graphs; the following chapter (9.02 Algorithms) builds on these to solve problems. Examples below use Java, consistent with the rest of this guide.


### Big O Notation

Big O describes how an algorithm's running time (or memory use) grows as the input size (`n`) grows — the growth RATE, not an exact operation count, which is why constants are dropped (`O(2n)` is written `O(n)`).

```text
O(1)         constant       — array index access, HashMap get/put (average case)
O(log n)     logarithmic    — binary search, balanced tree operations
O(n)         linear         — a single pass through a list
O(n log n)   linearithmic   — efficient sorting (merge sort, quicksort average case)
O(n²)        quadratic      — nested loops over the same collection
O(2^n)       exponential    — naive recursive Fibonacci, brute-force subsets
O(n!)        factorial      — brute-force permutations
```

**Best, average, worst case**: an algorithm can have different complexities depending on the input — e.g. searching an unsorted array for a value near the start is fast (best case O(1)) but the same algorithm is O(n) in general (the value could be last, or absent — worst case). Interviews almost always want the WORST case unless stated otherwise.

**Space complexity** works the same way, but measures extra memory used (not counting the input itself) — e.g. an in-place sort is O(1) space; one that builds a new array is O(n) space.

**Time/space trade-off**: a very common pattern is spending O(n) extra space (a `HashSet`/`HashMap`) to bring an O(n²) nested-loop solution down to O(n) time, since hash lookups are O(1) average (see Hash Tables below).


### Arrays

A fixed-size (in most languages), contiguous block of memory holding elements of the same type, accessed by index.

| Operation | Complexity | Why |
|---|---|---|
| Access by index | O(1) | direct memory address calculation |
| Search (unsorted) | O(n) | must check every element |
| Search (sorted) | O(log n) | binary search applies |
| Insert/delete at end | O(1) amortised | no shifting needed |
| Insert/delete at start/middle | O(n) | every following element must shift |

```java
int[] arr = {1, 2, 3, 4, 5};
int x = arr[2];              // O(1) — direct index access

// Java's ArrayList — a dynamic array (see the Java chapter's Collections Framework)
List<Integer> list = new ArrayList<>();
list.add(6);                  // O(1) amortised — occasionally the backing array must be resized and copied, O(n)
list.add(0, 0);                // O(n) — every element must shift right by one
```

**Why arrays matter as a foundation**: most other data structures below (hash tables, heaps, and even stacks/queues) are commonly IMPLEMENTED using an array internally, precisely because of its O(1) index access.


### Strings

In Java, a String is an immutable array of characters under the hood (see String vs StringBuilder vs StringBuffer and Immutability in the Java chapter) — most string algorithm problems reduce to array/two-pointer techniques (see below) applied to `char[]`.

```java
String s = "hello";
char c = s.charAt(1);              // O(1) — 'e'
char[] chars = s.toCharArray();     // O(n) — get a mutable copy to work with

// Common pattern: character frequency counting
int[] freq = new int[26];
for (char ch : s.toCharArray()) {
    freq[ch - 'a']++;                // O(1) per character — O(n) total
}

// Reversing a string — since Strings are immutable, build via StringBuilder (O(n)), not += in a loop (O(n²))
String reversed = new StringBuilder(s).reverse().toString();
```

**Common string problems**: palindrome checking (two pointers, see below), anagram detection (character frequency count, above), substring search (sliding window, see below).


### Linked Lists

A sequence of nodes where each node holds a value and a reference (pointer) to the next node — unlike an array, elements are NOT contiguous in memory, so there's no direct index access.

```java
class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

// Building a list: 1 -> 2 -> 3
ListNode head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

// Traversal — O(n)
ListNode curr = head;
while (curr != null) {
    System.out.println(curr.val);
    curr = curr.next;
}

// Reversing a singly linked list — a very common interview question
ListNode reverse(ListNode head) {
    ListNode prev = null;
    while (head != null) {
        ListNode next = head.next;   // save the next node before overwriting the pointer
        head.next = prev;             // reverse the pointer
        prev = head;
        head = next;
    }
    return prev;                       // prev is now the new head
}
```

| Operation | Array | Linked List |
|---|---|---|
| Access by index | O(1) | O(n) — must walk from the head |
| Insert/delete at start | O(n) — shift everything | O(1) — just relink |
| Insert/delete at end | O(1) amortised | O(1) if a tail pointer is kept, else O(n) |
| Insert/delete in middle (with a reference to the node) | O(n) | O(1) — just relink |

**Doubly linked list**: each node also holds a `prev` pointer, allowing O(1) traversal/removal in both directions — this is exactly what Java's `LinkedList` (see the Java chapter) implements.

**Fast/slow pointers ("tortoise and hare")**: a classic linked-list technique — advance one pointer by 1 node and another by 2 nodes per step; if there's a cycle, the fast pointer eventually laps the slow one; if there's no cycle, it reaches `null` first. Also used to find the middle of a list in one pass (when the fast pointer reaches the end, the slow pointer is at the middle).


### Stacks

LIFO (Last In, First Out) — think of a stack of plates: you can only add/remove from the top.

```java
Deque<Integer> stack = new ArrayDeque<>();   // ArrayDeque is the preferred implementation (see the Java chapter)
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();          // 3 — removes and returns the top
stack.peek();          // 2 — looks at the top without removing it
```

All operations (`push`, `pop`, `peek`) are O(1). **Common uses**: undo functionality, expression evaluation (matching parentheses, evaluating postfix notation), tracking function calls (the Call Stack itself — see the JavaScript chapter's Event Loop section), and DFS (see below), which can be implemented either recursively (using the actual call stack) or iteratively (using an explicit stack).

```java
// Classic interview problem: valid parentheses
boolean isValid(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '[' || c == '{') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) return false;
            char open = stack.pop();
            if ((c == ')' && open != '(') || (c == ']' && open != '[') || (c == '}' && open != '{')) return false;
        }
    }
    return stack.isEmpty();   // true only if every opening bracket was matched and closed
}
```


### Queues

FIFO (First In, First Out) — think of a line at a store: whoever arrived first is served first.

```java
Deque<Integer> queue = new ArrayDeque<>();   // ArrayDeque again — see Queue and Deque in the Java chapter
queue.offer(1);
queue.offer(2);
queue.offer(3);
queue.poll();          // 1 — removes and returns the front
queue.peek();           // 2 — looks at the front without removing it
```

All operations are O(1). **Common uses**: task scheduling, request processing in order of arrival, and BFS (see below), which is ALWAYS implemented with a queue (this is what makes it explore level-by-level, unlike DFS's stack-based depth-first exploration).

**Priority Queue**: not FIFO — always dequeues the highest-priority (smallest, by default) element next. Backed by a Heap internally (see below) — O(log n) insertion/removal instead of O(1), in exchange for always giving you the min/max element instantly.


### Hash Tables

Maps keys to values using a **hash function** to compute an array index from the key, giving O(1) average-case lookup/insert/delete — see Hashmap Internals in the Java chapter for the full bucket/collision mechanism (this section covers the general concept; that one covers Java's specific `HashMap` implementation).

```java
Map<String, Integer> map = new HashMap<>();
map.put("apple", 3);       // O(1) average — hash("apple") determines which bucket to store it in
map.get("apple");           // O(1) average — hash again, jump straight to the bucket
map.containsKey("apple");   // O(1) average
```

**Collisions**: two different keys can hash to the same bucket — Java's `HashMap` resolves this by storing a linked list (or, since Java 8, a balanced tree once a bucket gets large) of entries per bucket, so a collision degrades that bucket's lookup toward O(n) in the worst case, but this remains rare with a good hash function and appropriate table size.

**Why hash tables are the single most common tool in interview problems**: an O(n²) brute-force nested loop ("for each element, check every other element") can almost always be reduced to O(n) by trading O(n) space for a `HashSet`/`HashMap` that remembers what's already been seen.

```java
// Classic example: Two Sum — find two numbers in an array that add up to a target
int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> seen = new HashMap<>();   // value -> index
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (seen.containsKey(complement)) {           // O(1) lookup instead of an inner O(n) loop
            return new int[]{seen.get(complement), i};
        }
        seen.put(nums[i], i);
    }
    return new int[]{};
}
// O(n) time, O(n) space — vs. O(n²) time, O(1) space for the brute-force nested-loop version
```

**Hash Set**: like a hash map but stores only keys (no values) — used purely to track "have I seen this before?" in O(1) average, as in the deduplication and "seen" patterns throughout this chapter.


### Trees

A hierarchical structure of nodes, where each node has a value and references to CHILD nodes, starting from a single **root** node, with no cycles (each node has exactly one parent, except the root, which has none).

```text
        A          ← root
       / \
      B   C        ← children of A
     / \
    D   E          ← leaves (no children)
```

**Terminology**: root (top node), leaf (a node with no children), parent/child, depth (distance from the root to a node), height (distance from a node to its deepest leaf). A **general tree** allows any number of children per node; a **Binary Tree** (below) restricts this to at most two.


### Binary Trees

A tree where each node has at most two children, conventionally called `left` and `right`.

```java
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}
```

**Traversal orders** — the order in which nodes are visited; all are O(n) since every node must be visited:

```java
// Inorder (left, node, right) — visits nodes in ASCENDING order for a Binary Search Tree (see below)
void inorder(TreeNode node, List<Integer> result) {
    if (node == null) return;
    inorder(node.left, result);
    result.add(node.val);
    inorder(node.right, result);
}

// Preorder (node, left, right) — useful for copying/serializing a tree (visits parent before children)
void preorder(TreeNode node, List<Integer> result) {
    if (node == null) return;
    result.add(node.val);
    preorder(node.left, result);
    preorder(node.right, result);
}

// Postorder (left, right, node) — useful for deleting a tree (visits children before the parent)
void postorder(TreeNode node, List<Integer> result) {
    if (node == null) return;
    postorder(node.left, result);
    postorder(node.right, result);
    result.add(node.val);
}

// Level-order (BFS, level by level) — the only traversal that isn't naturally recursive; needs a Queue
void levelOrder(TreeNode root) {
    if (root == null) return;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty()) {
        TreeNode node = queue.poll();
        System.out.println(node.val);
        if (node.left != null) queue.offer(node.left);
        if (node.right != null) queue.offer(node.right);
    }
}
```

**Balanced vs unbalanced**: a balanced tree keeps its height close to `O(log n)` (roughly evenly distributing nodes across both subtrees); an unbalanced tree can degrade toward a straight line (height `O(n)`) — this distinction is exactly why Binary Search Trees (below) need self-balancing variants for guaranteed performance.


### Binary Search Trees (BST)

A Binary Tree with an ordering invariant: for every node, ALL values in its left subtree are smaller, and ALL values in its right subtree are larger. This invariant is what makes search, insert, and delete all O(log n) — on a BALANCED tree.

```java
TreeNode search(TreeNode node, int target) {
    if (node == null || node.val == target) return node;
    return target < node.val ? search(node.left, target) : search(node.right, target);
    // at each step, an entire half of the remaining tree is eliminated — just like binary search on an array
}

TreeNode insert(TreeNode node, int val) {
    if (node == null) return new TreeNode(val);
    if (val < node.val) node.left = insert(node.left, val);
    else node.right = insert(node.right, val);
    return node;
}
```

**The catch**: if values are inserted in already-sorted order (1, 2, 3, 4, 5...), a plain BST degenerates into a straight line — effectively a linked list, with O(n) operations instead of O(log n). **Self-balancing BSTs** (Red-Black Trees, AVL Trees) automatically re-balance after every insert/delete to guarantee `O(log n)` height regardless of insertion order — this is exactly what backs Java's `TreeMap`/`TreeSet` (Red-Black Tree, see the Java chapter's Collections Framework).

**Rule of thumb**: an inorder traversal of a BST always visits values in ascending order — a very common interview technique ("is this a valid BST?" can be checked by confirming the inorder traversal is strictly increasing).


### Heaps

A specialized tree-based structure satisfying the **heap property**: in a MIN-heap, every parent is smaller than or equal to its children (so the smallest element is always at the root); a MAX-heap is the reverse. Unlike a BST, a heap only guarantees ordering between parent and child, NOT across siblings — this weaker guarantee is exactly what makes insert/removeMin both `O(log n)`, versus a sorted structure needing `O(n)` to insert.

```java
PriorityQueue<Integer> minHeap = new PriorityQueue<>();               // min-heap by default in Java
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());  // max-heap

minHeap.offer(5); minHeap.offer(1); minHeap.offer(3);
minHeap.poll();     // 1 — always removes the smallest — O(log n)
minHeap.peek();      // look at the smallest without removing — O(1)
```

**Array representation**: a heap is typically stored as a plain array (not actual node/pointer objects) — for a node at index `i`, its children are at `2i+1` and `2i+2`, and its parent is at `(i-1)/2`. This is why heap operations don't need pointers at all, and why building a heap from scratch is memory-efficient.

**Common use — "top K" problems**: keep a heap of size K while scanning n elements, giving O(n log k) instead of sorting everything (O(n log n)) — a very common interview pattern for "find the K largest/smallest/most frequent elements."


### Graphs

A set of **nodes (vertices)** connected by **edges** — the most general data structure covered here; a tree is actually just a special case of a graph (one with no cycles and exactly one path between any two nodes).

**Representations**:

```java
// Adjacency list — most common; efficient for sparse graphs (relatively few edges)
Map<Integer, List<Integer>> graph = new HashMap<>();
graph.put(0, List.of(1, 2));    // node 0 connects to nodes 1 and 2
graph.put(1, List.of(0, 3));

// Adjacency matrix — a 2D array; O(1) "is there an edge?" check, but O(V²) space regardless of edge count
boolean[][] matrix = new boolean[n][n];
matrix[0][1] = true;    // edge between node 0 and node 1
```

**Directed vs undirected**: a directed edge only goes one way (A → B does not imply B → A, e.g. a "follows" relationship); an undirected edge implies both directions (e.g. a "friendship").

**Weighted vs unweighted**: a weighted edge carries a cost/distance (used by algorithms like Dijkstra's shortest path); an unweighted graph treats every edge as equal cost (which is exactly what makes plain BFS suffice for shortest-path in an unweighted graph — see below).

**Rule of thumb**: use an adjacency list for most interview problems (sparse graphs, and matches how DFS/BFS naturally iterate "neighbors of this node"); an adjacency matrix is worth it only when edge lookups ("is there a direct edge between A and B?") are frequent and the graph is dense.


## 9.02 Algorithms


### Overview

An algorithm is a step-by-step procedure for solving a problem, independent of any particular data structure — though, as the examples below show, the right choice of data structure (Part 9.01) is often exactly what makes an algorithm efficient. This chapter covers the core algorithmic techniques and search/graph/sorting algorithms that recur across interview problems. Examples use Java, consistent with the rest of this guide.


### DFS (Depth-First Search)

Explores as far as possible down one path before backtracking — implemented either recursively (using the actual call stack, see Recursion below) or iteratively with an explicit Stack (see Stacks above).

```java
void dfs(int node, Map<Integer, List<Integer>> graph, Set<Integer> visited) {
    if (visited.contains(node)) return;
    visited.add(node);
    System.out.println(node);                    // process the node
    for (int neighbor : graph.getOrDefault(node, List.of())) {
        dfs(neighbor, graph, visited);              // recurse into each unvisited neighbor
    }
}
```

**Complexity**: O(V + E) — every vertex and every edge is visited once. **The `visited` set is essential** — without it, a cycle in the graph causes infinite recursion. **Common uses**: detecting cycles, finding connected components, topological sorting, and exploring all paths/combinations (which is exactly what Backtracking, below, builds on).


### BFS (Breadth-First Search)

Explores level by level — all neighbors of the start node first, then all THEIR neighbors, and so on. Always implemented with a Queue (see Queues above), never recursively.

```java
void bfs(int start, Map<Integer, List<Integer>> graph) {
    Set<Integer> visited = new HashSet<>();
    Queue<Integer> queue = new LinkedList<>();
    queue.offer(start);
    visited.add(start);

    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.println(node);                     // process the node
        for (int neighbor : graph.getOrDefault(node, List.of())) {
            if (!visited.contains(neighbor)) {
                visited.add(neighbor);                    // mark visited when ENQUEUED, not when dequeued —
                queue.offer(neighbor);                     // avoids adding the same node to the queue multiple times
            }
        }
    }
}
```

**Complexity**: O(V + E), same as DFS. **Key property**: BFS finds the SHORTEST PATH (fewest edges) from the start node to any other node in an UNWEIGHTED graph — this is precisely why BFS, not DFS, is the standard choice for shortest-path/"minimum steps" problems (e.g. "minimum number of moves to reach the goal"). For weighted graphs, Dijkstra's algorithm (a BFS variant using a min-heap instead of a plain queue) is needed instead.

**DFS vs BFS — when to use which**: DFS for exploring ALL paths/combinations, detecting cycles, or when memory is a concern with a wide-but-shallow graph (DFS's stack only holds one path at a time; BFS's queue can hold an entire level, which may be huge). BFS for shortest path in an unweighted graph, or level-by-level processing.


### Recursion

A function that calls itself to solve smaller instances of the same problem, until reaching a **base case** that can be answered directly without further recursion.

```java
int factorial(int n) {
    if (n <= 1) return 1;              // base case — stops the recursion
    return n * factorial(n - 1);        // recursive case — solves a smaller sub-problem, and combines the result
}
```

**Every recursive call adds a frame to the Call Stack** (see the JavaScript chapter's Event Loop and the Java chapter's Stack vs Heap) — this is why recursion without a reachable base case causes a `StackOverflowError`, and why very deep recursion (thousands of levels) can be risky even WITH a correct base case, since the call stack has a fixed size limit.

**Recursion vs iteration**: anything recursive can be rewritten iteratively (usually with an explicit Stack replacing the implicit call stack — exactly the DFS example above), and vice versa. Recursion tends to produce cleaner, more directly-readable code for naturally recursive structures (trees, nested/hierarchical data), at the cost of call-stack overhead that a loop doesn't have.

**Memoization** (caching results of previous calls) transforms recursion from potentially exponential to polynomial time for problems with overlapping sub-problems — this is the bridge to Dynamic Programming below.


### Backtracking

A refinement of DFS/recursion for exploring ALL possible solutions to a problem, by building a solution incrementally and abandoning ("backtracking" from) any partial solution that can't possibly lead to a valid one.

```java
// Generate all permutations of an array — the canonical backtracking example
void backtrack(List<Integer> current, int[] nums, boolean[] used, List<List<Integer>> result) {
    if (current.size() == nums.length) {
        result.add(new ArrayList<>(current));   // a complete, valid permutation — save a copy
        return;
    }
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;                    // skip numbers already placed in this permutation
        current.add(nums[i]);                       // CHOOSE
        used[i] = true;
        backtrack(current, nums, used, result);      // EXPLORE further with this choice made
        current.remove(current.size() - 1);           // UNCHOOSE — backtrack, try the next option
        used[i] = false;
    }
}
```

**The "choose, explore, unchoose" pattern** shown above is the template for virtually every backtracking problem: N-Queens, Sudoku solving, generating subsets/combinations, and word search on a grid all follow this exact shape. **Pruning**: the real power of backtracking over pure brute force is abandoning a branch EARLY the moment it's known to be invalid (e.g. in N-Queens, stop placing further queens on a row as soon as the current partial placement already has a conflict), avoiding wasted exploration of doomed branches.


### Dynamic Programming (DP)

An optimization technique for problems with two properties: **overlapping sub-problems** (the same smaller sub-problem is solved repeatedly) and **optimal substructure** (the optimal solution can be built from optimal solutions to sub-problems). DP avoids recomputing the same sub-problem over and over, trading extra memory for dramatically less time.

```java
// Naive recursive Fibonacci — O(2^n), because fib(3) is recomputed independently
// inside both fib(4) and fib(5), and this duplication compounds at every level
int fibNaive(int n) {
    if (n <= 1) return n;
    return fibNaive(n - 1) + fibNaive(n - 2);
}

// Memoization (top-down DP) — cache results of sub-problems already solved
int fibMemo(int n, Map<Integer, Integer> cache) {
    if (n <= 1) return n;
    if (cache.containsKey(n)) return cache.get(n);      // already solved — O(1) lookup instead of recomputing
    int result = fibMemo(n - 1, cache) + fibMemo(n - 2, cache);
    cache.put(n, result);
    return result;
}
// O(n) time, O(n) space — each sub-problem is now solved exactly once

// Tabulation (bottom-up DP) — build up from the base cases iteratively, no recursion/call-stack overhead
int fibTab(int n) {
    if (n <= 1) return n;
    int[] dp = new int[n + 1];
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];      // build each answer from previously computed answers
    }
    return dp[n];
}
```

**Memoization (top-down)** vs **Tabulation (bottom-up)**: memoization keeps the natural recursive structure and adds caching (easier to write directly from a recursive brute-force solution); tabulation builds the answer iteratively from the smallest sub-problems upward (avoids recursion/call-stack overhead entirely, and often allows further space optimization — e.g. `fibTab` only actually needs the last two values, not the whole `dp` array).

**Classic DP problems**: 0/1 Knapsack, Longest Common Subsequence, Coin Change, Longest Increasing Subsequence — all share the same shape: identify the sub-problem, find the recurrence relating it to smaller sub-problems, then decide whether the state space is small enough to tabulate directly.


### Greedy Algorithms

Makes the LOCALLY optimal choice at each step, without reconsidering previous choices, hoping (and for specific problems, PROVING) this leads to a globally optimal solution — much simpler and faster than DP, but only correct for problems where the greedy choice property actually holds.

```java
// Classic example: minimum number of coins to make change, given specific denominations
int coinChangeGreedy(int[] coins, int amount) {   // coins assumed sorted descending, e.g. [25, 10, 5, 1]
    int count = 0;
    for (int coin : coins) {
        count += amount / coin;      // take as many of the largest coin as possible
        amount %= coin;
    }
    return amount == 0 ? count : -1;
}
// Works correctly for standard currency denominations (like US coins),
// but greedy does NOT always give the optimal answer for arbitrary coin sets —
// e.g. coins = [1, 3, 4], amount = 6: greedy picks 4+1+1 (3 coins),
// but the optimal answer is 3+3 (2 coins). This is exactly why some
// "coin change" variants require full Dynamic Programming (above) instead.
```

**When greedy actually works**: interval scheduling (picking the maximum number of non-overlapping intervals — always take the one that finishes earliest), Huffman coding, Dijkstra's shortest path (see BFS above). **Rule of thumb**: greedy is faster and simpler when it applies, but always verify (or be given) that the greedy choice property holds for the specific problem — otherwise it silently produces a wrong, sub-optimal answer instead of erroring, which makes it a dangerous default without justification.


### Sliding Window

A technique for problems involving a contiguous subarray/substring, avoiding the O(n²)/O(n³) cost of recomputing a sum/count from scratch for every possible window — instead, slide the window by one position and incrementally update.

```java
// Maximum sum of any contiguous subarray of size k
int maxSubarraySum(int[] nums, int k) {
    int windowSum = 0;
    for (int i = 0; i < k; i++) windowSum += nums[i];    // sum of the FIRST window — O(k)

    int maxSum = windowSum;
    for (int i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];    // slide: add the new element, remove the one leaving the window — O(1)
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
// O(n) total, vs. O(n*k) recomputing every window's sum from scratch
```

**Fixed vs variable window**: the example above uses a FIXED-size window (always exactly `k` elements). A VARIABLE window (e.g. "smallest subarray with sum ≥ target") instead grows the window by moving a right pointer forward, and shrinks it by moving a left pointer forward whenever a condition is satisfied — both pointers only ever move forward, which is what keeps the technique O(n) instead of O(n²).


### Two Pointers

Uses two index variables that traverse a (usually sorted) array/string, moving toward each other or in the same direction, to avoid a nested loop.

```java
// Classic example: does a sorted array contain two numbers that sum to a target?
boolean twoSum(int[] sortedNums, int target) {
    int left = 0, right = sortedNums.length - 1;
    while (left < right) {
        int sum = sortedNums[left] + sortedNums[right];
        if (sum == target) return true;
        else if (sum < target) left++;     // sum too small — move left pointer right to increase it
        else right--;                        // sum too large — move right pointer left to decrease it
    }
    return false;
}
// O(n) time, O(1) space — vs O(n²) checking every pair, or O(n) time + O(n) space with a HashSet
```

```java
// Classic example: is a string a palindrome?
boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) return false;
        left++; right--;
    }
    return true;
}
```

**Rule of thumb**: two pointers moving toward each other from both ends works great on SORTED data (as in the two-sum example); two pointers moving in the same direction (one fast, one slow) is the same underlying idea used in linked-list cycle detection (see Linked Lists above) and in-place array de-duplication.


### Binary Search

Repeatedly halves the search space in a SORTED array by comparing the target to the middle element — O(log n), dramatically faster than a linear O(n) scan.

```java
int binarySearch(int[] sortedNums, int target) {
    int left = 0, right = sortedNums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;    // avoids integer overflow vs (left + right) / 2
        if (sortedNums[mid] == target) return mid;
        else if (sortedNums[mid] < target) left = mid + 1;   // target is in the right half — discard the left half
        else right = mid - 1;                                   // target is in the left half — discard the right half
    }
    return -1;    // not found
}
```

**Precondition**: the array/search space MUST be sorted (or otherwise monotonic) — binary search on unsorted data gives incorrect results silently. **Beyond plain array search**: binary search also applies to any monotonic decision problem — e.g. "find the minimum value of X such that condition(X) is true," searching over a range of possible ANSWERS rather than array indices (a common advanced pattern: "binary search the answer").


### Sorting Algorithms

| Algorithm | Time (avg) | Time (worst) | Space | Stable? | Notes |
|---|---|---|---|---|---|
| Bubble Sort | O(n²) | O(n²) | O(1) | Yes | repeatedly swaps adjacent out-of-order pairs; simple but rarely used in practice |
| Insertion Sort | O(n²) | O(n²) | O(1) | Yes | builds the sorted portion one element at a time; fast for nearly-sorted/small data |
| Selection Sort | O(n²) | O(n²) | O(1) | No | repeatedly selects the minimum remaining element |
| Merge Sort | O(n log n) | O(n log n) | O(n) | Yes | divide-and-conquer; consistent performance, needs extra space |
| Quick Sort | O(n log n) | O(n²) | O(log n) | No | divide-and-conquer via a pivot; fast in practice, worst case on already-sorted/adversarial input |
| Heap Sort | O(n log n) | O(n log n) | O(1) | No | builds a heap (see above), repeatedly extracts the max |

**Merge Sort**: splits the array in half recursively until each piece has 1 element (trivially sorted), then merges sorted halves back together.

```java
void mergeSort(int[] arr, int left, int right) {
    if (left >= right) return;
    int mid = (left + right) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);   // merge the two now-sorted halves — O(n) per merge
}
```

**Quick Sort**: picks a pivot, partitions the array so smaller elements are left of the pivot and larger are right, then recursively sorts each side.

```java
void quickSort(int[] arr, int low, int high) {
    if (low >= high) return;
    int pivotIndex = partition(arr, low, high);   // places the pivot in its final sorted position
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
}
```

**Stability**: a stable sort preserves the relative order of equal elements — important when sorting objects by one field while wanting ties broken by original order (e.g. sorting orders by date, keeping same-date orders in their original insertion order).

**Rule of thumb**: `Collections.sort()`/`Arrays.sort()` (for objects) in Java use a stable, tuned merge sort/Timsort variant; `Arrays.sort()` for PRIMITIVES uses a dual-pivot quicksort (faster, but not stable — irrelevant for primitives since there's no "other data" attached to preserve order for). In interviews, know merge sort and quick sort's mechanics and trade-offs — actual production code should almost never hand-roll a sort.


### Searching Algorithms

**Linear Search**: check every element one by one — O(n), works on ANY data (sorted or not), no precondition.

```java
int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}
```

**Binary Search** (see above): O(log n), but requires sorted data.

**Rule of thumb**: use linear search on small or unsorted data, or when the cost of sorting first (O(n log n)) outweighs the benefit for a one-off search; use binary search whenever data is already sorted, or will be searched repeatedly enough that sorting once up front pays for itself. Hash table lookup (see above) beats both at O(1) average when only membership/key-lookup is needed and order doesn't matter.


### End of Guide