import { Card, Button, CardFooter, CardHeader, Image, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, Input, ModalFooter, DateInput, Textarea } from "@nextui-org/react"
import { Pencil, Trash2 } from "lucide-react"
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Tarjeta({id, titulo, fecha, experiencia, comentario, imagen}) {
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
    const {dataHistoria, setDataHistoria} = useContext(GlobalContext)
    const {historias, setHistorias} = useContext(GlobalContext)

    function controladorBotonEditar(){
        const historia = {
            id: id,
            titulo: titulo,
            experiencia: experiencia,
            comentario: comentario,
            imagen: imagen,
            fecha: fecha
        }
        setDataHistoria(historia)
       
        {onOpen()}
    }

    function controladorBorrarHistoria(){
        async function borrarPost(){
            const url = new URL('https://json-server-delta-seven.vercel.app/historias')
            const urlDelStr = 'https://json-server-delta-seven.vercel.app/historias/'+id
            const urlDel = new URL(urlDelStr)
            await fetch(urlDel, {
              method: 'DELETE',
            })
    
            const usuarios = await fetch(url)
             
            setHistorias(await usuarios.json())
          }

          borrarPost()
    }
    
    function controladorFormTitulo(e){
         const historia = {
             id: dataHistoria.id,
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
            id: dataHistoria.id,
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
            id: dataHistoria.id,
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
            id: dataHistoria.id,
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
            id: dataHistoria.id,
            titulo: dataHistoria.titulo,
            experiencia: dataHistoria.experiencia,
            comentario: dataHistoria.comentario,
            imagen: e,
            fecha: dataHistoria.fecha
        }
        setDataHistoria(historia)
    }

    function controladorActualizaHistorias(){

        async function put(){
            const url = new URL('https://json-server-delta-seven.vercel.app/historias')
            const urlDelStr = 'https://json-server-delta-seven.vercel.app/historias/'+id
            const urlDel = new URL(urlDelStr)
       
            await fetch(urlDel, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(dataHistoria)
            })
    
            const usuarios = await fetch(url)
             
            setHistorias(await usuarios.json())
          }
          
          put()
        {onClose()}
    }

    return (
      <>
        <Card isFooterBlurred className="w-[30%] h-[23em] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">{titulo}</p>
                <h4 className="text-white/90 font-medium text-xl">{fecha}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 h-full object-cover"
                src={imagen}
            />
            <CardFooter className="h-20 absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center pt-[4.5rem]">
                    <div className="flex flex-col">
                        <p className="text-tiny text-white/60">{experiencia}</p>
                        <p className="text-tiny text-white/60">{comentario}</p>
                    </div>
                </div>
                <Button radius="full" size="sm" className="h-12 bg-transparent border-2 border-[#fbff00]" onPress={controladorBotonEditar}>
                <Pencil color="#fbff00" className=""/>
                </Button>
                <Button radius="full" size="sm" className="mx-3 h-12 bg-transparent border-2 border-[#ff0000]" onPress={controladorBorrarHistoria}>
                <Trash2 color="#ff0000"/>
                </Button>
            </CardFooter>
        </Card>
        <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar historia: {dataHistoria.titulo}</ModalHeader>
              <ModalBody>
                    <Input 
                        label="Fecha"
                        placeholder="Ejemplo: Enero de 2024"
                        variant="bordered"
                        defaultValue={dataHistoria.fecha}
                        onValueChange={(data)=>{controladorFormFecha(data)}}
                    />
                    <Input
                    label="Título"
                    variant="bordered"
                    defaultValue={dataHistoria.titulo}
                    onValueChange={(data)=>{controladorFormTitulo(data)}}
                    />
                    <Textarea
                        label="Experiencia"
                        variant="bordered"
                        defaultValue={dataHistoria.experiencia}
                        onValueChange={(data)=>{controladorFormExp(data)}}
                    />
                    <Textarea
                        label="Comentario"
                        variant="bordered"
                        defaultValue={dataHistoria.comentario}
                        onValueChange={(data)=>{controladorFormCom(data)}}
                    />
                    <Input
                    label="Imagen"
                    placeholder="URL"
                    variant="bordered"
                    defaultValue={dataHistoria.imagen}
                    onValueChange={(data)=>{controladorFormImagen(data)}}
                    />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={controladorActualizaHistorias}>
                  Actualizar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </>
    )
  }
  
  export default Tarjeta

