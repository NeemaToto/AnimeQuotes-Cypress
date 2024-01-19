import { animeLines } from "@/data/dataset"
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, Image, Text, Group } from '@mantine/core'
import styles from '@/styles/QuotesPage.module.css'

export default function QuotesPage() {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '1.25rem', padding: '1rem', justifyContent: 'center', alignContent: 'center' }}>
                {
                    animeLines.map((item, index) => {
                        return (
                            <div className={styles.cardContainer} style={{ minWidth: '15vw' }}>
                                <Card shadow="sm" padding="md" radius="md" withBorder key={index} w={300} mih={450}>
                                    <Card.Section>
                                        <Image
                                            src={item.image}
                                            height={160}
                                            alt="Norway"
                                        />
                                    </Card.Section>

                                    <Group mt="md" mb="xs" style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: '0.2rem' }}>
                                        <Text size="sm" fw={500}>{item.anime}</Text>
                                        <Text size="md">{item.character}</Text>
                                    </Group>

                                    <Text size="sm" c="dimmed">
                                        {item.quote}
                                    </Text>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </div >
    )
}