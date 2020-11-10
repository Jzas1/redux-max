import React from "react";
import { connect } from 'react-redux'
import { DECREASE, INCREASE,RESET, MODAL_OPEN } from './actions'

const Counter = ({ name, count, increase, decrease, reset }) => {

  return (
      <div className="container">
        <h1>counter</h1>
        <h2>{name}</h2>
        <p className="counter">{count}</p>
        <div className="buttons">
            <button 
            type="button"
            className="btn" 
            onClick={decrease}
            >decrease</button>
            <button 
            type="button"
            className="btn" 
            onClick={reset}
            >reset</button>
            <button 
            type="button"
            className="btn" 
            onClick={increase}
            >increase</button>

        </div>
  </div>
  )
}
function mapStateToProps({ countState: { count, name } }){
  return { count: count, name: name }
}
function mapDispatchToProps(dispatch, ownProps ){
  console.log(ownProps)
  return{
    increase:() => dispatch({type: INCREASE}),
    decrease:() => dispatch({type: DECREASE}),
    reset:() => {
      dispatch({type: RESET})
      dispatch({ type:MODAL_OPEN, payload: {name:'susan',text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum debitis ab pariatur tempore tempora nesciunt. Adipisci quis quas explicabo.
      `}})
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

