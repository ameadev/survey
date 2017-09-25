import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Picker,
} from 'react-native';
import Styles from '../../styles/Styles';
import { 
  List, 
  ListItem,
  Button,
  Rating,
} from 'react-native-elements';

class Level extends Component {
  constructor() {
    super();
    this.state = {
      level: "Niveau_1",
    };
    
  }
  static navigationOptions = {
    title: 'EVALUER',
  };

  render() {
	const { navigate } = this.props.navigation;
  const heart_img = require('../../img/heart.png')
	return (
    <View style={Styles.wrapperGame}>
    
    <View style={Styles.logoContainer}>
      <Image
        style={Styles.smallLogo}
        source={require('../../img/score2.png')}
      />
     </View>

	  <ScrollView contentContainerStyle={Styles.gameSubContainer}>
      
      <Text >{this.props.navigation.state.params.title}</Text>
      <Text >{this.props.navigation.state.params.subtitle}</Text>
      <Text >{this.props.navigation.state.params.description}</Text>

      <Rating
        type="heart"
        ratingCount={5}
        fractions={0}
        startingValue={0}
        imageSize={50}
        showRating
        style={{ paddingVertical: 10 }}
      />
    </ScrollView>

    
    <Button
      icon={{name: 'heartbeat', type: 'font-awesome'}}
      title='VALIDER' 
    />

    </View>
	);
	}
}

export default Level;