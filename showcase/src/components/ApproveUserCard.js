import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const ApproveUserCard = () => (

    <Card>
        <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/steve.jpg' />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
            Steve wants to add his <strong>portfolio</strong> to Free Code Camp Philly.
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
            <Button basic color='green'>
            Approve
            </Button>
            <Button basic color='red'>
            Decline
            </Button>
        </div>
        </Card.Content>
    </Card>
)

export default ApproveUserCard