const color = () => {
 
    const randomno = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomno.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode)
    
}
document.getElementById("btn").addEventListener(
    "click",
    color
)
color();