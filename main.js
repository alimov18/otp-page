const OPTInputs = document.querySelectorAll("input");
const button = document.querySelector("button");

window.addEventListener('load', () => OPTInputs[0].focus());
OPTInputs.forEach((input) => {
    input.addEventListener("input", () => {
        const currentInput = input;
        const nextInput = input.nextElementSibling;

        if (currentInput.value.length > 1 && currentInput.value.length == 2) {
            currentInput.value = "";
        } if (nextInput !== null && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        } if (!OPTInputs[3].disabled && !OPTInputs[3].value !== "") {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    input.addEventListener("kkeyup", (e) => {
        if (e.key === "Backspace") {
            if (input.previousElementSibling !== null) {
                e.target.value = "";
                e.target.setAttribute("disabled", true);
                input.previousElementSibling.focus();

            }
        }
    });
    if (input.value >1) {
        alert("Har bir katakka faqat bitta raqam yoziladi!");
        nextInput.hasAttribute("disabled");
    }
})