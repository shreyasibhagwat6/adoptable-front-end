import React, { useState } from 'react';

const FavList = (props) => {

    console.log(props.fav)
    const favList = props.fav;    

    return(
        <div>
            {favList.map(pet => {
                return(
                    <div>
                        <h2>{pet.name}</h2>
                        {/* <img alt='' src={`http://localhost:5050/${pet.image}`}></img> */}
                    </div>    
                )
            })}

        </div>
    )
}

export default FavList;