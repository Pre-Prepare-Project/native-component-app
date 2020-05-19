import * as React from 'react';
import { NavigationActions } from '@react-navigation/compat';


export const navigationRef = React.createRef();

export function navigate(name, params) {
    console.log(name)
    navigationRef.current ?.navigate(name, params);
}


// let navigator;

// function setTopLevelNavigator(navigatorRef) {
//     navigator = navigatorRef;
// }


// function navigate(routeName, params) {
//     navigator.dispatch(
//         NavigationActions.navigate({
//             routeName,
//             params,
//         })
//     );
// }

// function dispatch(action) {
//     navigator.dispatch(action);
// }

// function goBack (screenNumbers = 1) {
//     const popAction = StackActions.pop(screenNumbers);
//     dispatch(popAction);
// }




// export default {
//     navigate,
//     setTopLevelNavigator,
//     goBack
// };

