// import React, {Component} from 'react';
import React from 'react';
import ExampleAtom from '../atoms/ExampleAtom';
import styles from './styles/ExampleMolecule.scss';

const ExampleMolecule = () => {
    return (
        <div className={`${styles.flexItem}`}>
            <ExampleAtom />
        </div>
    );
};

export default ExampleMolecule;

// export default class ExampleMolecule extends Component {
//     render() {
//         return (
//             <div className={`${styles.flexItem}`}>
//                 <ExampleAtom />
//             </div>
//         );
//     }
// }
