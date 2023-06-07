import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Homepage';
import Login from './Login';
import Register from './Register';
import JobListingScreen from './JobListingScreen';
import BookmarkedJobs from './BookmarkedJobs';
import JobDetails from './JobDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="JobListing" component={JobListingScreen} />
        <Stack.Screen name="BookmarkedJobs" component={BookmarkedJobs} options={{ title: 'Bookmarked Jobs' }} />
        <Stack.Screen name="JobDetails" component={JobDetails} options={{ title: 'Job Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}