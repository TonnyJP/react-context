import React from "react";
import { AppContext } from "./Parent";


export const GrandChild: React.FC = () => {
    const context = React.useContext(AppContext)
    return(<>
       <button onClick={() => context.setUserName("Fuck off")}>Change UserName</button>
    </>)
}