// Import Assets
import logo2 from '../assets/logo2.png';

const Slogan = () => {
    return (
        <section className='Slogan'>
            <img src={logo2} alt="Simon Batrony" 
                width = 75% 
                height = 25% />

            <div className='Slogan__content'>
                <h3>Enhance Your FutureSELF</h3>
            </div>
        </section>
    );
}

export default Slogan;
