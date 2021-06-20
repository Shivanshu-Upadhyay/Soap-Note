import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Form, Field } from "react-final-form";

import { 
  Paper,
  Grid,
  Button, 
} from "@material-ui/core";









function Notification() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

 

  return (
    <div >


      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 30}}>
              

                    
<h4 className='mb-5 text-uppercase'><u>COMMUNICATION</u></h4>
               <Grid container  className='mb-3' spacing={2}>
                 <Grid item md={6} xs={6}>
                     <div>
                    
                          <h5 className='text-right p-1'>Reminder SMS</h5>
                         
                  </div>
              </Grid>


              <Grid item md={6} xs={6}>
                     <div>
                    
                    <Field name="SMS">
                      {({ input }) => (
                       
                       
                          <div className='pt-1 abc'>
                         <Field name="Checkbox" type="checkbox" value="Checked" component="input" /></div>
                         
                        
                      )}
                    </Field>
                  </div>
              </Grid>


                 <Grid item md={12} xs={12}>

              <div>
                    <Field name="ReminderSMS">
                      {({ input }) => (
                        <div className="fullw10  ">
                         
                         <textarea
                           className="wnew"   
                           defaultValue='Hey! Your Treatment sessions are yet to be completed Visit Regularly & berform prescried exercioes at home as prescribed'   
                          placeholder="Hey! Your Treatment sessions are yet to be completed Visit Regularly & berform prescried exercioes at home as prescribed"         
                           {...input}></textarea>
                        </div>
                      )}
                    </Field>
                  </div>
           
           </Grid>


         </Grid>

        <div className=' text-right mb-3  padd'> <Button
        variant="contained"
        type='submit'
        color="primary" >
        Submit
      </Button></div>

                            
            </Paper>
          </form>
        )}
      </Form>
    </div>
  );
}
export default Notification;
