import React from "react";
import { Card, CardText, CardBody } from "reactstrap";
const Project = props => {
  const { name, description } = props.project;

  return (
    <div>
      <Card>
        <CardText>Name: {name}</CardText>
        <CardBody>Description: {description}</CardBody>
      </Card>
    </div>
  );
};

export default Project;
