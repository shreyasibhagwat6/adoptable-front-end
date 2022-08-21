import { createContext, useState, useContext } from "react";

const FavContext = createContext();

function FavProvider(props) {

    const shape = {
        type: '',
        id: 0,
        data: {}
    }

    const [fav, setFav] = useState(shape);

    function updateFav(type, id, data){
        setFav({
            type,
            id,
            data,
        });
    }
    return <FavContext.Provider value={[fav, updateFav]} {...props} />
}

function useFav() {
    const context = useContext(FavContext);
    if(!context) throw new Error ('Not inside the Provider');
    return context;
}

export { useFav, FavProvider };