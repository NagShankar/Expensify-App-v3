import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "./../actions/expenses";


//previosly this was functional component, now changed to class for testing the unconnected version
export class AddExpensePage extends React.Component{
    
    onSubmission = (expense) => {
        //console.log(expense);
        //props.dispatch(addExpense(expense));
         this.props.submitNow(expense);
         this.props.history.push(
          "/"
        ); /* routing back to dashboard page after submission using history given by react router */
      }
    
    render(){
        
        return(
         <div>
               <h1>Add Expense</h1>
               <ExpenseForm onSubmission={this.onSubmission} />
         </div>
        
        );
    }
    
    
}


const mapDispatchToProps = (dispatch) => {
    return{
        submitNow : (expense) => dispatch(addExpense(expense))
   }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage); //connect gives access to props which allow us to dispatch action
