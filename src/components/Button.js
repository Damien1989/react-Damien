import { useState } from 'react';

function Button() {

    const [count, setCount] = useState(0);

    function handleclick(){
        setCount(count +1);
    }
return (
    <button onClick= {handleclick}>Vous avez cliqué {count} fois</button>
)
}
export default Button;