function encodeAndDecodeMessages() {
    let [encodeBtn, decodeBtn] = document.querySelectorAll("button");
    let [msgEncode, msgDecode] = document.querySelectorAll("textarea");

    encodeBtn.addEventListener("click", encodeMessage);
    decodeBtn.addEventListener("click", decodeMessage);

    function encodeMessage () {
        let originalMsg = msgEncode.value;
        let originalArr = originalMsg.split("") ;
        let encodedArr = [];

        
        for (let letter of originalArr) {
            let ascii = Number(letter.charCodeAt())+5;
            let encoded  = String.fromCharCode(ascii);
            encodedArr.push(encoded);
        }
        
        msgDecode.value = encodedArr.join("");
        msgEncode.value= "";
    }
    
    function decodeMessage (text) {
        let encodedMsg = msgDecode.value;
        let decodedArr = encodedMsg.split("");
        let decodedNewArr = [];
        
        for (let letter of decodedArr) {
            let ascii = Number(letter.charCodeAt())-5;
            let encoded  = String.fromCharCode(ascii);
            decodedNewArr.push(encoded);
        }
        msgDecode.value = decodedNewArr.join("");
    }

}