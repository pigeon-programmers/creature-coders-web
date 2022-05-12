import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleUser } from '../store/singleUser'

class UserProfile extends React.Component { 
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadSingleUser(this.props.match.params.userId);
    }

    render() {
        console.log("SINGLE USER PROPS", this.props.singleUser)
        return (
            <div>
            <h3>Welcome back, {this.props.singleUser.username}!</h3>
            {/* <p>Your Pet: {this.props.singleUser.pet.type}</p> */}
            {/* <p>Your Badges: {this.props.singleUser.badges.length ? this.props.singleUser.badges.map((badge) => {
                return ( 
                    <div key={badge.id}>{badge.name}</div>
                )
            }) : null}</p> */}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        singleUser: state.singleUser 
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadSingleUser: (userId) => dispatch(fetchSingleUser(userId))
    }
}

export default connect(mapState, mapDispatch)(UserProfile);
