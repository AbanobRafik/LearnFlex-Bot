import { useState, type FormEvent } from "react";
import axios from "axios";
import Header from "./Header";
import QuestionForm from "./QuestionForm";
import AnswerBox from "./AnswerBox";
import ErrorMessage from "./ErrorMessage";

const exampleQuestions = [
  "3D models مش باينة",
  "محتوى الدرس غير ظاهر",
  "التطبيق لا يعمل",
  "السبورة غير متاحة",
  "كيف أستخدم تطبيق LearnFlex؟",
  "كيف يعمل الجهاز الهضمى؟",
  "ما الفرق بين الكتلة والوزن؟",
];

function Aiquiz() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [error, setError] = useState("");

  async function generateAnswer(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer("");
    setError("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB2DvSR24KJCaTrajFeDs_QTxygPw55QNU`,
        {
          contents: [
            {
              parts: [
                {
                  text: `أنت شات بوت مخصص لتطبيق تعليمي اسمه LearnFlex. مهمتك الأساسية:

                    1. الإجابة على أي سؤال يخص المواد الدراسية العلمية بجميع فروعها (مثل: علوم، فيزياء، كيمياء، أحياء... إلخ) بطريقة مبسطة وواضحة.
                    2. توليد مجموعة من الأسئلة التعليمية حول أي موضوع يحدده المستخدم من نفس المنهج الدراسي.
                    3. تقديم حلول أو اقتراحات للمشكلات المتعلقة بتطبيق LearnFlex (مثل: عدم ظهور المحتوى أو عدم تحميل نموذج ثلاثي الأبعاد).
                    4. تطبيق LearnFlex لا يحتوي على تسجيل دخول، ولا يتطلب إنشاء حساب.
                    5. إذا طُرح عليك سؤال لا يندرج ضمن نطاق المواد الدراسية أو الدعم الفني للتطبيق، يجب أن ترد برسالة تنبيهية تقول إن هذا غير مسموح به داخل تطبيق LearnFlex.

                    السؤال هو: ${question}`,
                },
              ],
            },
          ],
        }
      );

      const generatedAnswer =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text;
      setAnswer(
        generatedAnswer || "🤔 لم أتمكن من توليد إجابة، حاول سؤالًا آخر."
      );
    } catch (error) {
      console.error(error);
      setError(
        "❌ حدث خطأ أثناء توليد الإجابة. تأكد من اتصالك بالإنترنت أو حاول لاحقًا."
      );
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-indigo-50 to-white min-h-screen p-6 flex flex-col items-center">
      <Header />

      <div className="mt-6 mb-6 w-full max-w-2xl">
        <span className="text-indigo-700 font-bold mb-2 text-lg">
          أسئلة مقترحة:💡
        </span>
        <div className="flex flex-wrap gap-3">
          {exampleQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => setQuestion(q)}
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-4 py-2 rounded-full text-sm transition"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <QuestionForm
        question={question}
        setQuestion={setQuestion}
        generating={generatingAnswer}
        generateAnswer={generateAnswer}
      />

      <ErrorMessage error={error} />
      <AnswerBox answer={answer} />

      <footer className="mt-12 text-center text-sm text-indigo-500">
        تواجهك مشكلة؟ راسلنا على{" "}
        <a
          href="mailto:support@learnflex.app"
          className="underline font-medium"
        >
          support@learnflex.app
        </a>
      </footer>
    </div>
  );
}

export default Aiquiz;
