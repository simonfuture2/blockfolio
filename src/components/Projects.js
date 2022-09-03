// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';
import portfolio from '../assets/portfolio.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>FutureSELF DAO</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>Enter the FutureSELF DAO on the Solana blockchain. Search for FutureSELF and enter DAO to see
                    the current proposal test available to vote on. Added 1,000,000 tokens for voting rights and 450 tokens
                    for the FutureSELF Council Votes. 
                    </p>

                    <a href="https://dao.mango.markets/realms" target="_blank" className="button">Site</a>
                    <a href="https://dao.mango.markets/dao/DVhMaVgakjuGPZgXihDpFn2iA2Bymd82gfxbA2Zr6TVU" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>ROYALz</h3>
                    <img src={aave} alt="ROYALz NFT Page" />
                    <p>FutureROYALz is a NFT project worked on to represent the knowledge gained from metaplex. the NFT marketplace futureplex.store was used
                    to show auctions, assign creator roles to upload, and sell your NFT. 
                    </p>

                    <a href="https://www.metaplex.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Decentralized Identity</h3>
                    <img src={compound} alt="Github Landing Page" />
                    <p>Practice with your new decentralized identity, create, update and read your profile. 
                    </p>

                    <a href="https://github.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/simonfuture2/decentralized-identity-example" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Ethers.js</h3>
                    <img src={portfolio} alt="Ethers Script Examples" />
                    <p>Practice running scripts with ethers.js using the examples in this project. 
                    </p>

                    <a href="https://docs.ethers.io/v5/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/simonfuture2/ethers_examples" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;