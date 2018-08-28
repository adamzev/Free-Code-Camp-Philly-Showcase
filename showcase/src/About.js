import React from 'react'
import { Container, Grid, Divider } from 'semantic-ui-react'
const About = () => (
  <Container>
    <h3>Welcome! This site is a work in progress.</h3>
    <Grid stackable>
      <Grid.Column width={4} textAlign="justified">
        <h4>About Free Code Camp Philly</h4>
        <p>
          <a href="https://www.freecodecamp.org/">FreeCodeCamp.org</a> is an
          awesome place to learn to code for free, build projects and get
          experience coding. However, a huge part of Free Code Camp is the
          supportive community centered around learning to code. Free Code Camp
          Philly is a{' '}
          <a href="https://www.meetup.com/Free-Code-Camp-Philly/">
            local meetup group
          </a>{' '}
          where our members go to talk about, learn about and get support with
          coding.
        </p>
      </Grid.Column>
      <Grid.Column width={8} textAlign="justified">
        <h4>Showcase Philly</h4>
        <p>
          Showcase Philly is an open source software project created by the
          members of Free Code Camp's Philly Meetup. The goal of the project is
          twofold:
          <ol>
            <li>Showcase our work.</li>
            <li>Learn about development as part of a team.</li>
          </ol>
        </p>
        <h5>Contributing</h5>
        <p>
          We are always looking for more contributors! If you are interested in
          showcasing your work on this site and are a member (or interested in
          becoming a member) of Free Code Camp Philly, please reach out to us.
          You can email Adam Levin at Adam@TutorDelphia.com, message the
          #showcase channel on Free Code Camp Philly's Slack or contact us via
          our{' '}
          <a href="https://github.com/tutordelphia/Free-Code-Camp-Philly-Showcase/issues">
            GitHub issues pages.
          </a>
        </p>
        <h5>Showcasing our Work</h5>
        <p>
          We have awesome developers in all stages of the learning process (from
          absolute beginner to professional developers) and all of our members
          are producing awesome and interesting work that we feel deserves to be
          shown off.
        </p>
        <h5>Team Development</h5>
        <p>
          As someone just learning to code, one of the hardest things to get
          experience with is how to work with a team. It's intimidating to
          submit your first pull request or to contribute code to someone else's
          project. We aim to provide a friendly place for our members to learn
          those skills by contributing to this site.
        </p>
      </Grid.Column>
      <Grid.Column width={4} textAlign="justified">
        <h4>Links and Resources</h4>
        <ul>
          <li>
            <a href="https://github.com/tutordelphia/Free-Code-Camp-Philly-Showcase">
              The GitHub Repository for this site
            </a>
          </li>
          <li>
            {' '}
            <a href="https://www.meetup.com/Free-Code-Camp-Philly/">
              Our Meetup
            </a>
          </li>
          <li>
            <a href="https://learn.freecodecamp.org/front-end-libraries/react/">
              Learning React on FreeCodeCamp
            </a>
          </li>
        </ul>
      </Grid.Column>
    </Grid>
  </Container>
)
export default About
