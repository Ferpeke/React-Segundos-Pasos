import { useState } from "react"
export const CardItem = ({id, nombre, apellido, edad, url}) => {
    const [loading,setLoaling] = useState(false);
    const handleLoad = () =>{
        setLoaling(true)
    }
    return (
        <>
            <div class="card" style={{width: "18rem;"}}>
                <img onClick={handleLoad}  src={url} class="card-img-top" alt={id}/>
                <div class ="card-body">
                <h5 class ="card-title">{nombre} {edad}</h5>
                <p class ="card-text">{apellido}</p>
                {
                    loading ? (<p>Es mayor de 25</p>) : (<div className="spinner-border text-danger" role="status">
                                <span className="visually-hidden">Loading...</span>
                    </div>)

                }
                </div>
            </div>

        </>
    )
}