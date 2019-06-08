import React, { Component } from 'react'
import { Text, Modal, Button } from 'react-native'

export default class ModalPokemon extends Component {
    render() {
        return (
            <Modal animationType="slide" visible={this.props.modalVisible} >
                <Text> Screen Modal </Text>
                <Button title="Ok"/>
            </Modal>
        )
    }
}