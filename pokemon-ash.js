/**
 * @param steps String with commands
 */
const catchPokemons = (steps) => {
    let coordinateCurrent = { latitude: 0, longitude: 0 }
    let route = new Set(['0,0'])
    steps = steps.toUpperCase().split('')

    // route loop
    steps.forEach(step => {
        const motion = coordinates(coordinateCurrent, step)
        if (Object.keys(motion).length > 0) {
            route.add(`${motion.latitude},${motion.longitude}`)
            coordinateCurrent = motion;
        }
    });
    return route.size
}
/**
 * 
 * @param {latitude, longitude} coordinate object cordenate
 * @param {String} input motion
 * @return {coordinate} coordinate object changed
 */
const coordinates = (coordinate, input) => {
    const movements = {
        'N': function () {
            return coordinate.latitude -= 1
        },
        'S': function () {
            return coordinate.latitude += 1
        },
        'E': function () {
            return coordinate.longitude -= 1
        },
        'O': function () {
            return coordinate.longitude += 1
        }
    }
    if (movements[input]) {
        movements[input]()
        return coordinate
    }
    return {};

}

module.exports = {
    catchPokemons,
    coordinates
}