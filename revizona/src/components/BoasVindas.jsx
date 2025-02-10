
// function BoasVindas(props) {
    function BoasVindas({nome, mensagns}) {
  return (
    <div className="conteiner-boasvindas">
       Olá, {nome}!
       {mensagns}
        {/* <button onClick={() => console.log(props)}>log</button> */}
    </div>
  )
}

export default BoasVindas