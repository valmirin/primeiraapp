import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({ children }) => {
    // Criando o valor de estado
    const [login, setLogin] = useState(false);

    return (
        // Criando a Store
        <UserContext.Provider value = {{login, setLogin}}>
            {/* Como se estivesse passando nosso APP */}
            {children}
        </UserContext.Provider>
    )
}