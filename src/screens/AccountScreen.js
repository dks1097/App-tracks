import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import {FontAwesome} from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};

const styles = StyleSheet.create({});

export default AccountScreen;
