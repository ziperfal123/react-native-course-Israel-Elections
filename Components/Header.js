import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

/* ..styles.. */
const styles = StyleSheet.create({
  headerStyle: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: '#87c0cd',
    marginBottom: 8
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    position: 'relative',
    top: 12,
    left: 18,
    fontFamily: 'Iowan Old Style',
    fontWeight: 'bold',
    color: '#33313b'
  },
  btnStyle: {
    alignItems: 'center',
    width: 73,
    height: 55,
    marginTop: 10,
    marginLeft: 38,
    paddingTop: 15,
    backgroundColor: '#113f67',
    borderRadius: 8
  },
  btnTextStyle: {
    color: '#daf9f9',
    fontSize: 18
  }
})

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnContent: 'Status',
      screenToGo: 'StatusScreen'
    }
    this.handlePress = this.handlePress.bind(this)
  }

  componentWillMount() {
    if (this.props.screenToGo == 'StatusScreen') {
      this.setState({ btnContent: 'Status' })
    } else {
      this.setState({ btnContent: 'Vote' })
    }
  }

  handlePress() {
    const target = this.props.screenToGo
    this.props.navigation.navigate(target)
  }

  render() {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.title}>Elections 2019</Text>
        <TouchableOpacity style={styles.btnStyle} onPress={this.handlePress}>
          <Text style={styles.btnTextStyle}>{this.state.btnContent}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Header
