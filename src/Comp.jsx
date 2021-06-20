import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Form, Field } from "react-final-form";

import SaveIcon from '@material-ui/icons/Save';

import {
  
  Paper,
  Grid,
  Button,
  
} from "@material-ui/core";

import Tables from "./Table";


function Comp(props) {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div >


      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 30}}>
              


<h4 className='mb-5 text-uppercase'><u>{props.AsName}{props.Name}{props.SubName}{props.ObjName}</u></h4>
         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={6} xs={12}>
                     <div>
                    <Field name="date">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className=" ">Date </label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

                   <Grid item md={6} xs={12}>
                    
              <div>
                    <Field name="Description">
                      {({ input }) => (
                        <div className="fullw100 ">
                          <label className="name">Description</label>
                         <textarea
                            className=""
                            
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>
              </Grid>

         </Grid>

                              <div className=' text-right mb-2'>  <Button
                            variant="contained"
                             color="primary"
                              size="small"                             
                               type='submit'                            
                                startIcon={<SaveIcon />} >
                                   Save
                                </Button></div>


{/* ++++++++++++++++++++++++++TABLE+++++++++++++++++++++++++++++++==== */}
       <Tables sname='Description'/>
{/* ++++++++++++++++++++++++++TABLE+++++++++++++++++++++++++++++++==== */}

      
                            
            </Paper>
          </form>
        )}
      </Form>
    </div>
  );
}
export default Comp;