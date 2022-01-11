import React from 'react';
import {Link} from 'react-router-dom';
import baseInstallationImage from '../../assets/images/install.png'
import configureNamespaceImage from '../../assets/images/configure.png'
import upgradeNamespaceImage from '../../assets/images/upgrade.png'


const App = () => {
    return (
        <div className="w-full bg-gray-800 h-screen sm:flex items-center">
            <div
                className="bg-gray-900 text-center px-12 pt-16 pb-20 wrapper sm:flex justify-center flex-col sm:mx-auto">
                <h1 className="text-white text-lg tracking-wide mb-7">Select your desired action.</h1>
                <div className="grid gap-5 sm:grid-cols-3 mx-auto">
                    <Link to="/base-installation">
                        <div
                            className="text-white bg-gray-800 w-40 h-48 rounded-md justify-self-center flex flex-col justify-center items-center">
                            <img src={baseInstallationImage} alt="Base Installation"
                                 className="w-24 h-24"/>
                            <p className="mt-2">Base Installation</p>
                        </div>
                    </Link>
                    <Link to="/configure-namespace">
                        <div
                            className="text-white bg-gray-800 w-40 h-48 rounded-md justify-self-center flex flex-col justify-center items-center">
                            <img src={configureNamespaceImage}
                                 alt="Avatar" className="w-24 h-24"/>
                            <p className="mt-2">Configure Namespace</p>
                        </div>
                    </Link>

                    <Link to="/upgrade-namespace">
                        <div
                            className="text-white bg-gray-800 w-40 h-48 rounded-md justify-self-center flex flex-col justify-center items-center">
                            <img src={upgradeNamespaceImage}
                                 alt="Avatar" className="w-24 h-24"/>
                            <p className="mt-2">Upgrade Namespace</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default App;


// <div className="flex space-x-48 items-end">
//     <div className="flex flex-col">
//         <p className="text-center mb-2 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Vivamus
//             pellentesque odio erat, id scelerisque est egestas sit amet. Nullam vitae posuere mi. Duis
//             sagittis ut eros et condimentum.</p>
//         <Link to="/base-installation" className="btn btn-blue">Base Installation</Link>
//     </div>
//     <div className="flex flex-col">
//         <p className="text-center mb-2 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Vivamus
//             pellentesque odio erat, id scelerisque est egestas sit amet. Nullam vitae posuere mi. Duis
//             sagittis ut eros et condimentum.</p>
//         <Link to="/configure-namespace" className="btn btn-green">Configure Namespace</Link>
//     </div>
//     <div className="flex flex-col">
//         <p className="text-center mb-2 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Vivamus
//             pellentesque odio erat, id scelerisque est egestas sit amet. Nullam vitae posuere mi. Duis
//             sagittis ut eros et condimentum.</p>
//         <Link to="/upgrade-namespace" className="btn btn-yellow">Upgrade Namespace</Link>
//     </div>
// </div>
