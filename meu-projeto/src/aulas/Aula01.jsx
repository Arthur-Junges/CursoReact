import HelloWorld from '../components/HelloWorld'

function Aula01() {

  const name = "Mateus"
  const newName = name.toLocaleUpperCase()

  const url = 'https://via.placeholder.com/150'

  function sum (a, b){
    return a + b
  }

  return (
    <div>
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1 , 2)}</p>
      <img src={url} alt='Minha Imagem' />
      <HelloWorld/>
    </div>
  )
}

export default Aula01