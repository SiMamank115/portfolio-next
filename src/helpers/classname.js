export default function Compact(...args) {
    let res = "";
    for (let arg of args) res += arg + " ";
    return res;
}
