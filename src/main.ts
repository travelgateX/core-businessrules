export interface Rule {
    code: string;
    status: boolean;
    msg: string;
    process(): boolean
}

export class RulesManager {
    private rulesPerResolver: { [groupName: string]: Rule[] } = {};
    private stopOnFail: boolean = true;
    private static _instance: RulesManager;

    static get(): RulesManager {
        if (!this._instance) {
            this._instance = new RulesManager();

        }
        return this._instance;
    }
    /**
     * Set to stop if fails any rule for group of rules or process all
     * 
     * @param value true or false
     */
    public setStopFail(value: boolean) {
        this.stopOnFail = value;
    }
    /**
     * Get all business rules for that rules group
     * 
     * @param groupName Name of group
     */
    public getAllRules(groupName: string): Rule[] {
        return this.rulesPerResolver[groupName];
    }
    /**
     * Add Rule to list of rules
     */
    public addRule(rule: Rule, groupName: string) {

        var rules: Rule[] = [];
        if (groupName in this.rulesPerResolver) {
            rules = this.rulesPerResolver[groupName];
        } else {
            this.rulesPerResolver[groupName] = rules;
        }
        rules.push(rule);
    }

    /**
     * Get Rule from group
     */
    public getRule(code: string, groupName: string) {
        for (var rule of this.rulesPerResolver[groupName]) {
            if (rule.code == code) {
                return rule;
            }
        };
        return null;
    }

    /**
     * Add Rule to list of rules
     */
    public deleteRule(code: string, groupName: string) {
        var new_rules: Rule[] = [];

        for (var rule of this.rulesPerResolver[groupName]) {
            if (rule.code != code) {
                new_rules.push(rule);
            }
        };
        this.rulesPerResolver[groupName] = new_rules;
    }
    /**
     * Remove all rules per resolver
     */
    public cleanRules(groupName) {
        this.rulesPerResolver[groupName] = [];
    }
    /**
     * Remove all rules
     */
    public cleanAllRules() {
        this.rulesPerResolver = {};
    }
    /**
     * Process all rules
     */
    public process(groupName: string): boolean {
        var returnValue = true;
        if (groupName in this.rulesPerResolver) {
            for (let rule of this.rulesPerResolver[groupName]) {
                if (!rule.process()) {
                    console.log("Can not pass rule: " + rule.code);
                    returnValue = false;
                    if (this.stopOnFail) {
                        break;
                    }
                }
            }
        }
        return returnValue;
    }

}