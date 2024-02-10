
import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL

export const createAction = async ({ request }) => {
    const formData = await request.formData()
    const newCheeses = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image")
    }
    await fetch(URL + "/cheese", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCheeses),
    })
    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const updateCheeses = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image")
    }
    await fetch(URL + "/cheese/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateCheeses)
    })
    return redirect("/")
}

export const deleteAction = async ({params}) => {
    await fetch(URL + "/cheese/" + params.id, {
        method: "delete"
    })
    return redirect("/")
}