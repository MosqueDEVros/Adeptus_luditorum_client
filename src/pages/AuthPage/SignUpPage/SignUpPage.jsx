import AnimationLeft from "../../../components/Auth/AnimationLeftScreen/AnimationLeft"
import SignUp from "../../../components/Auth/SignUp/SignUp"
import BtnBack from "../../../components/Button/BtnBack"
import BtnLogIn from "../../../components/Button/BtnLogIn"

const SignUpPage = () => {
    return (
        <section className="block-section-total-SignUp">
            <AnimationLeft className="animation-left" />
            <div className="main-text-signUp">
                <div className="buttons-container">
                    <BtnBack />
                    <BtnLogIn
                        text1='SignUp'
                        text2='LogIn'
                    />
                </div>
                <SignUp />
            </div>

        </section>
    )
}

export default SignUpPage