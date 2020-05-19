# Business Rules
Simple interface to create custom business rules that you can process on your code and check if pass or not

# Example
```js

import { Rule } from "core-businessrules";
import { RulesManager } from "core-businessrules";

export class TestRule implements Rule {
    public status: boolean;
    public code: string;
    public msg: string;
    private data: boolean;
    constructor(code: string, data: boolean) {
        this.code = code;
        this.data = data;
        this.status = true;
    }
    public process(): boolean {
        console.log("Processing " + this.code);
        if (!this.data){
            this.msg = "Fails rule";
            this.status = false;
        } else {
           this.msg = "Pass rule";
        }
        return this.status;
    }


}

var ruleObject = new TestRule();
var rm = RulesManager.get();

rm.addRule(ruleObject, "RuleGroupName");

var result = rm.process("RuleGroupName");

if (!result){
    console.log("FAILS");
} else {
    console.log("PASS");
}

for(var rule of rm.getAllRules("RuleGroupName")){
    console.log("******");
    console.log("Rule Name: " + rule.code);
    console.log("Rule status: " + rule.status.toString());
    console.log("Rule msg: " + rule.msg);
}

```

# Run test
You can run the test
```bash
npm run start-test
```

## Contributing

Refer to [CONTRIBUTING.md](https://gitlab.xmltravelgate.com/travelgateX/core-businessrules/blob/master/CONTRIBUTING.md)
