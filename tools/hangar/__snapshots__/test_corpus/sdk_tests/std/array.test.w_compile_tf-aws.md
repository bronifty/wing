# [array.test.w](../../../../../../examples/tests/sdk_tests/std/array.test.w) | compile | tf-aws

## inflight.$Closure1-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      {((cond) => {if (!cond) throw new Error("assertion failed: [\"hello\"].length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(["hello"].length,1)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: MutArray<str>[\"hello\"].length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(["hello"].length,1)))};
    }
  }
  return $Closure1;
}
//# sourceMappingURL=./inflight.$Closure1-1.cjs.map
```

## inflight.$Closure10-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure10 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const i = ["hello", "wing"];
      const separator = ";";
      const joinedString = (await i.join(separator));
      const expectedString = ((((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(i, 0) + separator) + ((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(i, 1));
      {((cond) => {if (!cond) throw new Error("assertion failed: joinedString == expectedString")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(joinedString,expectedString)))};
    }
  }
  return $Closure10;
}
//# sourceMappingURL=./inflight.$Closure10-1.cjs.map
```

## inflight.$Closure11-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure11 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const i = ["hello", "wing"];
      const separator = ",";
      const joinedString = (await i.join());
      const expectedString = ((((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(i, 0) + separator) + ((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(i, 1));
      {((cond) => {if (!cond) throw new Error("assertion failed: joinedString == expectedString")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(joinedString,expectedString)))};
    }
  }
  return $Closure11;
}
//# sourceMappingURL=./inflight.$Closure11-1.cjs.map
```

## inflight.$Closure12-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure12 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const o = ["hello", "wing"];
      const p = [...(o)];
      {((cond) => {if (!cond) throw new Error("assertion failed: o.length == p.length")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(o.length,p.length)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: o.at(0) == p.at(0)")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(o, 0),((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(p, 0))))};
    }
  }
  return $Closure12;
}
//# sourceMappingURL=./inflight.$Closure12-1.cjs.map
```

## inflight.$Closure13-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure13 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const q = ["hello", "wing"];
      const r = [...(q)];
      {((cond) => {if (!cond) throw new Error("assertion failed: q.length == r.length")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(q.length,r.length)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: q.at(0) == r.at(0)")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(q, 0),((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(r, 0))))};
    }
  }
  return $Closure13;
}
//# sourceMappingURL=./inflight.$Closure13-1.cjs.map
```

## inflight.$Closure14-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure14 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const lastStr = "wing";
      const s = ["hello", lastStr, lastStr];
      {((cond) => {if (!cond) throw new Error("assertion failed: s.lastIndexOf(lastStr) == 2")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(s.lastIndexOf(lastStr),2)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: s.lastIndexOf(\"something\") == -1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(s.lastIndexOf("something"),(-1))))};
    }
  }
  return $Closure14;
}
//# sourceMappingURL=./inflight.$Closure14-1.cjs.map
```

## inflight.$Closure15-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure15 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const assertThrows = async (expected, block) => {
        let error = false;
        try {
          (await block());
        }
        catch ($error_actual) {
          const actual = $error_actual.message;
          {((cond) => {if (!cond) throw new Error("assertion failed: actual == expected")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(actual,expected)))};
          error = true;
        }
        {((cond) => {if (!cond) throw new Error("assertion failed: error")})(error)};
      };
      const INDEX_OUT_OF_BOUNDS_ERROR = "Index out of bounds";
      const mutArr = [1, 3, 5, 7, 9];
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.at(0) == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(mutArr, 0),1)))};
      ((obj, args) => { if (args[0] < 0 || args[0] >= mutArr.length) throw new Error("Index out of bounds"); obj[args[0]] = args[1]; })(mutArr, [0, 2]);
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.at(0) == 2")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(mutArr, 0),2)))};
      (await assertThrows(INDEX_OUT_OF_BOUNDS_ERROR, async () => {
        ((obj, args) => { if (args[0] < 0 || args[0] >= mutArr.length) throw new Error("Index out of bounds"); obj[args[0]] = args[1]; })(mutArr, [(-1), 1]);
      }));
      (await assertThrows(INDEX_OUT_OF_BOUNDS_ERROR, async () => {
        ((obj, args) => { if (args[0] < 0 || args[0] >= mutArr.length) throw new Error("Index out of bounds"); obj[args[0]] = args[1]; })(mutArr, [5, 11]);
      }));
    }
  }
  return $Closure15;
}
//# sourceMappingURL=./inflight.$Closure15-1.cjs.map
```

## inflight.$Closure16-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure16 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const assertThrows = async (expected, block) => {
        let error = false;
        try {
          (await block());
        }
        catch ($error_actual) {
          const actual = $error_actual.message;
          {((cond) => {if (!cond) throw new Error("assertion failed: actual == expected")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(actual,expected)))};
          error = true;
        }
        {((cond) => {if (!cond) throw new Error("assertion failed: error")})(error)};
      };
      const INDEX_OUT_OF_BOUNDS_ERROR = "Index out of bounds";
      const mutArr = [5, 10, 20];
      ((obj, args) => { if (args[0] < 0 || args[0] > mutArr.length) throw new Error("Index out of bounds"); obj.splice(args[0], 0, args[1]); })(mutArr, [2, 15]);
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.length == 4")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(mutArr.length,4)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.at(2) == 15")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(mutArr, 2),15)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.at(3) == 20")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(mutArr, 3),20)))};
      (await assertThrows(INDEX_OUT_OF_BOUNDS_ERROR, async () => {
        ((obj, args) => { if (args[0] < 0 || args[0] > mutArr.length) throw new Error("Index out of bounds"); obj.splice(args[0], 0, args[1]); })(mutArr, [(-3), 15]);
      }));
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.length == 4")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(mutArr.length,4)))};
      (await assertThrows(INDEX_OUT_OF_BOUNDS_ERROR, async () => {
        ((obj, args) => { if (args[0] < 0 || args[0] > mutArr.length) throw new Error("Index out of bounds"); obj.splice(args[0], 0, args[1]); })(mutArr, [7, 15]);
      }));
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.length == 4")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(mutArr.length,4)))};
      ((obj, args) => { if (args[0] < 0 || args[0] > mutArr.length) throw new Error("Index out of bounds"); obj.splice(args[0], 0, args[1]); })(mutArr, [4, 25]);
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.length == 5")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(mutArr.length,5)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.at(4) == 25")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(mutArr, 4),25)))};
    }
  }
  return $Closure16;
}
//# sourceMappingURL=./inflight.$Closure16-1.cjs.map
```

## inflight.$Closure17-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure17 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const mutArr = [3, 6, 9, 3];
      const r1 = ((obj, args) => { if (obj.indexOf(args[0]) !== -1) { obj.splice(obj.indexOf(args[0]), 1); return true; } return false; })(mutArr, [3]);
      {((cond) => {if (!cond) throw new Error("assertion failed: r1 == true")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(r1,true)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.length == 3")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(mutArr.length,3)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr == MutArray<num> [6, 9, 3]")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(mutArr,[6, 9, 3])))};
      const r2 = ((obj, args) => { if (obj.indexOf(args[0]) !== -1) { obj.splice(obj.indexOf(args[0]), 1); return true; } return false; })(mutArr, [(-42)]);
      {((cond) => {if (!cond) throw new Error("assertion failed: r2 == false")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(r2,false)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.length == 3")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(mutArr.length,3)))};
    }
  }
  return $Closure17;
}
//# sourceMappingURL=./inflight.$Closure17-1.cjs.map
```

## inflight.$Closure2-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      {((cond) => {if (!cond) throw new Error("assertion failed: [\"hello\"].at(0) == \"hello\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(["hello"], 0),"hello")))};
      {((cond) => {if (!cond) throw new Error("assertion failed: MutArray<str>[\"hello\", \"world\"].at(1) == \"world\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(["hello", "world"], 1),"world")))};
      const assertThrows = async (expected, block) => {
        let error = false;
        try {
          (await block());
        }
        catch ($error_actual) {
          const actual = $error_actual.message;
          {((cond) => {if (!cond) throw new Error("assertion failed: actual == expected")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(actual,expected)))};
          error = true;
        }
        {((cond) => {if (!cond) throw new Error("assertion failed: error")})(error)};
      };
      const INDEX_OUT_OF_BOUNDS_ERROR = "Index out of bounds";
      (await assertThrows(INDEX_OUT_OF_BOUNDS_ERROR, async () => {
        ((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(["hello"], (-1));
      }));
      (await assertThrows(INDEX_OUT_OF_BOUNDS_ERROR, async () => {
        ((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(["hello"], 20);
      }));
      (await assertThrows(INDEX_OUT_OF_BOUNDS_ERROR, async () => {
        ((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(["hello"], 20);
      }));
      (await assertThrows(INDEX_OUT_OF_BOUNDS_ERROR, async () => {
        ((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(["hello"], (-1));
      }));
    }
  }
  return $Closure2;
}
//# sourceMappingURL=./inflight.$Closure2-1.cjs.map
```

## inflight.$Closure3-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure3 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const a = ["hello"];
      {((cond) => {if (!cond) throw new Error("assertion failed: a.length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(a.length,1)))};
      ((obj, args) => { obj.push(...args); })(a, ["world"]);
      {((cond) => {if (!cond) throw new Error("assertion failed: a.length == 2")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(a.length,2)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: a.at(0) == \"hello\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(a, 0),"hello")))};
      {((cond) => {if (!cond) throw new Error("assertion failed: a.at(1) == \"world\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(a, 1),"world")))};
      const item = (await a.pop());
      {((cond) => {if (!cond) throw new Error("assertion failed: item == \"world\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(item,"world")))};
      {((cond) => {if (!cond) throw new Error("assertion failed: a.length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(a.length,1)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: a.at(0) == \"hello\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(a, 0),"hello")))};
      const pushMultipleItems = ["element1"];
      ((obj, args) => { obj.push(...args); })(pushMultipleItems, ["element2", "element3"]);
      {((cond) => {if (!cond) throw new Error("assertion failed: pushMultipleItems.length == 3")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(pushMultipleItems.length,3)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: pushMultipleItems.at(0) == \"element1\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(pushMultipleItems, 0),"element1")))};
      {((cond) => {if (!cond) throw new Error("assertion failed: pushMultipleItems.at(1) == \"element2\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(pushMultipleItems, 1),"element2")))};
      {((cond) => {if (!cond) throw new Error("assertion failed: pushMultipleItems.at(2) == \"element3\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(pushMultipleItems, 2),"element3")))};
    }
  }
  return $Closure3;
}
//# sourceMappingURL=./inflight.$Closure3-1.cjs.map
```

## inflight.$Closure4-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure4 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const assertThrows = async (expected, block) => {
        let error = false;
        try {
          (await block());
        }
        catch ($error_actual) {
          const actual = $error_actual.message;
          {((cond) => {if (!cond) throw new Error("assertion failed: actual == expected")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(actual,expected)))};
          error = true;
        }
        {((cond) => {if (!cond) throw new Error("assertion failed: error")})(error)};
      };
      const INDEX_OUT_OF_BOUNDS_ERROR = "Index out of bounds";
      const mutArr = ["hello", "world"];
      const item = ((obj, args) => { if (args[0] < 0 || args[0] >= mutArr.length) throw new Error("Index out of bounds"); return obj.splice(args[0], 1)[0]; })(mutArr, [0]);
      {((cond) => {if (!cond) throw new Error("assertion failed: item == \"hello\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(item,"hello")))};
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(mutArr.length,1)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: mutArr.at(0) == \"world\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(mutArr, 0),"world")))};
      (await assertThrows(INDEX_OUT_OF_BOUNDS_ERROR, async () => {
        ((obj, args) => { if (args[0] < 0 || args[0] >= mutArr.length) throw new Error("Index out of bounds"); return obj.splice(args[0], 1)[0]; })(mutArr, [(-3)]);
      }));
      (await assertThrows(INDEX_OUT_OF_BOUNDS_ERROR, async () => {
        ((obj, args) => { if (args[0] < 0 || args[0] >= mutArr.length) throw new Error("Index out of bounds"); return obj.splice(args[0], 1)[0]; })(mutArr, [3]);
      }));
    }
  }
  return $Closure4;
}
//# sourceMappingURL=./inflight.$Closure4-1.cjs.map
```

## inflight.$Closure5-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure5 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const b = ["hello"];
      {((cond) => {if (!cond) throw new Error("assertion failed: b.length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(b.length,1)))};
      const d = (await b.concat(["wing"]));
      {((cond) => {if (!cond) throw new Error("assertion failed: d.length == 2")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(d.length,2)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: d.at(0) == \"hello\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(d, 0),"hello")))};
      {((cond) => {if (!cond) throw new Error("assertion failed: d.at(1) == \"wing\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(d, 1),"wing")))};
    }
  }
  return $Closure5;
}
//# sourceMappingURL=./inflight.$Closure5-1.cjs.map
```

## inflight.$Closure6-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure6 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const array = ["hello"];
      {((cond) => {if (!cond) throw new Error("assertion failed: array.length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(array.length,1)))};
      const anotherArray = ["wing"];
      {((cond) => {if (!cond) throw new Error("assertion failed: anotherArray.length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(anotherArray.length,1)))};
      const mergedArray = (await array.concat(anotherArray));
      {((cond) => {if (!cond) throw new Error("assertion failed: mergedArray.length == 2")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(mergedArray.length,2)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: mergedArray.at(0) == \"hello\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(mergedArray, 0),"hello")))};
      {((cond) => {if (!cond) throw new Error("assertion failed: mergedArray.at(1) == \"wing\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(mergedArray, 1),"wing")))};
    }
  }
  return $Closure6;
}
//# sourceMappingURL=./inflight.$Closure6-1.cjs.map
```

## inflight.$Closure7-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure7 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const e = ["hello", "wing"];
      {((cond) => {if (!cond) throw new Error("assertion failed: e.contains(\"wing\")")})(e.includes("wing"))};
      {((cond) => {if (!cond) throw new Error("assertion failed: !e.contains(\"NotThere\")")})((!e.includes("NotThere")))};
      const h = ["hello", "wing"];
      {((cond) => {if (!cond) throw new Error("assertion failed: h.contains(\"wing\")")})(h.includes("wing"))};
      {((cond) => {if (!cond) throw new Error("assertion failed: !h.contains(\"NotThere\")")})((!h.includes("NotThere")))};
    }
  }
  return $Closure7;
}
//# sourceMappingURL=./inflight.$Closure7-1.cjs.map
```

## inflight.$Closure8-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure8 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const g = ["hello", "wing"];
      {((cond) => {if (!cond) throw new Error("assertion failed: g.indexOf(\"wing\") == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(g.indexOf("wing"),1)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: g.indexOf(\"notThere\") == -1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(g.indexOf("notThere"),(-1))))};
    }
  }
  return $Closure8;
}
//# sourceMappingURL=./inflight.$Closure8-1.cjs.map
```

## inflight.$Closure9-1.cjs
```cjs
"use strict";
module.exports = function({  }) {
  class $Closure9 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const g = ["hello", "wing"];
      {((cond) => {if (!cond) throw new Error("assertion failed: g.indexOf(\"wing\") == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(g.indexOf("wing"),1)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: g.indexOf(\"notThere\") == -1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(g.indexOf("notThere"),(-1))))};
    }
  }
  return $Closure9;
}
//# sourceMappingURL=./inflight.$Closure9-1.cjs.map
```

## main.tf.json
```json
{
  "//": {
    "metadata": {
      "backend": "local",
      "stackName": "root",
      "version": "0.17.0"
    },
    "outputs": {}
  },
  "provider": {
    "aws": [
      {}
    ]
  },
  "resource": {
    "aws_s3_bucket": {
      "cloudBucket": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/cloud.Bucket/Default",
            "uniqueId": "cloudBucket"
          }
        },
        "bucket_prefix": "cloud-bucket-c87175e7-",
        "force_destroy": false
      },
      "myBucket": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/myBucket/Default",
            "uniqueId": "myBucket"
          }
        },
        "bucket_prefix": "mybucket-c8573914-",
        "force_destroy": false
      },
      "mySecondBucket": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/mySecondBucket/Default",
            "uniqueId": "mySecondBucket"
          }
        },
        "bucket_prefix": "mysecondbucket-c8d5dc33-",
        "force_destroy": false
      }
    }
  }
}
```

## preflight.cjs
```cjs
"use strict";
const $stdlib = require('@winglang/sdk');
const $platforms = ((s) => !s ? [] : s.split(';'))(process.env.WING_PLATFORMS);
const $outdir = process.env.WING_SYNTH_DIR ?? ".";
const $wing_is_test = process.env.WING_IS_TEST === "true";
const std = $stdlib.std;
const cloud = $stdlib.cloud;
class $Root extends $stdlib.std.Resource {
  constructor($scope, $id) {
    super($scope, $id);
    class $Closure1 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure1-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure1Client = ${$Closure1._toInflightType(this)};
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure2 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure2-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure2Client = ${$Closure2._toInflightType(this)};
            const client = new $Closure2Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure3 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure3-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure3Client = ${$Closure3._toInflightType(this)};
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure4 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure4-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure4Client = ${$Closure4._toInflightType(this)};
            const client = new $Closure4Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure5 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure5-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure5Client = ${$Closure5._toInflightType(this)};
            const client = new $Closure5Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure6 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure6-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure6Client = ${$Closure6._toInflightType(this)};
            const client = new $Closure6Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure7 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure7-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure7Client = ${$Closure7._toInflightType(this)};
            const client = new $Closure7Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure8 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure8-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure8Client = ${$Closure8._toInflightType(this)};
            const client = new $Closure8Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure9 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure9-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure9Client = ${$Closure9._toInflightType(this)};
            const client = new $Closure9Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure10 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure10-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure10Client = ${$Closure10._toInflightType(this)};
            const client = new $Closure10Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure11 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure11-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure11Client = ${$Closure11._toInflightType(this)};
            const client = new $Closure11Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure12 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure12-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure12Client = ${$Closure12._toInflightType(this)};
            const client = new $Closure12Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure13 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure13-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure13Client = ${$Closure13._toInflightType(this)};
            const client = new $Closure13Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure14 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure14-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure14Client = ${$Closure14._toInflightType(this)};
            const client = new $Closure14Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure15 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure15-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure15Client = ${$Closure15._toInflightType(this)};
            const client = new $Closure15Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure16 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure16-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure16Client = ${$Closure16._toInflightType(this)};
            const client = new $Closure16Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    class $Closure17 extends $stdlib.std.Resource {
      _hash = require('crypto').createHash('md5').update(this._toInflight()).digest('hex');
      constructor($scope, $id, ) {
        super($scope, $id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType() {
        return `
          require("././inflight.$Closure17-1.cjs")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure17Client = ${$Closure17._toInflightType(this)};
            const client = new $Closure17Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _supportedOps() {
        return [...super._supportedOps(), "handle", "$inflight_init"];
      }
    }
    const bucket = this.node.root.new("@winglang/sdk.cloud.Bucket", cloud.Bucket, this, "myBucket");
    const buckets = [bucket];
    const anotherBucket = this.node.root.new("@winglang/sdk.cloud.Bucket", cloud.Bucket, this, "mySecondBucket");
    const anotherBuckets = [anotherBucket];
    {((cond) => {if (!cond) throw new Error("assertion failed: buckets.length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(buckets.length,1)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: [1,2,3].length == 3")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })([1, 2, 3].length,3)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: MutArray<num>[1,2,3].length == 3")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })([1, 2, 3].length,3)))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:length", new $Closure1(this, "$Closure1"));
    {((cond) => {if (!cond) throw new Error("assertion failed: [\"hello\"].at(0) == \"hello\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(["hello"], 0),"hello")))};
    {((cond) => {if (!cond) throw new Error("assertion failed: MutArray<str>[\"hello\", \"world\"].at(1) == \"world\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(["hello", "world"], 1),"world")))};
    {((cond) => {if (!cond) throw new Error("assertion failed: buckets.at(0).node.id == \"myBucket\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(buckets, 0).node.id,"myBucket")))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:at()", new $Closure2(this, "$Closure2"));
    const a = ["hello"];
    {((cond) => {if (!cond) throw new Error("assertion failed: a.length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(a.length,1)))};
    ((obj, args) => { obj.push(...args); })(a, ["world"]);
    {((cond) => {if (!cond) throw new Error("assertion failed: a.length == 2")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(a.length,2)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: a.at(0) == \"hello\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(a, 0),"hello")))};
    {((cond) => {if (!cond) throw new Error("assertion failed: a.at(1) == \"world\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(a, 1),"world")))};
    const item = (a.pop());
    {((cond) => {if (!cond) throw new Error("assertion failed: item == \"world\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(item,"world")))};
    {((cond) => {if (!cond) throw new Error("assertion failed: a.length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(a.length,1)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: a.at(0) == \"hello\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(a, 0),"hello")))};
    const pushMultipleItems = ["element1"];
    ((obj, args) => { obj.push(...args); })(pushMultipleItems, ["element2", "element3"]);
    {((cond) => {if (!cond) throw new Error("assertion failed: pushMultipleItems.length == 3")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(pushMultipleItems.length,3)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: pushMultipleItems.at(0) == \"element1\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(pushMultipleItems, 0),"element1")))};
    {((cond) => {if (!cond) throw new Error("assertion failed: pushMultipleItems.at(1) == \"element2\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(pushMultipleItems, 1),"element2")))};
    {((cond) => {if (!cond) throw new Error("assertion failed: pushMultipleItems.at(2) == \"element3\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(pushMultipleItems, 2),"element3")))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:pushAndPop()", new $Closure3(this, "$Closure3"));
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:popAt()", new $Closure4(this, "$Closure4"));
    const array = ["hello"];
    {((cond) => {if (!cond) throw new Error("assertion failed: array.length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(array.length,1)))};
    const mergedArray = (array.concat(["wing"]));
    {((cond) => {if (!cond) throw new Error("assertion failed: mergedArray.length == 2")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(mergedArray.length,2)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: mergedArray.at(0) == \"hello\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(mergedArray, 0),"hello")))};
    {((cond) => {if (!cond) throw new Error("assertion failed: mergedArray.at(1) == \"wing\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(mergedArray, 1),"wing")))};
    const b = ["hello"];
    {((cond) => {if (!cond) throw new Error("assertion failed: b.length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(b.length,1)))};
    const d = (b.concat(["wing"]));
    {((cond) => {if (!cond) throw new Error("assertion failed: d.length == 2")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(d.length,2)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: d.at(0) == \"hello\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(d, 0),"hello")))};
    {((cond) => {if (!cond) throw new Error("assertion failed: d.at(1) == \"wing\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(d, 1),"wing")))};
    const mergedBuckets = (buckets.concat(anotherBuckets));
    {((cond) => {if (!cond) throw new Error("assertion failed: mergedBuckets.length == 2")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(mergedBuckets.length,2)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: mergedBuckets.at(0).node.id == \"myBucket\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(mergedBuckets, 0).node.id,"myBucket")))};
    {((cond) => {if (!cond) throw new Error("assertion failed: mergedBuckets.at(1).node.id == \"mySecondBucket\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(mergedBuckets, 1).node.id,"mySecondBucket")))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:concatMutArray()", new $Closure5(this, "$Closure5"));
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:concatArray()", new $Closure6(this, "$Closure6"));
    const e = ["hello", "wing"];
    {((cond) => {if (!cond) throw new Error("assertion failed: e.contains(\"wing\")")})(e.includes("wing"))};
    {((cond) => {if (!cond) throw new Error("assertion failed: !e.contains(\"NotThere\")")})((!e.includes("NotThere")))};
    {((cond) => {if (!cond) throw new Error("assertion failed: buckets.contains(buckets.at(0))")})(buckets.includes(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(buckets, 0)))};
    const dummyBucket = this.node.root.new("@winglang/sdk.cloud.Bucket", cloud.Bucket, this, "cloud.Bucket");
    {((cond) => {if (!cond) throw new Error("assertion failed: !buckets.contains(dummyBucket)")})((!buckets.includes(dummyBucket)))};
    const h = ["hello", "wing"];
    {((cond) => {if (!cond) throw new Error("assertion failed: h.contains(\"wing\")")})(h.includes("wing"))};
    {((cond) => {if (!cond) throw new Error("assertion failed: !h.contains(\"NotThere\")")})((!h.includes("NotThere")))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:contains()", new $Closure7(this, "$Closure7"));
    const g = ["hello", "wing"];
    {((cond) => {if (!cond) throw new Error("assertion failed: g.indexOf(\"wing\") == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(g.indexOf("wing"),1)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: g.indexOf(\"notThere\") == -1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(g.indexOf("notThere"),(-1))))};
    {((cond) => {if (!cond) throw new Error("assertion failed: buckets.indexOf(bucket) == 0")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(buckets.indexOf(bucket),0)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: buckets.indexOf(dummyBucket) == -1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(buckets.indexOf(dummyBucket),(-1))))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:indexOf()", new $Closure8(this, "$Closure8"));
    const q = ["hello", "wing"];
    {((cond) => {if (!cond) throw new Error("assertion failed: q.indexOf(\"wing\") == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(q.indexOf("wing"),1)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: q.indexOf(\"notThere\") == -1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(q.indexOf("notThere"),(-1))))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:indexOfArray()", new $Closure9(this, "$Closure9"));
    const m = ["hello", "wing"];
    const delimeter = ";";
    const joinedString = (m.join(delimeter));
    const expectedString = ((((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(m, 0) + delimeter) + ((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(m, 1));
    {((cond) => {if (!cond) throw new Error("assertion failed: joinedString == expectedString")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(joinedString,expectedString)))};
    const l = ["hello", "wing"];
    const separator = ",";
    const joinedStringWithDefault = (m.join());
    const expectedStringWithDefault = ((((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(m, 0) + separator) + ((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(m, 1));
    {((cond) => {if (!cond) throw new Error("assertion failed: joinedStringWithDefault == expectedStringWithDefault")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(joinedStringWithDefault,expectedStringWithDefault)))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:join()", new $Closure10(this, "$Closure10"));
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:joinWithDefaultSeparator()", new $Closure11(this, "$Closure11"));
    const o = ["hello", "wing"];
    const p = [...(o)];
    {((cond) => {if (!cond) throw new Error("assertion failed: o.length == p.length")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(o.length,p.length)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: o.at(0) == p.at(0)")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(o, 0),((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(p, 0))))};
    const copiedBuckets = [...(buckets)];
    {((cond) => {if (!cond) throw new Error("assertion failed: copiedBuckets.length == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(copiedBuckets.length,1)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: copiedBuckets.at(0).node.id == \"myBucket\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(copiedBuckets, 0).node.id,"myBucket")))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:copy()", new $Closure12(this, "$Closure12"));
    const v = ["hello", "wing"];
    const r = [...(v)];
    {((cond) => {if (!cond) throw new Error("assertion failed: q.length == r.length")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(q.length,r.length)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: q.at(0) == r.at(0)")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(q, 0),((arr, index) => { if (index < 0 || index >= arr.length) throw new Error("Index out of bounds"); return arr[index]; })(r, 0))))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:copyMut()", new $Closure13(this, "$Closure13"));
    const lastStr = "wing";
    const s = ["hello", lastStr, lastStr];
    {((cond) => {if (!cond) throw new Error("assertion failed: s.lastIndexOf(lastStr) == 2")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(s.lastIndexOf(lastStr),2)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: s.lastIndexOf(\"something\") == -1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(s.lastIndexOf("something"),(-1))))};
    const multipleBuckets = [bucket, bucket, anotherBucket];
    {((cond) => {if (!cond) throw new Error("assertion failed: multipleBuckets.lastIndexOf(bucket) == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(multipleBuckets.lastIndexOf(bucket),1)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: multipleBuckets.lastIndexOf(dummyBucket) == -1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(multipleBuckets.lastIndexOf(dummyBucket),(-1))))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:lastIndexOf()", new $Closure14(this, "$Closure14"));
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:set()", new $Closure15(this, "$Closure15"));
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:insert()", new $Closure16(this, "$Closure16"));
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:removeFirst()", new $Closure17(this, "$Closure17"));
  }
}
const $PlatformManager = new $stdlib.platform.PlatformManager({platformPaths: $platforms});
const $APP = $PlatformManager.createApp({ outdir: $outdir, name: "array.test", rootConstruct: $Root, isTestEnvironment: $wing_is_test, entrypointDir: process.env['WING_SOURCE_DIR'], rootId: process.env['WING_ROOT_ID'] });
$APP.synth();
//# sourceMappingURL=preflight.cjs.map
```

