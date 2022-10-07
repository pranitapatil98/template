
import React ,{useState} from 'react'
import Card from 'react-bootstrap/Card';

const Search = (props) => {
    const [serch ,setSerch]=useState('');

    const   changeHandler=(e)=>{
        setSerch(e.target.value);
        props.onserch(serch);
    }
  return (
    <div>
        
        <Card style={{ width: '13rem' }} className="mt-4" >
      <Card.Body>
        <Card.Title>SearchBar</Card.Title>
        <Card.Text>
        <input type="text" placeholder='Search' value={serch} onChange={changeHandler} />
        </Card.Text>

      </Card.Body>
    </Card>

    </div>
  )
};

export default Search;