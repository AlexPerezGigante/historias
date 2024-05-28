import { Button } from "@nextui-org/react"
import Tarjeta from "./Tarjeta"
import { Plus } from "lucide-react"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../context/GlobalContext"
import Historias from "../bd/bd.json"


function Tarjetas() {

    const db = [{
        "id":"1",
        "titulo": "Tailandia",
        "fecha": "Junio de 2023",
        "experiencia": "Exploración de las playas paradisíacas y la bulliciosa vida urbana de Bangkok. Una combinación perfecta entre relajación y aventura.",
        "comentario": "Desde las vibrantes calles de Bangkok hasta las serenas islas del sur, este viaje a Tailandia fue una experiencia inolvidable. Nos sumergimos en la cultura tailandesa, probando deliciosas comidas callejeras, visitando antiguos templos y participando en emocionantes excursiones de buceo. Cada día nos sorprendía con nuevas maravillas y nos dejaba con recuerdos duraderos.",
        "imagen": "https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
      },
      {
        "id":"1",
        "titulo": "Tailandia",
        "fecha": "Junio de 2023",
        "experiencia": "Exploración de las playas paradisíacas y la bulliciosa vida urbana de Bangkok. Una combinación perfecta entre relajación y aventura.",
        "comentario": "Desde las vibrantes calles de Bangkok hasta las serenas islas del sur, este viaje a Tailandia fue una experiencia inolvidable. Nos sumergimos en la cultura tailandesa, probando deliciosas comidas callejeras, visitando antiguos templos y participando en emocionantes excursiones de buceo. Cada día nos sorprendía con nuevas maravillas y nos dejaba con recuerdos duraderos.",
        "imagen": "https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
      },
      {
        "id":"1",
        "titulo": "Tailandia",
        "fecha": "Junio de 2023",
        "experiencia": "Exploración de las playas paradisíacas y la bulliciosa vida urbana de Bangkok. Una combinación perfecta entre relajación y aventura.",
        "comentario": "Desde las vibrantes calles de Bangkok hasta las serenas islas del sur, este viaje a Tailandia fue una experiencia inolvidable. Nos sumergimos en la cultura tailandesa, probando deliciosas comidas callejeras, visitando antiguos templos y participando en emocionantes excursiones de buceo. Cada día nos sorprendía con nuevas maravillas y nos dejaba con recuerdos duraderos.",
        "imagen": "https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
      },
      {
        "id":"1",
        "titulo": "Tailandia",
        "fecha": "Junio de 2023",
        "experiencia": "Exploración de las playas paradisíacas y la bulliciosa vida urbana de Bangkok. Una combinación perfecta entre relajación y aventura.",
        "comentario": "Desde las vibrantes calles de Bangkok hasta las serenas islas del sur, este viaje a Tailandia fue una experiencia inolvidable. Nos sumergimos en la cultura tailandesa, probando deliciosas comidas callejeras, visitando antiguos templos y participando en emocionantes excursiones de buceo. Cada día nos sorprendía con nuevas maravillas y nos dejaba con recuerdos duraderos.",
        "imagen": "https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
      },
      {
        "id":"1",
        "titulo": "Tailandia",
        "fecha": "Junio de 2023",
        "experiencia": "Exploración de las playas paradisíacas y la bulliciosa vida urbana de Bangkok. Una combinación perfecta entre relajación y aventura.",
        "comentario": "Desde las vibrantes calles de Bangkok hasta las serenas islas del sur, este viaje a Tailandia fue una experiencia inolvidable. Nos sumergimos en la cultura tailandesa, probando deliciosas comidas callejeras, visitando antiguos templos y participando en emocionantes excursiones de buceo. Cada día nos sorprendía con nuevas maravillas y nos dejaba con recuerdos duraderos.",
        "imagen": "https://blog.localadventures.mx/wp-content/uploads/2023/04/hermosas-montanas-ratchaprapha-dam-parque-nacional-khao-sok-provincia-surat-thani-tailandia-scaled.jpg"
      },
    ]

      const {historias, setHistorias} = useContext(GlobalContext)
      
      useEffect(()=>{
        const datos = Historias.historias
        setHistorias(datos)
      },[])

    

    return (
      <>
      <div className="justify-center mt-20 flex flex-wrap gap-8">
            
      {
        historias.map((element, key)=>{
            return(
                <Tarjeta key={element.id} titulo={element.titulo} fecha={element.fecha} experiencia={element.experiencia} comentario={element.comentario} imagen={element.imagen}></Tarjeta>
            )
        })
      }


      </div>
      <Button radius="full" size="md" className="float-end me-10 h-20 bg-primary-400">
         <Plus className="" color="#000000"/>
        </Button>
      </>
    )
}
export default Tarjetas