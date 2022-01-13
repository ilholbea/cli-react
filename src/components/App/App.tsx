import React from 'react';
import {Link} from 'react-router-dom';
import baseInstallationImage from '../../assets/images/install.png'
import configureNamespaceImage from '../../assets/images/configure.png'
import upgradeNamespaceImage from '../../assets/images/upgrade.png'
import ReactTooltip from 'react-tooltip';


const App = () => {
    return (
        <div className="w-full h-screen sm:flex items-center">
            <div
                className="text-center px-12 pt-16 pb-20 wrapper sm:flex justify-center flex-col sm:mx-auto">
                <h1 className="text-yale-blue text-4xl tracking-wide mb-48"> Select your desired action</h1>
                <div className="flex justify-evenly">
                    <Link to="/base-installation" className="flex flex-col items-center">
                        <div className="bg-steel-blue w-48 h-48 rounded-full p-8">
                            <img src={baseInstallationImage} alt="Base Installation"/>
                        </div>
                        <p className="mt-2 text-heat-wave text-xl w-3/4">Base Installation</p>
                    </Link>
                    <Link to="/configure-namespace" className="flex flex-col items-center">
                        <div className="bg-steel-blue w-48 h-48 rounded-full p-8">
                            <img src={configureNamespaceImage} alt="Configure Namespace"/>
                        </div>
                        <p className="mt-2 text-heat-wave text-xl w-3/4">Configure Namespace</p>
                    </Link>

                    <Link to="/upgrade-namespace" className="flex flex-col items-center align-end">
                        <div className="bg-steel-blue w-48 h-48 rounded-full p-8">
                            <img src={upgradeNamespaceImage} alt="Upgrade Namespace" className="mt-2"/>
                        </div>
                        <p className="mt-2 text-heat-wave text-xl w-3/4">Upgrade Namespace</p>
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
