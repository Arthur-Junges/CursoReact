import SayMyName from '../components/SayMyName'
import Pessoa from '../components/Pessoa'

function Aula02() {

  const nome = "Maria"

  return (
    <div>
      <h2>Aula 02 - Props</h2>

      <SayMyName nome="Mateus" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />

      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissao="programador" 
        foto="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default Aula02