import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      btnContent: 'Status',
      screenToGo: 'StatusScreen'

    }
  }

  componentWillMount() {
    if (this.props.screenToGo == 'StatusScreen') {
        this.setState({btnContent: 'Status'})
    }
    else {
      this.setState({btnContent: 'Vote'})
    }
  }

  handlePress = () => {
    let target = this.props.screenToGo;
    this.props.navigation.navigate(target)
  }



  render() {

    let headerStyle = {
      height: 75 , 
      flexDirection: 'row',
      marginTop: this.props.marginTop,
      justifyContent: 'center',
      backgroundColor: '#87c0cd',
      borderColor: '##0c3e6a',
      borderWidth: 0.6,
      marginBottom: 15,
}

    return(
      <View style={headerStyle}>
        <Text style={styles.title}>Elections 2019</Text>
        <TouchableOpacity style={styles.btnStyle} onPress={this.handlePress}>
          <Text style={{color:'#daf9f9' , fontSize: 16}}>{this.state.btnContent}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    textAlign: 'center',
    position: 'relative',
    top: 17,
    left: 12
  },

  btnStyle: {
    alignItems: 'center',
    width: 70,
    height: 52,
    marginTop: 10,
    marginLeft: 35,
    paddingTop: 15,
    backgroundColor: '#113f67',
    borderRadius: 8,
  }
});


