import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()
    const user = useSelector(state => {
        return state.user.user
    })

    useEffect(() => {
        if(!user.id) {
            navigate('/login')
        }
    }, [])


    return (
        <div>
            <h1>Welcome {user.name}, user ID: {user.id}</h1>
        </div>
    )
}

export default HomePage