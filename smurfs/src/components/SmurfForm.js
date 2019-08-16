import React from 'react';
import {withFormik, Form, Field} from 'formik';
import { connect } from 'react-redux';
import { postData } from "../actions";

function SmurfForm (props) {
    return(
        <Form className='smurfForm'>
        {/* <h3> Add Smurf To Your Village: </h3> */}

        <Field type='text' name='name' placeholder='surf name' />
        <Field type='number' name='age' placeholder='smurf age' />
        <Field type='text' name='height' placeholder='smurf height' />

        <button type='submit' className='add-smurf-button' > submit
        </button>

        </Form>
    )
}

const FormikSmurfForm = withFormik({

    handleSubmit(values, {setStatus}){
        console.log('submitting the following values: ', values);
        postData(values);
    },

    mapPropsToValues(name, age, height){
        return{
            name: name || '',
            age: age || '',
            height: height || ''
        }
    }
})(SmurfForm);

const mapStateToProps = (state) => {
    return {
      state
    };
  };



export default connect(mapStateToProps, { postData })(FormikSmurfForm);