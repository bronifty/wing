# [reset.w](../../../../examples/tests/valid/reset.w) | compile | tf-aws

## main.tf.json
```json
{
  "//": {
    "metadata": {
      "backend": "local",
      "stackName": "root",
      "version": "0.15.2"
    },
    "outputs": {
      "root": {
        "Default": {
          "cloud.TestRunner": {
            "TestFunctionArns": "WING_TEST_RUNNER_FUNCTION_ARNS"
          }
        }
      }
    }
  },
  "output": {
    "WING_TEST_RUNNER_FUNCTION_ARNS": {
      "value": "[[\"root/Default/Default/test:reset\",\"${aws_lambda_function.root_testreset_271DE846.arn}\"]]"
    }
  },
  "provider": {
    "aws": [
      {}
    ]
  },
  "resource": {
    "aws_dynamodb_table": {
      "root_cloudCounter_E0AC1263": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/cloud.Counter/Default",
            "uniqueId": "root_cloudCounter_E0AC1263"
          }
        },
        "attribute": [
          {
            "name": "id",
            "type": "S"
          }
        ],
        "billing_mode": "PAY_PER_REQUEST",
        "hash_key": "id",
        "name": "wing-counter-cloud.Counter-c866f225"
      }
    },
    "aws_iam_role": {
      "root_testreset_IamRole_96AB4BE3": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/test:reset/IamRole",
            "uniqueId": "root_testreset_IamRole_96AB4BE3"
          }
        },
        "assume_role_policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Principal\":{\"Service\":\"lambda.amazonaws.com\"},\"Effect\":\"Allow\"}]}"
      }
    },
    "aws_iam_role_policy": {
      "root_testreset_IamRolePolicy_6D3DF6A9": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/test:reset/IamRolePolicy",
            "uniqueId": "root_testreset_IamRolePolicy_6D3DF6A9"
          }
        },
        "policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Action\":[\"dynamodb:UpdateItem\"],\"Resource\":[\"${aws_dynamodb_table.root_cloudCounter_E0AC1263.arn}\"],\"Effect\":\"Allow\"},{\"Action\":[\"dynamodb:GetItem\"],\"Resource\":[\"${aws_dynamodb_table.root_cloudCounter_E0AC1263.arn}\"],\"Effect\":\"Allow\"}]}",
        "role": "${aws_iam_role.root_testreset_IamRole_96AB4BE3.name}"
      }
    },
    "aws_iam_role_policy_attachment": {
      "root_testreset_IamRolePolicyAttachment_87C12602": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/test:reset/IamRolePolicyAttachment",
            "uniqueId": "root_testreset_IamRolePolicyAttachment_87C12602"
          }
        },
        "policy_arn": "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
        "role": "${aws_iam_role.root_testreset_IamRole_96AB4BE3.name}"
      }
    },
    "aws_lambda_function": {
      "root_testreset_271DE846": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/test:reset/Default",
            "uniqueId": "root_testreset_271DE846"
          }
        },
        "environment": {
          "variables": {
            "DYNAMODB_TABLE_NAME_49baa65c": "${aws_dynamodb_table.root_cloudCounter_E0AC1263.name}",
            "WING_FUNCTION_NAME": "test-reset-c8e494b2"
          }
        },
        "function_name": "test-reset-c8e494b2",
        "handler": "index.handler",
        "publish": true,
        "role": "${aws_iam_role.root_testreset_IamRole_96AB4BE3.arn}",
        "runtime": "nodejs18.x",
        "s3_bucket": "${aws_s3_bucket.root_Code_02F3C603.bucket}",
        "s3_key": "${aws_s3_object.root_testreset_S3Object_782B6FB2.key}",
        "timeout": 30,
        "vpc_config": {
          "security_group_ids": [],
          "subnet_ids": []
        }
      }
    },
    "aws_s3_bucket": {
      "root_Code_02F3C603": {
        "//": {
          "metadata": {
            "path": "root/Default/Code",
            "uniqueId": "root_Code_02F3C603"
          }
        },
        "bucket_prefix": "code-c84a50b1-"
      }
    },
    "aws_s3_object": {
      "root_testreset_S3Object_782B6FB2": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/test:reset/S3Object",
            "uniqueId": "root_testreset_S3Object_782B6FB2"
          }
        },
        "bucket": "${aws_s3_bucket.root_Code_02F3C603.bucket}",
        "key": "<ASSET_KEY>",
        "source": "<ASSET_SOURCE>"
      }
    }
  }
}
```

## preflight.js
```js
const $stdlib = require('@winglang/sdk');
const $outdir = process.env.WING_SYNTH_DIR ?? ".";
const $wing_is_test = process.env.WING_IS_TEST === "true";
const $AppBase = $stdlib.core.App.for(process.env.WING_TARGET);
const cloud = require('@winglang/sdk').cloud;
class $Root extends $stdlib.std.Resource {
  constructor(scope, id) {
    super(scope, id);
    const counter = this.node.root.newAbstract("@winglang/sdk.cloud.Counter",this,"cloud.Counter",{ initial: 0 });
    this.node.root.newAbstract("@winglang/sdk.cloud.Function",this,"test:reset",new $stdlib.core.Inflight(this, "$Inflight1", {
      code: $stdlib.core.NodeJsCode.fromFile(require.resolve("./proc1/index.js".replace(/\\/g, "/"))),
      bindings: {
        counter: {
          obj: counter,
          ops: ["dec","inc","peek","reset"]
        },
      }
    })
    );
  }
}
class $App extends $AppBase {
  constructor() {
    super({ outdir: $outdir, name: "reset", plugins: $plugins, isTestEnvironment: $wing_is_test });
    if ($wing_is_test) {
      new $Root(this, "env0");
      const $test_runner = this.testRunner;
      const $tests = $test_runner.findTests();
      for (let $i = 1; $i < $tests.length; $i++) {
        new $Root(this, "env" + $i);
      }
    } else {
      new $Root(this, "Default");
    }
  }
}
new $App().synth();

```

## proc1/index.js
```js
async handle() {
  const { counter } = this;
  {((cond) => {if (!cond) throw new Error(`assertion failed: '((await counter.peek()) === 0)'`)})(((await counter.peek()) === 0))};
  (await counter.inc());
  {((cond) => {if (!cond) throw new Error(`assertion failed: '((await counter.peek()) === 1)'`)})(((await counter.peek()) === 1))};
  (await counter.inc());
  {((cond) => {if (!cond) throw new Error(`assertion failed: '((await counter.peek()) === 2)'`)})(((await counter.peek()) === 2))};
  (await counter.inc(10));
  {((cond) => {if (!cond) throw new Error(`assertion failed: '((await counter.peek()) === 12)'`)})(((await counter.peek()) === 12))};
  (await counter.reset());
  {((cond) => {if (!cond) throw new Error(`assertion failed: '((await counter.peek()) === 0)'`)})(((await counter.peek()) === 0))};
  (await counter.reset(88));
  {((cond) => {if (!cond) throw new Error(`assertion failed: '((await counter.peek()) === 88)'`)})(((await counter.peek()) === 88))};
}

```
