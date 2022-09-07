const input = document.querySelector(".theInput");
const btn = document.querySelector("#btn");
const rdb = document.querySelector(".radioB1");
const output = document.querySelector(".theOutput");

rdb.checked=true;

function onChange() {
        val = parseFloat(clss.value);
        frnts.innerHTML += (val + 32) * 1.8;
}

btn.addEventListener("click", _ => {
    output.value = rdb.checked ? parseInt(input.value).cel2fah() : parseInt(input.value).fah2cel();
})

Number.prototype.cel2fah = function () {
        return this * 9 / 5 + 32;
}

Number.prototype.fah2cel = function () {
        return Math.ceil((this - 32) * 5 / 9);

}