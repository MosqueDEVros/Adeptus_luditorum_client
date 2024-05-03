import { Link } from 'react-router-dom'
import FB from '../../../assets/logoFabecook.svg'
import IG from '../../../assets/logoInstagram.svg'
import Account from '../../../assets/logInIcon.svg'


const IconsNavBar = () => {
    return (
        <div className='IconsNavbar'>
            {/* TODO aqui ira la ruta de login */}
            <Link className=""
                to={'https://drive.google.com/file/d/1N6UJEGMv43T9To9OEnUhuIEsgMQNUAIc/view'}>
                <img src={Account} />
            </Link>
            {/*TODO aqui ira las links de la empresa */}

            <Link className=''
                to={'https://www.facebook.com/'}
                target="_blank" >
                <img src={FB} />
            </Link>
            <Link className=''
                to={'https://www.instagram.com/'}
                target="_blank" >
                <img src={IG} />
            </Link>



        </div>
    )
}

export default IconsNavBar