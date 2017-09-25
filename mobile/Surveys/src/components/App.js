
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { 
  TabNavigator,
  StackNavigator,
} from 'react-navigation';

//import HomeApp from './HomeApp';
import HomeParameters from './Parameters/HomeParameters';
//import Score from './Classification/Score';

const Surveys = StackNavigator({
  HomeParameters: { screen: HomeParameters },
  //Score: { screen: Score },
  //Login: { screen: Login },
}, 
{
  mode: 'modal',
  headerMode: 'none',
}
);


AppRegistry.registerComponent('Surveys', () => Surveys);
