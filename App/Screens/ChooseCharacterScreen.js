import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

export default class ChooseCharacterScreen extends React.Component {

  onCharacter(image) {
    this.props.navigation.state.params.onChangeCharacter(image);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Characters</Text>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.exitButton}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <FlatList
            data={[{image: Images.happy, key: 0}, {image: Images.mad, key: 1}, {image: Images.sad, key: 2},{image: Images.idea, key: 3} ]}
            numColumns={2}
            renderItem={({item}) =>
              <TouchableOpacity onPress={this.onCharacter.bind(this, item.image)}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.image}
                  />
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exitButton: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 25,
    marginRight: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 20
  },
  image: {
    width: Metrics.screenWidth*0.4,
    height: Metrics.screenWidth*0.8
  }
});
