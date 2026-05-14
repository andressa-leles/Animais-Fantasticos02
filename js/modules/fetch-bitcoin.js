export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(".btc-preco");
      // bitcoin é o nome correto do parâmetro que você definiu acima
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
      console.log(bitcoin);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
