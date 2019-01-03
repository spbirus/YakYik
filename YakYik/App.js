import React, { Component } from 'react';
import { Alert, Button, AppRegistry, Text, View, Image, ScrollView, Platform, StatusBar, TouchableOpacity } from 'react-native';
// import Home from './Home'
// import Message from './Message'
import { createStackNavigator, createAppContainer } from 'react-navigation';
var names = ["Sam", "Bob", "Nick", "Jason", "Tim", "John", "Bailey", "Dave", "Amanda"]

//home screen
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
  addCommand = () => {
    this.props.navigation.navigate("Message");
  }
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        
        {/* the message part */}
        <TouchableOpacity onPress={this.addCommand} underlayColor="white">
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

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <ScrollView style={{ paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
        <View style={{flex: 1}}>
            {loopNames(this.props.navigation)}
        </View>
      </ScrollView>
    );
  }
}

function loopNames(nav) {
  return names.map((data) => {
    return (
      <View style={{height: 120, backgroundColor: '#33cccc', borderBottomColor: 'black', borderWidth: 2}}>
        <Card name={data} navigation={nav}/>
      </View>
      
    )
  })
}

function _onUpvote() {
  Alert.alert('You tapped the upvote!')
}

function _onDownvote() {
  Alert.alert('You tapped the downvote!')
}


//Message screen
class MessageScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, textAlign: 'left'}}>
        <View style={{height: 120, backgroundColor: '#33cccc', borderBottomColor: 'black', borderWidth: 2}}>
          <Text></Text>
        </View>
        
        
      </View>
    )
  }
}


// multi screen part
const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    header: { visible: false },
    navigationOptions: {
      title: 'Home',
      header: null
    },
  },
  Message: {
    screen: MessageScreen,
    header: { visible: false },
  },
});

const App = createAppContainer(RootStack);

export default App;