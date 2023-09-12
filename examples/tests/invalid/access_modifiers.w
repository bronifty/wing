interface SomeInterface {
  public_method(): void;
  protected_method(): void;
  private_method(): void;
}

class Foo impl SomeInterface {
  protected protected_field: str;
  private_field: str;
  public public_field: str;

  init() {
    this.protected_field = "hello";
    this.private_field = "world";
    this.public_field = "!";
  }

  method() {
    // All of these are valid
    log(this.protected_field);
    log(this.private_field);
    log(this.public_field);
    this.public_method();
    this.protected_method();
    this.private_method();

    class InnerFoo {
      method(f: Foo) {
        // Check access from inner class
        log(f.protected_field);
        log(f.private_field);
        log(f.public_field);
      }
    }
  }
  
  public public_method() {}
  protected protected_method() {}
  //        ^ Method is not public but it's part of an interface
  private_method() {}
  //^ Method is not public but it's part of an interface

  public static public_static_method() {}
  protected static protected_static_method() {}
  static private_static_method() {}
}

class Bar extends Foo {
  method() {
    // Check protected access
    log(this.protected_field);
    log(this.private_field);
    //       ^ Cannot access private member
    log(this.public_field);
    this.public_method();
    this.protected_method();
    this.private_method();
    //   ^ Cannot access private member
  }

  static static_method() {
    // Check static protected access
    Foo.public_static_method();
    Foo.protected_static_method();
    Foo.private_static_method();
    //  ^ Cannot access private member
  }
}

// Check 2nd level inheritance
class Baz extends Bar {
  method() {
    // Check protected access
    log(this.protected_field);
    log(this.private_field);
    //       ^ Cannot access private member
    log(this.public_field);
    this.public_method();
    this.protected_method();
    this.private_method();
    //   ^ Cannot access private member
  }

  static static_method() {
    // Check static protected access
    Foo.public_static_method();
    Foo.protected_static_method();
    Foo.private_static_method();
    //  ^ Cannot access private member
    // Check static protected access using parent class (in which the methods are not defined)
    Bar.public_static_method();
    Bar.protected_static_method();
    Bar.private_static_method();
    //  ^ Cannot access private member
  }
}

let foo = new Foo();
// Chck access from non class
log(foo.protected_field);
//      ^ Cannot access protected member
log(foo.private_field);
//      ^ Cannot access private member
log(foo.public_field);
Foo.public_static_method();
Foo.protected_static_method();
//  ^ Cannot access protected member
Foo.private_static_method();
//  ^ Cannot access private member

// Check access from non child class (protected is not allowed)
class BarBar {
  method() {
    log(foo.protected_field);
    //      ^ Cannot access protected member
    log(foo.private_field);
    //      ^ Cannot access private member
    log(foo.public_field);
    foo.public_method();
    foo.protected_method();
    //  ^ Cannot access protected member
    foo.private_method();
    //  ^ Cannot access private member
  }

  static static_method() {
    Foo.public_static_method();
    Foo.protected_static_method();
    //  ^ Cannot access protected member
    Foo.private_static_method();
    //  ^ Cannot access private member
  }
}

// TODO: check jsii imported access modifiers
// TODO: add tests and implement checks for overriding methods with different access modifiers