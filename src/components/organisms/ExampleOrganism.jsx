// import React, {Component} from 'react';
import React from 'react';
import ExampleMolecule from '../molecules/ExampleMolecule';
import styles from './styles/ExampleOrganism.scss';

const ExampleOrganism = () => {
    return (
        <h1 className={`${styles.flexItem}`}>
            <ExampleMolecule />
            <ExampleMolecule />
        </h1>
    );
};

export default ExampleOrganism;

// export default class ExampleOrganism extends Component {
//     render() {
//         return (
//             <h1 className={`${styles.flexItem}`}>
//                 <ExampleMolecule />
//                 <ExampleMolecule />
//             </h1>
//         );
//     }
// }
