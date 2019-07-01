/**
 * json5
 *
 * @author GuoBin on
 */

const JSON5 = require('json5');
const str = `{"name":"jack","age":22}`;
const person = JSON5.parse(str);
console.log(person);