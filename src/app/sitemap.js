// export const revalidate = 3600;

import { activeInLang, pages } from "../../settings";

export default async function sitemap() {
  const data = await getSitemapUrls();
  const {
    HOME,
    ABOUT,
    DELIVERY,
    PAY,
    PARTNERS,
    VACANCIES,
    BLOG,
    CONTACTS,
    CATALOG,
    CART,
    POLICY,
    SUCCESS,
  } = pages;

  const pageToPath = {
    home: HOME,
    about: ABOUT,
    delivery: DELIVERY,
    pay: PAY,
    partners: PARTNERS,
    vacancies: VACANCIES,
    blog: BLOG,
    contacts: CONTACTS,
    catalog: CATALOG,
    cart: CART,
    policy: POLICY,
    success: SUCCESS,
  };

  const langsUrl = {
    ru: process.env.BACK_URL,
    en: process.env.BACK_URL + "/en",
    tr: process.env.BACK_URL + "/tr",
    zh: process.env.BACK_URL + "/zh",
  };

  // const paths = [
  //   {
  //     path: HOME,
  //     // lastModified: new Date(),
  //     // priority: 1,
  //     // changeFrequency: "weekly",
  //     alternates: {
  //       languages: {
  //         ru: langsUrl["ru"] + HOME,
  //         en: langsUrl["en"] + HOME,
  //         tr: langsUrl["tr"] + HOME,
  //         zh: langsUrl["zh"] + HOME,
  //       },
  //     },
  //   },
  //   {
  //     path: ABOUT,
  //     // lastModified: new Date(),
  //     // priority: 1,
  //     // changeFrequency: "weekly",
  //     alternates: {
  //       languages: {
  //         ru: langsUrl["ru"] + ABOUT,
  //         en: langsUrl["en"] + ABOUT,
  //         tr: langsUrl["tr"] + ABOUT,
  //         zh: langsUrl["zh"] + ABOUT,
  //       },
  //     },
  //   },
  //   {
  //     path: DELIVERY,
  //     // lastModified: new Date(),
  //     // priority: 1,
  //     // changeFrequency: "weekly",
  //     alternates: {
  //       languages: {
  //         ru: langsUrl["ru"] + DELIVERY,
  //         en: langsUrl["en"] + DELIVERY,
  //         tr: langsUrl["tr"] + DELIVERY,
  //         zh: langsUrl["zh"] + DELIVERY,
  //       },
  //     },
  //   },
  //   {
  //     path: PAY,
  //     // lastModified: new Date(),
  //     // priority: 1,
  //     // changeFrequency: "weekly",
  //     alternates: {
  //       languages: {
  //         ru: langsUrl["ru"] + PAY,
  //         en: langsUrl["en"] + PAY,
  //         tr: langsUrl["tr"] + PAY,
  //         zh: langsUrl["zh"] + PAY,
  //       },
  //     },
  //   },
  //   {
  //     path: PARTNERS,
  //     // lastModified: new Date(),
  //     // priority: 1,
  //     // changeFrequency: "weekly",
  //     alternates: {
  //       languages: {
  //         ru: langsUrl["ru"] + PARTNERS,
  //         en: langsUrl["en"] + PARTNERS,
  //         tr: langsUrl["tr"] + PARTNERS,
  //         zh: langsUrl["zh"] + PARTNERS,
  //       },
  //     },
  //   },
  //   {
  //     path: VACANCIES,
  //     // lastModified: new Date(),
  //     // priority: 1,
  //     // changeFrequency: "weekly",
  //     alternates: {
  //       languages: {
  //         ru: langsUrl["ru"] + VACANCIES,
  //       },
  //     },
  //   },
  //   {
  //     path: BLOG,
  //     // lastModified: new Date(),
  //     // priority: 1,
  //     // changeFrequency: "weekly",
  //     alternates: {
  //       languages: {
  //         ru: langsUrl["ru"] + BLOG,
  //         en: langsUrl["en"] + BLOG,
  //         tr: langsUrl["tr"] + BLOG,
  //         zh: langsUrl["zh"] + BLOG,
  //       },
  //     },
  //   },
  //   {
  //     path: CONTACTS,
  //     // lastModified: new Date(),
  //     // priority: 1,
  //     // changeFrequency: "weekly",
  //     alternates: {
  //       languages: {
  //         ru: langsUrl["ru"] + CONTACTS,
  //         en: langsUrl["en"] + CONTACTS,
  //         tr: langsUrl["tr"] + CONTACTS,
  //         zh: langsUrl["zh"] + CONTACTS,
  //       },
  //     },
  //   },
  //   {
  //     path: CATALOG,
  //     // lastModified: new Date(),
  //     // priority: 1,
  //     // changeFrequency: "weekly",
  //     alternates: {
  //       languages: {
  //         ru: langsUrl["ru"] + CATALOG,
  //         en: langsUrl["en"] + CATALOG,
  //         tr: langsUrl["tr"] + CATALOG,
  //         zh: langsUrl["zh"] + CATALOG,
  //       },
  //     },
  //   },
  //   {
  //     path: CART,
  //     // lastModified: new Date(),
  //     // priority: 1,
  //     // changeFrequency: "weekly",
  //     alternates: {
  //       languages: {
  //         ru: langsUrl["ru"] + CART,
  //         en: langsUrl["en"] + CART,
  //         tr: langsUrl["tr"] + CART,
  //         zh: langsUrl["zh"] + CART,
  //       },
  //     },
  //   },
  //   {
  //     path: POLICY,
  //     // lastModified: new Date(),
  //     // priority: 1,
  //     // changeFrequency: "weekly",
  //     alternates: {
  //       languages: {
  //         ru: langsUrl["ru"] + POLICY,
  //         en: langsUrl["en"] + POLICY,
  //         tr: langsUrl["tr"] + POLICY,
  //         zh: langsUrl["zh"] + POLICY,
  //       },
  //     },
  //   },
  //   {
  //     path: SUCCESS,
  //     // lastModified: new Date(),
  //     // priority: 1,
  //     // changeFrequency: "weekly",
  //     alternates: {
  //       languages: {
  //         ru: langsUrl["ru"] + SUCCESS,
  //         en: langsUrl["en"] + SUCCESS,
  //         tr: langsUrl["tr"] + SUCCESS,
  //         zh: langsUrl["zh"] + SUCCESS,
  //       },
  //     },
  //   },
  // ];

  // const ruUrls = paths
  //   .filter((p) => activeInLang["ru"].includes(p.path))
  //   .map((p) => ({
  //     url: langsUrl["ru"] + p.path,
  //     // lastModified: p.lastModified,
  //     // priority: p.priority,
  //     // changeFrequency: p.changeFrequency,
  //     alternates: p.alternates,
  //   }));

  // const enUrls = paths
  //   .filter((p) => activeInLang["en"].includes(p.path))
  //   .map((p) => ({
  //     url: langsUrl["en"] + p.path,
  //     // lastModified: p.lastModified,
  //     // priority: p.priority,
  //     // changeFrequency: p.changeFrequency,
  //     alternates: p.alternates,
  //   }));

  // const trUrls = paths
  //   .filter((p) => activeInLang["tr"].includes(p.path))
  //   .map((p) => ({
  //     url: langsUrl["tr"] + p.path,
  //     // lastModified: p.lastModified,
  //     // priority: p.priority,
  //     // changeFrequency: p.changeFrequency,
  //     alternates: p.alternates,
  //   }));

  // const zhUrls = paths
  //   .filter((p) => activeInLang["zh"].includes(p.path))
  //   .map((p) => ({
  //     url: langsUrl["zh"] + p.path,
  //     // lastModified: p.lastModified,
  //     // priority: p.priority,
  //     // changeFrequency: p.changeFrequency,
  //     alternates: p.alternates,
  //   }));

  // const result = [...ruUrls, ...enUrls, ...trUrls, ...zhUrls];
  const statics = data.statics.map((elem) => {
    const languages = {};
    for (let key in activeInLang) {
      activeInLang[key].includes(pageToPath[elem.page]);
      languages[key] = langsUrl[key] + pageToPath[elem.page];
    }
    return {
      path: pageToPath[elem.page],
      // lastModified: new Date(),
      langs: elem["langs"],
      alternates: {
        languages,
      },
    };
  });

  const ruUrls = statics
    .filter((p) => activeInLang["ru"].includes(p.path))
    .map((p) => ({
      url: langsUrl["ru"] + p.path,
      // lastModified: p.langs['ru'].lastModified,
      priority: p.langs["ru"]?.priority
        ? Number(p.langs["ru"].priority)
        : undefined,
      changeFrequency: p.langs["ru"]?.changeFrequency,
      alternates: p.alternates,
    }));

  const enUrls = statics
    .filter((p) => activeInLang["en"].includes(p.path))
    .map((p) => ({
      url: langsUrl["en"] + p.path,
      // lastModified: p.langs['en'].lastModified,
      priority: p.langs["en"]?.priority
        ? Number(p.langs["en"].priority)
        : undefined,
      changeFrequency: p.langs["en"]?.changeFrequency,
      alternates: p.alternates,
    }));

  const trUrls = statics
    .filter((p) => activeInLang["tr"].includes(p.path))
    .map((p) => ({
      url: langsUrl["tr"] + p.path,
      // lastModified: p.langs['tr'].lastModified,
      priority: p.langs["tr"]?.priority
        ? Number(p.langs["tr"].priority)
        : undefined,
      changeFrequency: p.langs["tr"]?.changeFrequency,
      alternates: p.alternates,
    }));

  const zhUrls = statics
    .filter((p) => activeInLang["zh"].includes(p.path))
    .map((p) => ({
      url: langsUrl["zh"] + p.path,
      // lastModified: p.langs['zh'].lastModified,
      priority: p.langs["zh"]?.priority
        ? Number(p.langs["zh"].priority)
        : undefined,
      changeFrequency: p.langs["zh"]?.changeFrequency,
      alternates: p.alternates,
    }));
  const result = [...ruUrls, ...enUrls, ...trUrls, ...zhUrls];

  data.categories.forEach((elem) => {
    const languages = {};
    for (let key in elem) {
      languages[key] = `${langsUrl[key]}${CATALOG}${elem[key]["slug"]}/`;
      result.push({
        url: languages[key],
        lastModified: elem[key]["lastModified"],
        priority: elem[key]["priority"]
          ? Number(elem[key]["priority"])
          : undefined,
        changeFrequency: elem[key]["changeFrequency"],
        alternates: {
          languages,
        },
      });
    }
  });
  data.tags.forEach((elem) => {
    const languages = {};
    for (let key in elem) {
      languages[key] = `${langsUrl[key]}/tag/${elem[key]["slug"]}/`;
      result.push({
        url: languages[key],
        lastModified: elem[key]["lastModified"],
        priority: elem[key]["priority"]
          ? Number(elem[key]["priority"])
          : undefined,
        changeFrequency: elem[key]["changeFrequency"],
        alternates: {
          languages,
        },
      });
    }
  });
  data.products.forEach((elem) => {
    const languages = {};
    for (let key in elem) {
      languages[key] = `${langsUrl[key]}/product/${elem[key]["slug"]}/`;
      result.push({
        url: languages[key],
        lastModified: elem[key]["lastModified"],
        priority: elem[key]["priority"]
          ? Number(elem[key]["priority"])
          : undefined,
        changeFrequency: elem[key]["changeFrequency"],
        alternates: {
          languages,
        },
      });
    }
  });
  data.posts.forEach((elem) => {
    const languages = {};
    for (let key in elem) {
      languages[key] = `${langsUrl[key]}${BLOG}${elem[key]["slug"]}/`;
      result.push({
        url: languages[key],
        lastModified: elem[key]["lastModified"],
        priority: elem[key]["priority"]
          ? Number(elem[key]["priority"])
          : undefined,
        changeFrequency: elem[key]["changeFrequency"],
        alternates: {
          languages,
        },
      });
    }
  });

  return result;
}

const getSitemapUrls = async () => {
  const url = process.env.BACK_URL + "/ru/api/seo/meta/sitemap/_/";
  const response = await fetch(url, {
    next: { revalidate: 0 },
  });
  if (response.ok) {
    return await response.json();
  }

  throw new Error("request to sitemap failed");
};
