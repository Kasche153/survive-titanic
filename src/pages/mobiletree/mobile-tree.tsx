import React, { useEffect, useState } from "react";
import "pages/mobiletree/mobile-tree.scss";
import { Background } from "components/background/background";
import { Panel } from "components/panel/Panel";
import { TreeGraph } from "components/tree-graph/tree-graph";
import "components/topbar/topbar.scss";
import "pages/mobiletree/mobile-tree.scss";
import { Button } from "components/button/Button";
import { GoArrowLeft } from "react-icons/go";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MobileTree = (props: RequiredInput) => {
  return (
    <>
      <Background></Background>

      <Button
        variant="big-red"
        className="go-back-btn btn-block"
        onClick={props.goBackToQuestion}
      >
        <GoArrowLeft size={100} />
      </Button>

      <div className="tree-container-view">
        <TreeGraph></TreeGraph>
      </div>
    </>
  );
};
interface RequiredInput {
  goBackToQuestion(): void;
}
