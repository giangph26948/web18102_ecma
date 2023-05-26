const url = "https://www.w3schools.com/js/js_callback.asp";

function loadScript (src,callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        callback(null,script);
    };
    script.onerror = () => {
        callback(new Error(`Script load error: ${src}`));
    }
    document.head.append(script);
}
loadScript(url, (error,script) => {
    if (error){
        console.log(error);
    }
    console.log(script);
});