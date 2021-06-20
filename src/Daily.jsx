import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup,Button,Paper} from '@material-ui/core'
import { Table } from 'react-bootstrap';
import { Form, Field } from "react-final-form";


function Daily() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  return (
    <div>
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
           <Paper style={{ padding: 25}}>
            <div className="">
              <h4><u>DAILY REGISTER</u></h4>
               <div className=' text-right p-3'>
               <ButtonGroup disableElevation variant="contained" color="primary">
               <Button>UPCOMING</Button>
                <Button disabled >PREVIOUS</Button>
               </ButtonGroup>
                   </div>
             
              
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th  > Date </th>
                    <th  >Time Slot</th>
                    <th   >Patient</th>
                    <th   >Consultant</th>
                    <th   >Attendance</th>
                    <th   >Payment Status</th>
                    <th   >Action</th>
                    
                  </tr>

                  
                 
                  <tr>
                    <th scope="row"></th>

                    <th>
                    
                         
                    </th>
                    <th>
                   
                                         
                    </th>
                    <th>
                   
                                          
                    </th>
                    <th>
                    <div>
           
            <Field name="Attendance" component="select">
              <option />
              <option value="Visited">Visited</option>
              <option value="Not Visited">Not Visited</option>
              
            </Field>
          </div>
          
                                           
                    </th>

                    <th>
                    <div>
           
            <Field name="Payment Status" component="select">
              <option />
              <option value="Paid">Paid</option>
              <option value="Not Paid">Not Paid</option>
              
            </Field>
          </div>                 
                    </th>

                    <th>
                    
                                           
                    </th>
                    
                  </tr>

                  

                    
                </thead>

   
          
              </Table>                   
            </div>
            </Paper>
          </form>
        )}
      </Form>
    </div>
  );
}
export default Daily;

