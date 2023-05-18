export default defineEventHandler((event) => {
    type TableData = {
        id: number,
        name: string,
        steam: number,
        market: number,
        roi: number,
        profit: number,
    }[]

    const data = [
        {
            id: 1,
            name: 'UMP-45 | Gunsmoke (Field-Tested)',
            steam: 2,
            market: 1.35,
            roi: 50,
            profit: 0.04,
        },
        {
            id: 2,
            name: 'PP-Bizon | Facility Sketch (Factory New)',
            steam: 1.99,
            market: 1.56,
            roi: 83.33,
            profit: 0.05,
        },
        {
            id: 3,
            name: 'UMP-45 | Gunsmoke (Field-Tested)',
            steam: 2,
            market: 1.35,
            roi: 50,
            profit: 0.04,
        },
        {
            id: 4,
            name: 'PP-Bizon | Facility Sketch (Factory New)',
            steam: 1.99,
            market: 1.56,
            roi: 83.33,
            profit: 0.05,
        },
        {
            id: 5,
            name: 'UMP-45 | Gunsmoke (Field-Tested)',
            steam: 2,
            market: 1.35,
            roi: 50,
            profit: 0.04,
        },
        {
            id: 6,
            name: 'PP-Bizon | Facility Sketch (Factory New)',
            steam: 1.99,
            market: 1.56,
            roi: 83.33,
            profit: 0.05,
        },
    ] as TableData
    return data
})
