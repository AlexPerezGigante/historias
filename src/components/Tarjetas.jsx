import { Button, DateInput, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, Input, useDisclosure } from "@nextui-org/react"
import Tarjeta from "./Tarjeta"
import { Plus } from "lucide-react"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../context/GlobalContext"
import Historias from "../bd/bd.json"



function Tarjetas() {


      const {historias, setHistorias} = useContext(GlobalContext)
      const {dataHistoria, setDataHistoria} = useContext(GlobalContext)
      const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
      
      useEffect(()=>{

        async function buscaHistorias(){
        const url = new URL('https://json-server-delta-seven.vercel.app/historias')
        const usuarios = await fetch(url)
        setHistorias(await usuarios.json())

        }

        buscaHistorias()

      },[])

      function controladorAbrirForm(){
        const historia = {
          id: '',
          titulo:'' ,
          experiencia: '',
          comentario: '',
          imagen: '',
          fecha: ''
        }
        setDataHistoria(historia)
        {onOpen()}
      }

      function controladorFormTitulo(e){
        const historia = {
            id: '',
            titulo: e,
            experiencia: dataHistoria.experiencia,
            comentario: dataHistoria.comentario,
            imagen: dataHistoria.imagen,
            fecha: dataHistoria.fecha
        }
        setDataHistoria(historia)
   }
   function controladorFormFecha(e){
       const historia = {
           id: '',
           titulo: dataHistoria.titulo,
           experiencia: dataHistoria.experiencia,
           comentario: dataHistoria.comentario,
           imagen: dataHistoria.imagen,
           fecha: e
       }
       setDataHistoria(historia)
   }
   function controladorFormExp(e){
       const historia = {
           id: '',
           titulo: dataHistoria.titulo,
           experiencia: e,
           comentario: dataHistoria.comentario,
           imagen: dataHistoria.imagen,
           fecha: dataHistoria.fecha
       }
       setDataHistoria(historia)
   }
   function controladorFormCom(e){
       const historia = {
           id: '',
           titulo: dataHistoria.titulo,
           experiencia: dataHistoria.experiencia,
           comentario: e,
           imagen: dataHistoria.imagen,
           fecha: dataHistoria.fecha
       }
       setDataHistoria(historia)
   }
   function controladorFormImagen(e){
       const historia = {
           id: '',
           titulo: dataHistoria.titulo,
           experiencia: dataHistoria.experiencia,
           comentario: dataHistoria.comentario,
           imagen: e,
           fecha: dataHistoria.fecha
       }
       setDataHistoria(historia)
   }

   function controladorCreaHistorias(){
       console.log(dataHistoria)
       {onClose()}
   }
    

    return (
      <>
      <div className="justify-center mt-20 flex flex-wrap gap-8">
            
      {
        historias.map((element, key)=>{
            return(
                <Tarjeta key={element.id} id={element.id} titulo={element.titulo} fecha={element.fecha} experiencia={element.experiencia} comentario={element.comentario} imagen={element.imagen}></Tarjeta>
            )
        })
      }


      </div>
      <Button radius="full" size="md" className="float-end me-10 h-20 bg-primary-400" onPress={controladorAbrirForm}>
         <Plus className="" color="#000000"/>
      </Button>

        <Modal
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Crear historia</ModalHeader>
              <ModalBody>
              <Input 
                    label="Fecha"
                    placeholder="Ejemplo: Enero de 2024"
                    variant="bordered"
                    onValueChange={(data)=>{controladorFormFecha(data)}}
                    required
                />
                <Input
                  label="Título"
                  variant="bordered"
                  onValueChange={(data)=>{controladorFormTitulo(data)}}
                  required
                />
                <Textarea
                    label="Experiencia"
                    variant="bordered"
                    onValueChange={(data)=>{controladorFormExp(data)}}
                    required
                />
                <Textarea
                    label="Comentario"
                    variant="bordered"
                    onValueChange={(data)=>{controladorFormCom(data)}}
                    required
                />
                <Input
                  label="Imagen"
                  placeholder="URL"
                  variant="bordered"
                  onValueChange={(data)=>{controladorFormImagen(data)}}
                  required
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={controladorCreaHistorias}>
                  Crear
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </>

      
    )
}
export default Tarjetas