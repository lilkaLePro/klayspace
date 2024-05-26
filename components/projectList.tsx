import { ProjectInfo, WorkInfo } from "@/lib/definitions"
import { BarChartIcon, CodeIcon, DashboardIcon, EnvelopeClosedIcon, Pencil1Icon } from "@radix-ui/react-icons"
import Link from "next/link"

const projectInfo : ProjectInfo[] = [
    {title : 'Sunuelection' , desc : 'Une plateforme de vote en ligne', icon: EnvelopeClosedIcon },
    {title : 'Dashoboard' , desc : 'gestionnaire de client ', icon: DashboardIcon },
    {title : 'Affer charts ' , desc : 'générateur de graphique', icon: BarChartIcon }
]

const workInfo : WorkInfo[] =  [
    {societeName : 'Bakeli school of tech ' , func : 'stagiaire développeur web ', date : '2024-', icon: CodeIcon },
    {societeName : 'Magestic 3D' , func : 'Développeur wordPress & modélisateur 3D', date : '2023/2024', icon: Pencil1Icon },
]

export  const ProjectCard : React.FC = () => {

    return (<div className="flex flex-col gap-2">
        {projectInfo.map((comp, index) => {
            const Icon = comp.icon
            return( <div key={index} className="hover:bg-muted p-2 rounded-2xl">
                <div className="flex gap-2 items-center cursor-pointer">
                    <div className="bg-green-300 size-10 rounded-full border flex justify-center items-center"><Icon /> </div>
                    <div className="">
                        <h1 className="font-semibold">{comp.title} </h1>
                        <p className="text-muted-foreground">{comp.desc} </p>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-4">
                <Link href='' className="font-bold text-muted-foreground border-b-2 border-primary-foreground hover:border-muted-foreground transition-all">Demo</Link>
                <Link href='' className="font-bold text-muted-foreground border-b-2 border-primary-foreground hover:border-muted-foreground transition-all">Github</Link>
                </div>
            </div>)
        })}
    </div>)
}

export const WorkCard : React.FC = () => {
    
    return (<div className="flex flex-col gap-3 divide-y-2">
        
        {workInfo.map((comp , index) => {
       
        const Icon = comp.icon
       
        return(<div key={index} className="flex flex-col gap-3 p-1">
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <div className="bg-green-300 size-10 rounded-full border flex justify-center items-center"><Icon /> </div>
                    <h1 className="font-semibold">{comp.societeName } </h1>
                </div>
                    <span>{comp.date} </span>
            </div>
            <p className="text-muted-foreground ">{comp.func} </p>
            
        </div> )
        })
        }
    </div> )
}