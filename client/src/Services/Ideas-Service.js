const BASIC_URL = "http://localhost:8000/idea";
export const GetAllIdea = async ()  => {
    let options ={
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_URL} `,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}

export const GetIdeaById = async (id) => {
    let options ={
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")} `
        }}
    try {
        return await fetch(`${BASIC_URL}/${id}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}


// export const GetIdeaByType = async (type) => {
//     let options ={
//         headers: {
//             "content-type": "application/json",
//                 "Authorization": `Bearer ${localStorage.getItem("token")} `
//         }
//     }
//     try {
//         return await fetch(`${BASIC_URL}/type/${type}`,options)
//             .then(response => response.json())
//             .catch(reject => console.error(reject))
//     } catch (error) {
//         return error
//     }
// }

export const CreateIdea = async (idea,id) => {
    try {
        return await fetch(`${BASIC_URL}/${id}`, {
            method: "idea",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")} `
            } ,
               body: JSON.stringify(idea)
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const UpdateIdea = async (id, idea) => {
    try {
        return await fetch(`${BASIC_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(idea),
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const DeleteIdea = async (id) => {

    try {
        return await fetch(`${BASIC_URL}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}