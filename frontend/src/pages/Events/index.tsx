import React from "react";
import { useHistory } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";

import { CardContainer } from "./styles";

import Button from "../../components/Button";
import BlueBar from "../../components/BlueBar";
import Content from "../../components/Content";
import Container from "../../components/Container";
import Card from "../../components/Card";

const Events: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <BlueBar compact={true}>
        <Button
          style={{ border: "none" }}
          type="button"
          onClick={() => history.push("/create")}
        >
          <p style={{ fontSize: 42 }}>+</p>
        </Button>
      </BlueBar>
      <Content>
        <h1 className="title">Upcoming events</h1>
        <CardContainer>
          <Card>
            <h1>Teste</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              repellat magnam nulla itaque architecto temporibus similique
              impedit odio ad fugit, perspiciatis, eius id quos officia
              molestiae repudiandae accusamus ab voluptate.
            </p>
            <HiOutlineTrash size={24} />
          </Card>
          <Card>
            <h1>Teste</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              repellat magnam nulla itaque architecto temporibus similique
              impedit odio ad fugit, perspiciatis, eius id quos officia
              molestiae repudiandae accusamus ab voluptate.
            </p>
            <HiOutlineTrash size={24} />
          </Card>
          <Card>
            <h1>Teste</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              repellat magnam nulla itaque architecto temporibus similique
              impedit odio ad fugit, perspiciatis, eius id quos officia
              molestiae repudiandae accusamus ab voluptate.
            </p>
            <HiOutlineTrash size={24} />
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Events;
