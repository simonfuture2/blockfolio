// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Simon Batrony" />

            <div className='header__content'>
                <h1>@SimonFuture2</h1>
                <p>Blockchain Developer & Transaction Verification Specialist</p>
                <a href="mailto:techbatrony@gmail.com"className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;