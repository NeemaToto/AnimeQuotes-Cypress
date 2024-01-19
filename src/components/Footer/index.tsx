import { Anchor, Group, ActionIcon, rem, Image } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import classes from './Footer.module.css';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.inner}>
                <Image className={classes.footerLogo} src='/animeQuoteLogo.svg' w={200} h={40} />
                <Group className={classes.links}>
                    <Anchor
                        c="dimmed"
                        key='KaggleData'
                        href='https://www.kaggle.com/datasets/saschamet/anime-quotesjson'
                        lh={1}
                        size="sm"
                        id='kagglelink'
                    >
                        Kaggle Data
                    </Anchor>
                </Group>

                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <Link href='https://github.com/NeemaToto' ><IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} /></Link>
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <Link href='https://www.linkedin.com/in/neema-totonchi/' ><IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} /></Link>
                    </ActionIcon>
                </Group>
            </div>
        </footer>
    );
}