import { BaseResolver } from "./resolver";
import { TestRuleXgtY } from "./rule_xgty";
import { TestRuleContains } from "./rule_contains";
import { RulesManager } from "../main";


export class example_resolver_ok extends BaseResolver {
    constructor(name: string) {
        super();
        this.name = name;
        var rulesManager = RulesManager.get();
        rulesManager.setStopFail(false);
        var rulecontains = new TestRuleContains("Rule Contains", "hola tio", "tio");
        var rulexgty = new TestRuleXgtY("Rule X>=Y", 3, 1);
        rulesManager.addRule(rulexgty, this.name);
        rulesManager.addRule(rulecontains, this.name);
    }
    resolver() {
        super.resolver();
        if (this.resultRules) {
            console.log(this.name + " resolver ALL OK");

        } else {
            console.log(this.name + " resolver SOME FAILS");
        }
    }
}