import React, { FC } from "react";
import loaderImg from '../../assets/loader.gif';
import './timer.css';
import './ball-spin.css';
import { LoadingText, Overlay } from "./styles";

const LoadingComponent: FC<any> = ({ value = '', type = '' }): JSX.Element => {

  return (
    <Overlay>
      {type === 'clock' ?
        <div className="la-timer la-3x">
          <div></div>
        </div>
        :
        <div className="la-ball-spin la-3x">
          <div></div>
        </div>}
      <LoadingText>{value}</LoadingText>
    </Overlay>
  )
}

export default LoadingComponent;