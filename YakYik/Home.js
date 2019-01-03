import React, { Component } from 'react';
import { Alert, AppRegistry, Text, View, Image, ScrollView, Platform, StatusBar, TouchableOpacity } from 'react-native';
var names = ["Sam", "Bob", "Nick", "Jason", "Bailey", "Dave", "Amanda"]

class Upvote extends Component{
  render() {
    return (
      <Image source={require("./assets/upvote.png")} style={{width: 40, height: 40}}/>
    );
  }
}

class Downvote extends Component{
  render() {
    return (
      <Image source={require("./assets/downvote.png")} style={{width: 40, height: 40}}/>
    );
  }
}

class Card extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        
        {/* the message part */}
        <TouchableOpacity onPress={_onPressMessage} underlayColor="white">
          <View style={{flex: 1, textAlign: 'left'}}>
            <Text>{this.props.name}</Text>
          </View>
        </TouchableOpacity>

        {/* the upvoting part */}
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={_onUpvote} underlayColor="white">
            <Upvote></Upvote>
          </TouchableOpacity>
          <TouchableOpacity onPress={_onDownvote} underlayColor="white">
            <Downvote></Downvote>
          </TouchableOpacity>
          <Text style={{alignItems: 'center'}}>1</Text>
        </View>
      </View>
    );
  }
}

export default class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{ paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
        <View style={{flex: 1}}>
            {loopNames()}
        </View>
      </ScrollView>
    );
  }
}

function loopNames() {
  return names.map((data) => {
    return (
      <View style={{height: 120, backgroundColor: '#33cccc', borderBottomColor: 'black', borderWidth: 2}}>
        <Card name={data}/>
      </View>
      
    )
  })
}

function _onPressMessage() {
  Alert.alert('You tapped the message!')
  const {navigate} = this.props.navigation;
  navigate('Message')
}

function _onUpvote() {
  Alert.alert('You tapped the upvote!')
}

function _onDownvote() {
  Alert.alert('You tapped the downvote!')
}