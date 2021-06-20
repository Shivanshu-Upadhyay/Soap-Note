import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Form, Field } from "react-final-form";


import {
  
  Paper,
  Grid,
  Button,
  
} from "@material-ui/core";




function Referral() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div >


      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 30}}>
              


<h4 className='mb-5 text-uppercase'><u>REFERRAL DETAILS</u></h4>
         
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={6} xs={12}>
                     
                  <div className='fullw10'>
                    <label>Referral Source</label>
                 <Field name="Referral Source" component="select">
              <option />
              <option value="Doctors">Doctors</option>
              <option value="Advertisement"> Advertisement</option>
              <option value="Website">Website</option>
              <option value="Patients"> Patients</option>
              <option value="Others">Others</option>
              
             
                  </Field>
                  </div>
                
              </Grid>

                   <Grid item md={6} xs={12}>
               <div>
                    <Field name="Name">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Name</label>
                           
                          <input type="text" {...input} placeholder=""></input>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

   <Grid item md={6} xs={12}>
                  <div className="">
                    <label>Send:</label>

                     <label className='p-1 bold1'>
      SMS: <Field name="Send" type="radio" value="SMS" component="input" />
          </label>
                    
                      <label className='p-1 bold1'>
      Email: <Field name="Send" type="radio" value="Email" component="input" />
          </label>
                   
                     
                  </div>
                </Grid>
                      
                        <Grid item md={6} xs={12}>
               <div>
                    <Field name="Contact">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Contact No</label>
                           
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>



                    <Grid item md={6} xs={12}>
               <div>
                    <Field name="Email">
                      {({ input }) => (
                        <div className="fullw10">
                          <label className="">Email</label>
                           
                          <input type="Email" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
                </Grid>

         </Grid>


        

                              <div className=' text-center mb-5 padd' >  <Button
                            variant="contained"
                             color="primary"
                              size="small"                             
                               type='submit'                            
                                >
                                   SAVE
                                </Button></div>


                            
            </Paper>
          </form>
        )}
      </Form>
    </div>
  );
}
export default Referral;