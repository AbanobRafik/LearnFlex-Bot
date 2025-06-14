import { useState, type FormEvent } from "react";
import axios from "axios";
import Header from "./Header";
import QuestionForm from "./QuestionForm";
import AnswerBox from "./AnswerBox";
import ErrorMessage from "./ErrorMessage";

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
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY`,
        {
          contents: [
            {
              parts: [
                {
                  text: `أنت مساعد تعليمي ذكي يُدعى LearnFlex Bot. وظيفتك هي تقديم إجابات مبسطة ومفهومة على الأسئلة المتعلقة بالمواد الدراسية مثل: العلوم، الرياضيات، اللغة العربية، الدراسات، وغيرها. بالإضافة إلى ذلك، إذا طلب المستخدم إنشاء أسئلة في موضوع معين، قدم له مجموعة من الأسئلة التعليمية المناسبة لذلك الموضوع.\n\nالسؤال هو: ${question}`,
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
      <QuestionForm
        question={question}
        setQuestion={setQuestion}
        generating={generatingAnswer}
        generateAnswer={generateAnswer}
      />
      <ErrorMessage error={error} />
      <AnswerBox answer={answer} />
    </div>
  );
}

export default Aiquiz;
