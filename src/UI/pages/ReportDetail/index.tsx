import { createUseStyles } from 'react-jss';
import { ArticleContent } from '../../components/ArticleContent/ArticleContent';
import Table from '../../components/CustomAntdComponents/Table';
import { ArticleCard } from '../../components/ArticleCard/ArticleCard';

const articles = [
    {
        title: "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
        category: "Strategies",
        image: "/Image.png",
        readTime: "5 min read",
    },
    {
        title: "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
        category: "Fundamentals",
        image: "/Image.png",
        readTime: "5 min read",
    },
    {
        title: "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
        category: "Risk Management",
        image: "/Image.png",
        readTime: "5 min read",
    }
]

const useStyles = createUseStyles({
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 336px',
        gap: '24px',
        padding: '24px',
        '@media (max-width: 992px)': {
            gridTemplateColumns: '1fr',
        }
    },
    title: {
        color: '#181D27',
        fontFamily: 'Inter',
        fontSize: '30px',
        fontWeight: 600,
        lineHeight: '38px',
        marginBottom: '24px',
    },
    subtitle: {
        color: '#535862',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '28px',
        marginBottom: '24px'
    },
    copyButton: {
        borderRadius: '8px',
        border: '1px solid #D5D7DA',
        background: '#FFF',
        boxShadow: '0 0 0 1px rgba(10, 13, 18, 0.18) inset, 0 -2px 0 0 rgba(10, 13, 18, 0.05) inset, 0 1px 2px 0 rgba(10, 13, 18, 0.05)',
        marginBottom: '32px'
    },
    recommendedSection: {
        marginTop: '48px'
    },
    recommendedTitle: {
        color: '#181D27',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '28px',
        marginBottom: '24px'
    },
    cardGrid: {
        display: 'grid',
        gap: '24px',
        '@media (max-width: 1024px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media (max-width: 992px)': {
            gridTemplateColumns: '1fr',
        }
    },
    card: {
        display: 'flex',
        gap: '16px'
    },
    cardImage: {
        width: '210px',
        height: '140px',
        objectFit: 'cover'
    },
    cardContent: {
        flex: 1
    },
    cardTitle: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#181D27',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '28px'
    },
    cardSubtitle: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#535862',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px'
    },
    rightSidebar: {
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
    }
});

function ReportDetail() {
    const classes = useStyles();

    const columns = [
        {
            title: 'Symbol',
            dataIndex: 'symbol',
            key: 'symbol',
        },
        {
            title: 'Lst Price',
            dataIndex: 'lastPrice',
            key: 'lastPrice',
        },
        {
            title: '% Chg',
            dataIndex: 'percentageChange',
            key: 'percentageChange',
        },
    ];

    return (
        <div className={classes.container}>
            <div>
                <ArticleContent />

                <div className={classes.recommendedSection}>
                    <h2 className={classes.recommendedTitle}>Recommended for you</h2>
                    <div className={classes.cardGrid}>
                        {
                            articles.map((article) => (
                                <ArticleCard article={article} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className={classes.rightSidebar}>
                <div>
                    <Table bordered title={() => "Related Stocks"} columns={columns} dataSource={[]} size="small" pagination={false} />
                </div>
                <div>
                    <Table bordered title={() => "Most Active"} columns={columns} dataSource={[]} size="small" pagination={false} />
                </div>
                <div>
                    <Table bordered title={() => "In The News"} columns={columns} dataSource={[]} size="small" pagination={false} />
                </div>
            </div>
        </div>
    );
}

export default ReportDetail;
