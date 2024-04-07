import BlogService from "@/services/BlogService";

export default async function BlogPost({ params }) {
    const content = await BlogService.getArticleContent(params.slug);

    return (
        <div className={`first-screen`}>
            <div className="container">
                {!content.detail ? (
                    <div
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
        </div>
    );
}
