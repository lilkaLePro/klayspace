import { InspiCardInfo } from "@/lib/definitions"
import { SpeakerLoudIcon } from "@radix-ui/react-icons"

const inspiCardInfo : InspiCardInfo[] = [
  {citation: "J'ai reussi à la troisieme tentative aprés deux échecs au bac, ce qui ne m'a pas empeché de faire une carrière brillante d'ingénieur et réussir à être un entrepreneur a succé en afrique.", 
    name : 'Philipe Simo', func : "PDG InvestirAupays", icon: SpeakerLoudIcon},
  {citation : " Si je m'étais jamais rendu à ce cours au college, le mac peut être n'aurais jamais eu de multiple typefaces ou des fonts proportionnelement espacé ",
    name : " Steve Jobs", func: "Co-founder of Apple", icon: SpeakerLoudIcon }
]

export const InspiCard : React.FC = () => {

    return(<div className="w-fit ">
      <div className="flex flex-col gap-5 max-md:p-5">
      <h1 className="text-xl font-semibold px-2 my-10">Mes inspirations</h1>
         
        {inspiCardInfo.map((comp , index) => {
          
          const Icon = comp.icon
          
          return( <div key={index} className="px-10 max-sm:p-0 max-w-xl ">
            <p className="text-xl max-sm:text-lg "> <span className="text-destructive text-xl font-bold">&quot; </span>
                {comp.citation}
            <span className="text-destructive text-xl font-bold">&quot; </span>. 
            </p>
            <div className="flex justify-end items-center gap-2">
              <div className="flex flex-col p-3">
                <span className="font-bold">{comp.name} </span>
                <span>{comp.func} </span>
              </div>
              <div className="size-14 flex justify-center items-center border rounded-full"><Icon /> </div>
            </div>
            </div>)
                    } )}
                </div></div>)
}