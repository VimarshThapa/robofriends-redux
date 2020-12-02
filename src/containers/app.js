import React, {Component} from 'react';
import { connect } from 'react-redux';
import "./App.css";
import  { CardList } from "../components/card-list";
import SearchBox from "../components/search-box";
import Scroll from "../components/scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPeding,
    error: state.requestRobots.error
})

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
})

class App extends Component {
    componentDidMount(){
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="tc">
            <h1 className='f1'>RoboFriends</h1>
                <SearchBox placeholder="Search Robots" handleChange={onSearchChange} />
                <Scroll>
                { isPending ? <h1 className="tc ac">Loading ...</h1>
                :<ErrorBoundary >
                    <CardList monsters={filteredRobots} />   
                </ErrorBoundary>
             }
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);