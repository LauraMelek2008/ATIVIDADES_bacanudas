import { useState } from 'react';
import './Demo1.css'

function Demo1() {
    const [estado, setEstado] = useState(0)
    let cornometro = 10;
    function incrementoEstado(){
        setEstado(estado + 1)
    }

function incrementaCornometro(){
    cornometro++
    console.log(cornometro)
}
   function alertarUsuario(){
alert("Corra para as montanhas!")
   }
  return (
    <div className='container-demo1'>
       <h2>Demo1</h2>
       <button onClick={() => {alert("Executei uma arrow funtion")}}>Ex Arrow Function</button>
       <button onClick={alertarUsuario}>clica em mim</button>
<div>
    Cornometro: {cornometro}
    <button onClick={incrementaCornometro}>+</button>
</div>

<div>
    estado: {estado}
    <button onClick={incrementoEstado}>+</button>
</div>
       
    </div>
  )
}

export default Demo1