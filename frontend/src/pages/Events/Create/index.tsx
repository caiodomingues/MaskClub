import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiOutlineCheck } from "react-icons/hi";

import { CardContainer, CardBottom } from "./styles";

import Button from "../../../components/Button";
import BlueBar from "../../../components/BlueBar";
import Content from "../../../components/Content";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Input from "../../../components/Input";

const Create: React.FC = () => {
  return (
    <Container>
      <BlueBar compact={true} />
      <Content>
        <CardContainer>
          <Link to="/events">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Back
          </Link>
          <h1>Creating a new event</h1>
          <Card style={{ padding: 32 }}>
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Give it a cool name!"
            />
            <br />
            <label htmlFor="place">Place</label>
            <Input
              type="text"
              id="place"
              name="place"
              placeholder="Where it will happen?"
            />
            <br />
            <label htmlFor="comment">Comment</label>
            <Input
              type="text"
              id="comment"
              name="comment"
              placeholder="Tell us more about this event"
            />
            <br />
            <label htmlFor="file">Photo</label>
            <Input
              type="file"
              id="file"
              name="file"
              placeholder="Send us some cool photos of previous events or marketing pieces"
            />
            <CardBottom>
              <p>
                By registering your event on MaskClub you agree to the{" "}
                <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </p>
              <Button type="submit">
                <HiOutlineCheck size={56} />
              </Button>
            </CardBottom>
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Create;
