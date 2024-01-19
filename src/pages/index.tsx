import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button, Flex } from '@mantine/core'
import { IconArrowRight } from "@tabler/icons-react";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Anime Quotes</title>
        <meta name="description" content="View your favourite anime quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ height: '100vh' }}>
        <Header />
        <Flex
          gap="xl"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
          h='55vh'
        >
          <Flex
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
            gap='sm'
            p={25}
            style={{ textAlign: 'center' }}
          >
            <h1>Welcome to Anime Quotes</h1>
            <p>Look at random quotes daily said by your favourite character!</p>
          </Flex>
          <Link href='/QuotesPage'>
            <Button
              rightSection={<IconArrowRight size={15} />}
              variant="outline"
              size="md"
            >
              View Quotes
            </Button>
          </Link>
        </Flex>
        <Footer />
      </main>
    </>
  );
}
