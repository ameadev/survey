import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import Styles from '../../styles/Styles';
import Parameters from './Parameters';
import Level from './Level';
import { 
	StackNavigator
} from 'react-navigation';

const HomeParameters = StackNavigator({
  parameters: { screen: Parameters },
  level: { screen: Level },
},
);

export default HomeParameters;