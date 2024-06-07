import AnimationLeft from "../../../components/Auth/AnimationLeftScreen/AnimationLeft"
import SignUp from "../../../components/Auth/SignUp/SignUp"
import BtnLogIn from "../../../components/Buttom/BtnLogIn"

const SignUpPage = () => {
    return (
        <section className="block-section-total-SignUp">
            <AnimationLeft className="animation-left" />
            <div className="main-text-signUp">
                <BtnLogIn
                    text1='SignUp'
                    text2='LogIn'
                />
                <SignUp />
            </div>

        </section>
    )
}

export default SignUpPage