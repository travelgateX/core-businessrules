import { Rule } from "../main";


export class TestRuleContains implements Rule {
    public status: boolean;
    public code: string;
    public msg: string;
    private completeString: string
    private containData: string
    constructor(code: string, completeString: string, containData: string) {
        this.code = code;
        this.completeString = completeString;
        this.containData = containData;
        this.status = true;
    }
    public process(): boolean {
        console.log("Processing " + this.code);
        if (this.completeString.includes(this.containData)) {
            this.status = true;
            console.log(this.code + " PASS");
            return this.status;
        }
        this.msg = "string '" + this.completeString + "' not contains '" + this.containData;
        console.log(this.code + " FAIL");
        return this.status;
    }


}