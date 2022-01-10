import React from 'react';
import {Link} from 'react-router-dom';


const App = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="flex space-x-48 items-end">
                <div className="flex flex-col">
                    <p className="text-center mb-2 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        pellentesque odio erat, id scelerisque est egestas sit amet. Nullam vitae posuere mi. Duis
                        sagittis ut eros et condimentum.</p>
                    <Link to="/base-installation" className="btn btn-blue">Base Installation</Link>
                </div>
                <div className="flex flex-col">
                    <p className="text-center mb-2 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        pellentesque odio erat, id scelerisque est egestas sit amet. Nullam vitae posuere mi. Duis
                        sagittis ut eros et condimentum.</p>
                    <Link to="/configure-namespace" className="btn btn-green">Configure Namespace</Link>
                </div>
                <div className="flex flex-col">
                    <p className="text-center mb-2 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        pellentesque odio erat, id scelerisque est egestas sit amet. Nullam vitae posuere mi. Duis
                        sagittis ut eros et condimentum.</p>
                    <Link to="/upgrade-namespace" className="btn btn-yellow">Upgrade Namespace</Link>
                </div>
            </div>
        </div>
    );
}

export default App;
