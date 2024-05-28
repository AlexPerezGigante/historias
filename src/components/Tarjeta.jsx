import { Card, Button, CardFooter, CardHeader, Image } from "@nextui-org/react"
import { Pencil, Trash2 } from "lucide-react"

function Tarjeta({titulo, fecha, experiencia, comentario, imagen}) {

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
                <Button radius="full" size="sm" className="h-12 bg-transparent border-2 border-[#fbff00]">
                <Pencil color="#fbff00" className=""/>
                </Button>
                <Button radius="full" size="sm" className="mx-3 h-12 bg-transparent border-2 border-[#ff0000]">
                <Trash2 color="#ff0000"/>
                </Button>
            </CardFooter>
        </Card>
      </>
    )
  }
  
  export default Tarjeta

