import React from 'react';
import {withFormik, Form, Field} from 'formik';
// import * as Yup from "yup";
// import axios from 'axios';


function SmurfForm () {
    return(
        <Form className='smurfForm'>
        {/* <h3> Add Smurf To Your Village: </h3> */}

        <Field type='text' name='name' placeholder='smurf name' />
        <Field type='number' name='age' placeholder='smurf age' />
        <Field type='height' name='height' placeholder='smurf height' />

        <button type='submit' className='add-smurf-button' > add
        </button>

        </Form>
    )
}

const FormikSmurfForm = withFormik({
    mapPropsToValues(name, age, height){
        return{
            // name: name || '',
            age: age || '',
            height: height || ''
        }
    }
})(SmurfForm);

export default FormikSmurfForm;