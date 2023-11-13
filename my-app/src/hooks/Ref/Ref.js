import { useRef } from "react";
export default function Ref() {
    const lastPara = useRef() 

const moveDown = ()=> {
    console.log(lastPara.current);
    lastPara.current.scrollIntoView({
        behavior : "smooth"
    })

}


  return (
    <>
    
    <h1>GO TO PARAGHRAPH</h1>
    <button onClick={moveDown}>move down</button>
    <div>
        <section>
            <img src="https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"/>
            <p>lorem ipsum dolor fggjjf fkgkgkg rgkfk fkkffk fkffkf ffffkk dfffff  ffffff vfkkfkg</p>
        </section>
        <section>
            <img src="https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"/>
            <p>lorem ipsum dolor fggjjf fkgkgkg rgkfk fkkffk fkffkf ffffkk dfffff  ffffff vfkkfkg</p>
        </section> 
         <section>
            <img src="https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"/>
            <p>lorem ipsum dolor fggjjf fkgkgkg rgkfk fkkffk fkffkf ffffkk dfffff  ffffff vfkkfkg</p>
        </section>
        <section>
            <img src="https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"/>
            <p>lorem ipsum dolor fggjjf fkgkgkg rgkfk fkkffk fkffkf ffffkk dfffff  ffffff vfkkfkg</p>
        </section>
        <section>
            <img src="https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"/>
            <p>lorem ipsum dolor fggjjf fkgkgkg rgkfk fkkffk fkffkf ffffkk dfffff  ffffff vfkkfkg</p>
        </section>
        <section>
            <img src="https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"/>
            <p  ref= {lastPara}>lorem ipsum dolor fggjjf fkgkgkg rgkfk fkkffk fkffkf ffffkk dfffff  ffffff vfkkfkg</p>
        </section>
    </div>
    
    
    
    </>
   
  )
}
