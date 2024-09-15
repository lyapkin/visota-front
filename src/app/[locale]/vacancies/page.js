import s from "@/styles/vacancies.module.css";

export default async function Vacancies() {
  const data = await getData();

  return (
    <div className={`first-screen ${s.vacancies}`}>
      <div className="container">
        <h1 className={s.title}>Вакансии</h1>
        <h2 className={s.subtitle}>Открытые вакансии в Компании "Высота»</h2>
        <p className={s.text}>
          Компания «Высота» является ведущим поставщиком в России и странах СНГ
          строительных лесов и опалубки, а также комплектующих к ним. Мы
          производим комплектующие на крупнейших заводах в Китае, что позволяет
          нам предложить лучшие цены на рынке на нашу продукцию. Комплектующие
          производятся на современном оборудовании. Для эффективной защиты от
          коррозии обрабатываются методом гальванического цинкования. Вся
          продукция соответствует российским и международным стандартам
          качества, имеет неограниченный срок службы.
        </p>
        {data.map((v) => (
          <div key={v.id} className={s.vacancy}>
            <h2 className={s.subtitle}>{v.name}</h2>
            <div
              className={s.description}
              dangerouslySetInnerHTML={{ __html: v.description }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

const getData = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/vacancies/`, {
      next: { revalidate: 60 },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
