import Button from "../../components/Button"
import Card from "../../components/Card"
import HeaderSection from "../../components/HeaderSection"
import img3 from '../../assets/img/3.jpg'
import personalImg from '../../assets/img/person.jpg'

function News() {
    return (
        <section className="mt-[100px] overflow-scroll">
            <HeaderSection title="News, Tips & Guides" subtitle="Favorite destinations based on customer reviews">
                <Button label="View More" icon="pi pi-arrow-right" type="third" />
            </HeaderSection>
            <section className="mt-[80px] flex gap-6">
                <div className="">

                    <Card
                        img={img3}
                        personalImg={personalImg}
                        name="Jimmy Dave"
                        topTitle={['18 Sep 2024', '6 mins', '38 comments']}
                        title='California Sunset/Twilight Boat Cruise'
                        subtitle='2 days 3 nights - Family'
                        price='$48.25'
                        buttonPrice='4.96 (672 reviews)'
                        buttnTopRight='Cultural'
                    />
                </div>
                <Card
                    img={img3}
                    personalImg={personalImg}
                    name="Jimmy Dave"
                    topTitle={['18 Sep 2024', '6 mins', '38 comments']}
                    title='California Sunset/Twilight Boat Cruise'
                    subtitle='2 days 3 nights - Family'
                    price='$48.25'
                    buttonPrice='4.96 (672 reviews)'
                    buttnTopRight='Cultural'
                />
                <Card
                    img={img3}
                    personalImg={personalImg}
                    name="Jimmy Dave"
                    topTitle={['18 Sep 2024', '6 mins', '38 comments']}
                    title='California Sunset/Twilight Boat Cruise'
                    subtitle='2 days 3 nights - Family'
                    price='$48.25'
                    buttonPrice='4.96 (672 reviews)'
                    buttnTopRight='Cultural'
                />

            </section>
        </section>
    )
}

export default News