import PassBreadcrumbs from "@/components/Blog/PassBreadcrumbs";
import BlogService from "@/services/BlogService";

import styles from '@/styles/blog.module.css'
import { Suspense } from "react";

export default async function BlogPost({ params }) {
    const content = await BlogService.getArticleContent(params.slug);

    return (
        <div className={`first-screen ${styles['blog-inside']}`}>
            <div className="container">
                {!content.detail ? (
                    <div
                        className={styles['blog-inside__content']}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    ></div>
                ) : (
                    <>
                        <p style={{ margin: "60px 0", fontSize: 40 }}>
                            Такой статьи нет
                        </p>
                    </>
                )}
            </div>
            <Suspense fallback={<></>}>
                <PassBreadcrumbs title={content.title} />
            </Suspense>
        </div>
    );
}
