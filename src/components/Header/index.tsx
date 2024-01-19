import { Container, Group, Burger, Image, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import Link from 'next/link';

const links: Links[] = [
    { link: '/', label: 'Home' },
    { link: '/QuotesPage', label: 'Quotes' },
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
        >
            {link.label}
        </Link>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner} style={{ position: 'sticky', top: '0', zIndex: '1000', }}>
                <Image src='/animeQuoteLogo.svg' w={200} h={40} />
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>
                <Menu shadow="md" width={200} transitionProps={{ transition: 'slide-down', duration: 400 }}>
                    <Menu.Target>
                        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
                    </Menu.Target>
                    <Menu.Dropdown >
                        <Menu.Label>Navigate Anime Quotes</Menu.Label>
                        <Menu.Item >
                            {items}
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Container>
        </header>
    );
}