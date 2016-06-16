// import React, {Component} from 'react';
import React from 'react';
import ExampleOrganism from '../organisms/ExampleOrganism';
import styles from './styles/ExampleEcosystem.scss';

const ExampleEcosystem = () => {
    return (
        <div className={`${styles.flexContainer} ${styles.flexItem}`}>
            <ExampleOrganism />
            <ExampleOrganism />
            <ExampleOrganism />
            <ExampleOrganism />
        </div>
    );
};

export default ExampleEcosystem;

// export default class ExampleEcosystem extends Component {
//     render() {
//         return (
//             <div className={`${styles.flexContainer} ${styles.flexItem}`}>
//                 <ExampleOrganism />
//                 <ExampleOrganism />
//                 <ExampleOrganism />
//                 <ExampleOrganism />
//             </div>
//         );
//     }
// }
