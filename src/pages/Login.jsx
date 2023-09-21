import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleLogin } from "../stores/actions/creator/user"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => {
        return state.user.user
    })

    const [form, setForm] = useState({
        email: "",
        password: ""
    })


    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value 
        })
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(handleLogin(form))
    }

    useEffect(() => {
        if(user.id) {
            navigate('/')
        }
    }, [user])

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: "100vh", width: "100vw"}}>
            <form className="w-25 h-50 border d-flex flex-column rounded-3 p-5" onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" name="email" value={form.email} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={form.password} onChange={handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login