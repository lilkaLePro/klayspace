import { Children } from "react";

export default function Section({children } : {children : React.ReactNode }) {

    return(<div className="max-w-6xl h-full m-auto" > {children} </div>)
}