import { createContext, useState } from 'react';
export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    return (
        <PostContext.Provider value={{user, setUser} }>
            {children}
        </PostContext.Provider>
    )
};