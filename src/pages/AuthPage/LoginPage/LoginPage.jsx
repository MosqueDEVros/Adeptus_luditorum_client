import AnimationLeft from "../../../components/Auth/AnimationLeftScreen/AnimationLeft"
import LogIn from "../../../components/Auth/LogIn/LogIn"
import BtnBack from "../../../components/Button/BtnBack"
import BtnLogIn from "../../../components/Button/BtnLogIn"

const LogInPage = () => {
    return (
        <section className="block-section-total-LogIn">
            <AnimationLeft className="animation-left" />
            <div className="main-text-logIn">
                <div className="buttons-container">
                    <BtnBack />
                    <BtnLogIn
                        text1='SignUp'
                        text2='LogIn'
                    />
                </div>
                <LogIn />
            </div>

        </section>
    )
}

export default LogInPage