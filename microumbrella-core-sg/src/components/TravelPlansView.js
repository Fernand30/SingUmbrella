// @flow
import React, { Component } from "react";
import {
  Animated,
  TouchableOpacity,
  View,
  SectionList,
  StyleSheet,
  Platform
} from "react-native";
import { PlansTabNavigator } from "../components/chatWidgets";

import _TRAVEL_BENEFITS from "../../data/travelBenefits";
import { Text } from "./defaultComponents";
import AppStore from "../../stores/AppStore";
const colors = AppStore.colors;
import Button from "./Button";

type TravelPlans = "basic" | "enhanced" | "superior";
type BenefitPayable = { basic: string, enhanced: string, superior: string };
type Section = { title: string, benefitPayable: BenefitPayable };
type Coverage = {
  title: string,
  sections?: Array<Section>,
  benefitPayable?: BenefitPayable
};
type Benefit = { title: string, coverage: Array<Coverage> };
type TravelBenefits = Array<Benefit>;
const TRAVEL_BENEFITS: TravelBenefits = _TRAVEL_BENEFITS;
const itemSeparatorComponent = () => <View style={styles.separator} />;
const patchCoverageWithKey = coverage => ({
  key: coverage.title,
  ...coverage
});

const coverageSummary = {
  title: "Coverage for each unit",
  coverage: [
    {
      title: "Accidential Damage",
      benefitPayable: {
        basic: "$150,000",
        premium: "$250,000",
        superior: "$500,000"
      }
    },
    {
      title: "Accidental Death &\nPermanent Disablement",
      benefitPayable: {
        basic: "$200,000",
        premium: "$250,000",
        superior: "$300,000"
      }
    },
    {
      title:
        "Loss of Baggage and Personal Effects",
      benefitPayable: {
        basic: "$3,000",
        premium: "$5,000",
        superior: "$7,000"
      }
    }
  ]
};

class TravelPlanTab extends Component {
  renderBenefit: Function;
  renderCoverage: Function;
  renderSection: Function;
  renderUnexpanded: Function;

  constructor(props) {
    super(props);
    this.renderCoverage = this.renderCoverage.bind(this);
    this.renderSection = this.renderSection.bind(this);
    this.renderUnexpanded = this.renderUnexpanded.bind(this);
    this.state = {
      expanded: false,
      fadeAnim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(
      // Animate value over time
      this.state.fadeAnim, // The value to drive
      {
        duration: 1000,
        toValue: 1 // Animate to final value of 1
      }
    ).start();
  }

  renderCoverage({ item }) {
    const coverage: Coverage = item;
    const { plan } = this.props;
    let sections = null;
    let benefitPayable = null;
    // if (coverage.sections) {
    //   sections = (
    //     <View style={styles.sections}>
    //       {coverage.sections.map(this.renderSection)}
    //     </View>
    //   );
    // } else if (coverage.benefitPayable) {
    //   benefitPayable = this.renderBenefitPayable(coverage.benefitPayable, plan);
    // }
    // const coverageStyle = {
    //   padding: 15
    // };
    // const additionalStyle = coverage.sections ? {} : styles.section;
    // return (
    //   <View
    //     key={coverage.title}
    //     style={[coverageStyle, { justifyContent: "center" }]}
    //   >
    //     <Text style={styles.coverageTitle}>{coverage.title}</Text>
    //     {sections}
    //     {benefitPayable}
    //   </View>
    // );
    if (coverage.sections) {
      return (
        <View style={styles.sections}>
          <Text style={styles.coverageTitle}>{coverage.title}</Text>
          {coverage.sections.map(this.renderSection)}
        </View>
      );
    } else if (coverage.benefitPayable) {
      return (
        <View key={coverage.title} style={styles.coverage}>
          <Text style={{ color: colors.primaryText }}>{coverage.title}</Text>
          {this.renderBenefitPayable(coverage.benefitPayable, plan)}
        </View>
      );
    }
  }

  renderSection(section: Section) {
    const { plan } = this.props;
    return (
      <View key={section.title} style={styles.section}>
        <Text style={{ color: colors.primaryText }}>{section.title}</Text>
        {this.renderBenefitPayable(section.benefitPayable, plan)}
      </View>
    );
  }

  renderBenefitPayable(benefitPayable: BenefitPayable, plan: TravelPlans) {
    const coverageAmt = benefitPayable[plan.legacyId];
    return <Text style={styles.benefitPayable}>{coverageAmt}</Text>;
  }

  renderSectionHeader({ section }) {
    return (
      <View
        style={{
          flex: 1,
          padding: 13,
          backgroundColor: 'translate'
        }}
      >
        <Text style={{ color: colors.primaryText, fontSize: 15, textAlign: 'center'}}>
          {section.title}
        </Text>
      </View>
    );
  }

  renderUnexpanded() {
    const listSections = [coverageSummary].map(benefit => ({
      data: benefit.coverage.map(patchCoverageWithKey),
      title: benefit.title,
      key: benefit.title,
      renderItem: this.renderCoverage
    }));
    questions = this.props.plan.questions
    return (
      <Animated.View style={{ opacity: this.state.fadeAnim }}>
        {/*<SectionList
                  scrollEnabled={false}
                  removeClippedSubviews={Platform.select({ ios: true, android: false })}
                  ItemSeparatorComponent={itemSeparatorComponent}
                  renderSectionHeader={this.renderSectionHeader}
                  sections={listSections}
                />*/}
        {(this.props.type=='miner')?<View style={{paddingBottom: 10}}> 
              <View style={{height:30, backgroundColor:'#dadede',justifyContent:'center'}}>
                 <Text  style={{textAlign:'center',marginTop:0,fontSize: 16}}>Coverage for each unit:</Text>
              </View>      
             <Text  style={{fontSize: 16,marginTop:10,marginLeft:10}}>{questions[0].name}</Text>
             <Text  style={{fontSize: 16,marginTop:0,marginLeft:10}}>{questions[0].value}</Text>
             <Text  style={{fontSize: 16,marginTop:10,marginLeft:10}}>{questions[1].name}</Text>
             <Text  style={{fontSize: 16,marginTop:0,marginLeft:10}}>{questions[1].value}</Text>
             <Text  style={{fontSize: 16,marginTop:10,marginLeft:10}}>{questions[2].name}</Text>
             <Text  style={{fontSize: 16,marginTop:0,marginLeft:10}}>{questions[2].value}</Text>
             <Text  style={{fontSize: 16,marginTop:10,marginLeft:10}}>{questions[3].name}</Text>
             <Text  style={{fontSize: 16,marginTop:0,marginLeft:10}}>{questions[3].value}</Text>
             <Text  style={{fontSize: 16,marginTop:10,marginLeft:10}}>{questions[4].name}</Text>
             <Text  style={{fontSize: 16,marginTop:0,marginLeft:10}}>{questions[4].value}</Text>
             <View style={styles.rowView}>
              <Text  style={{fontSize: 16}}>{questions[5].name}:</Text>
              <Text  style={{fontSize: 16}}>{questions[5].value}</Text>
             </View>
            </View>:<View style={{paddingBottom: 20}}> 
            <View style={{height:40, backgroundColor:'#dadede',justifyContent:'center'}}>
               <Text  style={{textAlign:'center',marginTop:0,fontSize: 16}}>Coverage for each unit:</Text>
            </View>   
             <Text  style={{fontSize: 16,marginTop:5,marginLeft:10}}>Each plan covers up to 10 different{'\n'}cryptocurrencies stored on a single{'\n'}wallet. Here is the coverage:</Text>    
             
             <Text  style={{fontSize: 16,marginTop:15,marginLeft:10}}>{questions[0].name}</Text>
             <Text  style={{fontSize: 16,marginTop:5,marginLeft:10}}>{questions[0].value}</Text>
             <Text  style={{fontSize: 16,marginTop:15,marginLeft:10}}>{questions[1].name}</Text>
             <Text  style={{fontSize: 16,marginTop:5,marginLeft:10}}>{questions[1].value}</Text>
             <Text  style={{fontSize: 16,marginTop:15,marginLeft:10}}>{questions[2].name}</Text>
             <Text  style={{fontSize: 16,marginTop:5,marginLeft:10}}>{questions[2].value}</Text>
             <Text  style={{fontSize: 16,marginTop:15,marginLeft:10}}>{questions[3].name}</Text>
             <Text  style={{fontSize: 16,marginTop:5,marginLeft:10}}>{questions[3].value}</Text>
              
            </View> }
        {/*<TouchableOpacity onPress={this.props.onExpand}>
                  <View>
                    <Text style={styles.readMoreText}>Read more...</Text>
                  </View>
                </TouchableOpacity>*/}
        <Button
          accessibilityLabel={"chat__select-plan_" + this.props.plan.legacyId}
          onPress={() => this.props.onSelectPlan(this.props.planIndex)}
          style={styles.selectPlanButton}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "500"
            }}
          >
            SELECT PLAN
          </Text>
        </Button>
      </Animated.View>
    );
  }

  render() {
    
    if (!this.props.expanded) {
      return this.renderUnexpanded();
    }
    // const planId = this.props.plan.legacyId;

    // const listSections = TRAVEL_BENEFITS.map(benefit => ({
    //   data: benefit.coverage.map(patchCoverageWithKey),
    //   title: benefit.title.toUpperCase(),
    //   key: benefit.title,
    //   renderItem: this.renderCoverage
    // }));
    // return (
    //   <View>
       
    //   </View>
    // );
  }
}

export default class TravelPlansView extends Component {
  state: { expanded: boolean };
  handleExpand: Function;

  constructor(props) {
    super(props);
    this.handleExpand = this.handleExpand.bind(this);
    this.state = { expanded: false };
  }

  handleExpand() {
    this.setState({ expanded: true });
  }

  render() {
    let tabRoutes = {};
    const travelPolicy = AppStore.policies.find(p => p.id === this.props.carouselProps.id);
    travelPolicy.plans.forEach((plan, idx) => {
      tabRoutes[plan.title] = {
        screen: () => (
          <TravelPlanTab
            plan={plan}
            type = {this.props.carouselProps.id}
            onSelectPlan={this.props.onSelectPlan}
            onExpand={this.handleExpand}
            expanded={this.state.expanded}
            planIndex={idx}
          />
        )
      };
    });
    return <PlansTabNavigator tabRoutes={tabRoutes} />;
  }
}

const styles = StyleSheet.create({
  readMoreText: {
    margin: 15,
    color: colors.primaryAccent,
    fontSize: 17
  },
  rowView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical: 10
  },
  selectPlanButton: {
    borderRadius: 0
  },
  sections: {
    marginVertical: 15
  },
  benefitPayable: {
    flex: 0.4,
    textAlign: "right",
    justifyContent: "center",
    alignItems: "center",
    color: colors.primaryText
  },
  coverage: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  section: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  coverageTitle: {
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 15,
    color: colors.primaryText,
    fontWeight: "bold"
  },
  separator: {
    borderBottomColor: colors.borderLine,
    borderBottomWidth: 1
  }
});
