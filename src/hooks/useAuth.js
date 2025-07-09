import { use } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const useAuth = () => {
    const userInfo = use(AuthContext)
    return userInfo
}