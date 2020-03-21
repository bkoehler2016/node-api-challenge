import React from "react";
import { Card, CardText, CardBody, CardSubtitle } from "reactstrap";
const Project = props => {
  const { name, description, completed } = props.project;

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
