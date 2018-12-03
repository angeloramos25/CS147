import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

import StoryBanner from '../Components/StoryBanner';
import CircleImageView from '../Components/CircleImageView';

export default class ShareStoryScreen extends React.Component {

  state={
    visible: false,
    contacts: [
      {
        image: Images.school1,
        name: 'Dad',
        key: 0
      },
      {
        image: Images.school1,
        name: 'Dad',
        key: 1
      },
      {
        image: Images.school1,
        name: 'Dad',
        key: 2
      },
      {
        image: Images.school1,
        name: 'Dad',
        key: 3
      }
    ]
  }

  displayPopup() {
    Alert.alert(
      'Story Shared!',
      'You shared A Fun Day at School with Dad!',
      [
        {text: 'Great!', onPress: () => console.log('Ask me later pressed')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.headerText}>Share Story</Text>
        <StoryBanner />
        <View style={styles.listContainer}>
          <Text style={styles.bodyText}>Who do you want to share with?</Text>
          <FlatList
            data={this.state.contacts}
            numColumns={2}
            style={styles.contactList}
            renderItem={({item}) =>
              <TouchableOpacity onPress={this.displayPopup}>
                <View style={styles.contactView}>
                  <CircleImageView
                    source={Images.school1}
                  />
                  <Text style={styles.contactText}>Dad</Text>
                </View>
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
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 20
  },
  bodyText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  listContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  contactList: {
    marginTop: 10,
  },
  contactView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  contactText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5
  },
  popupView: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Metrics.screenWidth*0.9,
    borderRadius: 5,
  },
  popupTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  popupSubtitle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
