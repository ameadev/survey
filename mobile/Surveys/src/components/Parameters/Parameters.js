import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Styles from '../../styles/Styles';
import { 
  List, 
  ListItem,
  Button,
  CheckBox,
} from 'react-native-elements';

class Parameters extends Component {
  static navigationOptions = {
    title: 'PRODUITS',
  };


  render() {
	const { navigate } = this.props.navigation;
  const list = [
  {
    name: 'Citronnelle citron',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    icon: 'extension',
    subtitle: 'Thé à base de Citronnelle et de citron',
    description: 'Thé à base de Citronnelle ..... toutes informations proviendront de base de données',
  },
  {
    name: 'Citronnelle gingembre',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    icon: 'extension',
    subtitle: 'Thé à base de Citronnelle et de gingembre',
    description: 'Thé à base de Citronnelle ..... toutes informations proviendront de base de données',
  },
  {
    name: 'Citronnelle nature',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    icon: 'extension',
    subtitle: 'Thé à base de Citronnelle ',
    description: 'Thé à base de Citronnelle ..... toutes informations proviendront de base de données',
  },
  {
    name: 'Citronnelle citron miel',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    icon: 'extension',
    subtitle: 'Thé à base de Citronnelle et de citron',
    description: 'Thé à base de Citronnelle ..... toutes informations proviendront de base de données',
  },
  {
    name: 'Citronnelle gingembre miel',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    icon: 'extension',
    subtitle: 'Thé à base de Citronnelle et de gingembre',
    description: 'Thé à base de Citronnelle ..... toutes informations proviendront de base de données',
  },
  {
    name: 'Citronnelle nature miel',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    icon: 'extension',
    subtitle: 'Thé à base de Citronnelle ',
    description: 'Thé à base de Citronnelle ..... toutes informations proviendront de base de données',
  },
  ]
	return (
    <View style={Styles.wrapperGame}>
      
	  <ScrollView style={Styles.subContainer}>
      
      <List>
  {
    list.map((l, i) => (
      <ListItem
        leftIcon={{name: l.icon}}
        key={i}
        title={l.name}
        subtitle = {l.subtitle}
        onPress={() => navigate('level', {title: l.name, subtitle: l.subtitle, description: l.description})}
      />
    ))
  }
</List>

    </ScrollView>

  </View>
	);
	}
}

export default Parameters;