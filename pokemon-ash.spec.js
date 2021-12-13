const { catchPokemons, coordinates } = require('./pokemon-ash')
const { tests } = require('./test_cases.json')


describe('Pokemon Ash Unit', () => {


    describe('function catchPokemons', () => {

        it('should catch two pokemons', () => {
            const result = catchPokemons('E')
            expect(result).toBe(2)
        })

        it('should catch four pokemons', () => {
            const result = catchPokemons('NESO')
            expect(result).toBe(4)
        })

        it('should when walking north and south more than once', () => {
            const result = catchPokemons('NSNSNSNSNS')
            expect(result).toBe(2)
        })

        it('should catch one pokemon with input invalid', () => {
            const result = catchPokemons('1')
            expect(result).toBe(1)
        })

        it('should return therteen pokemons drawing the letter P', () => {
            const result = catchPokemons('SNNNNNNOOSSSEESSS')
            expect(result).toBe(13)
        })

        tests.forEach(({ test, expected }) => {
            it(`should extra test_cases.json expected ${expected}`, () => {
                const result = catchPokemons(test)
                expect(result).toBe(expected)
            });
        });

    })


    describe('function coordinates', () => {

        let coordinate;

        beforeEach(() => {
            coordinate = { latitude: 0, longitude: 0 }
        })

        it('should "N" latitude decrease 1', () => {
            const { latitude } = coordinates(coordinate, 'N');
            expect(latitude).toBe(-1);
        })

        it('should "S" latitude increase 1', () => {
            const { latitude } = coordinates(coordinate, 'S');
            expect(latitude).toBe(1);
        })

        it('should "E" longitute decrease 1', () => {
            const { longitude } = coordinates(coordinate, 'E');
            expect(longitude).toBe(-1);
        })

        it('should "O" longitute increase 1', () => {
            const { longitude } = coordinates(coordinate, 'O');
            expect(longitude).toBe(1);
        })

        it('should invalid coordinate return undefined', () => {
            const { longitude } = coordinates(coordinate, 'H');
            expect(longitude).toBe(undefined);
        })

    })
})