import { Rule } from "../main";


export class TestRuleXgtY implements Rule {
    public status: boolean;
    public msg: string;
    public code: string;
    private x: Number;
    private y: Number;
    constructor(code: string, x: Number, y: Number) {
        this.code = code;
        this.x = x;
        this.y = y;
        this.status = true;
    }
    public process(): boolean {
        console.log("Processing " + this.code);
        if (this.x >= this.y) {
            this.status = true;
            console.log(this.code + " PASS");
            return this.status;
        }
        console.log(this.code + " FAILS");
        this.msg = "Error, X is less than y (X: " + this.x + ", Y: " + this.y + ")";
        return this.status;
    }


}