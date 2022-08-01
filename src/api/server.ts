let token = '58c074bcab64672b05cbbe164969f3e397cd08c14ef8c759'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://digitallibraryapi.herokuapp.com//api/books`,{
            method: 'GET',
            mode :'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://digitallibraryapi.herokuapp.com//api/books`,{
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
	},

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://digitallibraryapi.herokuapp.com//api/books/${id}`, {
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async(id:string) => {
        const response = await fetch(`https://digitallibraryapi.herokuapp.com/api/books/${id}`,{
            method: 'DELETE',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}