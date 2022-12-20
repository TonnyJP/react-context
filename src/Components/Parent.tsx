import React from "react"
import { Child } from "./Child"

interface IContext{ 
    userName: string; 
    setUserName: React.Dispatch<React.SetStateAction<string>> 
}
export  const AppContext = React.createContext<IContext>({userName: "", setUserName: () => Promise<void>});

export const Parent: React.FC = () => {
    const [userName, setUserName] = React.useState<string>("The Beast");

    return(
    <AppContext.Provider value={{userName, setUserName}}>
        <div>
            {userName}
            <Child />
        </div>
    </AppContext.Provider>)
}