import { Row } from "react-bootstrap";
import CompCard from "./CompCard";

export function News(props) {
  return (
    <div>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
        {props.items
          ? props.items.articles.map((item) => (
              <CompCard data={item} key={item.url} />
            ))
          : "Loading..."}
      </Row>
    </div>
  );
}
