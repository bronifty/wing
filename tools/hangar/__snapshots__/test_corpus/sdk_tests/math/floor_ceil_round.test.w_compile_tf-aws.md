# [floor_ceil_round.test.w](../../../../../../examples/tests/sdk_tests/math/floor_ceil_round.test.w) | compile | tf-aws

## inflight.$Closure1-1.cjs
```cjs
"use strict";
module.exports = function({ $__x_, $__y_, $math_Util, $x, $y }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      {((cond) => {if (!cond) throw new Error("assertion failed: math.floor(x) == 5")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.floor($x)),5)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.ceil(x) == 6")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.ceil($x)),6)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.round(x) == 5")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.round($x)),5)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.round(y) == 6")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.round($y)),6)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.round(-x) == -5")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.round($__x_)),(-5))))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.round(-y) == -6")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.round($__y_)),(-6))))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.round(math.E, decimalPlaces: 1) == 2.7")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.round($math_Util.E, { decimalPlaces: 1 })),2.7)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.round(math.E, decimalPlaces: 2) == 2.72")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.round($math_Util.E, { decimalPlaces: 2 })),2.72)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.round(math.E, decimalPlaces: 3) == 2.718")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.round($math_Util.E, { decimalPlaces: 3 })),2.718)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.round(math.E, decimalPlaces: 4) == 2.7183")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.round($math_Util.E, { decimalPlaces: 4 })),2.7183)))};
      {((cond) => {if (!cond) throw new Error("assertion failed: math.round(math.E, decimalPlaces: 5) == 2.71828")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((await $math_Util.round($math_Util.E, { decimalPlaces: 5 })),2.71828)))};
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
            $__x_: ${$stdlib.core.liftObject((-x))},
            $__y_: ${$stdlib.core.liftObject((-y))},
            $math_Util: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(math.Util, "@winglang/sdk/math", "Util"))},
            $x: ${$stdlib.core.liftObject(x)},
            $y: ${$stdlib.core.liftObject(y)},
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
      _registerOnLift(host, ops) {
        if (ops.includes("handle")) {
          $Closure1._registerOnLiftObject((-x), host, []);
          $Closure1._registerOnLiftObject((-y), host, []);
          $Closure1._registerOnLiftObject(x, host, []);
          $Closure1._registerOnLiftObject(y, host, []);
        }
        super._registerOnLift(host, ops);
      }
    }
    const x = 5.05;
    const y = 5.95;
    {((cond) => {if (!cond) throw new Error("assertion failed: math.floor(x) == 5")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.floor(x)),5)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.ceil(x) == 6")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.ceil(x)),6)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.round(x) == 5")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.round(x)),5)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.round(y) == 6")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.round(y)),6)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.round(-x) == -5")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.round((-x))),(-5))))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.round(-y) == -6")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.round((-y))),(-6))))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.round(math.E) == 3")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.round(math.Util.E)),3)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.round(math.E, decimalPlaces: 1) == 2.7")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.round(math.Util.E, { decimalPlaces: 1 })),2.7)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.round(math.E, decimalPlaces: 2) == 2.72")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.round(math.Util.E, { decimalPlaces: 2 })),2.72)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.round(math.E, decimalPlaces: 3) == 2.718")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.round(math.Util.E, { decimalPlaces: 3 })),2.718)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.round(math.E, decimalPlaces: 4) == 2.7183")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.round(math.Util.E, { decimalPlaces: 4 })),2.7183)))};
    {((cond) => {if (!cond) throw new Error("assertion failed: math.round(math.E, decimalPlaces: 5) == 2.71828")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((math.Util.round(math.Util.E, { decimalPlaces: 5 })),2.71828)))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:inflight floor/ceil/round", new $Closure1(this, "$Closure1"));
  }
}
const $PlatformManager = new $stdlib.platform.PlatformManager({platformPaths: $platforms});
const $APP = $PlatformManager.createApp({ outdir: $outdir, name: "floor_ceil_round.test", rootConstruct: $Root, isTestEnvironment: $wing_is_test, entrypointDir: process.env['WING_SOURCE_DIR'], rootId: process.env['WING_ROOT_ID'] });
$APP.synth();
//# sourceMappingURL=preflight.cjs.map
```

