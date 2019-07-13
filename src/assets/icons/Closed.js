
import React from 'react';
import {
  Svg,
  Circle,
  G,
  Polyline,
} from 'react-native-svg';

export default function Closed(props) {
  return (
    <Svg {...props} version="1.1" viewBox="0 0 50 50" x="0px" y="0px" xmlSpace="preserve">
      <Circle style={{ "fill": "#D75A4A" }} x="25" y="25" r="25" />
      <Polyline style={{ "fill": "none", "stroke": "#FFFFFF", "strokeWidth": "2", "strokeLinecap": "round", "strokeMiterlimit": "10" }} points="16,34 25,25 34,16 &#xA;&#x9;" />
      <Polyline style={{ "fill": "none", "stroke": "#FFFFFF", "strokeWidth": "2", "strokeLinecap": "round", "strokeMiterlimit": "10" }} points="16,16 25,25 34,34 &#xA;&#x9;" />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
    </Svg>
  );
}
