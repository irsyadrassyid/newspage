import { Row } from 'react-bootstrap';
import CompCard from './CompCard';



export function News(props) {


  return (
    <div>

      <Row xs={1} md={2} lg={4} className="justify-content-md-center">
        {props.items
          ? props.items.articles.map((item) => (
            <CompCard data={item} key={item.url} />
          ))
          : "Loading..."
        }
      </Row>
    </div>
  )
}
