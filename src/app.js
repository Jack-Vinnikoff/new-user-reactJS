import React from 'react';
import ReactDom from 'react-dom';
import LogicApp from './container.jsx'

export default function App () {
    return (
        <LogicApp />
    )
}
// class App extends React.Component {
//     render () {
//         return (
//             <LogicApp />
//         )
//     }
// }

ReactDom.render(
    <App />,
    document.getElementById('root')
);