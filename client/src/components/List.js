import "./List.css";

import { gql, useMutation } from "@apollo/client";

const DELETE_MUTATION = gql`

  mutation($_id: String!){
    deleteEvent(_id: $_id){
    title
    }
  }
`

const onClickHandler = (event) => {
  console.log(event)
}

function List(props) {

    const [deleteEvent] = useMutation(DELETE_MUTATION)
    console.log(props.event)

  return (
    <div className='list-container' key={props.event._id}>
        <div className='list' >
            <ul>
                <li>{props.event.title}</li>
                <li>Des..  =  {props.event.description}</li>
            </ul>
            <ul>
                <li>PRICE - {props.event.price}Rs</li>
                <li>DATE - {props.event.date}</li>
            </ul>
            <ul>
            </ul>
        </div>
        <div className='buttonContainer'>
             <button className='deleteButton' onClick={() => {deleteEvent({
              variables: {
                _id: props.event._id
              }
             })}}>Delete</button>
             <button className='editButton' onClick={onClickHandler}>Edit</button>
        </div>
    </div>
  )
}

export default List;