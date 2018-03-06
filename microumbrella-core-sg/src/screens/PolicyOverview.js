// @flow
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import VectorDrawableView from "../components/VectorDrawableView";

import AppStore from "../../stores/AppStore";
const colors = AppStore.colors;
import Page from "../components/Page";
import PolicyPrice from "../components/PolicyPrice";
import { Text } from "../components/defaultComponents";

class CoverageItem extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const screenName = this.props.covered ? "Covered" : "NotCovered";
    this.props.navigation.navigate(screenName, {
      coverageTitle: this.props.title
    });
  }

  render() {
    return (
      <View style={styles.coverageItem}>
        <View
          style={[
            styles.coverageIconContainer,
            !this.props.covered ? styles.notCovered : null
          ]}
        >
          <VectorDrawableView
            resourceName={this.props.icon}
            style={styles.coverageIcon}
          />
        </View>
        <Text style={styles.coverageTitle}>
          {this.props.shortTitle || this.props.title}
        </Text>
      </View>
    );
  }
}

class PolicyCoverages extends Component {
  render() {

    const coverageHighlights =
      this.props.coverageHighlights || this.props.covered.slice(0, 3);
    var coverageHighlights1=[], coverageHighlights2=[]
    if(coverageHighlights.length==4){
      coverageHighlights1 = coverageHighlights.slice(0,2)
      coverageHighlights2 = coverageHighlights.slice(2,4)
    }else if(coverageHighlights.length==5){
      coverageHighlights1 = coverageHighlights.slice(0,3)
      coverageHighlights2 = coverageHighlights.slice(3,5)
    }
      
    const coverageItems1 = coverageHighlights1.map(item => (
      <CoverageItem
        key={item}
        navigation={this.props.navigation}
        covered={true}
        {...AppStore.coverages[item]}
      />
    ));
    const coverageItems2 = coverageHighlights2.map(item => (
      <CoverageItem
        key={item}
        navigation={this.props.navigation}
        covered={true}
        {...AppStore.coverages[item]}
      />
    ));

    return (
      <View style={styles.configContainer}>
        <Text style={styles.configTitle}>COVERAGE HIGHLIGHTS</Text>
        <View style={styles.coverage}>{coverageItems1}</View>
        <View style={styles.coverage}>{coverageItems2}</View>
      </View>
    );
  }
}

export default class PolicyOverview extends Component {
  render() {

    const { policy } = this.props.screenProps;
    //alert(policy.coverageHighlights)
    const showPerMonth = policy.title !== "Travel Protection";
    const pricePerMonth = policy.plans[0].premium;
    return (
      <Page>
        <Text style={styles.policyTitle}>{policy.title}</Text>
        <PolicyPrice
          pricePerMonth={pricePerMonth}
          showFrom={!policy.doNotRenderFromInSummary}
          showDuration={true}
          minimumCoverage={policy.from}
          usd = {policy.usd}
          usd1 = {policy.usd1}
        />
        <PolicyCoverages {...policy} />
      </Page>
    );
  }
}

const PRICE_CONTAINER_SIZE = 125;
const COVERAGE_CONTAINER_SIZE = 50;
const PRICE_DECIMAL_CONTAINER_SIZE = 20;

const styles = StyleSheet.create({
  notCovered: {
    opacity: 0.3
  },
  coverageTitle: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 12
  },
  coverageIcon: {
    height: COVERAGE_CONTAINER_SIZE,
    width: COVERAGE_CONTAINER_SIZE
  },
  coverageIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: COVERAGE_CONTAINER_SIZE,
    width: COVERAGE_CONTAINER_SIZE,
    borderRadius: COVERAGE_CONTAINER_SIZE / 2,
  },
  coverageItem: {
    flex: 0.25,
    alignItems: "center"
  },
  coverage: {
    flexDirection: "row"
  },
  configTitle: {
    color: colors.primaryText,
    fontSize: 17,
    marginBottom: 20
  },
  configSubtitle: {
    fontSize: 13,
    marginBottom: 10
  },
  configContainer: {
    flex: 1,
    alignItems: "center"
  },
  dropdownDefault: {
    justifyContent: "center",
    fontSize: 16,
    color: colors.primaryText
  },
  startDateContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 5,
    paddingBottom: 15,
    borderBottomColor: colors.softBorderLine,
    borderBottomWidth: 1.5
  },
  policyTitle: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center"
  }
});
