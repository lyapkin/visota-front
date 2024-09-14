export const BASE_URL = process.env.BACK_URL;

export default class BlogService {
  static async allArticles(locale) {
    try {
      const response = await fetch(`${BASE_URL}/${locale}/api/articles/`, {
        next: { revalidate: 60 },
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  static async getArticleContent(slug, locale) {
    try {
      const response = await fetch(
        `${BASE_URL}/${locale}/api/articles/${slug}/`,
        {
          next: { revalidate: 60 },
        }
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
