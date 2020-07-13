window.addEventListener("load", setAge);

function setAge() {
    let infoElement = document.querySelector("#shortInfo");
    let aElement = document.createElement('a');
    let age = String(moment().diff("1999-07-30", "years"));

    aElement.href = "./files/resume/resume.pdf";
    aElement.target = "_blank";
    aElement.text = "read cv";
    infoElement.textContent = `${age} years old · bandeirantes, paraná, brasil · `;
    infoElement.appendChild(aElement);
}
