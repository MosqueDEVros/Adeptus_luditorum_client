import AnimationLeft from "../../../components/Auth/AnimationLeftScreen/AnimationLeft"
import LogIn from "../../../components/Auth/LogIn/LogIn"
import BtnLogIn from "../../../components/Buttom/BtnLogIn"

const LogInPage = () => {
    return (
        <section className="block-section-total-LogIn">
            <AnimationLeft className="animation-left" />
            <div className="main-text-logIn">
                <BtnLogIn
                    text1='SignUp'
                    text2='LogIn'
                />
                <LogIn />
            </div>

        </section>
    )
}

export default LogInPage