import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TitleText";
const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIos,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 120,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIos: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: colors.primary,
  },
  title: {
    color: Platform.OS === "ios" ? colors.primary : "white",
  },
});

export default Header;
