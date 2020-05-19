import { example_resolver_fails } from "./example_resolver_fails";
import { example_resolver_ok} from "./example_resolver_ok";



console.log("TRYING FAILS RESOLVER");
var resolverFails = new example_resolver_fails("ResolverFails");
resolverFails.resolver();
console.log("********************************************");
console.log("TRYING OK RESOLVER");
var resolverOK = new example_resolver_ok("ResolverOK");
resolverOK.resolver();
console.log("********************************************");
