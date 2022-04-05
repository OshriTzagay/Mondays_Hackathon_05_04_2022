const BASIC_URL ="http://localhost:8100/report";
export const GetAllCompany = async () => {
    let options ={
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_URL}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
export const GetCompanyById = async (id) => {
    let options ={
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_URL}/${id}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const CreateCompany = async (report) => {
    
    try {
        return await fetch(`${BASIC_URL}`, {
            method: "POST",
            body: JSON.stringify(company),
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
export const UpdateCompany = async (id, company) => {
    try {
        return await fetch(`${BASIC_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(company),
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
export const DeleteCompany = async (id) => {

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