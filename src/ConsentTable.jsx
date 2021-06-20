import React from "react";
import { Table } from 'react-bootstrap';
import { Form, Field } from "react-final-form";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


import { Paper,} from "@material-ui/core";


function ConsentTable() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  return (
    <div className='container'>
   
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="">
             
             
              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className='text-center'> Date </th>
                    <th colSpan='4' className='text-center'>Actions</th>
                    

                    
                  </tr>

                  
                  <tr>
                    
                    <td>
                       
                    </td>
                    
                    <td>
                      <MailOutlineIcon color="secondary"/>   Email
                    </td>
                    <td>
                      < PhoneIcon color="secondary" /> Phone
                    </td>

                    <td>
                       < EditIcon color="secondary"/> Print
                    </td>

                    <td>
                      < DeleteIcon color="secondary"/>  Delete
                    </td>
                   
                  </tr>
                  
                    
                </thead>

   
          
              </Table>                   
            </div>
          </form>
        )}
      </Form>
      
    </div>
  );
}
export default ConsentTable;