import React, {Component} from "react";
import {View} from 'react-native';
import {Divider, Text, Button} from 'react-native-paper';
import {addUser, getUsers} from '../databaseAccess'

export class Profiles extends Component {


    // currentUser =  getUsers(this.props.database, "profile")

    render() {
        return (
            <View flexDirection='column'>
                <Button title="Add User" onPress={addUser(this.props.database, this.props.profileTable)}/>
                <View flexDirection='row' justifyContent="flex-start">
                    <Text>currentUser.username</Text>
                    <Text>currentUser.height</Text>
                    <Text>currentUser.sex</Text>
                    <Text>currentUser.startingWeight</Text>
                    <Text>currentUser.goalWeight</Text>
                    <Text>currentUser.currentWeight</Text>
                </View>

                <Divider style={{marginTop: 20}}/>

            </View>
        );
    }
}