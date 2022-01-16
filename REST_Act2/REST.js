
async function getREST() {
    //const URL = 'http://ken.utad.pt:8181/check/';

    // utilização de um proxy CORS Policy
    const URL = 'https://cors-anywhere.herokuapp.com/http://ken.utad.pt:8181/check/';
    const NumConta = '12345678';
    const Valor = '1000';
    const response = await fetch(URL + NumConta + '/amount/' + Valor);
    const data = await response.json();
    const {date, checkID} = data;

    document.getElementById('pResultado').textContent =
        'Resultado do método Get para a conta ' + NumConta + ' e valor ' + Valor;
    document.getElementById('GetDate').textContent = date;1
    document.getElementById('GetCheckID').textContent = checkID;

    //testes
    //console.log(data);
    console.log('Número de conta: ', NumConta);
    console.log('Valor do cheque: ', Valor);
    console.log('Resultado | Data: ', data.date);
    console.log('Resultado | Número do cheque: ', data.checkID); 
}

getREST();