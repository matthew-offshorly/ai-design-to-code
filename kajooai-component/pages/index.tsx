/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import { Helmet } from 'react-helmet'

import styles from './index.module.css'

const Main = (props) => {
  return (
    <Container className={styles['main']}>
      <Helmet>
        <title>main</title>
        <meta property="og:description" content />
        <meta property="og:image" content />
        <meta property="og:title" content />
        <meta name="description" content />
        <meta name="title" content />
        <link rel="canonical" href />
      </Helmet>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Image
            src="https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/645c554bd6f2d38a0dfef999/assets/TPpI2_pwGw1ZAzG3xkasi.png"
            alt="Rectangle5I35323525"
            className={styles['image']}
          />
          <Container className={styles['container2']}>
            <Container className={styles['container3']}>
              <Text
                tag="span"
                text="Japanese Store Name"
                className={styles['text']}
              />
              <Text
                tag="span"
                text="Fukuchiyama, Kyoto"
                className={styles['text1']}
              />
            </Container>
            <Text
              tag="span"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              className={styles['text2']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

export default Main
