import { CardItem } from "./CardItems"
import { perosnas } from "../data/personas"
export const GridCard = () => {
    return (
        <>
            <div className = "row row.cols-1 row-cols-md-4 row-cols-lg-3 g-4">
                {
                    perosnas.map(({id, nombre, apellido, edad, url}) => {
                        return(
                            <CardItem key = {id} id= {id} nombre = {nombre} apellido = {apellido} edad= {edad} url = {url} />
                        )
                    })
                }
            </div>
        </>
    )
}