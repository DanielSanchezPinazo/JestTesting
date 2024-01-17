
// console.log(process.env);


const { USERNAME, USERDOMAIN, windir, VSCODE_GIT_ASKPASS_NODE } = process.env;

// console.table({USERNAME, USERDOMAIN, windir, VSCODE_GIT_ASKPASS_NODE});

const heroes: string[] = [ "Flash", "Superman", "DeadPool", "Batman"];

const [ , , , bat ] = heroes;

console.log(bat);
