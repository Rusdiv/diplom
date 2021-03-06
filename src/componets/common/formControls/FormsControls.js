import { styled } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import React from 'react'
import classes from './FormsControls.module.css'

const Field = styled(TextField)({
  width: '400px',
});

const TextArea = styled(TextField)({
  width: '100%',
});



export const Textarea = ({input, meta , ...props}) => {

  const hasError = meta.touched && meta.error ;

  return (
    <div>
      <div className={classes.flex}>
        <TextArea variant="outlined" rows={4} multiline className={hasError && classes.error} {...props} {...input}/>
        { hasError &&  <span className={classes.errorSpan} >{meta.error}</span>}
      </div>
      
    </div>
    
  )
}

export const Input = ({input, meta , ...props}) => {
  const hasError = meta.touched && meta.error ;

  return (
    <div>
      <div className={classes.field}>
        <Field className={hasError && classes.error} {...props} {...input}/>
      </div>
      { hasError &&  <span className={classes.errorSpan} >{meta.error}</span>}
    </div>
    
  )
}

export const Title = ({input, meta , ...props}) => {
  const hasError = meta.touched && meta.error ;

  return (
    <div>
      <div className={classes.flex}>
        <Field variant="outlined" className={hasError && classes.error} {...props} {...input}/>
        { hasError &&  <span className={classes.errorSpan} >{meta.error}</span>}
      </div>
      
    </div>
    
  )
}