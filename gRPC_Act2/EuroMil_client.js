//Pacotes necessários
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
//Caminho do ficheiro Protocol Buffers (versão proto3)
const PROTO_PATH = "./EuroMil.proto";

var protoObj = protoLoader.loadSync(PROTO_PATH);
const EMilDefinition = grpc.loadPackageDefinition(protoObj).Euromil;


const client = new EMilDefinition('ken.utad.pt:8282', grpc.credentials.createInsecure());

// Envio do pedido em que key=
client.RegisterEuroMil({
  "checkID": "1234567812345678",
  "key":"10 20 30 40 50 60 70"
}, (err, message) => {
    if (err) throw err
    console.log(message)
  });
