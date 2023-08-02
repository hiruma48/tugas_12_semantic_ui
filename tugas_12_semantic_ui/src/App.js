import { Component } from "react";
import "semantic-ui-css/semantic.min.css"
import { Button, Checkbox, Form, Grid, Header, Image, Input, Segment } from "semantic-ui-react";



class App extends Component{
  render(){
    return(
      <div>
        <br/><br/>
        <Grid columns={3}  textAlign="center" stackable>
          <Grid.Column>
          <Header as="h3" color="teal">
              <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png "/>
              Member Login
            </Header>
          <Segment raised>
          <Form>
            <Form.Field>
            <Input icon='user' iconPosition='left' placeholder='Email address' />
            </Form.Field>
            <Form.Field>
            <Input icon= 'lock' iconPosition="left" placeholder='password' />
            </Form.Field>
            <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button color="teal" type='submit'>Login</Button>
          </Form>
        </Segment>
        <Segment raised>
          <text>Tidak Punya Akun? silakan <a href="Register">Register</a></text>
        </Segment>
          </Grid.Column>
        </Grid>
        
   
      </div>
     
    )
  }
}

export default App;
