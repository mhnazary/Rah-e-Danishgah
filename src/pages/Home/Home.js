import Course from "../../components/Course";
import Navbar from "../../components/Navbar";
import programming from "../../assets/images/programming.svg";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="md:flex justify-between items-center">
        <div className="md:w-2/4 p-10">
          <h1 className="ul text-3xl font-bold py-4">
            برنامه نویسی با راه دانشگاه
          </h1>
          <p className=" text-justify">
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
        <img
          className="md:w-2/4 p-10"
          src={programming}
          alt="svg pic"
        />
      </div>
      <Course />
      <Footer />
    </>
  );
}
