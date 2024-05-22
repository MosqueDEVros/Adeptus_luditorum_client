import { Link } from "react-router-dom"

const BtnLogIn = ({ text1, text2 }) => {
    return (
        <div className="block-logIn-SignUp">
            <Link
                to={`/auth/${text1}`} className="left-block">{text1}</Link>
            <Link
                to={`/auth/${text2}`} className="rigth-block">{text2}</Link>
        </div>

    )
}

export default BtnLogIn