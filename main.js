const mots = ["test", "ecole", "maison", "lyon", "paris"];

function suggestWords() {
    const inputvalue = document.querySelector("#inputwords").value;

    let correspondingWords = [];

    for (let i = 0; i < mots.length; i++) {
        if (mots[i].startsWith(inputvalue)) {
            correspondingWords.push(mots[i]);
        }
    }

    let div = document.querySelector("#mots");
    div.innerHTML = correspondingWords.join(", ");
}

let InputWords = document.querySelector("#inputwords");
InputWords.addEventListener("input", suggestWords);
