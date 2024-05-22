import AnimationLeft from "../../../components/Auth/AnimationLeftScreen/AnimationLeft"
import SignUp from "../../../components/Auth/SignUp/SignUp"
import BtnLogIn from "../../../components/Buttom/BtnLogIn"

const SignUpPage = () => {
    return (
        <section className="block-secction-total-LogIn">
            <AnimationLeft />
            <div>
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