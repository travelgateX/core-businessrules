import { RulesManager } from "../main";


export class BaseResolver {
    protected name = "Basic";
    protected resultRules: Boolean = false;
    public resolver() {
        var rm = RulesManager.get();
        this.resultRules = rm.process(this.name);
        if (!this.resultRules) {
            for (var rule of rm.getAllRules(this.name)) {
                if (!rule.status) {
                    console.log("Error in the rule " + rule.code);
                    console.log("Message: " + rule.msg);
                }
            }
        }
        console.log("StatusProcess: " + this.resultRules.toString());
    }
    public getName(): string {
        return this.name;
    }
}