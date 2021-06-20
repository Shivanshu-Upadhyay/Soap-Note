import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import SaveIcon from '@material-ui/icons/Save';
import { Form, Field } from "react-final-form";

import {
  
  Paper,
  Grid,
 
 } from "@material-ui/core";





const onSubmit = (formValues) => {
    console.log(formValues);
  };




const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 function Nconsent() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>


          <div className='text-right m-5'> <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       ADD NEW CONSENT FORM
      </Button></div>

     
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              PATIENT DETAILS
            </Typography>
           
          </Toolbar>
        </AppBar>
        <DialogContent>
         
         <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 25}}>
              

               <Grid container  spacing={2} className='mb-2'>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="name">
                      {({ input }) => (
                        <div className="upname ">
                          <label className="name">Name-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="age">
                      {({ input }) => (
                        <div className="">
                          <label className="age">Age-</label>
                           
                          <input type="text" {...input} placeholder="" className='w50'/>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
               <Grid item md={4} xs={12}>
                  <div className="">
                    <label>Gender-</label>

                     <label className='p-1 bold1'>
      M:<Field name="Gender" type="radio" value="M" component="input" />
          </label>
                    
                      <label className='p-1 bold1'>
      F:<Field name="Gender" type="radio" value="F" component="input" />
          </label>
                   
                     <label className='p-1 bold1'>
      O:<Field name="Gender" type="radio" value="O" component="input" />
          </label>
                  </div>
                </Grid>
               </Grid>


                 <Grid  container  spacing={2}>
                <Grid item md={4} xs={12}>
                  <div>
                    <Field name="date">
                      {({ input }) => (
                        <div className="mb-3">
                          <label className=" ">Date-</label>
                          <input type="date" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>

                  <Grid item md={4} xs={12}>
                  <div>
                    <Field name="Mobile No">
                      {({ input }) => (
                        <div className="">
                          <label>Mobile No-</label>
                          <input type="text" {...input} placeholder="" />
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>




               <Grid  container  spacing={2}>
                <Grid item md={12} xs={12}>
                  <div>
                    <h4>Terms & Conditions</h4>

                     <p> <b>1.</b>  The Clinic / hospital management does not guarantee any treatment given in their premise(s) or home visit or during online consultation . The ultimate decision lies with the clinic / hospital management. The physiotherapist or clinic management shall not at all be responsible.    
                          </p>


                         <p> <b>2.</b> Fees & other associated treatment costs are to be paid upfront, and are non-refundable & non-transferable.</p>
                         <p> <b>3.</b> Me and my attendants or relatives are responsible for all of our belongings and clinic / hospital management is not at all responsible for any damage or loss.</p>
                         <p> <b>4.</b> Any dispute, if any shall be sorted out between the clinic / hospital management & me amicably without the intervention of any third party.
                              </p>
                         <p> <b>5.</b> For any legal dispute, jurisdiction would be New Delhi, India.</p>
                         <p> <b>6.</b> I give my consent after reading all the terms & conditions.</p>

                  </div>
                </Grid>
              </Grid>


                 
               <Grid  container  spacing={2}>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Terms & Conditions">
                      {({ input }) => (
                        <div className="fullw10  ">
                          <label className="">Terms & Conditions:</label>
                         <textarea
                            
                            
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>


           <Grid  container  spacing={2}>
                <Grid item md={12} xs={12}>
                   <div>
                    <Field name="Signature of Patient">
                      {({ input }) => (
                        <div className="fullw10  ">
                          <label className="">Signature of Patient:</label>
                         <textarea
                            className="winew"
                            
                            {...input}
                          ></textarea>
                        </div>
                      )}
                    </Field>
                  </div>
                </Grid>
              </Grid>





                       <div className='text-right'>  <Button
                            variant="contained"
                             color="primary"
                              size="small"
                               type='submit'
                               autoFocus
                               onClick={handleClose}
                                startIcon={<SaveIcon />} >
                                   Save
                                </Button></div>


                             
            </Paper>
          </form>
        )}
      </Form>
   
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Nconsent;