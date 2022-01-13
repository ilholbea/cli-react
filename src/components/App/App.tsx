import React from 'react';
import {Link} from 'react-router-dom';
import baseInstallationImage from '../../assets/images/install.png'
import configureNamespaceImage from '../../assets/images/configure.png'
import upgradeNamespaceImage from '../../assets/images/upgrade.png'
import ReactTooltip from 'react-tooltip';

const baseInstallationTooltip: string = 'Install the Operator and Agent in your workspace. ' +
    '<br/> Configure everything needed to run your Apps.';
const configureNamespaceTooltip: string = 'After the Operator and Agent have been successfully installed you can configure the namespace.' +
    '<br/> Make sure you are logged in your cluster before you configure the namespace.';
const upgradeNamespaceTooltip: string = 'Upgrade the Operator and Agent in your name space to the latest version.';


const App = () => {
    return (
        <div className="w-full h-screen flex items-center">
            <div
                className="text-center px-12 pt-16 pb-20 wrapper flex justify-center flex-col mx-auto">
                <h1 className="text-yale-blue font-bold text-4xl tracking-wide mb-48"> Select your desired action</h1>
                <div className="flex justify-evenly">
                    <Link to="/base-installation" className="flex flex-col items-center"
                          data-tip={baseInstallationTooltip} data-for="tooltipBaseInstallation" data-place="bottom"
                          data-multiline="true">
                        <div className="bg-steel-blue w-48 h-48 rounded-full p-8">
                            <img src={baseInstallationImage} alt="Base Installation"/>
                        </div>
                        <p className="mt-4 text-yale-blue font-bold text-xl w-3/4">Base Installation</p>
                    </Link>
                    <Link to="/configure-namespace" className="flex flex-col items-center"
                          data-tip={configureNamespaceTooltip} data-for="tooltipConfigureNamespace" data-place="bottom"
                          data-multiline="true">
                        <div className="bg-steel-blue w-48 h-48 rounded-full p-8">
                            <img src={configureNamespaceImage} alt="Configure Namespace"/>
                        </div>
                        <p className="mt-4 text-yale-blue font-bold text-xl w-3/4">Configure Namespace</p>
                    </Link>
                    <Link to="/upgrade-namespace" className="flex flex-col items-center align-end"
                          data-tip={upgradeNamespaceTooltip} data-for="tooltipUpgradeNamespace" data-place="bottom"
                          data-multiline="true">
                        <div className="bg-steel-blue w-48 h-48 rounded-full p-8">
                            <img src={upgradeNamespaceImage} alt="Upgrade Namespace" className="mt-2"/>
                        </div>
                        <p className="mt-4 text-yale-blue font-bold text-xl w-3/4">Upgrade Namespace</p>
                    </Link>

                    <ReactTooltip id="tooltipBaseInstallation"/>
                    <ReactTooltip id="tooltipConfigureNamespace"/>
                    <ReactTooltip id="tooltipUpgradeNamespace"/>
                </div>
            </div>
        </div>
    );
}

export default App;
