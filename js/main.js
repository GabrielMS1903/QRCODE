//container
const container = document.querySelector(".container");
//btn
const qrCodeBtn = document.querySelector("#qr-form > button");
//input
const qrCodeInput = document.querySelector("#qr-form > input")
//img
const qrCodeImg = document.querySelector("#qr-code > img")

    // events
    function generateQrCode() {
        const qrCodeInputValue = qrCodeInput.value; //taking the value of the input
     if (!qrCodeInputValue) return  //When you to digit someone,  will to take


     qrCodeBtn.innerHTML = "Gerando código..."  //taking the text of the button

 qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`  //dynamic api link

 qrCodeImg.addEventListener("load" , () => {  //Why the load ? Cause the js will to leave the active works, just when the img to load
    container.classList.add("active")  //This will the start what matters with the qrcode
    qrCodeBtn.innerHTML = "Código criado :D"  //sECOND inner, why? Cause the other will to stay fixed at the same msg without this.
 })


    }

    qrCodeBtn.addEventListener("click", () => {
        generateQrCode();  //when ya click to start the qrcode
    });;


//when you tap the enter
    qrCodeInput.addEventListener("keydown", (e) => { //the "e" is the same that "e.code"
      if(e.code === "Enter"){
        generateQrCode();
      }
    });;

   
   
    //For crash
    qrCodeInput.addEventListener("keyup" , () => {
        if(!qrCodeInput.value) {
            container.classList.remove("active")  //wHEN the user to remove that wrote 
    qrCodeBtn.innerHTML = "Gerador de QR CODE"  //back to the first msg
 

        }
    })


    