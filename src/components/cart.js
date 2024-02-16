import { Button, Container, Image } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { Clear, deletefromCart } from "../rtk/slices/Cart-Slice";

function Cart() {

  const CArt = useSelector(state => state.Cart)
  const dispatch = useDispatch()
  const totale = CArt.reduce((acc, proudct) => {
    acc += proudct.price *proudct.quantity;
    return acc;
  }, 0)

  return (
    <Container className="py-5 mt-5">

      <Button variant="primary" className="mb-5" onClick={() => dispatch(Clear())}>Clear</Button>

      <h5 className="mb-5">totle-price {totale.toFixed(2)}$</h5>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>quantity</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {CArt.map((proudct) => (
            <tr>
              <td>{proudct.id}</td>
              <td>{proudct.title}</td>
              <td><Image src={proudct.image} alt={proudct.title} style={{ width: "100px", height: "100px" }} /></td>
              <td>{proudct.price}$</td>
              <td>{proudct.quantity}</td>
              <td><Button variant="danger" onClick={() => dispatch(deletefromCart(proudct))} >delete</Button></td>
            </tr>
          ))}


        </tbody>
      </Table>


    </Container>
  )
}

export default Cart;