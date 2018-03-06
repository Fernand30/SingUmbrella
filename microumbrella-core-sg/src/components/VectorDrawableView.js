import React, { Component } from "react";
import { Platform, Image } from "react-native";
import AndroidVectorDrawableView from "react-native-vectordrawable-android";
import Images from '../images'

export default class VectorDrawableView extends Component {
  render() {
    const { resourceName, style } = this.props;

    if (Platform.OS === "android") {
      return (
        <AndroidVectorDrawableView resourceName={resourceName} style={style} />
      );
    }
    const iosResourceUri = resourceName.replace(/_/g, "-") + ".png";
    if(resourceName == 'cryptoTrust360'){
      imaageSrc = Images.CrytoTrust360
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'MinerTrust360'){
      imaageSrc = Images.MinerTrust360
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'accidental'){
      imaageSrc = Images.accidental
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'Theft'){
      imaageSrc = Images.Theft
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'short'){
      imaageSrc = Images.short
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'Liquid'){
      imaageSrc = Images.Liquid
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'Fire'){
      imaageSrc = Images.Fire
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'employee'){
      imaageSrc = Images.employee
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'exchange'){
      imaageSrc = Images.exchange
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'cryptocurrency'){
      imaageSrc = Images.cryptocurrency
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'wallet'){
      imaageSrc = Images.wallet
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'Negligence'){
      imaageSrc = Images.Negligence
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'wilfulAct'){
      imaageSrc = Images.wilfulAct
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'dishonest'){
      imaageSrc = Images.dishonest
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'war'){
      imaageSrc = Images.war
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'seizure'){
      imaageSrc = Images.seizure
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else if (resourceName == 'Wear'){
      imaageSrc = Images.Wear
      return (
        <Image
          source={imaageSrc}
          resizeMode="contain"
          style={style}
        />
      );
    }else{
      return (
        <Image
          source={{ uri: iosResourceUri }}
          resizeMode="contain"
          style={style}
        />
      );
    } 
    
  }
}
