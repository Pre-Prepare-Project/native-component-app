import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Button } from 'react-native';


const HomeScreen = ({ navigation }) => {
    const abs = () => {
        console.log("test")
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('NotificationsScreen')}
                title="Go to notifications"
            />
        </View>
    );
};

const NotificationsScreen = ({navigation}) => {
    console.log("this", navigation)
    const abs = (item) => {
        console.log("test", item)
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.navigate('HomeScreen')} title="Go back home" />
        </View>
    );
}


const MainNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="NotificationsScreen">
                <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
                <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )

}

export default MainNavigation;
