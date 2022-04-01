import React, { } from "react";
import loaderImg from '../../assets/loader.gif';
import { Loader, LoaderContainer } from "./styles";

function LoadingComponent() {

    return (
        <LoaderContainer>
        <Loader className="loading">
          <img src={loaderImg}></img>
        </Loader>
      </LoaderContainer>
    )
}

export default LoadingComponent;