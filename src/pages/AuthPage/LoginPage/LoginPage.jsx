import AnimationLeft from "../../../components/Auth/AnimationLeftScreen/AnimationLeft"
import LogIn from "../../../components/Auth/LogIn/LogIn"
import BtnLogIn from "../../../components/Buttom/BtnLogIn"

const LogInPage = () => {
    return (
        <section className="block-secction-total-LogIn">
            <AnimationLeft />
            <div>
                <BtnLogIn
                    text1='SignUp'
                    text2='LogIn'
                />
                <LogIn

                />
            </div>

        </section>
    )
}

export default LogInPage