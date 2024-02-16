import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProudcts } from '../rtk/slices/Proudct-Slice';
import { addtoCart } from '../rtk/slices/Cart-Slice';


function Proudcts() {

    const Proudcts = useSelector((state) => state.Proudcts)

    console.log(Proudcts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProudcts())
    }, [])

    return (
        <>
            <Container className='mt-4 py-5'>
                <Row className='py-5'>
                    {Proudcts.map((Proudct) => (
                        <Col key={Proudct.id}>
                            <Card style={{ width: '18rem' }} className='mt-4'>
                                <Card.Img variant="top" style={{ height: '300px' }} src={Proudct.image} />
                                <Card.Body>
                                    <Card.Title>{Proudct.title.slice(0, 15)}....</Card.Title>
                                    <Card.Text>
                                        {Proudct.category}
                                    </Card.Text>
                                    <Card.Text>
                                        {Proudct.price}$
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>dispatch(addtoCart(Proudct))}>Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}



                </Row>
            </Container>
        </>
    )
}

export default Proudcts;