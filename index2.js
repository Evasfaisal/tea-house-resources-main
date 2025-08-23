document.getElementById('add-button').addEventListener('click',function(e){
    e.preventDefault()
    
    const bank=document.getElementById('numbe-11').value
    
    const amount= parseInt(document.getElementById('Add-amount').value)
    
    const pin=document.getElementById('digit-4').value
    
    const currentCash= parseInt(document.getElementById('cash').innerText)
    
    if(bank.length<11 ){
        alert('odo')
        return;
    }
    if (pin.length <4) {
        alert("try again")
        return;
    }
    
    const totalCash= amount + currentCash;
    document.getElementById('cash').innerText=totalCash
    console.log(totalCash)
})

document.getElementById('monyadd-sec').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('form2').style.display='none'
    document.getElementById('form1').style.display='block'
})
document.getElementById('Cashout-sec').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('form1').style.display='none'
    document.getElementById('form2').style.display='block'
})





document.getElementById('add-button2').addEventListener('click',function(e){
    e.preventDefault()
    
    const bank=document.getElementById('numbe-11-2').value
    
    const amount= parseInt(document.getElementById('Add-amount-2').value)
    
    const pin=document.getElementById('digit-4-2').value
    
    const currentCash= parseInt(document.getElementById('cash').innerText)
    
    if(bank.length<11 ){
        alert('odo')
        return;
    }
    if (pin.length <4) {
        alert("try again")
        return;
    }
    
    const totalCash= currentCash - amount;
    document.getElementById('cash').innerText=parseInt(totalCash)

})



