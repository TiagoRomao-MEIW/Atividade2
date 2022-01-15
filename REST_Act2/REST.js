async function getREST() {

    const URL = 'https://cors-anywhere.herokuapp.com/http://ken.utad.pt:8181/check/';
    const NumConta = '12345678';
    const Valor = '1000';
    const response = await fetch(URL + NumConta + '/amount/' + Valor);

    const data = await response.json();
    const {
        date,
        checkID
    } = data;

    document.getElementById('GetDate').textContent = date;
    document.getElementById('GetCheckID').textContent = checkID;
    /* 
        //testes
        console.log(data.date, ', vindo do data.');
        console.log(data.checkID, ', vindo do data.');
        console.log(date, ', vindo da const');
        console.log(checkID, ', vindo da const');
     */
}
getREST();


/* // XMLHttpRequest
const URL = 'https://cors-anywhere.herokuapp.com/http://ken.utad.pt:8181/check/12345678/amount/1000';
const request = new XMLHttpRequest();
request.open ('GET', URL);
request.send();
request.onload = ()=>{
    if(request.status === 200){
        
        console.log(JSON.parse(request.responseText));
    }
    else{
        console.log('error ${request.status}')
    }
}  */
