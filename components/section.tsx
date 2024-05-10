import { cn } from "@/lib/utils";

export default function Section({children } : {children : React.ReactNode }) {

    return(<div className={cn("max-w-6xl h-full m-auto")} > {children} </div>)
}