import React, { Component } from 'react';

// This passes props in WrappedComponent using the ES6 spread operator
// const withClass = (WrappedComponent, className) => {
//     return (props) => {
//         return (
//             <div className={className} >
//                 <WrappedComponent {...props} />
//             </div>
//         )
//     }
// };

const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className} >
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    });
};

export default withClass;