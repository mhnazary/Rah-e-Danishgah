import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { CardData } from "./data";

function CourseItems() {
  let param = parseInt(useParams().id);
  let cardInfo = CardData.find((course) => course.id === param);
  console.log(cardInfo);

  return (
    <>
      <Navbar />
      <div className="lg:flex justify-items-start p-10">
        <img src={cardInfo.image} alt="" srcset="" />
        <div className="mr-4">
          <h1 className="header text-title py-3">{cardInfo.title}</h1>
          <p className="ul text-subTitle font-bold pb-3">مدرس : محرم حسین «نظری»</p>
          <p className="ul text-lg font-bold pb-3">{cardInfo.detail}</p>
          <p className="text-justify ul text-text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>
    </>
  );
}

export default CourseItems;
