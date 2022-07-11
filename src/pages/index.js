import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// hard-coded version
/*
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Wecome to my Gatsby stie!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial</p>
    </main>
  )
}
*/

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <StaticImage
        alt="A mixed white dog"
        src="../images/dog.jpg"
      />
    </Layout>
  )
}

export default IndexPage

/*
    <img
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"               
      />
      */