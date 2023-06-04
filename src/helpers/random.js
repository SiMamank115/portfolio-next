export default function random(max = 0, min = 0, round = false) {
    if (isNaN(max) || isNaN(min) || !isFinite(max) || !isFinite(min)) return 0;
    let res = Math.random() * (max - min) + min;
    round && (res = Math.round(res));
    return round? res : res.toFixed(2);
}
