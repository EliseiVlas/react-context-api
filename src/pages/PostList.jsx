// importiamo il contesto globale e la parte REact di utilizzo dello stesso

import { useContext } from "react";
import GlobalContext from '../context/GlobalContest'

// import componente Card nel listato
import PostCard from "./PostCard";

export default function PostList() {

    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { piatti } = useContext(GlobalContext);

    return (
        <>
            {
                piatti.map((menu) => (
                    <PostCard key={menu.id} menu={menu} />
                ))
            }
        </>
    )

}
