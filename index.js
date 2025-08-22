document.getElementById("buttonid").addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumber= 12345678910
    const digitNumber=4343

   const numberValue=document.getElementById("phone-num").value
   const mobileNumberInt=parseInt(numberValue)

    const digitNum=document.getElementById("digit-num").value
    const digitNumInt=parseInt(digitNum)
    
    if (mobileNumber ===mobileNumberInt && digitNumber===digitNumInt) {
       window.location.href="./index1.html"
    }else{
       alert('invalid location')
    }

    console.log(mobileNumberInt,digitNumInt)
})
