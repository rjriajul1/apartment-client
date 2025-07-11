import axios from "axios"

export const imageUpload = async image => {
    const imageData = new FormData()
    imageData.append('image', image)
    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,imageData)
    return data?.data?.url

}

export const saveUserDb = async user => {
     await axios.post(`${import.meta.env.VITE_URL}/users-add`,user)
 
}