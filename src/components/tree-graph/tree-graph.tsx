import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import { Question, getWholeObject } from "api/fuctions/get-question";
import { object } from "prop-types";

interface IProps {
  questions?: Question[];
  wholeObject?: any;
  
}

class Data {
  object: any = {};
  child: any;
  constructor(wholeObject: object) {
    this.object = this.addObject(wholeObject);
  }
  addChild() {
    return { name: "123" };
  }
  addObject(object: any): any {
    if (object.final) {
      return {
        name: (object.survivors / (object.survivors + object.fatalities))
          .toString()
          .slice(0, 4)
      };
    }
    const array = [];
    if (object.nextQuestionYes) {
      array.push(this.addObject(object.nextQuestionYes));
    }
    if (object.nextQuestionNo) {
      array.push(this.addObject(object.nextQuestionNo));
    }

    return {
      name: object.label,
      children: array,
      attributes: {
        survivors: object.survivors,
        fatalities: object.fatalities,
        error: (object.error / 1).toString().slice(0, 5)
      }
    };
  }
  toData() {
    return [this.object];
  }
}

export const TreeGraph = (props: IProps) => {
  const [wholeObject, setWholeObject] = useState({});

  useEffect(() => {
    (async () => {
      const wholeObject = await getWholeObject();
      setWholeObject(new Data(wholeObject).toData());
    })();
  }, []);

  return (
    <>
      <Tree
        zoom={0.3}
        initialDepth={1}
        orientation="vertical"
        data={wholeObject}
      ></Tree>
    </>
  );
};
