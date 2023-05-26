const url = "https://www.w3schools.com/js/js_callback.asp";

function loadScript (src){
    return new Promise( (resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
        resolve(script);
    };
    script.onerror = () => {
        reject(new Error(`Script load error: ${src}`));
    }
    document.head.append(script);
});
}
loadScript(url)
  .then((script) => console.log(script))
  .catch((error) => console.log(error));
