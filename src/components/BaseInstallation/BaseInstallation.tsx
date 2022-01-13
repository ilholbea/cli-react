import React from 'react';
import './BaseInstallation.css';

const BaseInstallation = () => (
    <div className="w-full h-screen flex items-center">
        <div
            className="text-center px-12 pt-16 pb-20 wrapper flex justify-center flex-col mx-auto">
            <h1 className="text-yale-blue text-4xl tracking-wide mb-24 font-bold"> Base Installation</h1>
            <div className="flex justify-evenly">
                <div className="w-1/5 flex flex-col">
                    <div className="bg-steel-blue rounded p-8 h-[21rem]">
                        <form>
                            <div className="flex flex-col mb-8 text-left">
                                <label className="form-label w-40" htmlFor="selectClusterMode"> Cluster Mode: </label>
                                <select id="selectClusterMode" className="form-select">
                                    <option selected value="none">Please select a cluster mode</option>
                                    <option value="connected">Connected</option>
                                    <option value="standalone">Standalone</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-8 text-left">
                                <label className="form-label w-40" htmlFor="selectClusterType"> Cluster Type: </label>
                                <select id="selectClusterType" className="form-select">
                                    <option selected value="none">Please select a cluster type</option>
                                    <option value="generic">Generic</option>
                                    <option value="openshift">OpenShift</option>
                                </select>
                            </div>
                            <div className="flex justify-between">
                                <button className="btn btn-secondary">Save Installer</button>
                                <button className="btn btn-primary ml-4">Run Installer</button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-iceberg mt-8 p-8 rounded ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="bg-iceberg text-left text-white">Follow this installation wizard to install the Operator and Agent in your namespace.
                            <br/>Please make sure to have a valid OpenShift/Kubernetes credential.</p>
                    </div>

                </div>
                <div className="w-3/5 bg-steel-blue rounded p-8 h-[50rem]">
                    <p className="console overflow-y-auto h-[45rem] ">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived
                        <br/>
                        <br/>
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and
                        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                        <br/>
                        <br/>
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and
                        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                        <br/>
                        <br/>
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and
                        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                        <br/>
                        <br/>
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and
                        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum. <br/>
                        <br/>
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and
                        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum. <br/>
                        <br/>
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and
                        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum. Ipsum. <br/>
                        <br/>
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and
                        more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                    </p>
                </div>

            </div>
        </div>
    </div>
);


export default BaseInstallation;
