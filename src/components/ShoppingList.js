import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import {v4 as uuid} from "uuid";
// Allows to get state from redux into react component
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/ItemActions';
// Component properties should reside inside of prop types: form of validation
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    // React lifecycle method that runs when a component is mounted
    // Example: API request, calling an action
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    // // Hardcoding the state
    // state = {
    //     // Array of objects
    //     items: [
    //         { id: uuid(), name: 'Eggs' },
    //         { id: uuid(), name: 'Milk' },
    //         { id: uuid(), name: 'Steak' },
    //         { id: uuid(), name: 'Water' }
    //     ]
    // }

    render() {
        
        // Destructuring???
        // const { items } = this.state;
        // item -> enire state object
        // items -> array inside the
        const { items } = this.props.item;
        return(
            <Container>
                {/* <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                // Inline event handler
                onClick={() => {
                    // Use prompt
                    const name = prompt('Enter Item');
                    // Check to make sure user made an entry
                    if(name) {
                        this.setState(state => ({
                        // Spread operator, add a new item: generate new uuid, use passed name
                        items: [...this.state.items, { id: uuid(), name: name}]
                        }));
                    }
                }}
                >
                    Add Item
                </Button> */}
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id, name}) => (
                            // Timeout set to 500 milliseconds
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                    // onClick={() => {
                                    //     this.setState(state => ({
                                    //         // Filter out the deleted item, so it is not returned in an array
                                    //         items: state.items.filter(item => item.id !== id)
                                    //     }));
                                    // }}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

// Action brought over from redux should be stored as a prop
ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    // object that represents our state
    item: PropTypes.object.isRequired
}

// {} -- object
// prop is being mapped from the state
const mapStateToProps = (state) => ({
    item: state.item
});

// mapStateToProps allows to take item state and turn it into a component property
export default connect(
    mapStateToProps, 
    { getItems, deleteItem }
    )(ShoppingList);