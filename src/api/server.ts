let token = "65d665dae40e52ac23e6a2d28149e632419466f4a6d4f15e"

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://drone-inventory-cw.herokuapp.com/api/drone`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error("Failed to fetch data from server")
        }
        return await response.json()
    },
    create: async(data: any = {}) => {
        const response = await fetch(`https://drone-inventory-cw.herokuapp.com/api/drone`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error("Failed to Create Data on server")
        }
        return await response.json()
    },
    update: async(id:string, data:any = {}) => {
        const response = await fetch(`https://drone-inventory-cw.herokuapp.com/api/drone/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`https://drone-inventory-cw.herokuapp.com/api/drone/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": `Bearer ${token}`
            }
        })
    }
}