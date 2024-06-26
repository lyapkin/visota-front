import BlogService from "@/services/BlogService";
import s from "@/styles/blog.module.css";
import Link from "next/link";

export default async function Blog() {
    const articles = await BlogService.allArticles();

    return (
        <div className={`first-screen`}>
            <div className={`container`}>
                <h1 className={s.title}>
                    Читайте интересные статьи в нашем блоге и следите за
                    новостями
                </h1>
                <p className={s.info}>
                    Публикуем обзоры, авто, лайф хаки, актуальные новости в
                    сфере пригона авто
                </p>

                <div className={s.items}>
                    {articles.map(
                        ({ date, title, content_concise, slug, image_url }) => {
                            return (
                                <div className={s.item} key={slug}>
                                    <div className={s.item__date}>{date}</div>
                                    <div>
                                        <img
                                            className={s.item__img}
                                            src={image_url}
                                            alt=""
                                        />
                                    </div>
                                    <div className={s.item__content}>
                                        <h4 className={s.item__title}>
                                            {title}
                                        </h4>
                                        <p className={s.item__text}>
                                            {content_concise}
                                        </p>
                                        <Link href={"blog/" + slug}
                                              className={s.item__btnWrapper}>
                                            <button className={s.item__btn}>
                                                <p className={s.item__btn_text}>
                                                    Читать подробнее
                                                </p>
                                                <div
                                                    className={
                                                        s.item__btn_arrow
                                                    }
                                                >
                                                    <img
                                                        src="/svgs/arrow-right-blue.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
}
