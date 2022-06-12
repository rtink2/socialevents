import React from 'react';
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react';

export default function HomePage({history}) {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
           <Container>
               <Header as='h1' inverted>
                   <Image size='huge' src='/assets/logo.png' style={{ marginBottom: 12 }} />
                   SocialEvents
               </Header>
               <Button onClick={() => history.push('/events')} size='huge' color='olive' inverted>
                   Get Started
                   <Icon name='right arrow' color='teal' inverted />
               </Button>
           </Container>
        </Segment>
    );
}