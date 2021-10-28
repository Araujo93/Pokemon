export const getFrontImg = (url:string) => {
    const index = url.split('/')[url.split('/').length-2]
    return  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
}

export const getBackImg = (url:string) => {
    const index = url.split('/')[url.split('/').length-2]
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index}.png`
}

export const getIndex = (url:string) => {
    const index = url.split('/')[url.split('/').length-2]
    return index
}