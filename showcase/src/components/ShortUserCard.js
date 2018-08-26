import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ShortUserCard = () => (

    <Card>
        <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/steve.jpg' />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
            Steve wants to add his <strong>portfolio</strong> to Free Code Camp Philly.
        </Card.Description>
        </Card.Content>
        <Card.Content extra>Portfolio items.
        </Card.Content>
    </Card>
)

export default ShortUserCard