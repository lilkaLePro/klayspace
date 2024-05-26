import { TriangleDownIcon } from "@radix-ui/react-icons"
import { LogoFigma } from "./LogoFigma"
import { LogoReact } from "./LogoReact"
import { LogoTypescript } from "./LogoTs"
import { CompenentInfo } from "@/lib/definitions"

const compenentList : CompenentInfo[] = [
    {name : 'React' , icon: LogoReact },
    {name : 'TypeScript' , icon : LogoTypescript },
    {name: 'Figma' , icon: LogoFigma, },
    {name : 'TailwindCss' , icon: TriangleDownIcon}
     
]

export function CompetenceCard(){

    return (<div className="border-2 p-5 h-full rounded-md">
        <h1 className="text-lg font-semibold pb-3">Ma stack </h1>
    
        <div className="grid grid-cols-2 max-lg:grid-cols-4 max-sm:grid-cols-2 gap-2">
            {compenentList.map((comp, index) => {
              const Icon = comp.icon
              return(
              <div key={index} className="border flex flex-col max-w-40 p-4 justify-center items-center gap-5 rounded-md shadow-md">
                <div className="size-10"><Icon /></div>
                <h1>{comp.name} </h1>
              </div>)
            })}
          </div>
    </div>)
}