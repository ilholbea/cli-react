import React from 'react';
import './BasicInstallation.css';

const BasicInstallation = () => (
    <div className="w-full h-screen sm:flex items-center">
        <div
            className="bg-gray-900 text-center px-12 pt-16 pb-20 wrapper sm:flex justify-center flex-col sm:mx-auto">
            <h1 className="text-white text-lg tracking-wide mb-7">Base Installation</h1>
            <div className="flex justify-evenly">
                <div className="w-fit bg-gray-800 rounded p-8">
                    <form>
                        <div className="flex flex-col mb-8 text-left">
                            <label className="form-label w-40" htmlFor="selectClusterMode"> Cluster Mode: </label>
                            <select id="selectClusterMode" className="form-select">
                                <option selected value="connected">Connected</option>
                                <option value="standalone">Standalone</option>
                            </select>
                        </div>
                        <div className="flex flex-col mb-8 text-left">
                            <label className="form-label w-40" htmlFor="selectClusterType"> Cluster Type: </label>
                            <select id="selectClusterType" className="form-select">
                                <option selected value="generic">Generic</option>
                                <option value="openshift">OpenShift</option>
                            </select>
                        </div>
                        <div className="flex">
                            <button className="btn btn-secondary">Save Installer</button>
                            <button className="btn btn-primary ml-4">Run Installer</button>
                        </div>
                    </form>
                </div>
                <div className="w-2/3 bg-gray-800 rounded p-8">
                    <p className="console">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived
                        <br/>
                        <br/>
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <br/>
                        <br/>
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

            </div>
        </div>
    </div>
);


export default BasicInstallation;
