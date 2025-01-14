# [path.test.w](../../../../../../examples/tests/sdk_tests/fs/path.test.w) | compile | tf-aws

## inflight.$Closure1-1.cjs
```cjs
"use strict";
module.exports = function({ $from, $fs_Util, $regex_Util, $to }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      let result = (await $fs_Util.join($from, $to));
      {((cond) => {if (!cond) throw new Error("assertion failed: result == \"/a/b/c/d/a/b/e/f\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(result,"/a/b/c/d/a/b/e/f")))};
      result = (await $fs_Util.relative($from, $to));
      {((cond) => {if (!cond) throw new Error("assertion failed: result == \"../../e/f\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(result,"../../e/f")))};
      result = (await $fs_Util.absolute($from, $to));
      {((cond) => {if (!cond) throw new Error("assertion failed: regex.match(\"/a/b/e/f\", result)")})((await $regex_Util.match("/a/b/e/f", result)))};
      result = (await $fs_Util.dirname($from));
      {((cond) => {if (!cond) throw new Error("assertion failed: result == \"/a/b/c\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(result,"/a/b/c")))};
      result = (await $fs_Util.basename($from));
      {((cond) => {if (!cond) throw new Error("assertion failed: result == \"d\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(result,"d")))};
    }
  }
  return $Closure1;
}
//# sourceMappingURL=./inflight.$Closure1-1.cjs.map
```

## inflight.$Closure2-1.cjs
```cjs
"use strict";
module.exports = function({ $expect_Util, $fs_Util }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      let filePath = "/a/b/c/d.txt";
      let result = (await $fs_Util.extension(filePath));
      (await $expect_Util.equal(result, "txt"));
      filePath = "/a/b/c/d.tar.gz";
      result = (await $fs_Util.extension(filePath));
      (await $expect_Util.equal(result, "gz"));
      filePath = "/a/b/c/.hiddenfile";
      result = (await $fs_Util.extension(filePath));
      (await $expect_Util.equal(result, undefined));
      filePath = "/a/b/c/d";
      result = (await $fs_Util.extension(filePath));
      (await $expect_Util.equal(result, undefined));
      filePath = "";
      result = (await $fs_Util.extension(filePath));
      (await $expect_Util.equal(result, undefined));
    }
  }
  return $Closure2;
}
//# sourceMappingURL=./inflight.$Closure2-1.cjs.map
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
const fs = $stdlib.fs;
const regex = $stdlib.regex;
const expect = $stdlib.expect;
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
            $from: ${$stdlib.core.liftObject(from)},
            $fs_Util: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(fs.Util, "@winglang/sdk/fs", "Util"))},
            $regex_Util: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(regex.Util, "@winglang/sdk/regex", "Util"))},
            $to: ${$stdlib.core.liftObject(to)},
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
          $Closure1._registerOnLiftObject(from, host, []);
          $Closure1._registerOnLiftObject(to, host, []);
        }
        super._registerOnLift(host, ops);
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
            $expect_Util: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(expect.Util, "@winglang/sdk/expect", "Util"))},
            $fs_Util: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(fs.Util, "@winglang/sdk/fs", "Util"))},
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
    const from = "/a/b/c/d";
    const to = "/a/b/e/f";
    let result = (fs.Util.join(from, to));
    {((cond) => {if (!cond) throw new Error("assertion failed: result == \"/a/b/c/d/a/b/e/f\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(result,"/a/b/c/d/a/b/e/f")))};
    result = (fs.Util.relative(from, to));
    {((cond) => {if (!cond) throw new Error("assertion failed: result == \"../../e/f\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(result,"../../e/f")))};
    result = (fs.Util.absolute(from, to));
    {((cond) => {if (!cond) throw new Error("assertion failed: regex.match(\"/a/b/e/f\", result)")})((regex.Util.match("/a/b/e/f", result)))};
    result = (fs.Util.dirname(from));
    {((cond) => {if (!cond) throw new Error("assertion failed: result == \"/a/b/c\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(result,"/a/b/c")))};
    result = (fs.Util.basename(from));
    {((cond) => {if (!cond) throw new Error("assertion failed: result == \"d\"")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(result,"d")))};
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:inflight path conversion", new $Closure1(this, "$Closure1"));
    this.node.root.new("@winglang/sdk.std.Test", std.Test, this, "test:extension()", new $Closure2(this, "$Closure2"));
  }
}
const $PlatformManager = new $stdlib.platform.PlatformManager({platformPaths: $platforms});
const $APP = $PlatformManager.createApp({ outdir: $outdir, name: "path.test", rootConstruct: $Root, isTestEnvironment: $wing_is_test, entrypointDir: process.env['WING_SOURCE_DIR'], rootId: process.env['WING_ROOT_ID'] });
$APP.synth();
//# sourceMappingURL=preflight.cjs.map
```

