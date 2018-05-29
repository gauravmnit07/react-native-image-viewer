import * as React from "react"
import {Image, ImageSourcePropType, Text, View, ViewStyle} from "react-native"
import {simpleStyle} from "./image-viewer.style"

export class Props {
  public bounces?: boolean = true;

  public bounceResistance?: number = 3.5;

  public mediaList?: IMedia[] = [];

  public flipThreshold?: number = 80;

  public maxOverflow?: number = 300;

  public index?: number = 0;

  public backgroundColor?: string = "black";

  public footerContainerStyle?: object = {};

  public style?: ViewStyle = {};

  public onLongPress?: (image?: IMedia) => void = () => {
    //
  };

  public onClick?: (close?: () => any) => void = () => {
    //
  };

  public onDoubleClick?: (close?: () => any) => void = () => {
    //
  };

  public renderHeader?: (currentIndex?: number) => React.ReactElement<any> = () => {
    return null as any
  };

  public renderFooter?: (currentIndex?: number) => React.ReactElement<any> = () => {
    return null as any
  };

  public renderIndicator?: (currentIndex?: number,
                            allSize?: number) => React.ReactElement<any> = (currentIndex?: number, allSize?: number) => {
    return React.createElement(
      View,
      {style: simpleStyle.count},
      React.createElement(
        Text,
        {style: simpleStyle.countText},
        currentIndex + "/" + allSize
      )
    )
  };

  public renderArrowLeft?: () => React.ReactElement<any> = () => {
    return null as any
  };

  public renderArrowRight?: () => React.ReactElement<any> = () => {
    return null as any
  };

  public onCancel?: () => void = () => {
    //
  };

  /**
   * function that fires when user swipes down
   */
  public onSwipeDown?: () => void = () => {
    //
  };

  public onChange?: (index?: number, prevIndex?: number) => void = () => {
    //
  };

  /**
   * renderNode
   */

  public renderNode?: (media?: IMedia, index?: number, Wrapper?: any) => any = (media?: any, index?: number, Wrapper?: any) => {
    return React.createElement(Wrapper,
      {},
      React.createElement(Image, {
        style: {height: "100%", width: "100%"},
        resizeMode: "contain", ...media,
        source: {uri: media!.source}
      })
    );
  }
}

export class State {
  public currentShowIndex?: number = 0;
}

export interface IMedia {
  type: string
  title?: string
  description?: string
  source?: string
  caption?: string
  previewImage?: string
  mediaDetails?: object
  callToAction?: object
}
