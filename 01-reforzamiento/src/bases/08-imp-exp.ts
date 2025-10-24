import { heroes, type Hero, type Owner } from "./data/heroes.data"


const getHeroById = (id: number): Hero|undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    // if( !hero )
    //     throw new Error(`No existe un héroe con ese id ${id}`);
    

    return hero;
}

//console.log(getHeroById(4));

// export const getHeroesByOwner = (owner: Owner) => {
//     const heroesByOwner = heroes.filter((heroe) => {
//         return heroe.owner === owner;
//     });

//     return heroesByOwner;
// }

export const getHeroesByOwner = (owner: Owner) => 
    heroes.filter((heroe) => {return heroe.owner === owner;});


