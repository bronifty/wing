# [fibonacci.test.w](../../../../../../examples/tests/sdk_tests/math/fibonacci.test.w) | compile | tf-aws

## inflight.$Closure1-1.cjs
```cjs
"use strict";
module.exports = function({ $math_Util }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(0) == 0")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.fibonacci(0)),0)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(1) == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.fibonacci(1)),1)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(2) == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.fibonacci(2)),1)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(3) == 2")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.fibonacci(3)),2)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(4) == 3")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.fibonacci(4)),3)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(5) == 5")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.fibonacci(5)),5)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(6) == 8")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.fibonacci(6)),8)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(7) == 13")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.fibonacci(7)),13)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(8) == 21")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.fibonacci(8)),21)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(9) == 34")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.fibonacci(9)),34)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(10) == 55")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.fibonacci(10)),55)))};
    }
  }
  return $Closure1;
}
//# sourceMappingURL=./inflight.$Closure1-1.cjs.map
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
const math = $stdlib.math;
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
            $math_Util: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(math.Util, "@winglang/sdk/math", "Util"))},
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
    {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(0) == 0")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.fibonacci(0)),0)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(1) == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.fibonacci(1)),1)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(2) == 1")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.fibonacci(2)),1)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(3) == 2")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.fibonacci(3)),2)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(4) == 3")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.fibonacci(4)),3)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(5) == 5")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.fibonacci(5)),5)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(6) == 8")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.fibonacci(6)),8)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(7) == 13")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.fibonacci(7)),13)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(8) == 21")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.fibonacci(8)),21)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(9) == 34")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.fibonacci(9)),34)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.fibonacci(10) == 55")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.fibonacci(10)),55)))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:inflight fibonacci", new $Closure1(this, "$Closure1"));
  }
}
const $PlatformManager = new $stdlib.platform.PlatformManager({platformPaths: $platforms});
const $APP = $PlatformManager.createApp({ outdir: $outdir, name: "fibonacci.test", rootConstruct: $Root, isTestEnvironment: $wing_is_test, entrypointDir: process.env['WING_SOURCE_DIR'], rootId: process.env['WING_ROOT_ID'] });
$APP.synth();
//# sourceMappingURL=preflight.cjs.map
```

