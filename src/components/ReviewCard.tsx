import { Card } from "react-bootstrap"
import { ReviewType } from "../utilities/types";



export const ReviewCard = ({ review }:
  {review: ReviewType}) => {

  return (
      <div >
        <Card key={review.id}>
        <Card.Body className="d-flex flex-column p-4">
          <Card.Title>{review.username}</Card.Title>
          <Card.Subtitle>Rating: {review.rating}</Card.Subtitle>
          <Card.Text>{review.description}</Card.Text>
        </Card.Body>
      </Card>
      </div>
  );
};
