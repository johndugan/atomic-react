// import React, {Component} from 'react';
import React from 'react';
import ExampleEcosystem from '../ecosystems/ExampleEcosystem';
import styles from './styles/ExampleEnvironment.scss';

const ExampleEnvironment = () => {
    return (
        <div className={styles.flexContainer}>
            <ExampleEcosystem />
            <ExampleEcosystem />
        </div>
    );
};

export default ExampleEnvironment;

// export default class ExampleEnvironment extends Component {
//     render() {
//         return (
//             <div className={styles.flexContainer}>
//                 <ExampleEcosystem />
//                 <ExampleEcosystem />
//             </div>
//         );
//     }
// }
