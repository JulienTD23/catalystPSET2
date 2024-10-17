function level_10() {
    const text = document.getElementById("l10");
    text.innerHTML = "Hello World!";
}

function level_11() {
    const elem11 = document.getElementById("l11");
    
    if(elem11.style.backgroundColor == "yellow") {
        elem11.style.backgroundColor = "inherit";
    } else {
        elem11.style.backgroundColor = "yellow";
    }
}

function level_13() {
    let num = Number(document.getElementById("l13_input").value);
    let out = document.getElementById("l13_output");
    out.innerHTML = "";

    for (let i = 0; i <= num; i++) {
        out.innerHTML += "*".repeat(i) + "<br>" + "<br>";
    }
}