import { Card, Button, CardFooter, CardHeader, Image, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, Input, ModalFooter, DateInput, Textarea } from "@nextui-org/react"
import { Pencil, Trash2 } from "lucide-react"
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Tarjeta({id, titulo, fecha, experiencia, comentario, imagen}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {dataHistoria, setDataHistoria} = useContext(GlobalContext)

    function controladorBotonEditar(){
        console.log('controlador')
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
                <Button radius="full" size="sm" className="mx-3 h-12 bg-transparent border-2 border-[#ff0000]">
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
                    value={dataHistoria.fecha}
                />
                <Input
                  label="Título"
                  variant="bordered"
                  value={dataHistoria.titulo}
                />
                <Textarea
                    label="Experiencia"
                    variant="bordered"
                    value={dataHistoria.experiencia}
                />
                <Textarea
                    label="Comentario"
                    variant="bordered"
                    value={dataHistoria.comentario}
                />
                <Input
                  label="Imagen"
                  placeholder="URL"
                  variant="bordered"
                  value={dataHistoria.imagen}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
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

