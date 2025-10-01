import { Divider } from "antd";
import styles from "./index.module.css";
import { PriceBlock } from "./PriceBlock";
import { CourseContentBlock } from "./CourseContentBlock";
import { CheckOutlined, GlobalOutlined, StarOutlined, YoutubeOutlined } from "@ant-design/icons";
import { NameTableValue } from "../../components/TableValues/NameTableValue/NameTableValue";
import { Award, UsersIcon } from "../../../assets/icons";


export default function CourseInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <h1 className={styles.courseName}>The Complete Foundation Stock Trading Course</h1>
                <p className={styles.courseDescription}>Learn To Trade The Stock Market. #1 Trading course. Inc: Technical Analysis, Candlesticks, Stocks, Day Trading +++</p>
                <Divider />

                <ul className={styles.breadcrumb}>
                    <li className={styles.breadItem}>Created by Mohsen Hassan</li>
                    •
                    <li className={styles.breadItem}>Last updated May 14, 2024</li>
                    •
                    <li className={styles.breadItem}><StarOutlined /> 4.6 Rating</li>
                    •
                    <li className={styles.breadItem}><GlobalOutlined /> English</li>
                </ul>
                <section>
                    <div className={styles.sectionTitle}>What you'll learn</div>
                    <div className={styles.learn}>
                        {Array.from({ length: 8 }).map(() => (
                            <div className={styles.learnItem}>
                                <div className={styles.learnIcon}>
                                    <CheckOutlined />
                                </div>
                                <div className={styles.learnText}>Know the history of the Stock Market and it's Evolution.</div>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <CourseContentBlock />
                </section>
                <section>
                    <div className={styles.sectionTitle}>Requirements</div>
                    <div className={styles.requirement}>
                        {Array.from({ length: 8 }).map(() => (
                            <div className={styles.requirementItem}>
                                <div className={styles.requirementIcon} />
                                <div className={styles.requirementText}>A Curious Mind Open to New Ideas</div>
                            </div>
                        ))}
                    </div>
                </section>


                <section>
                    <div className={styles.sectionTitle}>Description</div>
                    <div className={styles.descriptionSection}>
                        <p>I'm a Product Designer based in Melbourne, Australia. I enjoy working on product design, design systems, and Webflow projects, but I don't take myself too seriously.</p>
                        <p>I’ve worked with some of the world’s most exciting companies, including Coinbase, Stripe, and Linear. I'm passionate about helping startups grow, improve their UX and customer experience, and to raise venture capital through good design.</p>
                        <p>My work has been featured on Typewolf, Mindsparkle Magazine, Webflow, Fonts In Use, CSS Winner, httpster, Siteinspire, and Best Website Gallery.</p>
                        <div className="linkText">Read more</div>
                    </div>
                </section>

                <section>
                    <div className={styles.sectionTitle}>Instructor</div>
                    <div>
                        <NameTableValue name="Mohsen Hassan" email="Investor" />
                        <div className={styles.infoCards}>
                            <div className={styles.card}>
                                <div className={styles.title}>Instructor Rating</div>
                                <div>
                                    <div className={styles.icon}><StarOutlined /></div>
                                    <div className={styles.number}>4.6</div>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.title}>Reviews</div>
                                <div>
                                    <div className={styles.icon}><Award /></div>
                                    <div className={styles.number}>4.6</div>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.title}>Students</div>
                                <div>
                                    <div className={styles.icon}><UsersIcon /></div>
                                    <div className={styles.number}>4.6</div>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.title}>Courses</div>
                                <div>
                                    <div className={styles.icon}><YoutubeOutlined /></div>
                                    <div className={styles.number}>4.6</div>
                                </div>
                            </div>
                        </div>
                        <p>Mohsen has a deep passion for finance and computer science. Having studied and worked in the field, he has developed a deep understanding of the financial industry's many facets: Long-term investing, shorter-term trading, and automation.</p>
                        <p>Mohsen has started Bloom Trading because of his passion for the financial field and teaching others about the financial markets and programming.</p>
                        <div className="linkText">Read more</div>
                    </div>
                </section>


            </div>
            <div className={styles.left}>
                <PriceBlock />
            </div>
        </div >
    )
}