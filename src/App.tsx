import React from 'react';

import './App.css';
import {Counter} from "./components/Counter";

const App: React.FC = () => {
    return (
        <div>
            <Counter>
                {({ count, setCount }) => (
                    <div>
                        <button onClick={() => setCount(count + 1)}>Increment</button>
                            {`>> ${count} <<`}
                        <button onClick={() => setCount(count - 1)}>Decrement</button>
                    </div>
                )}
            </Counter>
        </div>
    );
}
export default App;
