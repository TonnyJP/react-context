import React, { Dispatch, SetStateAction } from "react"
import { GrandChild } from "./GrandChild"


interface IProps{ 
    setUserName: Dispatch<SetStateAction<string>>
 }
export const Child: React.FC = () => {

    return <GrandChild/>
    
}